import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const FavoriteIcon = (props) => {
  return (
    <View style={styles.container}>
      <Touchable>{props.children}</Touchable>
      
    </View>
  );
}

export default FavoriteIcon

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  }
})