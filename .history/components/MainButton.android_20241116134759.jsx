import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import ColorTheme from "../constants/ColorTheme"
import { Link } from 'expo-router';

const MainButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onPress}>
          <Link  href={props.link}>
        <View style={{ ...styles.button }}>
            <Text style={{ ...styles.text}}>
              {props.children}
            </Text>
        </View>
          </Link>
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
        borderRadius: 20,
        backgroundColor: "#4c51bf",
        padding: 10,
        width: "30%",
    },
    text: {
        color: "white",
        fontSize: 10,
        fontFamily: "fantasy"
    },
});