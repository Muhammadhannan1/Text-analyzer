//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
// import Darkmode from './Components/Darkmode';
import Alert from './Components/Alert';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setmode]= useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const togglemode = () =>{
    if (mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#012148ed'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","success")
    }
    // setalert('Dark mode has been enabled')

  }
  return (
    <>
    <Router>
    <Navbar Title='Txtchk' abouttxt='About us' mode={mode} togglemode={togglemode}/> 
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3" > 
    <Routes>
          <Route exact path="/about" element = {<About mode={mode}/>} />
            
          <Route exact path="/" element = {<Textbox showAlert={showAlert} heading="Enter text here" mode={mode} />}/>

        </Routes>
    </div> 
    </Router>
    </>
      );
}

export default App;
