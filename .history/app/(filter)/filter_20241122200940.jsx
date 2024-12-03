import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuBar from '../../components/MenuBar'

const Filter = () => {
  return (
    <View style={styles.container}>
      <MenuBar/>
      <View>
        <Text>Glun-free</Text>
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