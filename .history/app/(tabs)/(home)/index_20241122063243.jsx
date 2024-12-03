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
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from "expo-router";
import CustomIcon from "../../../components/CustomIcon"
export default function HomeScreen() {
  const navigation = useNavigation()
  const handleMenu = () => { 
    navigation.openDrawer();
    
   };
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={ColorTheme.primary} />
      <MenuB

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