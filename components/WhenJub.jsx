import React, { useEffect, useState } from "react";
import data from "../halvins";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import { DataTable } from 'react-native-paper'; 

const WhenJub = (dataP) => {
  const [btc, setBtc] = useState();
  let numberHalvin = "";
  let anioRewards = "";
  let amountReward = "";
  let datosArr=[]
  const halvin_actual = 5;
  const anioHalvilNow=2024
  const rewardNow = 3.125;



  if (btc !== "" && btc !== undefined && btc !== 0) {
    let findReward = data.find((e) => e.Rewards <= btc);

    if (findReward !== undefined) {
      console.log(findReward);


      amountReward = findReward.Rewards;
      anioRewards = findReward.Year;
      numberHalvin = findReward.Nro;

     

      function calculateRewads(priceBtc,halvin_actual,halvinJub) {
      
        let price=priceBtc.price

        const amountHalvins=Math.abs(halvinJub-halvin_actual)

       let priceFuture=price*rewardNow
       let yearNow=anioHalvilNow
    

        for (let i = 1; i <= amountHalvins; i++) {
          
          priceFuture=priceFuture*2
          yearNow=yearNow+4

          let obj={
            "$":priceFuture,
            "Y":yearNow,
           "num":i
          }


          datosArr.push(obj)

          
         console.log(priceFuture,yearNow,i);

          
          
        }

        console.log(datosArr);

        console.log(priceBtc,amountHalvins);



      }
      calculateRewads(dataP,halvin_actual,numberHalvin)

    }
    console.log("numero de halvin :",numberHalvin);
  }

  console.log("CANTIDAD BTC: ",btc);


  





  return (
    <View style={styles.cardBlock}>
      <Text style={styles.title}>Cuando me jubilo?</Text>
      <Text style={{ color: "white" }}>
        Se dice que se alcanza la jubilación cuando tu posesion de bitcoin es
        superior o igual a una recompoensa por bloque.
      </Text>
      <View style={styles.containerInputs}>
        <View style={styles.containerTxtInputs}>
          <Text style={styles.subTitle}>Cantidad de BTC</Text>

          <TextInput
            style={styles.txtInput}
            keyboardType="numeric"
            placeholder="BTC"
            onChangeText={(e) => {
              setBtc(e);
            }}
          ></TextInput>
        </View>
        <View style={styles.containerTxtInputs}>
          <Text style={styles.subTitle}>Recomp. del año</Text>

          <Text style={styles.txtInputRewards} placeholder="Año">
           
            {btc !== "" && btc !== 0 && btc !== undefined
              ? `${anioRewards} (${amountReward})`
              : ""}
          </Text>
        </View>
      </View>
      <View style={styles.containerTable}>
 <Text style={{color:"white", marginVertical:8,textAlign:"center"}}>Halvins vs Precio de recompensa</Text>
        <View>
          <DataTable style={{backgroundColor:"white"}}>
           
            <DataTable.Header>
              <DataTable.Title >#</DataTable.Title>
              <DataTable.Title>Año</DataTable.Title>
              <DataTable.Title>Precio</DataTable.Title>
            </DataTable.Header>
           { datosArr.map((item)=>(<DataTable.Row key={item.num} >
              <DataTable.Cell>{item.num}</DataTable.Cell>
              <DataTable.Cell>{item.Y}</DataTable.Cell>

              <DataTable.Cell>$ {new Intl.NumberFormat('es-MX').format(item.$)}</DataTable.Cell>
            </DataTable.Row>))}
          </DataTable>
          <Text style={{color:"white", marginTop:8,}}>
            
          Un BTC costará $ {datosArr.length>0?new Intl.NumberFormat('es-MX').format(((datosArr[datosArr.length-1].$)/btc).toFixed(2)):""} en el {datosArr.length>0?(datosArr[datosArr.length-1].Y):""}
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBlock: {
    width: "100%",

    borderRadius: 6,
    backgroundColor: "#212529",
    padding: 10,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.27,
    elevation: 9,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 1,
  },
  subTitle: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "gray",
    marginBottom: 8,
    textAlign: "center",
  },
  txtInput: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 6,
    fontSize: 20,
  },
  containerInputs: {
    flexDirection: "row",
    width: "100%",
    gap: 5,
    justifyContent: "center",
  },
  containerTxtInputs: {
    width: "50%",
    justifyContent: "center",
  },
  txtInputRewards: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 12,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 6,
    fontSize: 17,
  },
  containerTable:{
    marginTop:8,
  }
});

export default WhenJub;
