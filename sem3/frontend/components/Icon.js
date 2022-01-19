import React from 'react';
import {View,StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({name,size,backgroundColor,color='white'}) => {
    
    return (
 <View  style={{ width:75,height:75,borderRadius:50,backgroundColor,justifyContent:'center', alignItems:'center',marginTop:'5%' }}>
<MaterialCommunityIcons  name={name}  backgroundColor={backgroundColor} color={color} size={size}></MaterialCommunityIcons>
  </View>

    );
}

export default Icon;