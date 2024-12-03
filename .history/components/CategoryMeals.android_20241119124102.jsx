import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.image} source={{ url: data.imageUrl }}>
            <Text style={styles.title}>{data.title}</Text>
          </ImageBackground>
          <Image 
        </View>

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
  },
  card: {
    width: "100%",
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 6,
    justifyContent: "flex-end",
  },
  title: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: Dimensions.get("window").scale * 1.5,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
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