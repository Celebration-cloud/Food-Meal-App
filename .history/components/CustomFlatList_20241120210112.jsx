import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const CustomFlatList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.selectedMeal}
        renderItem={categoryMeals}
        style={styles.result}
      />
    </View>
  );
}

export default CustomFlatList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  result: {
    width: "100%",
  },
});