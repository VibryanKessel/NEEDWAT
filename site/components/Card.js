/* eslint-disable no-undef */
import { Image, View, Text } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View>
    <Image style={{width: 200, height: 200}} source={require('../assets/images/One-Piece.jpg')} />
      <Text>Card</Text>
    </View>
  )
}

export default Card