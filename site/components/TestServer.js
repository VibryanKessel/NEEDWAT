import { View, Text, Button, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'twrnc';
import axios from 'axios'


const TestServer = () => {
    const [res, setRes] = useState('Etat initial')
    
  /*  const getRest = async () => {
      const responce = await axios.post("http://10.0.2.2:3000/addUsers/", 
          {name: "test", age: "12"},
          )
          alert(responce.data)
    }*/
  return (
    <View style={tw.style(`m-10 `)}>
      <TextInput style={tw.style(`m-10`)} placeholder="Entrez votre nom" onChangeText={(text) => setRes(text)}/>
      <Text>testServer {res }</Text>
      <Button title="Change" onPress={()=>{alert('ok')}} />
    </View>
  )
}

export default TestServer