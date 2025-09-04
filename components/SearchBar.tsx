import { icons } from '@/constants/icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SearchBar = () => {
  return (
    <View
        style={styles.cont}
    >
        <Image source={icons.search}/>
      <Text>Search Bar</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont: { 
    flex: 1,
    flexDirection: 'row',
    marginInlineStart: 50
  }
})