// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Card from './Card';


// export default function Apptext(){
//     return(

// <Text style={styles.text}>{str} </Text>

//     );
// }

// const styles = StyleSheet.create({
//     text:{


        
//     }
// });


import React from 'react';
import { Text, StyleSheet, Platform, View, Image } from 'react-native';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';

function AppText({title,subTitle, children, onPress,icon}){
    return (
        // <Text style={styles.text}>{props.children}</Text>
        // <Text style={styles.text}>{props.str}</Text>
        <View style={styles.container}>
         
          <Text onPress={onPress} style={styles.title}>{title}{children}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
          
        </View>
      
    )
}


export default AppText;

const styles = StyleSheet.create({
    container:{
     
    },

title:{
  fontSize:15,
  marginLeft:10
}
})