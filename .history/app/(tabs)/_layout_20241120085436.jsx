import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
      }}
    >
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
          },
          tabBarActiveTintColor: 
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
        }}
      />
    </Tabs>
  );
}

export default TabLayout

const styles = StyleSheet.create({})