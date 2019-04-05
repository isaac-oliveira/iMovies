import React, { Component } from 'react';
import { View, Text } from 'react-native';

import IconButton from '../Components/IconButton';
import UserInput from '../Components/UserInput';
import UserButton from '../Components/UserButton';

import styles from './Styles/LoginLayoutStyle';

const RegisterLayout = (props) => (
  <View style={styles.container}>
    <IconButton
      style={styles.icon}
      onPress={props.onPress}
      icon='account'
    />
    <View style={styles.body}>
      <Text style={styles.title}>iMovies</Text>
      <UserInput 
        style={styles.input} 
        placeholder="Usuário"
        onChangeText={props.getHandler('username')} />
      <UserInput 
        style={styles.input} 
        placeholder="E-mail" 
        onChangeText={props.getHandler('email')}/>
      <UserInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={props.getHandler('password')} />

      <UserButton style={styles.btn} title="Cadastrar" onPress={props.onCadastrar} color="white" />
    </View>
  </View>
);

export default RegisterLayout;
