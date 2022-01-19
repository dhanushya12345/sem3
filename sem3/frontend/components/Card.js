import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity} from "react-native";
import color from '../app/colors/Config';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({title,subtitle,onPress}){
    const {landscape} = useDeviceOrientation()

    return(
<View style={styles.container}>
<View style={styles.container1}>

<View style={[styles.container2,{borderRadius:20,backgroundColor:'white',marginTop:'12%',}]}>
{/* <Image  style={[styles.image,{marginTop:landscape?'1%':'0%',height:landscape?270:180,borderRadius:10}]} source={require('../assets/jacket.jpg')}></Image> */}

<Text style={styles.text}>{title}</Text>
<Text style={[styles.text,{color:color.secondary}]}>{subtitle}</Text>
<TouchableOpacity onPress={onPress}>
<MaterialCommunityIcons style={{marginLeft:230,marginBottom:30}} name='arrow-right-circle' color='black' size={35} ></MaterialCommunityIcons> 

</TouchableOpacity></View>

</View>
 </View>


    );
}


const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'silver',
    width:'100%',
    height:'100%', 
    borderRadius:40,
    marginTop:'1%',
    padding:10
},

container1: {
    flex:1,
    backgroundColor:'silver',
    // width:'100%',
    height:'100%', 
   
justifyContent:'flex-start',
alignItems:'center'

    
},

container2:{
width:'100%',
height:'50%',
padding:10
    
},

text:{
marginLeft:'10%',
// paddingTop:'2%',

},

 image :{
  width:'100%',
  flexWrap:'wrap',
  alignContent:'stretch',
  alignItems:'center',
  alignSelf:'center'

         },

        })