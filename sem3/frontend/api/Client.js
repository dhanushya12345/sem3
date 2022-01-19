// import {create} from 'apisauce'
// const apiClient= create({baseURL:"http://192.168.75.174:5000/users"});
// // const apiClient= create({baseURL:"http://localhost:5000/users"});
// export default apiClient;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'apisauce'
import { ActionSheetIOS } from 'react-native';
import cache from '../app/colors/Utility/cache';
import authStorage from '../api/storage'
const apiClient= create({baseURL:"http://192.168.61.174:5000/api"});

const get = apiClient.get;

apiClient.addAsyncRequestTransform(async(request)=>{
        const authToken=await authStorage.getToken()
        if(!authToken)return;
        request.headers["authorization"]=authToken
})

apiClient.get=async(url,params,axiosConfig)=>{
    const response=await get(url,params,axiosConfig)
    if(response.ok){
        cache.store(url,response.data)
        return response;
    }
    const data = await cache.get(url)
    return data? {ok:true,data} : response;
}

export default apiClient;

