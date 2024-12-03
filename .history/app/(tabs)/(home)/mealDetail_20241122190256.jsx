import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Favorite from "../../../components/Favorite";

const MealDetailScreen = () => {
  const { data } = useLocalSearchParams();
  const details = JSON.parse(data)
  console.log(details.title)
  return (
    <ScrollView style={styles.container}>
      <Favorite onPress={() => console.log("selected")} />
      <Image source={{ uri: data.imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.text}>{data.duration + "m"}</Text>
        <Text style={styles.text}>{data.complexity?.toUpperCase()}</Text>
        <Text style={styles.text}>{data.affordability?.toUpperCase()}</Text>
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
    height: Dimensions.get("window").height / 5,
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
