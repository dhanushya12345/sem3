import React, {useState,useContext} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,ScrollView} from 'react-native';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../components/ErrorScreen';
import Icon from '../components/Icon'
import cashierapi from '../api/Addcashier'
import authcontext from  '../auth/context';
import loginapi from '../api/Login';
import authStorage  from '../api/storage';


let validationSchema  = yup.object().shape({
   cashiername : yup.string().required().label('name'),
  experiance : yup.string().required().label('experiance'),
  qualification : yup.string().required().label('qualification'),
  dateofjoin : yup.string().required().label('ate of join'),
    email : yup.string().required().email().label('Email'),
    password : yup.string().required().min(4).label('Password'),
   
  });

const CashierRegister=({navigation})=> {

  const authContext=useContext(authcontext);
  const[error,setError]=useState();
  async  function handleSubmit(userInfo){
          console.log(userInfo)
          const result=await cashierapi.Addcashier(userInfo)

if(!result.ok){
  console.log(result);
  if(result.data){
    setError(result.data.error)
  }
  else{
     console.log('success')
    setError("an unexpected error occured");
    console.log(result)
  }
  setTimeout(()=>{
    setError('')
  },3000 );
  return;
  }

 const reg=await loginapi.Login(userInfo.email,userInfo.password)
 if(reg.ok){
console.log(reg.data)
// authContext.setUser(userapi)
// authStorage.storeToken(reg.data)
  }
// else{
//   console.log('error')
// }


}
  return(
    <View style={style.container}>
<Icon  name='pen' color="black"  size={50}  backgroundColor="white"></Icon>
            <Text style={{fontSize:30,alignContent:'center'}}> CASHIER REGISTER</Text>
  <Formik 
  initialValues={{email:'',password:'',cashiername:'',experiance:'',qualification:'',dateofjoin:''}}
    //  onSubmit={(details)=>console.log(details)}
      onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors,touched,setFieldTouched})=>(
      <>
      <ScrollView  contentContainerStyle={style.contentContainer}>
      <View style={style.container2}>
      <TextInputs
                icon ='account'
                 placeholder='name'
                onChangeText={handleChange('cashiername')}
                onBlur={() => setFieldTouched("cashiername")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.cashiername && <ErrorScreen error={errors.cashiername}></ErrorScreen>}
 
                 <TextInputs
                icon ='account-multiple-outline'
                 placeholder='experince'
                  keyboardType="numeric"
                onChangeText={handleChange('experiance')}
                onBlur={() => setFieldTouched("experiance")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.experiance && <ErrorScreen error={errors.experiance}></ErrorScreen>} 

                 <TextInputs
                icon ='book-plus'
                 placeholder='qualification'
                  keyboardType="numeric"
                onChangeText={handleChange('qualification')}
                onBlur={() => setFieldTouched("qualification")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.qualification && <ErrorScreen error={errors.qualification}></ErrorScreen>} 
                 <TextInputs
                icon ='calendar-month'
                 placeholder='date of joining'
                  keyboardType="default" 
                onChangeText={handleChange('dateofjoin')}
                onBlur={() => setFieldTouched("dateofjoin")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.dateofjoin && <ErrorScreen error={errors.dateofjoin}></ErrorScreen>} 

                <TextInputs
                icon ='email'
                 placeholder='Email'
                  keyboardType="email-address" 
                // onChangeText={(text)=>setemail(text)}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched("email")}
                />
                 {/* {touched.email && <AppText>{errors.email}</AppText>}  */}
                 {touched.email && <ErrorScreen error={errors.email}></ErrorScreen>} 
                {/* <AppText >{errors.email}</AppText> */}
                <TextInputs
                  icon ='lock' placeholder='Password'keyboardType="default" secureTextEntry={true}
                    // onChangeText={(text)=>setpassword(text)}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched("password")}
                    />

              {touched.password && <ErrorScreen error={errors.password}></ErrorScreen>} 
              
              </View>
              
              </ScrollView>
                <AppButton title="Registered" color='black'
                  myPress={handleSubmit} 
                 
                />
      
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
      marginVertical:10,
    backgroundColor:'silver',
    padding:10
  },
  container2:{
backgroundColor:'white',
borderRadius:20,
height:"100%",
 padding:10,
 alignContent:'stretch',
//  alignSelf:'stretch'
  },
  button:{
    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 90,
    marginTop: "1%",
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
    contentContainer: {
      backgroundColor:'silver',
      paddingVertical: 70
    }
  
});


export default CashierRegister;