import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuBar = () => {
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