import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CashierProfile from '../screens/CashierProfile';
import AmtUpdate from '../screens/AmtUpdate'


const Stack = createStackNavigator();
const CashierStack=()=>(
    <Stack.Navigator >
      <Stack.Screen name="CashierProfile" component={CashierProfile} options={{headerShown:false}} />
      <Stack.Screen name="AmtUpdate" component={AmtUpdate} />
      {/* <Stack.Screen options={({route})=>({title:route.params.id,  headerTintColor:'blue',headerStyle:{backgroundColor:'tomato'}})} name='ProductDetails' component={ProductDetails} /> */}
    </Stack.Navigator>
)

export default CashierStack;