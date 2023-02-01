import { useState } from 'react';
import './App1.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
// import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enableed or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has  been enabled", "success");
      // document.title= 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has  been enabled", "success");
      // document.title= 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform heading="Try TextUtils- Word Counter, Character Counter" mode={mode}
              showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
      {/* <About/> */}
    </>
  );
}
export default App;
