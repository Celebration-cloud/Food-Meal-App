import { Dimensions, StyleSheet, View } from "react-native";
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
      <View style={styles.container}>
        <Text sty>No Meals Available</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 12
  },
});
