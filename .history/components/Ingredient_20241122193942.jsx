import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ingredient = ({ details }) => {
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

export default Ingredient

const styles = StyleSheet.create({
    
})