import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from '../adminscreens/MainScreen';
import UserRegister from '../adminscreens/UserRegister'
import CashierRegister from '../adminscreens/CashierRegister'
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation=()=> {
  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 120,marginTop:40 },
        tabBarStyle: { backgroundColor: 'white' },
        
      }}>
      <Tab.Screen name="Add User" component={UserRegister}  />
      <Tab.Screen name="Main" component={MainScreen}  />
      <Tab.Screen name="Add Cashier" component={CashierRegister}  />
    </Tab.Navigator>
  );
}

export default TopTabNavigation ;