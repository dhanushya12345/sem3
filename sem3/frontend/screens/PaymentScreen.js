import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import color from '../app/colors/Config';
import defaultStyles from '../app/colors/DefaultStyles';
import AppText from '../components/AppText';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';
import Icon from '../components/Icon'
const PaymentScreen=({navigation})=> {
  return(
  <View style={styles.container}>
            <Icon  name='cash-plus' color="black"  size={50}  backgroundColor="white"></Icon>
            <Text style={{fontSize:30,alignContent:'center'}}>PAYMENT DETAIL</Text>
    <View  style={styles.container1}>
   <AppText title='UserName:'></AppText>
   <AppText title='No of members:'></AppText>
   <AppText title='Date:'></AppText>
   <AppText title='Paid amt: '></AppText>
   <AppText title='Balance amt:'></AppText>
 
  </View>
  
  {/* <View  style={styles.button} >
  <Text style={{color:'white',fontSize:20}}>VIEW MONTHWISE</Text>
        </View>
        <View  style={styles.button} >
  <Text style={{color:'white',fontSize:20}}>BACK</Text>
        </View> */}
        <AppButton title='VIEW MONTHWISE' color='black' myPress={()=>navigation.navigate('PaymentMonthWise')}></AppButton>
        {/* <AppButton title='BACK' color='black'></AppButton> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    marginVertical:10,
    backgroundColor:'silver',
    padding:10,
  marginTop:10
   
  },
  container1:{
    width:"80%",
backgroundColor:'white',
padding:10,
borderRadius:10,
 marginTop:10
  },
  button:{
    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 90,
   marginTop:30,
    width: "100%",
    height: "12%",
    alignItems: "center",
    backgroundColor:'black'
},
icon:{
  borderRadius: 90,
  backgroundColor:'gray',
  width:"25%",
  height:"15%",
  padding:20
},
container2:{
flexDirection:'row',
// height:"40%",
// marginBottom:100
}

});


export default PaymentScreen;