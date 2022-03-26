import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BlogStack from '../components/BlogStack';
import AccountStack from '../components/AccountStack';
import CalendarStack from '../components/CalendarStack';
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDark ? "#181818" : "white",
        },        
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'To Do List') {
            iconName = "pencil"
          } else if (route.name === 'Profile') {
            iconName = "user"
          } else if (route.name === 'Meetings') {
            iconName = "calendar"
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      // screenOptions={ {headerShown: false}}

      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: "white",
        }
      }}>
        <Tab.Screen name="To Do List" component={BlogStack} />
        <Tab.Screen name="Meetings" component={CalendarStack} />
        <Tab.Screen name="Profile" component={AccountStack} />
      </Tab.Navigator>
  )
} 