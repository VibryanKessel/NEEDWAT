import React from 'react'
import { View,TextInput } from 'react-native'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons'

export default function Search(){
   return (
    <View style={tw`flex flex-row flex-nowrap my-1 border border-2 border-gray-200 pb-1 w-full`}>
        <Feather name="search" size={25} color="gray" style={tw`py-5 px-10`} />
        <TextInput placeholder="Search" style={tw`w-full h-15`}/>
    </View>
   )
}