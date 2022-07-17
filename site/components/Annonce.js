/* eslint-disable react/prop-types */
import React from 'react';
import {View,Text,Image,Pressable} from 'react-native'
import tw from 'twrnc';

// eslint-disable-next-line react/prop-types
export const AnnonceGroup = ({children}) => {
    const annonces = React.Children.toArray(children)
    return <View style = {tw`p-12 flex flex-col border-solid border-1 border-red-600`}>
        {annonces.map( annonce => annonce)}
    </View>
}

// eslint-disable-next-line react/prop-types
export const Annonce = ({info}) => {
    return (
        <Pressable style = {tw`p-2 pb-18 h-80 flex flex-col ml-1 mr-1 mt-2 mb-2 rounded border-solid border-2 border-indigo-600`}>
            <View style = {tw`h-1/5`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{info.name}</Text>
                </View>
            </View>
            <View style = {tw`h-5/6 w-full`}>
                <Image style = {{height : '100%',width : '100%'}} source = { info.imgSrc }></Image>
            </View>
            <View style = {tw`h-1/5 w-full`}>
                <Text style ={tw`text-base font-bold`}>{info.userPseudo}</Text>
                <Text  style ={tw`font-bold text-red-400 text-sm`}>{info.credits} credit(s)</Text>
                <Text  style ={tw`italic text-sm`}>{info.date}</Text>
            </View>
        </Pressable>
    );
}

