import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native'

import styles from './Styles/UserInputStyle'

class UserInput extends Component {
  static defaultProps = {
    placeholder: '',
    secureTextEntry: false,
    style: {},
  }

  static propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    
  }

  render() {
    return(
      <TextInput
        style={styles.input}
        selectionColor='#7b1fa2'
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureTextEntry}
        onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing}/>
    );
  }
}

export default UserInput;