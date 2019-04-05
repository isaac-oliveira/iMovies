import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'

import styles from './Styles/UserButtonStyle'

class UserButton extends Component {
  static defaultProps = {
    title: '',
    style: {},
  }

  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    return(
      <TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default UserButton