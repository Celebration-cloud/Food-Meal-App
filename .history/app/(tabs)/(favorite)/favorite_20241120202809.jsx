import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ColorTheme } from '../../../constants/ColorTheme';

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