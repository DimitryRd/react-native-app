/* eslint-disable no-console */
import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, ImageCard } from './src/components/uikit'

console.disableYellowBox = true
const url = 'https://gitlab.com/gHashTag/react-native-init/raw/master/db.json'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'STAR GATE'
    }
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET'
      })
      const data = await response.json()
      console.log('data: ', data)
      this.setState({ data })
    } catch (e) {
      console.warn('e', e) // eslint-disable-line
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    return (
      <View>
        <Header title={title} />
        <ImageCard />
      </View>
    )
  }
}
