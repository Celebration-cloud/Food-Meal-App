import { Button, Text, View } from "react-native";
import MainButton from "../components/MainButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <MainButton href="/about">
        Link to About
      </MainButton>
      <MainButton href="/categoryMeal">
        Link to Ca
      </MainButton>
      {/* <Button  title="Link to About"/> */}
    </View>
  );
}
