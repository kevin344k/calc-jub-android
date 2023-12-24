import * as React from "react";
import { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import SvgComponent from "./btc-logo";

import { Text, TextInput,Divider } from "react-native-paper";

export default function App() {
const [isLoading, setLoading] = useState(true);
const [priceBTC, setPriceBTC] = useState([]);

const [usd, setAmountUSD] = useState("")
const [btc, setAmountBTC] = useState("");
let [sats, setAmountSats] = useState("");




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
  }, []);


  const calculate=(priceBTC,usd)=> {
  
    if (priceBTC!="" && usd!="") {
        let result =usd/priceBTC
     return Number(result).toFixed(6)
    } 
  }
  const calculateUSD=(priceBTC,btc)=> {
    let result=""
    if (priceBTC!="" && btc!="") {
         result =priceBTC*btc
     return Number(result).toFixed(6)
    } 
  }




  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={{ marginBottom:18 }} >Calculadora Bitcoin </Text>
      <View>
        <Text>Price powered by BINANCE</Text>
        <View style={styles.containerBtcPrice}>
          <View style={styles.containerBtcText}>
            <SvgComponent />
            <Text style={{ color: "gray", fontSize: 20, marginLeft: 10 }}>
              Bitcoin
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}> $ {priceBTC}</Text>
        </View>
      </View>
      <View style={styles.viewInputGroupUSD}>
        <TextInput
          label="USD"
          value={calculateUSD(priceBTC,btc)}
          onChangeText={(usd) => setAmountUSD(usd)}
          style={styles.textInput}
          inputMode="numeric"
        />
        <TextInput
          value="USD"
          disabled
          textColor="white"
          style={{ width: 70, fontSize: 20, backgroundColor: "#198754" }}
        />
      </View>
      <View style={styles.viewInputGroupUSD}>
        <TextInput
          label="Bitcoin"
          value={calculate(priceBTC,usd)}
          onChangeText={(btc) => setAmountBTC(btc)}
          style={styles.textInput}
          inputMode="numeric"
        />
        <TextInput
          value="BTC"
          disabled
          textColor="white"
          style={{ width: 70, fontSize: 20, backgroundColor: "#F7941D" }}
        />
      </View>
      {/*for sats*/}
      <View style={styles.viewInputGroupSats}>
        <TextInput
          value="$sats"
          disabled
          textColor="#495057"
          style={{ width: 90, fontSize: 20, backgroundColor: "#ced4da" }}
        />
        <TextInput
          label="Satoshis"
          value={btc}
          style={styles.textInputSats}
         
        />
      </View>
      {/*for jubilacion*/}
      <View style={styles.viewInputGroupJub}>
        <TextInput
          value="Jubilación estimada"
          disabled
          textColor="#495057"
          style={{ width: 230, fontSize: 20, backgroundColor: "#ced4da" }}
        />
        <TextInput
          label="Año"
          value={"text"}
          style={styles.textInputJub}
        />
        
      </View>
    
       {/*usd total jubilacion*/}
       <View style={styles.viewInputGroupUSD}>
        <Text> <Text style={{ fontWeight:"bold"}} >Nota: </Text> Bitcoin duplica su precio cada halvin o 4 años. A continuación podrás observar un valor estimado de tu inversión hasta el año de tu jubilación.</Text>
       </View>
       <View style={{ width:350,marginTop:18}}>
        <TextInput
          label="Año"
          value={"text"}
          style={{ width:350}}
        />
        
      </View>
      <StatusBar></StatusBar>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   // backgroundColor: "red",
    padding: 20,
  },
  containerBtcPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,

    borderRadius: 6,
    backgroundColor: "#212529",
    width: 350,
  },
  containerBtcText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  viewInputGroupUSD: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
  },
  textInput: {
    width: 280,
    backgroundColor: "#f8f9fa",
  },
  viewInputGroupSats: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
  },
  textInputSats: {
    width: 260,
    backgroundColor: "#f8f9fa",
  },
  viewInputGroupJub: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
  },
  textInputJub: {
    width: 120,
    backgroundColor: "#f8f9fa",
  },
});
