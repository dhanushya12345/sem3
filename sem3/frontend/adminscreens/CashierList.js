
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Icon from '../components/Icon'
const CashierList=({icon,navigation})=> {
  return(
  <View style={styles.container}>
    
           <Icon  name='account-box-multiple' color="black"  size={50}  backgroundColor="white"></Icon>
            
            <View style={styles.container4}>    
            <TouchableOpacity>
    <View  style={styles.container1}>
    <AppText  title='cashier1'></AppText>
    <View  style={{marginLeft:120}}>
  <MaterialCommunityIcons name='chevron-right' size={30} color='black'    />
  </View>
  </View>
  </TouchableOpacity>
<TouchableOpacity>
  <View style={styles.container2}>
  <AppText icon='home' title='cashier2'></AppText>
  <View  style={{marginLeft:120}}>
  <MaterialCommunityIcons name='chevron-right' size={30} color='black'    />
  </View>
  </View>
  </TouchableOpacity>
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
     width:"100%",
    flex:1,
     paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    // marginVertical:10,
    backgroundColor:'silver',
    padding:10,
  
   
  },
  container1:{
backgroundColor:'silver',
padding:10,
borderRadius:10,
flexDirection:'row',
width:"100%",
marginTop:20
  },
  container2:{
    backgroundColor:'silver',
    padding:10,
    borderRadius:10,
    flexDirection:'row',
    width:"100%",
    marginTop:10
      },
icon:{
  borderRadius: 90,
  backgroundColor:'gray',
  width:"25%",
  height:"15%",
  padding:20
},

});


export default CashierList;