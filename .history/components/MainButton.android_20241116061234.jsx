import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const MainButton = () => {
  return (
    <View>
      <TouchableNativeFeedback on>
        <Text>MainButton</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({})