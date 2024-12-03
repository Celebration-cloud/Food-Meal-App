import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Category",
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant-sharp" size={20} color={color} />
          ),
          tabBarStyle: {
            backgroundColor: ColorTheme.primary,
            animation: "both",
            height: Dimensions.get("window").height / 10,
            paddingTop: Dimensions.get("window").scale * 2
          },
          tabBarActiveTintColor: ColorTheme.secondary,
          tabBarInactiveTintColor: ColorTheme.background,
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
      <Tabs.Screen
        name="(favorite)"
        options={{
          headerShown: false,
          title: "Favorite",
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={20} color={color} />
          ),
          animation: "shift",
          tabBarStyle: {
            backgroundColor: ColorTheme.text,
            animation: "both",
            height: Dimensions.get("window").height / 10,
            
          },
          tabBarActiveTintColor: ColorTheme.secondary,
          tabBarInactiveTintColor: ColorTheme.background,
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
    </Tabs>
  );
}

export default TabLayout

const styles = StyleSheet.create({})