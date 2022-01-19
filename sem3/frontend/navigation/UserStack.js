import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen';
import PaymentScreen from '../screens/PaymentScreen'
import PaymentMonthWise from '../screens/PaymentMonthWise'

const Stack = createStackNavigator();
const UserStack=()=>(
    <Stack.Navigator >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="PaymentMonthWise" component={PaymentMonthWise} />
    
      {/* <Stack.Screen options={({route})=>({title:route.params.id,  headerTintColor:'blue',headerStyle:{backgroundColor:'tomato'}})} name='ProductDetails' component={ProductDetails} /> */}
    </Stack.Navigator>
)

export default UserStack;