import { View, Text, Image, TextInput,Pressable, Alert } from 'react-native'
import { useNavigation }  from '@react-navigation/native';
import React from 'react';
import GoogleIcon from '../Icons/GoogleIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import AppleIcon from '../Icons/AppleIcon';
import { Foundation, Feather } from '@expo/vector-icons';
import axios from 'axios'
import tw from 'twrnc';
import  HomeView  from '../views/HomeView';
import Register from './Register';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const logUser = async () => {
      const response = await axios.post("http://10.0.2.2:3000/api/users/login", 
          {email: email, password: password})
          if(response.status === 200){
            navigation.navigate('HomeView')
          }else{
            Alert.alert('email ou mot de passe incorrect')
          }
    }
  
    return (
      <View style={tw`bg-white h-full flex items-center justify-between`}>
        
        <View>
            <Image style={tw`h-100 w-100 mx-auto `}  source={require("../assets/login.jpg")}/>
            <Text style={tw`text-left text-3xl font-bold ml-12`}>Login</Text>
        </View>
        
        <View style={tw`flex flex-col justify-between items-center h-42`}>
          
          <View style={tw`flex flex-row flex-nowrap border-b-2 border-gray-200 pb-1 w-80`}>
              <Foundation name="at-sign" size={28} color="gray" style={tw`px-3`} />
              <TextInput  onChangeText={setEmail} value={email} placeholder="Email ID"/>
          </View>
          <View style={tw`flex flex-row flex-nowrap border-b-2 border-gray-200 pb-1 w-80`}>
              <Feather name="key" size={20} color="gray" style={tw`px-3`} />
              <TextInput  onChangeText={setPassword} value={password} placeholder="Password"/>
          </View>
          <Pressable style={tw`mx-auto bg-blue-600 rounded-3 w-80 py-3 `}
                      onPress={logUser}>
              <Text style={tw`text-center text-white`}>Login</Text>
          </Pressable>
          <Pressable 
            onPress={()=>navigation.navigate("Register")}
            style={tw`bg-transparent underline text-center text-blue-400`}
          >
            Je n'ai pas encore de compte
          </Pressable>
        </View>
        <View style={tw`pb-5`}>
              <Text style={tw`text-center text-gray-400 text-xs pb-3`}>Or, login with..</Text>
              <View style={tw`flex flex-row flew-nowrap justify-between items-center w-50`}>
                <GoogleIcon height='25' width='25'/>
                <FacebookIcon height='25' width='25'/>
                <AppleIcon height='25' width='25'/>
              </View>
        </View>
      </View>
  )
}



export default Login