import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={styles.btnGroup}>
        <MainButton button={styles.btn} href="/about">
          Link to About
        </MainButton>
        <MainButton button={styles.btn} href="/categoryMeal">
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
    width: Dimensions.get("window").width ,
  },
  btnGroup: {
    flexDirection: "row",
    width: "80%",

    gap: Dimensions.get("window").width / Dimensions.get("window").width + 5,
  },
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});

