import React from 'react'
import { View, Text, FlatList } from 'react-native'

import SearchView from '../Components/SearchView'
import styles from './Styles/SearchLayoutStyle'
 
const SearchLayout = (props) => (
  <View>
    <View style={styles.toolbar}>
      <SearchView/>
    </View>
    <FlatList/>
  </View>
)

export default SearchLayout