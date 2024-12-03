import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { foodData } from "../../../data/FoodCategory";
import FoodCategories from "../../../components/FoodCategories";
import { ColorTheme } from "@/constants/ColorTheme";
import Drawer from "expo-router/drawer";
import { Stack } from "expo-router";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={ColorTheme.primary} />
      <Stack.Screen options={{headerLeft: () => (<Ion)}}/>
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