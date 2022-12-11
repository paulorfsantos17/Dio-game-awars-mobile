import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { VotesScreen } from '../screens/VotesScreen'
import WinnerScreen from '../screens/WinnerScreen'

import {MaterialCommunityIcons} from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator()

export default function stackRoutes() {
  return (
    <Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        headerTintColor : "#6DFF60",
        tabBarStyle: {
          height:70,
          paddingHorizontal:2,
          paddingTop:0,
          backgroundColor: 'rgba(34,36,40,1)',
          position: 'absolute',
          borderTopWidth:0
        },
        headerStyle: {
          backgroundColor: 'rgba(34,36,40,8)'

        }
      
      })}>
      <Screen
        name='Votes'
        component={VotesScreen} 
        options={{
          tabBarLabel: 'Votar',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons 
              name='home'
              color="#6DFF60"
              size={size}
              />
          )
        }}
        />
      <Screen
        name='Winner'
        component={WinnerScreen}
        options={{
          tabBarLabel: 'Result',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons 
              name='target'
              color="#6DFF60"
              size={size}
              />
          )
        }}/>
    </Navigator>
  )
}