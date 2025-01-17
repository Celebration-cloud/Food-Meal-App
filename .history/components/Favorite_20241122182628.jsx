import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import CustomIcon from './CustomIcon';
import { Ionicons } from '@expo/vector-icons';

const Favorite = (props) => {
   const { title } = useLocalSearchParams();
  return (
    <Stack.Screen
      options={{
        title: title,
        headerRight: () => (
          <CustomIcon onPress={props.onPress}>
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

export default Favorite