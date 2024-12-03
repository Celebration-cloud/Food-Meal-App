import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Favorite from "../../../components/Favorite";

const Ingredients = ({details}) => { 
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientTitle}>Ingredients</Text>
      <View style={styles.ingredientItem}>
        {details.ingredients.map((item, index) => (
          <View style={styles.ingredients} key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
 };

const MealDetailScreen = () => {
  const { data } = useLocalSearchParams();
  const details = JSON.parse(data)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Favorite onPress={() => console.log("selected")} />
      <Image style={styles.image} source={{ uri: details.imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.text}>{details.duration + "m"}</Text>
        <Text style={styles.text}>{details.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{details.affordability.toUpperCase()}</Text>
      </View>
      <Ingredients details={details}/>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 3.5,
  },
  details: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginHorizontal: Dimensions.get("window").width / 10,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 17,
    padding: Dimensions.get("window").scale * 5,
    fontWeight: "bolder"
  },
  ingredientContainer: {
    marginHorizontal: Dimensions.get("window").width *3 2,
  },
  ingredientTitle: {
    fontWeight: "bolder",
    fontSize: Dimensions.get("window").fontScale * 28,
    textAlign: "center",
  }
});
