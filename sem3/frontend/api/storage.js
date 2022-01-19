import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

 const storeToken=async(authToken)=>{
     try{
        await SecureStore.setItemAsync("AuthToken",authToken)
        console.log('stored Token')
     }
     catch(error){
            console.log('error')
     }
  
}

const storeUsertype=async(usertype)=>{
    try{
       await SecureStore.setItemAsync("Usertype",usertype)
       console.log('stored usertype')
    }
    catch(error){
           console.log('error')
    }
 
}

const getUsertype=()=>{
    try{
        console.log('getting usertype')
       return SecureStore.getItemAsync("Usertype")
    }
    catch(error){
           console.log('error')
    }
 
}
const getToken=()=>{
    try{
        console.log('getting token')
       return SecureStore.getItemAsync("AuthToken")
    }
    catch(error){
           console.log('error')
    }
 
}

const getUser=async()=>{
   const token=await getToken()
   if(token)return jwtDecode(token)
return null;
   
 
}


const removeToken=()=>{
    try{
        SecureStore.deleteItemAsync("AuthToken")
       console.log('token removed')
    }
    catch(error){
           console.log('error')
    }
 
}
export default {removeToken,storeToken,getToken,getUser,storeUsertype,getUsertype}