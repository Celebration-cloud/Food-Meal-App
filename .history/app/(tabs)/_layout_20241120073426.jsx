import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: ColorTheme.secondary }}>
      <Tabs.Screen
        name="(home)"
        options={{ headerShown: false, title: "Category", tabBarAllowFontScaling: true, tabBarIcon: ({tab}) => (<Ionicons name='cate' size={10}/>) }}
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