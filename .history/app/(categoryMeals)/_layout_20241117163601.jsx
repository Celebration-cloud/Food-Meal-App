import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack s>
        <Stack.Screen name="categoryMeals" options={{title: "Category Meals"}} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})