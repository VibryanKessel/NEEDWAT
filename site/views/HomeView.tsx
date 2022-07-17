import { StatusBar } from 'expo-status-bar';
//import {Text, View } from 'react-native';
import tw from 'twrnc';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../components/Register';
import Login from '../components/Login';
import TestServer from '../components/TestServer';
import Annonces from '../components/Annonces';
import { AntDesign,Feather,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { Annonce } from '../components/Annonce';
import Search from '../components/Search';

const Tab = createBottomTabNavigator();
// const navigation = useNavigation();

export default function HomeView() {
  return (
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false,headerShown: false}}>
        <Tab.Screen 
          name="Home" 
          component={Annonces}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} style={tw`text-blue-600`}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={24} style={tw`text-blue-600`}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Poster" 
          component={TestServer} 
          options={{
            tabBarLabel: 'Poster',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircleo" size={24} style={tw`text-blue-600`}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Notifications" 
          component={Annonces} 
          options={{
            tabBarLabel: 'Annonces',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notifications" size={24} style={tw`text-blue-600`}/>            
              ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Annonces} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={24} style={tw`text-blue-600`}/>
              ),
          }}
        />
      </Tab.Navigator>
  );
}