import { Button, Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
// import MainButton from "../components/MainButton";
import {foodData} from "../data/FoodCategory"
import FoodCategories from "../components/FoodCategories"
import { enableScreens } from "react-native-screens";
import { ColorTheme } from "@/constants/ColorTheme";

enableScreens()
export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList keyExtractor={(item, index) => item.id} data={foodData} renderItem={FoodCategories} numColumns={2}/>
    </View>
  );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: ColorTheme.
    },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4,
  },
  text: {
    fontSize: Dimensions.get("window").scale * 4.7
  },
});


{/* <MainButton button={styles.btn} text={styles.text} href="/categoryMeal">
  Link to Category Meal
</MainButton> */}

