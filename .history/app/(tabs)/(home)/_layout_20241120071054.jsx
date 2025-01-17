import { Stack } from 'expo-router';
import { ColorTheme } from '../../../constants/ColorTheme';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorTheme.primary,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: ColorTheme.background,
        },
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="categoryMeal" options={{ title: "Category Meal" }} />
      <Stack.Screen name="index" options={{ title: "Cate" }} />
      <Stack.Screen name="mealDetail" options={{ title: "Meal Detail" }} />
    </Stack>
  );
}

export default HomeLayout