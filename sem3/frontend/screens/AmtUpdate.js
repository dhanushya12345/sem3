import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons ,MaterialIcons} from '@expo/vector-icons';
import color from '../app/colors/Config';
import defaultStyles from '../app/colors/DefaultStyles';
import AppText from '../components/AppText';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../components/ErrorScreen';
import Icon from '../components/Icon'

let validationSchema  = yup.object().shape({
    username : yup.string().required().label('username'),
    date : yup.string().required().label('date'),
    month : yup.string().required().label('month'),
    amount : yup.string().required().label('amount'),
    
  });

const AmtUpdate=({icon})=> {

  return(
    <View style={style.container}>
  {/* <View style={style.icon}>
  <MaterialIcons name='account-balance-wallet' size={50} color='black'    />
            </View> */}
            <Icon  name='cash-register' color="black"  size={50}  backgroundColor="white"></Icon>
            <Text style={{fontSize:30,alignContent:'center'}}>BALANCE AMT</Text>
            <View style={{ width:"30%",
          backgroundColor:'white',
          height:"7%",
          borderRadius:20,}}>

            </View>
             <Text style={{fontSize:15}}>Monthly Collection</Text>
   <Text style={{fontSize:15}}>Update Page</Text>

  <Formik 
  initialValues={{username:'',date:'',month:'',amount:''}}
     onSubmit={(details)=>console.log(details)}
     // onSubmit={(values) => auth(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
      <View style={style.container2}>
                <TextInputs
                icon ='account'
                 placeholder='UserName'
                  keyboardType="default" 
                onChangeText={handleChange('username')}
                onBlur={() => setFieldTouched("username")}
                />
                 {touched.email && <ErrorScreen error={errors.username}></ErrorScreen>} 
                
                <TextInputs
                  icon ='calendar-month' placeholder='Date'keyboardType="default" 
                    onChangeText={handleChange('date')}
                    onBlur={() => setFieldTouched("date")}
                    />

              {touched.password && <ErrorScreen error={errors.date}></ErrorScreen>} 
              <TextInputs
                  icon ='calendar-month-outline' placeholder='Month'keyboardType="default" 
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('month')}
                    onBlur={() => setFieldTouched("month")}
                    />
                {touched.password && <ErrorScreen error={errors.month}></ErrorScreen>}

              <TextInputs
                  icon ='cash' placeholder='Amount'keyboardType="numeric" 
                    onChangeText={handleChange('Amount')}
                    onBlur={() => setFieldTouched("Amount")}
                    />
              {touched.password && <ErrorScreen error={errors.Amount}></ErrorScreen>} 
              
              </View>
              
                <AppButton title="SUBMIT" color='black' myPress={handleSubmit} />
      </>
    )} 
   </Formik>
  </View>
  

  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    alignItems:'center',
     marginVertical:20,
    backgroundColor:'silver',
   padding:10
  },
  container2:{
backgroundColor:'white',
borderRadius:20,
height:"40%",
padding:10
  },
  button:{
    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 90,
    marginTop: "5%",
    width: "95%",
    height: "11%",
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
picker:{
        width:"70%",
        height:"10%",
       backgroundColor:'silver',
       borderWidth:2,
       borderColor:'black',
       borderRadius:30
      
    },
    container3:{
          width:"30%",
          backgroundColor:'white',
          height:"7%",
          borderRadius:20,
          alignItems: "center",
      }
  
});


export default AmtUpdate;