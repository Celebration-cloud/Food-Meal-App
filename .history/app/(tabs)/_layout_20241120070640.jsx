import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: ColorTheme.primary }}>
      <Tabs.Screen name="(home)" options={{ title: "Category" }} />
      <Tabs.Screen name="(favorite)"/>
    </Tabs>
  );
}

export default TabLayout

const styles = StyleSheet.create({})