import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#232D3F';
      showAlert('Dark Mode is Enabled', 'success');
      document.title = 'TextUtils-- Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', 'success');
      document.title = 'TextUtils-- Light Mode';
    }
  }

  return (
<>
      <Navbar title="TextUtils1" about="About Me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
  
          <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
          
        
      </div>
  </>

    /*{<Router>
      <Navbar title="TextUtils1" about="About Me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>}
    */
  );
}

export default App;
