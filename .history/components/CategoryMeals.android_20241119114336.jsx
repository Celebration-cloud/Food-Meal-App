import { ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.image} source={{ url: data.imageU }}>
            <Text style={styles.title}>{data.title}</Text>
          </ImageBackground>
        </View>
        <View style={styles.details}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const categoryMeals = (itemData) => {
  return (
    <View style={styles.container}>
      <List data={itemData.item}/>
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