import * as firebase from 'firebase'
import { config } from '../Config/FirebaseConfig'

firebase.initializeApp(config)

const create = () => {
  const signupUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
  const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
  const getUser = () => firebase.auth().currentUser

  return {
   signupUser,
   loginUser,
   getUser
  }
}

export default {
  create
}