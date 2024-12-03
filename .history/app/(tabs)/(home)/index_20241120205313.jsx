import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
// import MainButton from "../components/MainButton";
import { foodData } from "../../../data/FoodCategory";
import FoodCategories from "../../../components/FoodCategories";
import { ColorTheme } from "@/constants/ColorTheme";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={ColorTheme.primary} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={foodData}
        renderItem={FoodCategories}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: ColorTheme.background,
  },
});

{
  /* <MainButton button={styles.btn} text={styles.text} href="/categoryMeal">
  Link to Category Meal
</MainButton> */
}