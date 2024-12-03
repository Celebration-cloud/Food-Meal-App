import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import MenuBar from '../../components/MenuBar'
import { ColorTheme } from '../../constants/ColorTheme';

const Filter = () => {
  return (
    <View style={styles.container}>
      <MenuBar />
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <View style={styles.filterContainer}>
        <View style={styles.filter}>
          <Text>Gluten-free</Text>
          <Switch thumbColor={ColorTheme.}/>
        </View>
        <View style={styles.filter}>
          <Text>Gluten-free</Text>
          <Switch />
        </View>
        <View style={styles.filter}>
          <Text>Gluten-free</Text>
          <Switch />
        </View>
        <View style={styles.filter}>
          <Text>Gluten-free</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
}

export default Filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
  title: {
    fontFamily: "monospace",
    fontSize: Dimensions.get("window").fontScale * 20,
    fontWeight: "heavy",
  }
})