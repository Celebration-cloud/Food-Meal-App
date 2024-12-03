import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton.android';

const CategoryMealS = () => {
  return (
    <View style={styles.container}>
      <Text>CategoryMealS</Text>
      <View>
        <MainButton button={styles.btn} href="/">
          Link to Meal Detail
        </MainButton>
      </View>
    </View>
  );
}

export default CategoryMealS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});