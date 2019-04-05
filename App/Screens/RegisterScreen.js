import React, {Component} from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'

import RegisterLayout from '../Containers/RegisterLayout'

class RegisterScreen extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  getHandler = (key) => (valor) => {
    this.setState({[key]: valor})
  }

  onPress = () => {
    const { navigate } = this.props.navigation
    navigate('LoginScreen')
  }

  onCadastrar = () => {
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;


    if(username != '' && email != '' && password != '') {
      this.props.onSend({username, email, password})
      
      const { navigate } = this.props.navigation
      navigate('SearchScreen')
    } else {
      alert('Por favor, preencha todos os campos!')
    }
    
  }

  render() {
    return (
      <RegisterLayout 
      onPress={this.onPress}
      onCadastrar={this.onCadastrar}
      getHandler={this.getHandler}/>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

// Funções despachantes
const mapDispatchToProps = (dispatch) => ({
  onSend: (username, email, password) => {
    dispatch(UserActions.signupUser(username, email, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)