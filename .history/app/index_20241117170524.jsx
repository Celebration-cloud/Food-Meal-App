import { Button, Text, View } from "react-native";
import MainButton from "../components/MainButton";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View>
        <MainButton href="/about">
        Link to About
      </MainButton>
      <MainButton href="/categoryMeal">
        Link to Category Meal
      </MainButton>
      </View>
      
      {/* <Button  title="Link to About"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
