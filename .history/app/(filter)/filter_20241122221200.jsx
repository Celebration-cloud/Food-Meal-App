import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import MenuBar from '../../components/MenuBar'
import { ColorTheme } from '../../constants/ColorTheme';
import { filtration } from '../../data/Filtration';
import { Stack } from 'expo-router';
import CustomIcon from '../../components/CustomIcon';
import { Ionicons } from '@expo/vector-icons';

const Filter = () => {
  const [filter, setFilter] = useState({
    glutenFree: false,
    lactoseFree: false,
    vegan: false,
    vegetarian: false,
  });
  const toggleSwitch = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };
  const handleSave = () => { 
    co
   };
  return (
    <View style={styles.container}>
      <MenuBar />
      <Stack.Screen
        options={{
          headerRight: () => (
            <CustomIcon onPress={handleSave}>
              <Ionicons
                name="save-sharp"
                size={25}
                color={ColorTheme.background}
              />
            </CustomIcon>
          ),
        }}
      />

      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <View style={styles.filterContainer}>
        {filtration.map((item, index) => (
          <View key={index} style={styles.filter}>
            <Text style={styles.text}>
              {item
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (char) => char.toUpperCase())}
            </Text>
            <Switch
              thumbColor={ColorTheme.primary}
              trackColor={{ false: "#767577", true: ColorTheme.secondary }}
              onValueChange={(value) => toggleSwitch(item, value)}
              value={Object.values(filter)[index]}
            />
          </View>
        ))}
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