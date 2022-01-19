import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import TopTabNavigation from './TopTabNavigation';
import CashierList from '../adminscreens/CashierList';
import CashierWise from '../adminscreens/CashierWiseCollection';
import MonthlyCollection from '../adminscreens/MonthlyCollection';
import PendingList from '../adminscreens/PendingList';
import TotalAmount from '../adminscreens/TotalAmount'
const Stack = createStackNavigator();
const StackNavigtion=()=>(
    <Stack.Navigator initialRouteName='TopTab'>
      <Stack.Screen name="TopTab" component={TopTabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name="CashierList" component={CashierList}  />
      <Stack.Screen name="CashierWise" component={CashierWise} />
      <Stack.Screen name="MonthlyCollection" component={MonthlyCollection} />
      <Stack.Screen name="PendingList" component={PendingList} />
      <Stack.Screen name="TotalAmount" component={TotalAmount} />
      {/* <Stack.Screen options={({route})=>({title:route.params.id,  headerTintColor:'blue',headerStyle:{backgroundColor:'tomato'}})} name='ProductDetails' component={ProductDetails} /> */}
    </Stack.Navigator>
)

export default StackNavigtion;