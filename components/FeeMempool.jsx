import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeeMempool = ({ fees, price }) => {
  const sats = price / 100000000;

  return (
    <View style={styles.cardFee}>
      <Text style={styles.title}>Fee</Text>
      <View style={styles.cardBody}>
        <View style={styles.cardItem}>
          <Text style={styles.subTitle}>Alta {"\n"}prioridad</Text>
          <View>
            <Text style={styles.numberSats}>
              {fees.fastestFee}
              <Text style={{ fontSize: 16, color: "gray" }}> sat/vB</Text>
            </Text>
            <Text style={styles.numberUS}> $ {(fees.fastestFee * 140 * sats).toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.cardItem}>
          <Text style={styles.subTitle}>Media {"\n"}prioridad</Text>
          <View>
            <Text style={styles.numberSats}>
              {fees.halfHourFee}
              <Text style={{ fontSize: 16, color: "gray" }}> sat/vB</Text>
            </Text>
            <Text style={styles.numberUS}>$ {(fees.halfHourFee * 140 * sats).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.cardItem}>
          <Text style={styles.subTitle}>Baja {"\n"}prioridad</Text>
          <View>
            <Text style={styles.numberSats}>
              {fees.economyFee}
              <Text style={{ fontSize: 16, color: "gray" }}> sat/vB</Text>
            </Text>
            <Text style={styles.numberUS}>$ {(fees.economyFee * 140 * sats).toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFee: {
    width: "100%",
  
    borderRadius: 6,
    backgroundColor: "#212529",
    padding: 10,
    marginTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
    marginTop: 12,
  },
  subTitle: {
    fontSize: 16,
    backgroundColor: "#ffc107",
    padding: 5,
    paddingHorizontal:12,
    borderRadius: 6,
    textAlign:"center",
  },
  cardItem: {
    alignItems: "center",
   
    
  },
  numberSats: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    paddingVertical:6,
   
   
    
  },
  numberUS:{
    color:"#28a745",
    fontSize:15,
    textAlign:"center",
  },
});

export default FeeMempool;
