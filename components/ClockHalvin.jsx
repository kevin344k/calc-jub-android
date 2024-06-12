import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CountDown } from "react-native-countdown-component";

const ClockHalvin = (block) => {
  if (block.block != [] && block.block != undefined && block.block != 0) {
    console.log(block.block);
    const result = block.block;
    const price=block.price
    return (
      <View style={styles.cardBlock}>
        <Text style={styles.title}>Reloj Halvin </Text>
        <View style={styles.containerRewardText}>
          <Text style={styles.subTitle}>Recompensa{"\n"}actual por bloque</Text>
          <Text style={styles.textReward}>
            3.125 btc {"\n"}({"≈"} {"$"}{new Intl.NumberFormat('es-MX').format((price*3.125).toFixed(2)) })
          </Text>
        </View>
        <CountDown
          until={result}
          onFinish={() => alert("El Halvin ha ocurrido")}
          size={30}
          timeLabels={{ d: "Días", h: "Horas", m: "Minutos", s: "Segundos" }}
          timeLabelStyle={{ color: "white" }}
          digitTxtStyle={{ fontSize: 27, color: "#212529" }}
        />
      </View>
    );
  }
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
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "gray",
    marginBottom: 8,
    paddingRight: 8,
  },
  containerRewardText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  textReward: {
    fontSize: 16,
    paddingLeft: 8,

    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: "white",
    color: "white",
  },
});

export default ClockHalvin;
