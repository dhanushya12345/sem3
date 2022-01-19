import React,{useContext} from 'react';
import { View, StyleSheet,Text ,FlatList,ScrollView} from 'react-native';
import AppButton from '../components/AppButton';
import ListingItems from '../components/ListingItems'
import AuthContext from '../auth/context';
function MainScreen({navigation}) {
  const {user,setUser}=useContext(AuthContext)
  const menus =[
    {
       title:'CashierList',
        targetScreen:'CashierList'
    },
    {
        title:'CashierWiseCollection',
          targetScreen:'CashierWise'
     },
     {
      title:'MonthlyCollection',
        targetScreen:'MonthlyCollection'
   },
   {
    title:'PendingList',
      targetScreen:'PendingList'
 },
 {
  title:'TotalAmount',
    targetScreen:'TotalAmount'
},
    
]
  return (
    <ScrollView  contentContainerStyle={styles.contentContainer}>
    <View style={styles.container}>
      <View  style={styles.container2}>
        <Text style={{fontSize:30,alignContent:'center'}}>Village Funding </Text>
        <Text style={{fontSize:30,alignContent:'center'}}>welcome</Text>
        </View>

        <View style={styles.container3}>
        <FlatList data={menus} keyExtractor={(menu)=>menu.title}
    
    renderItem={({item})=>(<ListingItems title={item.title}  
       //  myPress={()=>navigation.navigate('messageScreen',item)}
        onPress={()=>navigation.navigate(item.targetScreen)}
      //  IconComponent={<Icon name={item.icon.name}   size={30} backgroundColor={item.icon.backgroundColor} color={item.icon.iconcolor} />}
   
   />)}>
</FlatList>
        </View>
       
        <AppButton  title="LOGOUT" color="black" myPress={()=>setUser(null)}  ></AppButton>
        
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
       width:"100%",
       height:"100%",
      backgroundColor:'silver',
  },
  container1:{
    width:"100%",
    height:"40%",
    backgroundColor:'white',
borderRadius:10,
alignItems:'center',
justifyContent:'center',

  },
  container2:{
     alignItems:'center',
 justifyContent:'center',
 fontSize:20,
  },
  container3:{
    width:'100%',
   // height:'44%',
    marginTop:'5%'  
  },
  contentContainer: {
    backgroundColor:'silver',
    paddingVertical: 50
  }
});

export default MainScreen;