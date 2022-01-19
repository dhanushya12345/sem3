// import { StatusBar } from 'expo-status-bar';
// import React,{useState,useEffect} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import WelcomeScreen from './screens/WelcomeScreen';
// import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen'
// import ProfileScreen from './screens/ProfileScreen';
// import AmtUpdate from './screens/AmtUpdate';
// import CashierProfile from './screens/CashierProfile'
// import FundDetailsScreen from './screens/FundDetailsScreen';
// import PaymentDetail from './screens/PaymentMonthWise';
// import PaymentMonthWise from './screens/PaymentMonthWise'
// import StackNavigation from './navigation/StackNavigation'
// import {  NavigationContainer } from '@react-navigation/native';
// import UserStack from './navigation/UserStack'
// import CashierStack from './navigation/CashierStack'
// import Storage from './api/storage'
// import jwtDecode from "jwt-decode";
// import AuthContext from "./auth/context";
// import PaymentScreen from './screens/PaymentScreen';
// import AdminLogin from './adminscreens/AdminLogin';
// export default function App() {
// //   const[user,setUser]=useState()
// //   const restoreToken=async()=>{
// //     const token=await Storage.getToken()
// //     if(!token)
// //     {
// //       return null;
// //     }
// //     else{
// //       setUser(jwtDecode(token));
// //     }
// //   }
// //   useEffect(() => {
// //  restoreToken();
// // }, []) 
//   return (
//     // <View style={styles.container}>
//     //   <ProfileScreen></ProfileScreen>
//     // </View>

//     // <AuthContext.Provider value={{user,setUser}}>
//     // <NavigationContainer>
    
//     // {user?<UserStack></UserStack>
//     // :<StackNavigation></StackNavigation>}
//     // </NavigationContainer>
//     // </AuthContext.Provider>
    
//     // <NavigationContainer>
//     // <StackNavigation></StackNavigation>
//     // </NavigationContainer>
    
//     <View style={styles.container}>
// {/* <WelcomeScreen></WelcomeScreen> */}
// {/* <HomeScreen></HomeScreen> */}
// <LoginScreen></LoginScreen>
// {/* <ProfileScreen></ProfileScreen> */}
// {/* <CashierProfile></CashierProfile> */}
// {/* <FundDetailsScreen></FundDetailsScreen> */}
// {/* <PaymentScreen></PaymentScreen> */}
// {/* <PaymentMonthWise></PaymentMonthWise> */}
// {/* <AmtUpdate></AmtUpdate> */}
// {/* <AdminLogin></AdminLogin> */}
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,

//   }
// })


import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen';
import AmtUpdate from './screens/AmtUpdate';
import CashierProfile from './screens/CashierProfile'
import FundDetailsScreen from './screens/FundDetailsScreen';
import PaymentDetail from './screens/PaymentMonthWise';
import PaymentMonthWise from './screens/PaymentMonthWise'
import StackNavigation from './navigation/StackNavigation'
import {  NavigationContainer } from '@react-navigation/native';
import UserStack from './navigation/UserStack'
import CashierStack from './navigation/CashierStack'
import Storage from './api/storage'
import jwtDecode from "jwt-decode";
import AuthContext from "./auth/context";
import PaymentScreen from './screens/PaymentScreen';
import AdminLogin from './adminscreens/AdminLogin';
import TopTabNavigation from './navigation/TopTabNavigation';
import UserRegister from './adminscreens/UserRegister';
import CashierRegister from './adminscreens/CashierRegister';
export default function App() {
  const[user,setUser]=useState()
  const[cashier,setCashier]=useState()
  const[admin,setAdmin]=useState()
  const restoreToken=async()=>{
    const token=await Storage.getToken()
    const usertype=await Storage.getUsertype()
    if(token || usertype==='user')
    {
      setUser(jwtDecode(token));
      console.log(setUser)
    }
    if(token || usertype==='cashier')
    {
      setCashier(jwtDecode(token));
      console.log(setCashier)
    }
    else{
      return null;
    }
  }
  useEffect(() => {
 restoreToken();
}, []) 
  return (
    // <View style={styles.container}>
    //   <ProfileScreen></ProfileScreen>
    // </View>

    <AuthContext.Provider value={{user,setUser},{cashier,setCashier},{admin,setAdmin}}>
    
    <NavigationContainer>
    <StackNavigation></StackNavigation>
    {/* {user?<UserStack></UserStack> || cashier&&<CashierStack></CashierStack> :<StackNavigation></StackNavigation>}
     */}
    </NavigationContainer>
    </AuthContext.Provider>
    
//     <NavigationContainer>
//       <StackNavigation></StackNavigation>
// {/* <TopTabNavigation></TopTabNavigation> */}
//     </NavigationContainer>
    
//     <View style={styles.container}>
//       {/* <UserRegister></UserRegister> */}
//       {/* <CashierRegister></CashierRegister> */}
// {/* <WelcomeScreen></WelcomeScreen> */}
// {/* <HomeScreen></HomeScreen> */}
// {/* <LoginScreen></LoginScreen> */}
// {/* <ProfileScreen></ProfileScreen> */}
// {/* <CashierProfile></CashierProfile> */}
// {/* <FundDetailsScreen></FundDetailsScreen> */}
// {/* <PaymentScreen></PaymentScreen> */}
// {/* <PaymentMonthWise></PaymentMonthWise> */}
// {/* <AmtUpdate></AmtUpdate> */}
// <AdminLogin></AdminLogin>
//     </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})


