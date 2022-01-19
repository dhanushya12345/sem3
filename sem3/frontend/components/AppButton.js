import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from '../app/colors/Config';

// export default function AppButton(props) {
//   return (
//     <TouchableOpacity style={[styles.bgcolor, { backgroundColor: props.color }]} onPress= {props.myPress}>
//       <Text style={styles.text}>{props.title}</Text>
//     </TouchableOpacity>
//   );
// }

export default function AppButton({title,color,myPress,style}){
return(

  <TouchableOpacity style={[styles.bgcolor,{ backgroundColor:color},{style}]} onPress={myPress}>
        <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
);

}

const styles = StyleSheet.create({
    
    text: {
    fontSize: 15,
    color: "white",
    
  },

  bgcolor: {

    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 15,
    width: "95%",
    height: "9%",
    alignItems: "center",
   
  },
});