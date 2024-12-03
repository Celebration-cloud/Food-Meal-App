import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: ColorTheme.primary }}>
      <Tabs.Screen name="(home)" options={{ headerS }} />
      <Tabs.Screen name="(favorite)" options={{ title: "Favorite" }} />
    </Tabs>
  );
}

export default TabLayout

const styles = StyleSheet.create({})