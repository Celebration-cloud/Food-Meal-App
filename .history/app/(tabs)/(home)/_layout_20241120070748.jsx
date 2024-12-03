import { Stack } from 'expo-router';
import { ColorTheme } from '../../../constants/ColorTheme';

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="categoryMeal" options={{ title: "Category Meal" }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="mealDetail" options={{ title: "Meal Detail" }} />
    </Stack>
  );
}

export default HomeLayout