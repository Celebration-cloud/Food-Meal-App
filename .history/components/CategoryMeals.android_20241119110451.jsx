import { ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const categoryMeals = (itemData) => {
  return (
    <View>
      <TouchableNativeFeedback>
        <View style={styles.container}>
          <ImageBackground source={{url: ""}}>
            <Text style={styles.text}>{itemData.item.name}</Text>
          </ImageBackground>
          <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default categoryMeals

const styles = StyleSheet.create({
    container: {},
    card: []
    imageContainer: {},
    image: {},
    title: {},
    details: {},
})