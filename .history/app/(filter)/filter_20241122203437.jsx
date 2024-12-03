import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import MenuBar from '../../components/MenuBar'
import { ColorTheme } from '../../constants/ColorTheme';

const Filter = () => {
  const [Filter, setFilter] = useState({
    GlutenFree: false,
    lactoseFree: false,
    vegan: false,
    vegetarian: false,
  })
  return (
    <View style={styles.container}>
      <MenuBar />
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <View style={styles.filterContainer}>
        <View style={styles.filter}>
          <Text style={styles.text}>Gluten-free</Text>
          <Switch thumbColor={ColorTheme.primary} trackColor={ColorTheme.secondary} onValueChange={(curr) => setFilter(())}/>
        </View>
      </View>
    </View>
  );
}

export default Filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },
  title: {
    fontFamily: "monospace",
    fontSize: Dimensions.get("window").fontScale * 20,
    fontWeight: "heavy",
  },
  filterContainer: {
    width: "70%",
    gap: 20
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    fontWeight: "medium",
  },
});