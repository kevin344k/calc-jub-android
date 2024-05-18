import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    Pressable,
    TouchableOpacity,Alert
  } from "react-native";


 const WhenJub=()=> {

return(
    <View style={styles.cardBlock}>
        <Text style={styles.title}>Cuando me jubilo?</Text>
        <Text style={styles.subTitle}>Trabajando en ello :)</Text>
        <Text style={{color:"white"}}>se agregará en la siguiente actualización</Text>

    </View>
)

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
      marginBottom:1,
    },
    subTitle:{
      fontSize: 18,
      fontStyle: "italic",
      fontWeight:"bold",
      color: "gray",
      marginBottom:8,
    }
  });
  


  export default WhenJub;