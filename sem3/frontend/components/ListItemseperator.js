import React  from "react";
import { TouchableHighlight, View } from "react-native";

const Listitemseperator = ()=>{
    return(
        <TouchableHighlight  activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert('Pressed!')}>
<View style={{height:5,width:'90%',backgroundColor:'black',marginTop:60,marginLeft:10}}></View></TouchableHighlight>
    );
}

export default Listitemseperator;