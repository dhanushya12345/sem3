import React from "react";
import { View, Text,Image, TouchableOpacity, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import  ImageInput from '../components/ImageInput';
import AppButton from '../components/AppButton';
import AuthContext from "../auth/context";
import { useContext } from "react";
const CashierProfile = ({imageuris=[],onRemove,onAddImage,title,subtitle,button1,title1,button2,navigation}) => {
  const[cashier,setCashier]=useContext(AuthContext)
  return (
    
      <Screen>
        <Text  style={{fontSize:30,textAlign:'center'}}>CASHIER PROFILE </Text>
        <View style={styles.container} >
    <ImageInput onchangeImage={(uri)=>onAddImage(uri)} style={styles.image} />
       {imageuris.map((uri)=>(<ImageInput onchangeImage={()=>onRemove(uri)} image={uri} />)) }
      
       <View style={ styles.textcontainer}>
     <Text  style={[styles.text,{fontWeight:'bold',fontSize:19}]}>{cashier.name}</Text>  
     <Text style={[styles.text,{color:'grey'}]}>{cashier.email}</Text>
     </View>
         </View>

         <View style={styles.container1}>
         <Text  style={[styles.text,{fontWeight:'bold',fontSize:19}]}>{title1}Payment process</Text> 
         {/* <View  style={styles.button} >
  <Text style={{color:'white',fontSize:20}}>{button1}</Text>
        </View> */}
        
        <View  style={styles.button} >
        <TouchableOpacity onPress={()=>navigation.navigate('AmtUpdate')}>
  <Text style={{color:'white',fontSize:20}}>{button2}Cash Update</Text>
  </TouchableOpacity>
        </View>
        
         </View>
         {/* <AppButton title="BACK" color='black'></AppButton> */}
         <AppButton title="LOGOUT" color='black' myPress={()=>setCashier(null)}></AppButton>
   </Screen>
    
  );
};
const styles = StyleSheet.create({
 
  container: {
    flexDirection:"row",
   paddingVertical:15,
    marginVertical:10,
 
     },
     image:{
     
       paddingHorizontal:30,
       paddingVertical:15,
   marginVertical:10
     } ,
     text:{
      marginLeft:'10%',
      paddingTop:'2%',
      
      }, 
      textcontainer:{
        marginTop:"10%",
        height:40,
    },
    container1:{
      width:"100%",
      height:"40%",
      backgroundColor:'white',
borderRadius:10,
alignItems:'center',
justifyContent:'center'
    },
    button:{
      alignSelf:'center',
      justifyContent: "center",
      borderRadius: 15,
      marginTop: "10%",
      width: "60%",
      height: "20%",
      alignItems: "center",
      backgroundColor:'black'
  }

});

export default CashierProfile;