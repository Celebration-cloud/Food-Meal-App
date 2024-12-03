import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import FoodCategories from "../../../components/FoodCategories";
import { ColorTheme } from "@/constants/ColorTheme";
import MenuBar from "../../../components/MenuBar";
import { useSelector } from "react-redux";
export default function HomeScreen() {
  const { category, filtration } = useSelector((state) => state.meals);
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={ColorTheme.primary} />
      <MenuBar/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={category}
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