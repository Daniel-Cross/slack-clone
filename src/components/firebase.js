import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
	apiKey: 'AIzaSyClshyprwSmeLizgysPO59YRGoJ3RG27Qg',
	authDomain: 'tack-28175.firebaseapp.com',
	databaseURL: 'https://tack-28175.firebaseio.com',
	projectId: 'tack-28175',
	storageBucket: 'tack-28175.appspot.com',
	messagingSenderId: '243017225130',
};
firebase.initializeApp(config);

export default firebase;
