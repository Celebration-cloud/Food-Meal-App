import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const MainButton = (props) => {
  return (
    <View>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.button}>
        <Text>MainButton</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: "hidden",
    },
    button: {
        backgroundColor: "#4c51bf",
        padding: "0.2rem",
        width: "30%",
    },
});