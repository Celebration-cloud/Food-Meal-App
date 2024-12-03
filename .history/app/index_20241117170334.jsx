import { Button, Text, View } from "react-native";
import MainButton from "../components/MainButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <MainButton href="/about">
        Link to About
      </MainButton>
      <MainButton href="/categoryMeal">
        Link to Category Meal
      </MainButton>
      {/* <Button  title="Link to About"/> */}
    </View>
  );
}
