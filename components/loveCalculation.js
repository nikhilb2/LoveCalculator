import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import theme from '../src/theme'

const LoveCalc = (props) => {
  const { boyName, girlName, love } = props
  return(
    <View style={styles.container}>
      {girlName
        ? <Text style={styles.text}>Girl Name: {girlName} </Text>
        : null
      }
      {boyName
        ? <Text style={styles.text}>Boy Name: {boyName} </Text>
        : null
      }
      {love
        ? <Text style={styles.text}>Love: {love}%</Text>
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    ...theme.typography.h1,
    color: theme.palette.primary.main
  }
})

export default LoveCalc
