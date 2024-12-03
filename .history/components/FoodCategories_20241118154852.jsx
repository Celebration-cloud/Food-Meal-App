import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const foodCategories = (data) => {
  return (
    <TouchableNativeFeedback>
        
    </TouchableNativeFeedback>
    <View style={styles.container}>
      <Text>{data.item.foodCategory}</Text>
    </View>
  )
}

export default foodCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})