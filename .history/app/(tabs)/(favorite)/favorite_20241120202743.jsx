import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Favorite = () => {
  return (
    <View>
      <StatusBar style="light" backgroundColor={ColorTheme.text} />
      <Text>Favorite</Text>
    </View>
  );
}

export default Favorite

const styles = StyleSheet.create({})