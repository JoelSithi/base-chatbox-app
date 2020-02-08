import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAc_lJSTWIgxh6ai-_Tx97iUnB3XL1ROYo",
    authDomain: "chatbox-490c8.firebaseapp.com",
    databaseURL: "https://chatbox-490c8.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp}
export default base