
import { takeLatest, all } from 'redux-saga/effects'
import FirebaseApi from '../Services/FirebaseApi'
import { UserTypes } from '../Redux/UserRedux'
import { signupUser } from './UserSagas'

const firebaseApi = FirebaseApi.create()

export default function * root () {
  yield all([
    takeLatest(UserTypes.SIGNUP_USER, signupUser, firebaseApi),
  ])
}
