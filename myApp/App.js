import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'green'
  }
})

const App = () => (
  <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
      <Text style={styles.welcome}> Hello world </Text>
    </View>
    <View style={{ flex: 2, backgroundColor: 'steelblue' }} />
    <View style={{ flex: 3, backgroundColor: 'blue' }} />
  </View>
)

export default App
