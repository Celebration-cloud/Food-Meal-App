import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const Steps = ({ details }) => {
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientTitle}>Ingr</Text>
      <View style={styles.ingredientItem}>
        {details.ingredients.map((item, index) => (
          <View style={styles.ingredients} key={index}>
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  ingredientContainer: {
    gap: 20,
    margin: 20,
  },
  ingredientTitle: {
    fontWeight: "bolder",
    fontSize: Dimensions.get("window").fontScale * 28,
    textAlign: "center",
  },
  ingredientItem: {
    gap: Dimensions.get("window").height / 45,
  },
  ingredients: {
    borderWidth: 2,
    padding: Dimensions.get("window").scale * 5,
  },
  item: {
    fontSize: Dimensions.get("window").fontScale * 15,
  },
});
