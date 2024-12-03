import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { foodData } from "../../../data/FoodCategory";
import FoodCategories from "../../../components/FoodCategories";
import { ColorTheme } from "@/constants/ColorTheme";
import { Stack } from "expo-router";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={ColorTheme.primary} />
      <D.Screen options={{}}/>
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