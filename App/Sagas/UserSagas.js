import { call, put, select } from 'redux-saga/effects'
import UserActions, { UserSelectors } from '../Redux/UserRedux'

export function * signupUser(api, {username, email, password}) {
  try{
    yield api.signupUser(email, password).catch((error) => {
      alert(error)
    })
   
    let user = yield api.getUser()
    if(user != null) {
        user.updateProfile({
            displayName: username,
        })
    }
  } catch(error) {
    alert(error)
  }
}
