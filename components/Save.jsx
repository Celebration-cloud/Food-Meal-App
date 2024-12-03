import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import CustomIcon from './CustomIcon';
import { Ionicons } from '@expo/vector-icons';
import { ColorTheme } from '../constants/ColorTheme';

const Save = (props) => {
  return (
    <Stack.Screen
      options={{
        headerRight: () => (
          <CustomIcon onPress={props.onPress}>
            <Ionicons
              name="save-sharp"
              size={25}
              color={ColorTheme.background}
            />
          </CustomIcon>
        ),
      }}
    />
  );
}

export default Save

const styles = StyleSheet.create({})