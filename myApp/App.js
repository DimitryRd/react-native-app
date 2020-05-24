import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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

console.disableYellowBox = true
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'STAR GATE'
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
  }

  componentDidMount() {
    console.log('Component did mount')
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> {this.state.title} </Text>
      </View>
    )
  }
}
