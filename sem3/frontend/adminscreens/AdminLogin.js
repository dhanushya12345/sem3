import React, {useState,useContext} from 'react';
import { Text, View, StyleSheet, Button, Image,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInputs from '../components/TextInput';
import AppButton from '../components/AppButton';
import {Formik } from 'formik';
import * as yup from 'yup';
import ErrorScreen from '../components/ErrorScreen';
import Icon from '../components/Icon';
  import Screen from "../components/Screen";
import ListNavigation from '../navigation/ListNavigation'
import adminlogin from '../api/AdminLoginapi';
import jwtDecode from 'jwt-decode'
import AuthContext from "../auth/context";
import authStorage from '../api/storage';
  let validationSchema  = yup.object().shape({
      Usertype:yup.string().required().label("usertype"),
      Email : yup.string().required().email().label("email"),
      Password : yup.string().required().min(4).label("password"),
          
    });
    
  const AdminLogin = ({ navigation }) => {
    const authcontext=useContext(AuthContext)
      const handleSubmit=async({email,password,usertype,values})=> {
        const result =await adminlogin.AdminLoginapi(email,password,usertype)
    if (
      values.Email === "dhanushya34678@gmail.com" &&
      values.Password === "dhanushyadhanush" &&
      values.Usertype === "admin"
    ) {
       alert(`${values.Email}  Your LogedIn`);
      if(result.ok){
        const user=jwtDecode(result.data) 
        //  console.log(user)
         authcontext.setAdmin(user)
        // console.log(result.data)
        authStorage.storeToken(result.data)
      }
     
      // alert(`${values.Email}  Your LogedIn`);
      navigation.navigate('List')
      // console.log(values.usertype);
      // console.log(values.email);
      // console.log(values.password);
    } else {
      alert("Not valid Email or Password");
    }
  }
    return (
      <Formik
        initialValues={{ Email: "", Password: "",Usertype:"" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <Screen>
            <View style={styles.content} >
            <Icon  name='account-lock' color="black"  size={50}  backgroundColor="white"></Icon>
            <Text style={{fontSize:30,alignContent:'center'}}>ADMIN LOGIN</Text>
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
                  //  myPress={()=>navigation.navigate('List')}
                />
             
             
            
          </Screen>
        )}
      </Formik>
    );
  };
  
  export default AdminLogin;
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