import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
