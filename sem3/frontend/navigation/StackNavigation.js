import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import AdminLogin from '../adminscreens/AdminLogin'
import FundDetailsScreen from '../screens/FundDetailsScreen'
import TopTabNavigation from './TopTabNavigation';
import ListNavigation from './ListNavigation';
import UserStack from './UserStack';
import CashierStack from './CashierStack';
const Stack = createStackNavigator();
const StackNavigtion=()=>(
    <Stack.Navigator >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CashierStack" component={CashierStack} />
      <Stack.Screen name="UserStack" component={UserStack} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="List" component={ListNavigation} options={{headerShown:false}}/>
      <Stack.Screen name="FundDetails" component={FundDetailsScreen} />
      {/* <Stack.Screen options={({route})=>({title:route.params.id,  headerTintColor:'blue',headerStyle:{backgroundColor:'tomato'}})} name='ProductDetails' component={ProductDetails} /> */}
    </Stack.Navigator>
)

export default StackNavigtion;