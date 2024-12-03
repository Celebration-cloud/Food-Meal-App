import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodCategories = (data) => {
  return (
    <View>
      <Text>{data.item.FoodCategory}</Text>
    </View>
  )
}

export default FoodCategories

const styles = StyleSheet.create({
    container: {
        
    }
})