import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import MenuBar from '../../components/MenuBar'

const Filter = () => {
  return (
    <View style={styles.container}>
      <MenuBar/>
      <View style={styles.filterContainer}>

      <View style={styles.filter}>
        <Text>Gluten-free</Text>
        <Switch />
      </View>
      </View>
      <Text>filterScreen</Text>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})