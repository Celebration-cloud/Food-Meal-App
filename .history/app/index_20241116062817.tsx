import { Text, View } from "react-native";
import MainButton from "../components"
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
      <MainButton>

      </MainButton>
    </View>
  );
}
