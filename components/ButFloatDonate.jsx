import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";



export default function ButFloatDonate ({setShowModal}) {

function hanldlerPressModal(show) {
  setShowModal(show)
}
  return (
    <View style={styles.containerFloat}>
      <Text style={styles.title}>Dar propina al desarrollador</Text>
      <TouchableOpacity style={[styles.butDonate,styles.boxShadow]} onPress={()=>{hanldlerPressModal(true)}}>
        <Image
          style={styles.imageDonate}
          source={require("../assets/src/svg/donar.png")}
        />
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  containerFloat: {
    flex: 1,
    width:"100%",
    flexDirection: "row",
 marginTop:14,
    alignItems: "center",
    justifyContent:"center",
    borderTopWidth:1,
    paddingTop:6,
  },
  title: {
    fontSize:16,
  },
  butDonate: {
    borderWidth: 1,
    borderColor: "#3d3d3d",
    backgroundColor:"#ffc107",
    borderRadius: 100,
    alignItems: "center",
    marginLeft:12,
    padding:5,
    elevation:2,
  },
  imageDonate: {
    width: 40,
    height: 40,
  },

  boxShadow: {
    shadowColor:"#000000",
shadowOffset: {
   width: 26,
   height: -3,
},
shadowOpacity: 1,
shadowRadius: 28,
elevation: -6
}
  


});


