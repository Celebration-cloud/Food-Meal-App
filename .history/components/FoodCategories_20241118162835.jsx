import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { ColorTheme } from '@/constants/ColorTheme';
import { useRouter } from 'expo-router';

const List = ({data}) => {
     const router = useRouter();
     const handleNavigation = () => {
       router.navigate({pathname: "/categoryMeal", params: {data.item.foodCategory}});
     };

    return (
      <TouchableNativeFeedback onPress={handleNavigation}>
        <View style={styles.container}>
          <Text>{data.item.foodCategory}</Text>
        </View>
      </TouchableNativeFeedback>
    );
}

const foodCategories = (data) => {
   
  return (
    <View style={styles.content}>
      <List data={data}/>
    </View>
  );
}

export default foodCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.get("window").scale * 4,
        height: Dimensions.get("window").height /5,
    },
    content: {
        flex: 1,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: ColorTheme.primary,
        margin: 10,
        elevation: 10
    }
})