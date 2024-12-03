import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favovrite = () => {
  return (
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
  );
}

export default Favovrite

const styles = StyleSheet.create({})