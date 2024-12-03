import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Favorite from "../../../components/Favorite";

const MealDetailScreen = () => {
  const { data } = useLocalSearchParams();
  const details = JSON.parse(data)
  return (
    <ScrollView style={styles.container}>
      <Favorite onPress={() => console.log("selected")} />
      <Image style={styles.image} source={{ uri: details.imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.text}>{details.duration + "m"}</Text>
        <Text style={styles.text}>{details.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{details.affordability.toUpperCase()}</Text>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 3.5,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 17,
    padding: Dimensions.get("window").scale * 5,
  },
});
