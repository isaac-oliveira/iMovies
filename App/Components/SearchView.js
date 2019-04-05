import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TextInput } from 'react-native'

import styles from './Styles/SearchViewStyle'

class SearchView extends Component {
  static defaultProps = {
    placeholder: 'Pesquisar',
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
        style={styles.search}
        selectionColor='#7b1fa2'
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureTextEntry}
        onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing}/>
    );
  }
}

export default SearchView