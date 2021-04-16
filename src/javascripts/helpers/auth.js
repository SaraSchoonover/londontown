import firebase from 'firebase/app';
import 'firebase/auth';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import startApp from '../views.js/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  startApp();
};

export default checkLoginStatus;
