import { TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomIcon = (props) => {
  return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.3}>{props.children}</TouchableOpacity>
  
  );
}

export default CustomIcon

// const styles = StyleSheet.create({
//   container: {
//     overflow: 'hidden',
//   }
// })