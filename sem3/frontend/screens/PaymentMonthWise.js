import React from 'react';
import { View,FlatList,StyleSheet ,TouchableWithoutFeedback,Text} from 'react-native';
import Card from '../components/Card';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import AppText from '../components/AppText';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
const PaymentDetail = () => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    const Cards = [
        {
          id: 1,
          username: 'dhanushya',
          date:"1/12/2020",
       amount:200
          
        },
        {
          id:2,
          username: 'dhanushya',
          date:"1/11/2020",
          amount:200
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
                    
                    // <Card
                    //     // image={item.image}
                    //     title={item.title}
                    //     subtitle={"$"+ item.price}
                    // />
                    <View style={styles.container1}>
                        <AppText title={item.username}></AppText>
                        <AppText title={item.date}></AppText>
                        <View>
                            {/* <View>
                            <AppText style={{marginRight:20}} title={"paid:"+item.amount}></AppText>
                       </View> */}
                        </View>
                    </View>
                    ) }
                    
            />
        </View>
       
        {/* <View  style={styles.button} >
  <Text style={{color:'white',fontSize:20}}> BACK</Text>
        </View> */}

  <AppButton  title='BACK' color='black'></AppButton>
        
        
     </View>

    );
}

export default PaymentDetail;

const styles = StyleSheet.create({
    background:{
        backgroundColor:'silver',
        // height: "100%",
        flex: 1,
        width:'100%',
        marginTop:20
        
    },
    cards:{
        marginHorizontal:10,
        marginVertical:30,
        // marginTop:'-10%',
        // flexDirection:'row'
       
    },
    button:{
         alignSelf:'center',
        justifyContent: "center",
        borderRadius: 90,
        width: "95%",
        height: "8%",
        alignItems: "center",
        backgroundColor:'black',
        // flexDirection:'row',
        marginTop:5
    },
    container1: {
        flex:1,
        backgroundColor:'#f8f4f4',
        width:'100%',
        height:'100%', 
        marginTop:'10%',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:10,
    marginRight:100
// flexDirection:'row'
    
        
    },
    
})
