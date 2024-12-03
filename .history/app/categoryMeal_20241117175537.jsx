import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton.android';

const categoryMeal = () => {
  return (
    <View style={styles.container}>
      <Text>categoryMeal</Text>
      <View>

      <MainButton button={styles.btn} href="/categoryMeal">
        Link to  Meal Detail
      </MainButton>
      </View>
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
  btnGroup: {
    flexDirection: "row",
    marginVertical: Dimensions.get("window").width / 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: Dimensions.get("window").width / Dimensions.get("window").width + 20,
  },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});