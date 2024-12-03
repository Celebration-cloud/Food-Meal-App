import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const FavoriteIcon = (props) => {
  return (
    <View>
      <TouchableNativeFeedback
      {props.children}
    </View>
  )
}

export default FavoriteIcon

const styles = StyleSheet.create({})