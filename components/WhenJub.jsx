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
} from "react-native";

const WhenJub = (data) => {
  const [btc, setBtc] = useState();
  let numberHalvin = "";
  let anioRewards = "";
  let amountReward = "";

  const halvin_actual = 5;
  const rewardNow = 3.125;
  let priceBtc=data.price

  console.log(data);
  if (btc !== "" && btc !== undefined && btc !== 0) {
    let findReward = data.find((e) => e.Rewards <= btc);

    if (findReward !== undefined) {
      console.log(findReward);
      //return (`${findReward.Year} (${(findReward.Rewards)})`)

      amountReward = findReward.Rewards;
      anioRewards = findReward.Year;
      numberHalvin = findReward.Nro;
    }
    console.log(numberHalvin);
  }

  console.log(btc);


function calculateRewads(priceBtc,halvin_actual) {
  const priceFuture=priceBtc
  console.log(priceFuture*halvin_actual);
}

calculateRewads(priceBtc,halvin_actual)



















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
            {/* btc!=="" && btc!==0 ? funcFinf():"" */}
            {btc !== "" && btc !== 0 && btc !== undefined
              ? `${anioRewards} (${amountReward})`
              : ""}
          </Text>
        </View>
      </View>
      <View style={styles.containerTable}>
        <Text>
          Ṕasarán un total de {Math.abs(numberHalvin - halvin_actual)}
        </Text>
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
});

export default WhenJub;
