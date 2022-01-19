
import React from 'react';
import { Text, View , Image, ImageBackground, StyleSheet, _View,TouchableOpacity } from 'react-native';
import color from '../app/colors/Config';
import AppButton from '../components/AppButton';
import { MaterialCommunityIcons ,FontAwesome} from '@expo/vector-icons';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
const WelcomeScreen = ({navigation}) => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    return (
     <View style={{ flex:1,width:'100%',height:'100%',}}>
 <ImageBackground source={require('../assets/image.jpg')} resizeMode="stretch" blurRadius={1} style={{width: '100%', height: '100%',}}>
           
       <View style={{flex:1,}}>
            <Image  style={[styles.weblogo,{marginTop:landscape?'5%':'10%'}]} source={require('../assets/images.png')}></Image>
            <Text  style={[styles.text,{paddingLeft:landscape?250:118,}]}>WELCOME</Text>

             <View style={{marginTop:landscape?'10%':'50%',height:'80%'}}>

             {/* <AppButton title="LOGIN" color={color.primary} style={{height: "8%",}} /> */}
            
             <View  style={styles.button} >
    <TouchableOpacity  onPress={()=>navigation.navigate('AdminLogin')}>
       <View style={{marginRight:'40%'}} >
       <MaterialCommunityIcons style={{marginBottom:5}} name= 'account-star' color='black' size={35} ></MaterialCommunityIcons> 
       </View>
       </TouchableOpacity> 
 
  
       <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} > 
   <View style={{marginLeft:'10%'}}>
   <FontAwesome style={{marginBottom:5}} name= 'home' color='black' size={35} ></FontAwesome>
   </View>
   </TouchableOpacity> 
  </View> 

  
             </View>


       </View> 
    </ImageBackground>
     </View>
    );
}



const styles = StyleSheet.create({  
   weblogo:{
            paddingTop:"10%",
            alignItems:'center',
            justifyContent:'space-between',
            width: 130,
            height: 130,
           // paddingTop:70,
          // marginTop:'20%',
           marginLeft:'35%',
           borderRadius:100
          },
   text:{
           paddingTop:"30%",
           fontSize:30,
            color:'white', 
           alignItems:'center',
           //alignContent:'center',
           //justifyContent: 'center',
           paddingLeft:118,
           
        },
                
   pink:{
            //marginTop: "120%",
            marginTop:"120%",
            flex:1,
            backgroundColor:color.primary,
            
           
        },

    blue:{
      
        flex:1,
        backgroundColor:color.secondary,   
         },
    
    button:{
        alignSelf:'center',
        justifyContent: "center",
        borderRadius: 30,
        width: "95%",
        height: "10%",
        alignItems: "center",
        backgroundColor:'white',
        flexDirection:'row',
        marginTop:80
    }
})

export default WelcomeScreen;