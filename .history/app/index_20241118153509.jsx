import { Button, Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import {foodData} from "../Category/FoodCategories"
export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <FlatList data={foodData} renderItem={()} numColumns={2}/>
    </View>
  );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
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
