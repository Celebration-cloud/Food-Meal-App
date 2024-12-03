import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const foodCategories = (data) => {
  return (
    <View style={styles.container}>
      <Text>{data.item.foodCategory}</Text>
    </View>
  )
}

export default FoodCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})