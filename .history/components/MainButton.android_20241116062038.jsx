import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import ColorTheme from "../constants/ColorTheme"

const MainButton = (props) => {
  return (
    <View style={sty}>
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
        padding: "0.4%",
        width: "30%",
    },
    text: {
        color: ColorTheme.text,
        fontSize: "0.9%",
        fontFamily: "fantasy"
    },
});