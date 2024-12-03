import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'

const MainButton = (props) => {
  return (
    <View>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.button}>
        <Text>MainButton</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({
    import { connect } from 'react-redux'
    import component from 'componentPath'
    import {actionCreator} from 'actionCreatorPath'
    
    const mapStateToProps = (state, ownProps) => {
        return {
            prop: state.prop
        }
    }
    
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            dispatch1: () => {
                dispatch(actionCreator)
            }
        }
    }
    
    const mergeProps = (stateProps, dispatchProps, ownProps) => {
        return {
            mergeProp: mergePropVal
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)
    button: {},
});