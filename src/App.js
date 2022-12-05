import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import db from './firebase.js';
import firebase from 'firebase';

// Add a new document in collection "cities"
// const submit = (e) => {
//   //e.preventDefault();
//   db.collection("user-information").add({
//     city: "test",
//     ip: "test",
//     state: "test"
//   });
// };

function App() {
  const [ip, setIP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const submitInfo = async (city, st, ip) => {
    firebase.firestore().collection('user-information').add({
      city: city,
      state: "ny",
      ip: "3000",
    })
  }

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4);
    setCity(res.data.city);
    setState(res.data.state);
    setLatitude(res.data.latitude);
    setLongitude(res.data.longitude);

    submitInfo(res.data.city, res.data.state, res.data.IPv4);

    //const querySnapshot = await firebase.firestore().getDocs(firebase.firestore().collection(db, "user-information"));
    //console.log(db.collection("user-information"));

    //console.log(firebase.firestore().collection(db, "user-information"))
    // db.collection("user-information").add({
    //   city: "test",
    //   ip: "test",
    //   state: "test"
    // });
  }



  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Your IP Address is {ip} and you are currently in {city}, {state}.</p>
        <p>More specifically, you are located at {latitude}° {longitude}°.</p>
      </header>

    </div>
  );
}

export default App;
