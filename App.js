import * as React from "react";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,RefreshControl,ScrollView,StatusBar
} from "react-native";
import BtcSvg from "./components/btc-logo";
import UsdSvg from "./components/Usd-logo";
import AngleRight from "./components/Angle-right";
import FeeMempool from "./components/FeeMempool";
import mempoolJS from "@mempool/mempool.js";
import BlockMined from "./components/BlockMined";



export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [priceBTC, setPriceBTC] = useState([]);
  const [usd, setUsd] = useState("");
  const [btc, setBtc] = useState("");
  const [load, setLoading] = useState(false);
  const [fee, setFee] = useState({});
  const [block, setBlockHeight] = useState([]);


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    
    }, 2000);
  }, []);

  const getPriceBTC = async () => {
    try {
      const response = await fetch(
        "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT"
      );

      const json = await response.json();
      const dataSimple = Number(json.price);
      setPriceBTC(dataSimple.toFixed(3));
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
      
      const { bitcoin: { blocks } } = mempoolJS({
        hostname: 'mempool.space'
      });
    
      const blocksTipHeight = await blocks.getBlocksTipHeight();
    
      setBlockHeight(blocksTipHeight)

    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  
            
  };
  useEffect(() => {
    blockHeight();
  }, [refreshing]);





  return (
  



<ScrollView  contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>


    <View style={styles.container}>
     
      <View style={styles.btcPriceContainer}>
        <View style={styles.containerBtcPrice}>
          <View style={styles.containerBtcText}>
            <BtcSvg />

            <Text style={{ color: "gray", fontSize: 20, marginLeft: 10 }}>
              Bitcoin
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 16 }}> $ {priceBTC}</Text>
        </View>
      </View>

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
            {usd == "" ? "BTC" : (usd / priceBTC).toFixed(6)}
          </Text>
        </View>
      </View>

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
      </View>
      <FeeMempool fees={fee} price={priceBTC} />
      <BlockMined block={block}/>
    </View>
    <StatusBar/>
</ScrollView>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 30,
 
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
  },
  btcPriceContainer: {
    width: "100%",
    marginBottom: 15,
  },
  containerBtcPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,

    borderRadius: 6,
    backgroundColor: "#212529",
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
  inputContainer: {
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    
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
    justifyContent: "space-between",

    width: "100%",
    gap: 3,
  },
});
