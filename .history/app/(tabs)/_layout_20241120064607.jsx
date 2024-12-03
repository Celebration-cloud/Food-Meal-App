import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs screenOpt>
        <Tabs.Screen name='(home)' options={{title: "Home"}}/>
        <Tabs.Screen name='(home)' options={{title: "Home"}}/>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})