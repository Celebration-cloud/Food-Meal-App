import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { ColorTheme } from '../constants/ColorTheme';

const MainButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.button }}>
          <Link href={{pathname: props.href, param: {mealDeta}}}>
            <Text style={{ ...styles.text, ...props.text}}>
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
        backgroundColor: ColorTheme.secondary,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: ColorTheme.text,
        fontSize: 15,
        fontFamily: "fantasy",
        fontWeight: "bold",
    },
});