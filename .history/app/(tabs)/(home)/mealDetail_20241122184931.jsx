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
        <Image source={}/>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});
