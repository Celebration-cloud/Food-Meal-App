import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Favorite from "../../../components/Favorite";
import Ingredient from "../../../components/Ingredient";
import Steps from "../../../components/Steps";
import { useSelector } from "react-redux";

const MealDetailScreen = () => {
  const { data } = useLocalSearchParams();
  const details = JSON.parse(data)
  const { favorites } = useSelector((state) => state.meals);
  const handleFavorite = () => { 
    const starred = favorites.map(item => {
      return item.id === details.id
    })
    console.log(starred)
    if(starred})
    
   };
  return (
    <ScrollView style={styles.container}>
      <Favorite onPress={handleFavorite} />
      <Image style={styles.image} source={{ uri: details.imageUrl }} />
      <View style={styles.details}>
        <Text style={styles.text}>{details.duration + "m"}</Text>
        <Text style={styles.text}>{details.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{details.affordability.toUpperCase()}</Text>
      </View>
      <Ingredient details={details}/>
      <Steps details={details}/>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
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
    fontWeight: "bolder",
  },
});
