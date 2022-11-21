import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [ip, setIP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4);
    setCity(res.data.city);
    setState(res.data.state);
    setLatitude(res.data.latitude);
    setLongitude(res.data.longitude);
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
