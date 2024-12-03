import { Dimensions, ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={styles.card}>
          <ImageBackground style={styles.image} source={{ url: data.imageUrl }} >
            <Text style={styles.title}>{data.title}</Text>
          </ImageBackground>
        <View style={styles.details}>
          <Text>{data.duration}</Text>
          <Text>{data.complexity}</Text>
          <Text>{data.affordability}</Text>
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
  container: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },
  card: {
    padding: 5,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 10
  },
  title: {},
  details: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
});