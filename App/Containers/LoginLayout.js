import React, {Component} from 'react'
import { Text, View } from 'react-native'

import IconButton from '../Components/IconButton'
import UserInput from '../Components/UserInput'
import UserButton from '../Components/UserButton'

import styles from './Styles/LoginLayoutStyle'

const LoginLayout = (props) => (
      <View style={styles.container}>
        <IconButton style={styles.icon} onPress={props.onPress} icon='account-plus'/>
        <View style={styles.body}>
          <Text style={styles.title}>iMovies</Text>
          <UserInput style={styles.input} placeholder='E-mail'/>
          <UserInput style={styles.input} placeholder='Senha' secureTextEntry={true}/>
          <UserButton style={styles.btn} title='Login' color='white'/>
        </View>
      </View>
    )

export default LoginLayout 