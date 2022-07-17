/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Image, TextInput, View, Text } from 'react-native'
import {Foundation, Feather } from '@expo/vector-icons';
import {useState} from 'react'
import GoogleIcon from '../Icons/GoogleIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import AppleIcon from '../Icons/AppleIcon';
import tw from 'twrnc';
import axios from 'axios'
import TestServer from './TestServer';
import HomeView from '../views/HomeView';
import {  useNavigation } from '@react-navigation/native'

const Register = () => {
    const [prenom, onChangePrenom] = useState("");
    const [nom, onChangeNom] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePass] = useState("");
    const [pass_confirm, onChangeConfirm] = useState("");

    let navigation = useNavigation();

    const getRest = async () => {
      const responce = await axios.post("http://10.0.2.2:3000/addUsers/", 
      {nom: nom,
      prenom: prenom,
      email: email,
      password: password, 
    },
      )

      navigation.navigate('HomeView')
    /*  if(responcee.data == "user added" ){
        alert(responce.data)
        navigation.navigate('HomeView')
      }else{
        alert(responce.data)
      }*/
      
    }

  return (
    <View style={tw`bg-white h-full flex items-center justify-between`}>
      
    <View>
        <Image style={tw`h-30 w-30 mx-auto rounded-full border-black  mt-15 mb-2`}  source={require("../assets/profil.jpg")}/>
        <Text style={tw`text-left text-3xl font-bold `}>Register</Text>
    </View>

    <View style={tw`flex flex-col justify-between items-center `}>
      
      <View style={tw`flex flex-row flex-nowrap border-b-2 my-1 border-gray-200 pb-1 w-80`}>
          <Feather name="user" size={20} color="gray" style={tw`px-3`} />
          <TextInput  onChangeText={onChangePrenom} value={prenom} placeholder="Prenom"/>
      </View>
      <View style={tw`flex flex-row flex-nowrap border-b-2 my-1 border-gray-200 pb-1 w-80`}>
          <Feather name="user" size={20} color="gray" style={tw`px-3`} />
          <TextInput  onChangeText={onChangeNom} value={nom} placeholder="Nom"/>
      </View>
      <View style={tw`flex flex-row flex-nowrap border-b-2 my-1 border-gray-200 pb-1 w-80`}>
          <Foundation name="at-sign" size={28} color="gray" style={tw`px-3`} />
          <TextInput  onChangeText={onChangeEmail} value={email} placeholder="Email"/>
      </View>
      <View style={tw`flex flex-row flex-nowrap border-b-2 my-1 border-gray-200 pb-1 w-80`}>
          <Feather name="key" size={20} color="gray" style={tw`px-3`} />
          <TextInput  onChangeText={onChangePass} value={password} placeholder="Password"/>
      </View>
      <View style={tw`flex flex-row flex-nowrap border-b-2 my-1 border-gray-200 pb-1 w-80`}>
          <Feather name="key" size={20} color="gray" style={tw`px-3`} />
          <TextInput  onChangeText={onChangeConfirm} value={pass_confirm} placeholder="Confirme Password"/>
      </View>

      <Pressable style={tw`mx-auto bg-blue-600 rounded-3 w-80 py-3  mt-7`} onPress={getRest}>
          <Text style={tw`text-center text-white`}>Register</Text>
      </Pressable>

    </View>
    <View style={tw`pb-8`}>
          <Text style={tw`text-center text-gray-400 text-xs pb-3`}>Or register with..</Text>
          <View style={tw`flex flex-row flew-nowrap justify-between items-center w-50`}>
            <GoogleIcon height='25' width='25'/>
            <FacebookIcon height='25' width='25'/>
            <AppleIcon height='25' width='25'/>
          </View>
    </View>
  </View>
  )
}

export default Register