import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginLayout from '../Containers/LoginLayout'

class LoginScreen extends Component {
  onPress = () => {
    const { navigate } = this.props.navigation
    navigate('RegisterScreen')
  }

  render() {
    return (
      <LoginLayout onPress={this.onPress} />
    )
  }
}

const mapStateToProps = (state) => ({
  
})

// Funções despachantes
const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)