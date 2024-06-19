import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";


const Links = () => {
  const urlMempool = "https://mempool.space/es/";
    const top100RichList="https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html" 
    const whitePaperBtc="https://bitcoin.org/es/bitcoin-documento"
    const blockSubsidy="https://media.licdn.com/dms/image/D5612AQH8hqEzeA7UfA/article-inline_image-shrink_1000_1488/0/1681216973900?e=1723680000&v=beta&t=GkmNlYJ880BdWVm2st1Dc37Iwt9yPHbwm6sIlUDxbc0"

  return (
    <View style={styles.cardBlock}>
        <Text style={styles.title}>Links</Text>
      <View style={styles.containerLinks}>
        <Pressable style={styles.buttonLinks} onPress={()=>{openBrowserAsync(urlMempool)}}>
     <Image  style={styles.icoLinks}  source={{uri:"https://mempool.space/resources/mempool-logo-bigger.png"}}></Image>

        
        </Pressable>
        <Pressable style={styles.buttonLinks} onPress={()=>{openBrowserAsync(top100RichList)}}>
          <Text style={styles.textButtonLinks}>Bitcoin Rich List</Text>
        </Pressable>
        <Pressable style={styles.buttonLinks} onPress={()=>{openBrowserAsync(whitePaperBtc)}}>
          <Text style={styles.textButtonLinks}>BTC Whitepaper</Text>
        </Pressable>
        <Pressable style={styles.buttonLinks}>
          <Text style={styles.textButtonLinks}  onPress={()=>{openBrowserAsync(blockSubsidy)}}   >Halvigns y reconpensas</Text>
        </Pressable>
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
    marginBottom:12,
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
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "gray",
    marginBottom: 8,
  },
  buttonLinks: {
    backgroundColor: "#ffc107",
      width:150,
    padding:8,
    borderRadius:8,
    justifyContent:"center",
    textAlign:"center",
    
  },
  textButtonLinks: {
    color: "#482200",
  },
  containerLinks: {
    flex:1,
    gap:12,
    flexDirection:"row",
    flexWrap:"wrap",

  },
  icoLinks:{
   width:100,
    height:20,
    justifyContent:"center",
  }
});

export default Links;
