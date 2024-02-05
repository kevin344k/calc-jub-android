import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CountDown from "react-native-countdown-component";

const ClockHalvin =  (block) => {

console.log(block,"block");
if (block.block!="" && block.block!=undefined) {
  

const result=block.block
console.log(result,"halvin");
  return (

    <View style={styles.cardBlock}>
      <Text style={styles.title}>Reloj Halvin</Text>
      <CountDown
          until={result}
          onFinish={() => alert("El Halvin ha ocurrido")}
          size={30}
          timeLabels={{ d: "Días", h: "Horas", m: "Minutos", s: "Segundos" }}
          timeLabelStyle={{color:"white"}}
          digitTxtStyle={{fontSize:40,color:"#212529"}}
  
        />
    </View>
  );
  };
}


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
    marginBottom:8,
  },
});

export default ClockHalvin;
