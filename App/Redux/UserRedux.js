import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signupUser: ['username', 'email', 'password'],
  loginUser: ['email', 'password'],
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    username: null,
    email: null,
    password: null
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  selectUsername: state => state.user.username
}

/* ------------- Reducers ------------- */

export const signupUser = (state, { username, email, password}) =>
  state.merge({ username, email, password})

export const loginUser = (state, {email, password}) =>
  state.merge({ email, password })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_USER]: signupUser,
  [Types.LOGIN_USER]: loginUser
})
