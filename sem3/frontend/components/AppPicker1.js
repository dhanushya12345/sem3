import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal, TouchableWithoutFeedback, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
const AppPicker1=({items,selectedItem,onSelectItem,placeholder})=>{
    const [modalVisible, setModalVisible] = useState(false);
    
    return(
        <>
 <TouchableWithoutFeedback onPress={()=>setModalVisible(true)} >    
<View style={styles.container1}>
<MaterialCommunityIcons  name='apps' color='purple' size={25} ></MaterialCommunityIcons>
<Text style={styles.text}> {selectedItem ? selectedItem.label:placeholder}</Text>
{/* <AppText  style={styles.text}>{selectedItem ? selectedItem.label:placeholder}</AppText> */}
<MaterialCommunityIcons  name='chevron-down' color='purple' size={25} ></MaterialCommunityIcons>
</View>
</TouchableWithoutFeedback>   

<Modal visible={modalVisible}>
    <Button title='close' onPress={()=>setModalVisible(false)}></Button>
<FlatList
 data={items}
 keyExtractor={(item)=>item.value.toString()}
renderItem={({item})=>(<AppText onPress={()=>{setModalVisible(false); onSelectItem(item);}}>{item.label}</AppText>)}
/>

</Modal>

</>

)
}

export default AppPicker1;

const styles = StyleSheet.create({

container1:{
width:'95%',
backgroundColor:'pink',
borderRadius:25,
marginVertical:10,
padding:13,
flexDirection:'row',
alignItems:'center'

},

text:{

marginLeft:20,
flex:1,
justifyContent:'center'
}


})