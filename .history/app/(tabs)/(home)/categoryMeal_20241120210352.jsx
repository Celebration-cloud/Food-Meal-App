import { FlatList, StyleSheet, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { MEALS } from "../../../data/MealData";
import categoryMeals from "../../../components/CategoryMeals";
import { Fragment } from "react";

const CategoryMealScreen = () => {
  const { id, title } = useLocalSearchParams();
  const selectedMeal = MEALS.filter((meal) => meal.categoryIds.includes(id));
  return (
    <Fragment>
      <Stack.Screen options={{ title: title, animation: "fade" }} />
      <FlatList
        data={selectedMeal}
        renderItem={categoryMeals}
        style={styles.result}
      />
    </Fragment>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  result: {
    width: "100%",
  },
});
