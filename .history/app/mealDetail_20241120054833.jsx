import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router'
import MainButton from '../components/MainButton.android'
import FavoriteIcon from '../components/FavoriteIcon'
import { Ionicons } from '@expo/vector-icons'

const MealDetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: title,
          headerRight: () =>
            <FavoriteIcon>
              <Ionicons name="star-sharp" />
            </FavoriteIcon>
            
          ,
        }}
      />
      <Text>MealDetailScreen</Text>
      <MainButton button={styles.btn} onPress={() => router.dismissAll()}>
        Link to Meal Detail
      </MainButton>
      <Button title="Go back to Category" onPress={() => router.dismissAll()} />
    </View>
  );
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});