import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: ColorTheme.secondary }}>
      <Tabs.Screen
        name="(home)"
        options={{ headerShown: false, title: "Category", tabB }}
      />
      <Tabs.Screen
        name="(favorite)"
        options={{ headerShown: false, title: "Favorite" }}
      />
    </Tabs>
  );
}

export default TabLayout

const styles = StyleSheet.create({})