import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import MenuBar from '../../components/MenuBar'
import { ColorTheme } from '../../constants/ColorTheme';
import { filtration } from '../../data/Filtration';

const Filter = () => {
  const [filter, setFilter] = useState({
    glutenFree: false,
    lactoseFree: ,
    vegan: false,
    vegetarian: false,
  });
  const toggleSwitch = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };
  console.log(Object.values(filter)[1], filter.lactoseFree)
  return (
    <View style={styles.container}>
      <MenuBar />
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <View style={styles.filterContainer}>
        {filtration.map((item, index) => (
          <View key={index} style={styles.filter}>
          <Text style={styles.text}>{item}</Text>
          <Switch
            thumbColor={ColorTheme.primary}
            trackColor={{ false: "#767577", true: ColorTheme.secondary }}
            onValueChange={(value) => toggleSwitch(item, value)}
            value={filter[index]}
          />
        </View>
        ))}
{/*         
        <View style={styles.filter}>
          <Text style={styles.text}>Lactose-free</Text>
          <Switch
            thumbColor={ColorTheme.primary}
            trackColor={{ false: "#767577", true: ColorTheme.secondary }}
            onValueChange={(value) => toggleSwitch("lactoseFree", value)}
            value={filter.lactoseFree}
          />
        </View>
        <View style={styles.filter}>
          <Text style={styles.text}>Vegan</Text>
          <Switch
            thumbColor={ColorTheme.primary}
            trackColor={{ false: "#767577", true: ColorTheme.secondary }}
            onValueChange={(value) => toggleSwitch("vegan", value)}
            value={filter.vegan}
          />
        </View>
        <View style={styles.filter}>
          <Text style={styles.text}>Vegetarian</Text>{" "}
          <Switch
            thumbColor={ColorTheme.primary}
            trackColor={{ false: "#767577", true: ColorTheme.secondary }}
            onValueChange={(value) => toggleSwitch("vegetarian", value)}
            value={filter.vegetarian}
          />
        </View> */}
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
    justifyContent: "space-between",
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 20,
    fontWeight: "medium",
  },
});