import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCkGePxB7x_Ekhg6m9M44gawpFbSx69eGU',
  authDomain: 'chat-web-app-339b0.firebaseapp.com',
  databaseURL: 'https://chat-web-app-339b0-default-rtdb.firebaseio.com/',
  projectId: 'chat-web-app-339b0',
  storageBucket: 'chat-web-app-339b0.appspot.com',
  messagingSenderId: '281702542524',
  appId: '1:281702542524:web:ae5fc8e582d7bda47134b9',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
