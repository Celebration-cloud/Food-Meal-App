import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FavoriteIcon = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>{props.children}</TouchableOp>
      
    </View>
  );
}

export default FavoriteIcon

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  }
})