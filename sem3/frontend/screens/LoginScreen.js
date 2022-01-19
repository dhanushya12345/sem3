import React, {useContext} from 'react';
import { Text, View, StyleSheet, Button, Image,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../components/ErrorScreen';
import Icon from '../components/Icon';
  import Screen from "../components/Screen";
import authapi from '../api/Login'
import jwtDecode from 'jwt-decode'
import AuthContext from "../auth/context";
import authStorage from '../api/storage';
import cashierLogin from '../api/CashierLogin'

  let validationSchema  = yup.object().shape({
      Usertype:yup.string().required().label("usertype"),
      Email : yup.string().required().email().label("email"),
      Password : yup.string().required().min(4).label("password"),
          
    });
    
  const LoginScreen = ({ navigation}) => {
    const authcontext=useContext(AuthContext)
    const handleSubmit=async({email,password,usertype})=>{ 
      // console.log(usertype)
    if(usertype==='user'  ){
      const result =await authapi.Login(email,password,usertype)
      
      if(result.ok){
        authStorage.storeUsertype(usertype)
        const user=jwtDecode(result.data) 
            //  console.log(user)
             authcontext.setUser(user)
            // console.log(result.data)
            authStorage.storeToken(result.data)
            
            navigation.navigate('UserStack')
       
        }
     else {
      console.log(result.problem) 
         }

    }
    if(usertype==='cashier'){
      const result =await cashierLogin.CashierLogin(email,password,usertype)
      
      if(!result.ok){
        console.log(result.problem) 
        }
     else {
      authStorage.storeUsertype(usertype)
        console.log(result.problem) 
      const cashier=jwtDecode(result.data) 
          //  console.log(user)
           authcontext.setCashier(cashier)
        //  console.log(result.data)
          authStorage.storeToken(result.data)
          navigation.navigate('CashierStack')
         }

    }
     
  }
    return (
      <Formik
        initialValues={{ Email: "", Password: "",Usertype:"" }}
          // onSubmit={(values) => console.log(values)}
         onSubmit={ handleSubmit }
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <Screen>
            <View style={styles.content} >
            <Icon  name='pen' color="black"  size={50}  backgroundColor="white"></Icon>
            <Text style={{fontSize:30,alignContent:'center'}}>LOGIN</Text>
            </View>
            <View style={styles.container2}>
              <TextInputs
                icon ='account'
                placeholder="Usertype"
                keyboardType="email-address"
                onChangeText={handleChange("Usertype")}
                onBlur={() => setFieldTouched("Usertype")}
              />
               {touched.Usertype && <ErrorScreen error={errors.Usertype}></ErrorScreen>}
              <TextInputs
                icon ='email'
                placeholder="Enter Your Email"
                keyboardType="email-address"
                onChangeText={handleChange("Email")}
                onBlur={() => setFieldTouched("Email")}
              />
               {touched.Email && <ErrorScreen error={errors.Email}></ErrorScreen>}
               
                <TextInputs
                  icon ='lock'
                  placeholder="Enter Your Password"
                  secureTextEntry={true}
                  keyboardType="default"
                  onChangeText={handleChange("Password")}
                  onBlur={() => setFieldTouched("Password")}
                />
              {touched.Password && <ErrorScreen error={errors.Password}></ErrorScreen>}
              </View>
                <AppButton
                style={styles.button}
                  title="Login"
                  color="black"
                  myPress={handleSubmit}
                />
             
             
            
          </Screen>
        )}
      </Formik>
    );
  };
  
  export default LoginScreen;
  const styles = StyleSheet.create({
   
    text: {
      paddingTop: "50%",
      paddingBottom: 15,
      color: "#807EDD",
      fontSize: 40,
      fontWeight: "bold",
      alignSelf: "center",
    },
    
      container2:{
    backgroundColor:'white',
    borderRadius:20,
    height:"60%",
    padding:10
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
content:{
  justifyContent: "center",
  alignItems: "center",
}
});
