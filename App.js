import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'; 
import Alert from './components/Alert'
import{
  BrowserRouter,
  Routes,
  Route,
  Link
  
} from "react-router-dom";

function App() {

  
  const[mode,setMode] = useState('light'); // whether dark mode is enabled
  const[alert,setAlert] = useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  const toggleMode =() =>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#251749';
        showAlert('Dark mode enabled','success');
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode enabled','success');
      }
  }
  return (
<>
  <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}></Navbar>
    {/* Default prop call */}
    {/*<Navbar/>*/}
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
