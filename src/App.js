import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  //Define constant variables

  //IP + Location
  const [ip, setIP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  //Flight Parameters
  const [airline, setAirline] = useState('');
  const [price, setPrice] = useState('');
  const [departAirport, setDepartAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [currency, setCurrency] = useState('');
  const [link, setLink] = useState('')

  //Flight code Parameters
  const [code, setCode] = useState('');

  //Location data retrieval
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4);
    setCity(res.data.city);
    setState(res.data.state);
    setLatitude(res.data.latitude);
    setLongitude(res.data.longitude);

    //Departure Airport Code retriveal
    const code = await axios.get('https://airlabs.co/api/v9/nearby?lat=' + res.data.latitude + '&lng=' + res.data.longitude + '&distance=20&api_key=API_KEY');
    setCode(code.data.response.airports[0].iata_code)
    console.log(code.data);

    //Flight parameter data retrieval
    const url = await axios.get('https://api.flightapi.io/onewaytrip/6387c414a7ccab6f151dd5dc/' + code.data.response.airports[0].iata_code +'/PVG/2022-12-11/1/0/0/Economy/USD');
    console.log(url.data);
    setLink(url.data.routeSponsors[0].fare.handoffUrl);
    setPrice(url.data.routeSponsors[0].fare.price.totalAmount);
    setDepartAirport(url.data.search.legs[0].departureAirport.name);
    setArrivalAirport(url.data.search.legs[0].arrivalAirport.name);
    setAirline(url.data.airline);
    setCurrency(url.data.search.currencyCode);
  }
  //Call getData and getFlight information
  useEffect(() => {
    getData()
  }, [])

// ------------------------------------------------------------------- //

// HTML
  return (
    <div className="App">
      <header className="App-header">
        <p>Your IP Address is <strong>{ip}</strong> and you are currently in <strong> {city}, {state}. </strong></p>
        <p>More specifically, you are located at <strong>{latitude}°, {longitude}°</strong>.</p>
        <p>Price: <strong>{price} {currency}</strong></p>
        <p>Departure Airport: <strong>{departAirport}</strong></p>
        <p>Arrival Airport: <strong>{arrivalAirport}</strong></p>
        <p><a href = {link} target="_blank">Ticket</a></p>
      </header>
    </div>
  );
}

export default App;
