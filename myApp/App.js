/* eslint-disable no-console */
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Header, ImageCard } from './src/components/uikit'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexShrink: 2,
    justifyContent: 'space-around'
  },
  header: {
    fontSize: 22
  }
})

console.disableYellowBox = true
const url = 'https://gitlab.com/gHashTag/react-native-init/raw/master/db.json'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'STAR GATE',
      data: []
    }
  }

  render() {
    const { title, data } = this.state
    const { container } = styles
    return (
      <View>
        <Header style={styles.header} title={title} />
        <ScrollView>
          <View style={container}>
            {data.map((item) => (
              <ImageCard data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }

  componentDidMount = async () => {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ data })
  }
}
