import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';

const TextInputs=({title,icon, ...otherProps})=> {
  const [text, setText] = useState('');
  return(

<View style={styles.container}>
{icon ? <MaterialCommunityIcons name={icon} color='grey' size={20} style={styles.icon} ></MaterialCommunityIcons> : <View style={{height:20,width:30}}></View> }

<TextInput onChangeText={t=>setText(t)} {...otherProps} style={styles.textInput}></TextInput>

</View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    width:'95%',
    marginTop:"3%", 
    height:44, 
    backgroundColor:'#f8f4f4',
     flexDirection:'row',
     borderWidth:2,
     borderColor:'grey',
     borderRadius:10
 
  },
  icon: {
    marginTop:10,
    marginLeft:10,
    marginRight:20
   
  },
  textInput: {
    color: 'black',
    width:'90%',
    alignSelf:'center'
   },
});
export default TextInputs;