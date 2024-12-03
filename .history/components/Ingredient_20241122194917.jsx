import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ingredient = ({ details }) => {
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientTitle}>Ingredients</Text>
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

export default Ingredient

const styles = StyleSheet.create({
  ingredientContainer: {
    gap: 20,
    marginHorizontal: 20,
  },
  ingredientTitle: {
    fontWeight: "bolder",
    fontSize: Dimensions.get("window").fontScale * 28,
    textAlign: "center",
  },
  ingredients: {
    borderWidth: 2,
    padding: Dimensions.get("window").scale * 5
  },
});