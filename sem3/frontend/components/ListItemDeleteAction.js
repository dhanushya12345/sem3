import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ListItemDeleteAction = ({onPress}) => {
    return (
        
        <View style={{backgroundColor:'grey',width:100,height:100, marginTop:'20%',justifyContent:'center',alignItems:'center'}}>
        <MaterialCommunityIcons name='trash-can' size={30} color='black'  onPress={onPress}/> 
       </View>
    );
}

export default ListItemDeleteAction;