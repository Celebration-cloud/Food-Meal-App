import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Favorite from "../../../components/Favorite";

const MealDetailScreen = () => {
  const { data } = useLocalSearchParams();
  console.log(data)
  return (
    <View style={styles.container}>
      <Favorite onPress={() => console.log("selected")}/>
        <Image source={{uri: data.imageUrl}}/>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 5
    justifyContent: "flex-end",
  },
});
