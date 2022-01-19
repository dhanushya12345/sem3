
import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';
import Listingitems from '../components/ListingItems';
import AppButton from '../components/AppButton';
const FundDetailsScreen = () => {
    const {landscape} = useDeviceOrientation()
   
    return (
        <View style={styles.container}>
            <Text style={[styles.text,{fontSize:30,marginTop:'3%'}]}>Funding Related Work</Text>
            <View style={styles.container2} >
        
            <Text style={[styles.text,{fontSize:20,marginTop:'3%'}]}>UserName</Text>
        <Text style={[styles.text,{fontSize:20}]}>Purpose</Text>
        <Text style={[styles.text,{ontSize:20}]}>Date</Text>
        <Text style={[styles.text,{fontSize:20}]}>Place</Text>
        <Text style={[styles.text,{fontSize:20}]}>Amount</Text>
        </View>
        {/* <View  style={styles.button} >
  <Text style={{color:'white',fontSize:20}}> BACK</Text>
        </View> */}
        <AppButton  title='BACK' color='black'></AppButton>
         </View>
        

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:'silver',
        width:'100%',
        height:'100%',
        padding:20,
        
               },

      image:{
        
          width:'100%',
         flexWrap:'wrap',
         alignContent:'stretch',
         
           },


           text:{
            marginLeft:'10%'
            
            },

container2:{
    backgroundColor:'white',
   width:"100%",
   height: "50%",
   borderRadius:10,
   marginTop:20,
   padding:20
   
},
button:{
    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 90,
    marginTop: "50%",
    width: "95%",
    height: "11%",
    alignItems: "center",
    backgroundColor:'black'
}

})

export default FundDetailsScreen;



