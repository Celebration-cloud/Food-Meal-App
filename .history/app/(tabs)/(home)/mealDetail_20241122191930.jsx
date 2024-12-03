import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Favorite from "../../../components/Favorite";

const Ingredients = ({details}) => { 
  return (
    <View>
      <Text>Ingredients</Text>
      <View>
        {details.map((item, index) => (
          <View style={} key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
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
    gap: 10
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 3.5,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Dimensions.get("window").width / 10,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 17,
    padding: Dimensions.get("window").scale * 5,
    fontWeight: "bolder"
  },
});
