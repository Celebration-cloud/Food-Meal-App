import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const foodCategories = (data) => {
  return (
    <View>
      <TouchableNativeFeedback onPress={() => {}}>
        <View>
          <Text>{data.item.foodCategory}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default foodCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.get("window").scale * 4,
        height: Dimensions.get("window").height /5
    },

})