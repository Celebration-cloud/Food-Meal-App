import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton.android';
import { Stack, useLocalSearchParams } from 'expo-router';

const CategoryMealScreen = () => {
  const {id} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: id, animation: "fade"}}/>
      <Text>CategoryMealScreen</Text>
      
    </View>
  );
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});