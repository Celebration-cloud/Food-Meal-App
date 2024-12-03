import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const foodCategories = (data) => {
  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={styles.container}>
        <Text>{data.item.foodCategory}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default foodCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.get("")
    },

})