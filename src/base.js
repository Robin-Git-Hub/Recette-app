import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAg9jJkdtG0hB1B-eTlXanPcH54pKEReHA",
  authDomain: "recette-app-b203b.firebaseapp.com",
  databaseURL: "https://recette-app-b203b.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
