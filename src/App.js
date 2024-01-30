import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }


  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls)
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743'
  //     showAlert("dark mode has enabled", "success")
  //     // document.title = "TextUtils - Dark Mode";
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("light mode has enabled", "success")
  //     // document.title = "TextUtils - Light Mode";
  //   }
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has enabled", "success")
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has enabled", "success")
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alertMsg={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textform heading="Enter the text to analyze" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About modFe={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
