/* eslint-disable no-console */
import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/uikit/Header'

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
    console.log('state: ', state)
    console.log('props: ', props)
    console.log('getDerivedStateFromProps')
  }

  componentDidMount() {
    console.log('Component did mount')
  }

  render() {
    return (
      <View>
        <Header title={this.state.title} />
      </View>
    )
  }
}
