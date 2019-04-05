import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class IconButton extends Component {
  static defaultProps = {
    style: {},
  }

  static propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    return(
      <TouchableOpacity  style={this.props.style} onPress={this.props.onPress}>
        <Icon style={{color: 'white', fontSize: 38,}} color='#fff' name={this.props.icon} /> 
      </TouchableOpacity >
    );
  }
}

export default IconButton;