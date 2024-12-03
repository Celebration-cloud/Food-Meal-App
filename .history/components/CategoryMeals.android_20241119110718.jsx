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
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => {}}>
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image} source={{url: ""}}>
            <Text style={styles.text}>{itemData.item.name}</Text>
          </ImageBackground>
            </View>
          
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
    card: [],
    imageContainer: {},
    image: {},
    title: {},
    details: {},
})