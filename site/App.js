import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login.js";
import HomeView from "./views/HomeView";
import Register from "./components/Register.js";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name = "Login" component = {Login} />
                <Stack.Screen name = "Register" component = {Register} />
                <Stack.Screen name = "HomeView" component = {HomeView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
