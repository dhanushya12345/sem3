import React,{useState} from 'react';
import { View,FlatList,StyleSheet ,TouchableWithoutFeedback,Text,TouchableOpacity,Modal} from 'react-native';
import Card from '../components/Card';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {
     
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    const Cards = [
        {
          id: 1,
          username: 'dhanushya',
          porpose:'70',
        },
        {
          id:2,
          username: 'iswarya',
          porpose:'70',
        },
        
        
      ];

     
      
    return (
        
        <View style={[styles.background,]}>
        <View style={[styles.cards,{marginTop:landscape?'1%':'0%'}]}>
            <FlatList
                style={{height: '100%'},{width:"100%"}}
                data={Cards}
                keyExtractor={Cards => Cards.id.toString()}
                renderItem={({ item }) => (
                    
                    <Card
                        title={item.username}
                        subtitle={item.porpose}
                        onPress={()=>navigation.navigate('FundDetails')}
                    />
                    // <View>
                    // <Text>{item.username}</Text>
                    // <Text>{item.porpose}</Text>
                    // </View>
                    ) }
                    
            />
        </View>
       
   
  <View  style={styles.button} >
       <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} > 
  
   <FontAwesome style={{marginBottom:5}} name= 'user' color='white' size={35} ></FontAwesome>
  
   </TouchableOpacity> 
  </View> 

     </View>

     

    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background:{
        backgroundColor:'silver',
        // height: "100%",
        flex: 1,
        width:'100%',
        
    },
    // cards:{
    //      marginHorizontal:10,
    //     // marginVertical:30,
    //     // marginTop:'-10%'
       
    // },
    button:{
        alignSelf:'center',
        justifyContent: "center",
        borderRadius: 30,
        width: "95%",
        height: "10%",
        alignItems: "center",
        backgroundColor:'black',
        marginTop:40
    },
    
})

