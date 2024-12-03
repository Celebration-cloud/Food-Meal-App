import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import MainButton from "../../../components/MainButton.android";
import { Ionicons } from "@expo/vector-icons";
import CustomIcon from "../../../components/CustomIcon";

const MealDetailScreen = () => {
  const { data, title } = useLocalSearchParams();
  const {d}
  const router = useRouter();
  console.log(data)
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: title,
          headerRight: () => (
            <CustomIcon onPress={() => console.log("Favorite")}>
              <Ionicons name="star-outline" size={30} />
            </CustomIcon>
          ),
          headerTitleStyle: {
            fontSize: Dimensions.get("window").fontScale * 23,
          },
          animation: "fade",
        }}
      />
      <Text>MealDetailScreen</Text>
      <MainButton button={styles.btn} onPress={() => router.dismissAll()}>
        Link to Meal Detail
      </MainButton>
      <Button title="Go back to Category" onPress={() => router.dismissAll()} />
    </View>
  );
};

export default MealDetailScreen;

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
