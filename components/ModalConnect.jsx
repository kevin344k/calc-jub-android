import React from "react";
import { View, Text, StyleSheet,Image,Modal,Pressable,BackHandler } from "react-native";


const ModalConnect=(connect)=>{
    console.log(connect.connect);

    const modalVisible=connect.connect

return(
    <View style={styles.containerModal}> 
         <Modal
        animationType="fade"
        visible={!modalVisible}
        transparent={true}
        overFullScreen
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image style={styles.modalImage} source={require("../assets/src/svg/offline-icon.png")}/>

            <Text style={styles.modalText}>Necesitas conectarte a internet</Text>

            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>BackHandler.exitApp()}>
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
)  
}

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        backgroundColor:"rgba(0, 0, 0, 0.7)",
        justifyContent:"center",
    },
    containerModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
  
        
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: "#ffc107",
        color:"black",
        borderRadius:6,
        width:"80%",
    },
    textStyle: {
      color: '#212529',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalImage:{
        width:80,
        height:80,
        marginBottom:12,
    }
  });


export default ModalConnect;


















