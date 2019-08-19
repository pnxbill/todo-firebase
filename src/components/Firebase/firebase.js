import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB1Xjvizive0fG8FbRKDubpcJQsf6jp6pg',
  authDomain: 'hazzuc-59ce3.firebaseapp.com',
  databaseURL: 'https://hazzuc-59ce3.firebaseio.com',
  projectId: 'hazzuc-59ce3',
  storageBucket: '',
  messagingSenderId: '49361428298',
  appId: '1:49361428298:web:a75cd1dd454bc2ba'
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // AUTH API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
