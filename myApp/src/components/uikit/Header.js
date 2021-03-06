import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    height: 116,
    justifyContent: 'center',
    alignItems: 'flex-start',
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-Bold',
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }
  }
})

const Header = (props) => {
  const { viewStyle, textStyle } = styles
  return (
    <SafeAreaView style={{ backgroundColor: 'gold' }}>
      <View style={viewStyle}>
        <Text style={textStyle}>{props.title}</Text>
      </View>
    </SafeAreaView>
  )
}

export { Header }
