import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { ColorTheme } from '../constants/ColorTheme';

const MainButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{ ...styles.button }}>
          <Link style href={props.link}>
            <Text style={{ ...styles.text}}>
              {props.children}
            </Text>
          </Link>
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
        borderRadius: 20,
        backgroundColor: "#4c51bf",
        padding: 10,
        width: "30%",
    },
    text: {
        color: ColorTheme.,
        fontSize: 10,
        fontFamily: "fantasy"
    },
});