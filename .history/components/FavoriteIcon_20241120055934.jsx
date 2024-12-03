import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const FavoriteIcon = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>{props.children}</TouchableNativeFeedback>
      <Head
    </View>
  );
}

export default FavoriteIcon

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  }
})