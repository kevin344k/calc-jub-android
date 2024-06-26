import * as React from "react";
import NetInfo from "@react-native-community/netinfo";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import BtcSvg from "./components/btc-logo";
import UsdSvg from "./components/Usd-logo";
import AngleRight from "./components/Angle-right";
import FeeMempool from "./components/FeeMempool";
import mempoolJS from "@mempool/mempool.js";
import BlockMined from "./components/BlockMined";
import ClockHalvin from "./components/ClockHalvin";
import ModalConnect from "./components/ModalConnect";
import ButFloatDonate from "./components/ButFloatDonate";
import ModalDonate from "./components/ModalDonate";
import WhenJub from "./components/WhenJub";
import Links from "./components/Links";


export default function 
App() {
  const [connect, setConnect] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [priceBTC, setPriceBTC] = useState([]);
  const [usd, setUsd] = useState("");
  const [btc, setBtc] = useState("");
  const [load, setLoading] = useState(false);
  const [fee, setFee] = useState({});
  const [block, setBlockHeight] = useState([]);
  const [blockHalvin, setBlockHalvin] = useState([]);
  const [showModal, setShowModal] = useState(false);



  NetInfo.fetch().then((state) => {
    if (state.isConnected) {
      setConnect(true);
    } else {
      setConnect(false);
    }
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const getPriceBTC = async () => {
    try {
      const response = await fetch("https://mempool.space/api/v1/prices");

      const json = await response.json();
      const dataSimple = Number(json.USD);

      setPriceBTC(dataSimple.toFixed(2));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPriceBTC();
  }, [refreshing]);

  const feeMempool = async () => {
    try {
      const {
        bitcoin: { fees },
      } = mempoolJS({
        hostname: "mempool.space",
      });

      const feesRecommended = await fees.getFeesRecommended();
      setFee(feesRecommended);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    feeMempool();
  }, [refreshing]);

  const blockHeight = async () => {
    try {
      const {
        bitcoin: { blocks },
      } = mempoolJS({
        hostname: "mempool.space",
      });

      const blocksTipHeight = await blocks.getBlocksTipHeight();

      setBlockHeight(blocksTipHeight);
      setBlockHalvin((1050000 - blocksTipHeight) * 10 * 60);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    blockHeight();
  }, [refreshing]);

{/*copyToClipBoard*/}
const copyToClipboard = async (text) => {
  await Clipboard.setStringAsync(text);
  Alert.alert("Copiado")
};

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <ModalConnect connect={connect} />

      <View style={styles.container}>
        <View style={styles.btcPriceContainer}>
          <Text style={styles.subTitle}>Precio de Bitcoin</Text>
          <View style={styles.containerBtcPrice}>
            <View style={styles.containerBtcText}>
              <BtcSvg />

              <Text style={{ color: "gray", fontSize: 20, marginLeft: 10 }}>
                Bitcoin
              </Text>
            </View>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              {" "}
              $ {priceBTC}
            </Text>
          </View>
        </View>

        <ClockHalvin block={blockHalvin} price={priceBTC} />

        <View style={styles.inputContainerAll}>
          <Text style={styles.subTitle}>Calculadora(en USD)</Text>

          <View style={styles.inputContainer}>
            <View style={styles.groupIconContainer}>
              <UsdSvg />
              <AngleRight />
              <BtcSvg />
            </View>

            <View style={styles.groupInput}>
              <TextInput
                style={styles.txtInput}
                placeholder="USD"
                inputMode="numeric"
                onChangeText={(e) => {
                  setUsd(e);
                }}
              />

              <Text style={styles.txtInputResult} value="BTC">
                {usd == "" ? "BTC" : `${(usd / priceBTC).toFixed(6)} BTC`}
              </Text>
            </View>
            {/*sats */}
            <View style={styles.viewSatsContainer}>
              <Text style={styles.txtSats}>
                {usd == ""
                  ? "Sats"
                  : `${new Intl.NumberFormat('es-MX').format((
                      (usd / priceBTC).toFixed(6) * 100000000
                    ).toFixed())} Sats`}
              </Text>
            </View>
            {/*end sats */}
          </View>
          <View style={styles.divider}></View>

          <View style={styles.inputContainer}>
            <View style={styles.groupIconContainer}>
              <BtcSvg />

              <AngleRight />
              <UsdSvg />
            </View>

            <View style={styles.groupInput}>
              <TextInput
                style={styles.txtInput}
                placeholder="BTC"
                inputMode="numeric"
                onChangeText={(e) => {
                  setBtc(e);
                }}
              />

              <Text style={styles.txtInputResult}>
                {btc == "" ? "USD" : "$ " + (btc * priceBTC).toFixed(1)}
              </Text>
            </View>
            {/*sats */}
            <View style={styles.viewSatsContainer}>
              <Text style={styles.txtSats}>
                {btc == ""
                  ? "Sats"
                  : 
                  `${new Intl.NumberFormat('es-MX').format(((Number(btc) * 100000000).toFixed()))} Sats`
                  
                    }
              </Text>
            </View>
            {/*end sats */}
          </View>
        </View>
                    <WhenJub price={priceBTC}></WhenJub>
        <FeeMempool fees={fee} price={priceBTC} />
        <BlockMined block={block} />
        <Links></Links>
   
      
        <TouchableOpacity 
                  onPress={() => {
                    copyToClipboard(
                      "470939603"
                    );
                  }}
                >
                  <View style={styles.dirWalletText}>
                    <Text style={{fontWeight:"bold"}}>Binance ID:</Text>
                  <Text> 470 939 603 </Text>
                  
                  <Ionicons name="copy-outline" size={18} color="grey" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {
                    copyToClipboard(
                      "kevin.nakamoto.btc@gmail.com"
                    );
                  }}
                >
                  <View style={styles.dirWalletText}>
                    <Text style={{fontWeight:"bold"}}>Contacto: </Text>
                  <Text> kevin.nakamoto.btc@gmail.com </Text>
                  
                  <Ionicons name="copy-outline" size={18} color="grey" />
                  </View>
                </TouchableOpacity>
                <ButFloatDonate setShowModal={setShowModal} />
                <ModalDonate visible={showModal} setShowModal={setShowModal} />

      </View>

      <StatusBar backgroundColor="#212529" barStyle="#ffff" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
  },
  btcPriceContainer: {
    width: "100%",
    marginBottom: 4,
    backgroundColor: "#212529",
    paddingHorizontal: 15,
    paddingVertical: 10,

    borderRadius: 6,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  containerBtcPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerBtcText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  txtInput: {
    width: "50%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 6,
    fontSize: 20,
  },
  txtInputResult: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 6,
    width: "50%",
    height: "100%",
    fontSize: 16,
  },
  inputContainerAll: {
    width: "100%",
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: "#212529",
    padding: 10,
    paddingBottom: 25,
  },
  inputContainer: {
    width: "100%",
  },
  groupIconContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "#ededed",
    borderRadius: 6,
    marginVertical: 4,
  },
  groupInput: {
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    gap: 3,
    overflow: "hidden",
  },
  viewSatsContainer: {
    alignItems: "center",

    width: "100%",
    backgroundColor: "white",
    borderRadius: 6,
    marginVertical: 4,
  },
  txtSats: {
    fontSize: 16,
    paddingVertical: 10,
  },
  divider: {
    borderBottomColor: "#FAB913",
    borderBottomWidth: 2,
    width: "100%",
    marginVertical: 8,
  },
  dirWalletText:{
    flexDirection:"row",
    marginTop:8,
  }
});
