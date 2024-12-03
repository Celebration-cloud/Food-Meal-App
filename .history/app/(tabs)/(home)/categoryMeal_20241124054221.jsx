import { StyleSheet, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Fragment } from "react";
import CustomFlatList from "../../../components/CustomFlatList";
import { useSelector } from "react-redux";

const CategoryMealScreen = () => {
  const { id, title } = useLocalSearchParams();
  const { filtration } = useSelector((state) => state.meals);
  const selectedMeal = filtration.filter((meal) =>
    meal.categoryIds.includes(id)
  );
  let selectedScreen;
  if (selectedMeal.length < 1){
    selectedScreen = (
      <View style={styles.c}>
        <Text>No Meals Available</Text>
      </View>
    )
  }
  return (
    <Fragment>
      <Stack.Screen options={{ title: title, animation: "fade" }} />
      <CustomFlatList selectedMeal={selectedMeal}/>
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
