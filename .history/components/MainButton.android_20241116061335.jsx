import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const MainButton = (props) => {
  return (
    <View>
      <TouchableNativeFeedback onPress={}>
        <View style={styles.button}>
        <Text>MainButton</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({})