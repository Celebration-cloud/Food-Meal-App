import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const categoryMeals = (itemData) => {
  return (
    <View>
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <Text style={styles.text}>{itemData.item.name}</Text>
                <View>
                    <Te
                </View>
            </View>
        </TouchableNativeFeedback>
      <Text>categoryMeals</Text>
    </View>
  )
}

export default categoryMeals

const styles = StyleSheet.create({
    container: {},
    imageContainer: {},
    image: {},
    title: {},
    details: {},

})