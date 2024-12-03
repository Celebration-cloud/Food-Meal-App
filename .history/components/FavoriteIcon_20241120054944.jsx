import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoriteIcon = (props) => {
  return (
    <View>
      <Touch
      {props.children}
    </View>
  )
}

export default FavoriteIcon

const styles = StyleSheet.create({})