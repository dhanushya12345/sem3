
import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';
import Icons from './Icon';
import Icon from './Icon';

const Listingitems = ({title,subtitle,image, IconComponent,onPress,color,name,size}) => {
    const {landscape} = useDeviceOrientation()
   
    return (
        <View style={styles.container}>
            <View style={{marginLeft:'3%'}}>{IconComponent}</View>
            <View>
     <Image  style={styles.image} source={image}/></View>
      
     <View style={ styles.textcontainer}>
     <Text  onPress={onPress} style={[styles.text,{fontWeight:'bold',fontSize:19}]}>{title}</Text>  
     <Text style={[styles.text,{color:'grey'}]}>{subtitle}</Text>
<Icon  name={name} color={color} size={40}/>
     
     </View>
         </View>
        

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 0.155,
        backgroundColor:'white',
        width:'100%',
       // height:'40%', 
        flexDirection:'row',
        marginTop:'1%',
        //justifyContent:'center',
        //marginLeft:'5%',
        borderColor:'black',
        //marginLeft:'-30%'
        
               },

      image:{
        
          width:100,
          height:100,
          marginLeft:'5%',
          borderRadius:50
           },


           text:{
           // marginTop:25,
           // marginLeft:10
            
            },

            textcontainer:{
                marginTop:"10%",
                height:30,
            }

})

export default Listingitems;



