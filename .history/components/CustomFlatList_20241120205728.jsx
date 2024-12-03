import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomFlatList = (props) => {
    const { id, title } = useLocalSearchParams();
    const selectedMeal = MEAL.filter((meal) => meal.categoryIds.includes(id));
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title, animation: "fade" }} />
      <FlatList
        data={selectedMeal}
        renderItem={categoryMeals}
        style={styles.result}
      />
    </View>
  );
}

export default CustomFlatList

const styles = StyleSheet.create({})