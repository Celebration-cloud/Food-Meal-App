import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const MainButton = (props) => {
  return (
    <View >
      <TouchableNativeFeedback onPress={}>
        <Text>MainButton</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({})