import { Dimensions, ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={styles.card}>
        <ImageBackground style={styles.image} source={{ url: data.imageUrl }}>
          <Text style={styles.title}>{data.title}</Text>
        </ImageBackground>
        <View style={styles.details}>
          <Text style={styles.text}>{data.duration + "m"}</Text>
          <Text style={styles.text}>{data.complexity.toUpperCase()}</Text>
          <Text style={styles.text}>{data.affordability.toUpperCase()}</Text>
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
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "gray",
    marginBottom: 15,
    paddingVertical: Dimensions.get("window").scale * 2,
    paddingHorizontal: Dimensions.get("window").scale * 2,
  },
  card: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 6,
  },
  title: {},
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 17,
    color: "white",
    padding: Dimensions.get("window").scale * 5,
  },
});