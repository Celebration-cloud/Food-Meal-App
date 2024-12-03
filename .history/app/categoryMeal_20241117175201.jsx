import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const categoryMeal = () => {
  return (
    <View style={styles.container}>
      <Text>categoryMeal</Text>
      <MainButton button={styles.btn} href="/categoryMeal">
        Link to Category Meal
      </MainButton>
    </View>
  );
}

export default categoryMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});