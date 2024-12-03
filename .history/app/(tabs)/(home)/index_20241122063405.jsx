import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { foodData } from "../../../data/FoodCategory";
import FoodCategories from "../../../components/FoodCategories";
import { ColorTheme } from "@/constants/ColorTheme";
import Men
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={ColorTheme.primary} />
      <MenuBar/>

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
  },
});