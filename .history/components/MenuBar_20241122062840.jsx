import { StyleSheet } from 'react-native'
import React from 'react'
import { ColorTheme } from '../constants/ColorTheme';
import { useNavigation } from 'expo-router';

const MenuBar = () => {
    const navigation = useNavigation();
    const handleMenu = () => {
      navigation.openDrawer();
    };
  return (
    <Stack.Screen
      options={{
        headerLeft: () => (
          <CustomIcon onPress={handleMenu}>
            <Ionicons
              name="menu-sharp"
              size={30}
              color={ColorTheme.background}
            />
          </CustomIcon>
        ),
      }}
    />
  );
}

export default MenuBar

const styles = StyleSheet.create({})