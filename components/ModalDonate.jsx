import React from "react";
import * as Clipboard from "expo-clipboard";
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

export default function ModalDonate({ setShowModal, visible }) {
  console.log(visible, "sasas");
  function hanldlerPressModal(show) {
    setShowModal(show);
  }

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
  };




  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Puedes contribuir con USDT o BTC
            </Text>
            <View style={styles.containerWallets}>
              
              <View style={styles.sectionWallet}>
                  <Text style={{fontWeight:"bold"}}>USDT(red BEP20)</Text>
                <Image style={styles.imageQr} source={require("../assets/src/svg/usdtQr.png")} />
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(
                      "0x92D0459CF70497F0a806fa16cf4dA82069d7B9aB"
                    );
                  }}
                >
                  <Text style={styles.dirWalletText}>
                    <Text style={{fontWeight:"bold"}}>Dirección:</Text>
                  0x92D0459CF70497F0a806fa16cf4dA82069d7B9aB {"\n"}(click aquí para copiar)
                  </Text>
                </TouchableOpacity>
              </View>
           
              <View style={styles.sectionWallet}>
                   <Text style={{fontWeight:"bold"}}>Bitcoin</Text>
              <Image style={styles.imageQr} source={require("../assets/src/svg/btcQr.png")} />
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(
                      "bc1ql6dxlzey3fj7ddsky43pyg36ypyghl8sade68n"
                    );
                  }}
                >
                  <Text style={styles.dirWalletText}>
                  <Text style={{fontWeight:"bold"}}>Dirección:</Text>
                  bc1ql6dxlzey3fj7ddsky43pyg36ypyghl8sade68n {"\n"}  (Click aquí para copiar)
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                hanldlerPressModal(false);
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 6,
    padding: 10,
    elevation: 2,
    width:200,
     backgroundColor: "#ffc107",
     
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },


  dirWalletText: {
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: "#f6f6f6",
   marginTop:5,
   textAlign:"center",

  },
  sectionWallet:{
    alignItems:"center",
    borderWidth:1,
    borderColor:"black",
    padding:5,
    marginBottom:10,
  },
  containerWallets:{
    alignItems:"center",
    backgroundColor:"white",
    
  },
  imageQr:{
    width:180,
    height:150,
    
  }
});
