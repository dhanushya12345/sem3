import React from 'react'
import { View, Text,StyleSheet,Image,TouchableWithoutFeedback,Alert } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker';




const ImageInput = ({image,onchangeImage,onPress}) => {


    function handlePress(){
       
        if(!image){
           selectImage()
        }
        else{
            Alert.alert('Alert','Dletet this image',[
                {text:'yes',onPress:()=>onchangeImage(null)},
                {text:'No',onPress:()=>console.log('image not deleted')}
            ])  
        }
    }


    
    const selectImage = async()=>{
        try {
          const result = await  ImagePicker.launchImageLibraryAsync();
          // console.log(result);

         if(!result.cancelled) 
         onchangeImage(result.uri)
        } catch (error) {
          
        }
        }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.continer}>
        {!image &&  <MaterialCommunityIcons color="black" name="camera" size={50} style={styles.icons}/> }
         {image &&  <Image  source={{uri:image}} style={{height:70,width:70,}} /> }
       
         </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    continer:{
        height:90,
        width:90,
       alignItems:"center" ,
         justifyContent:"center",
        backgroundColor:"gray",
  // marginTop:10,
  borderRadius:30,
marginLeft:10
    },
    icons:{
                   justifyContent:"center",
                   backgroundColor:"white",
                   alignSelf:"center",
                   alignItems:"center",
                   borderRadius:30,
                   height:50,
                   width:50
                  }
})


export default ImageInput