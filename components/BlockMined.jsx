import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const BlockMined = (block) => {
  return (
    <View style={styles.cardBlock}>
        <Text style={styles.title}>
            Bloques minados
        </Text>
        <View style={styles.container}>
            <Image source={require("../assets/src/svg/cube.gif")}/>
             <Text style={styles.title} >{block.block}</Text>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create(
   { cardBlock: {
      width: "100%",
    
      borderRadius: 6,
      backgroundColor: "#212529",
      padding: 10,
      marginTop: 12,
      
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
title:{
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
}}
    )

export default BlockMined;
