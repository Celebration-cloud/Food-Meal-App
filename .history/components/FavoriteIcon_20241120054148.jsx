import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FavoriteIcon = (props) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default FavoriteIcon

const styles = StyleSheet.create({})