import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import BookingEntry from './Component/Booking_entry';
import reportWebVitals from './reportWebVitals';
import InmateSearch from './Component/InmateSearch';
import InmateEntry from './Component/InmateEntry';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<App />} />
      {/* <Route path="/Booking_entry" element={<BookingEntry />} /> */}
      <Route path="/InmateSearch" element={<InmateSearch />} />
      <Route path="/InmateEntry" element={<InmateEntry/>}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
