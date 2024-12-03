import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FavoriteIcon = (props) => {
  return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.3}>{props.children}</TouchableOpacity>
  
  );
}

export default FavoriteIcon

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  }
})