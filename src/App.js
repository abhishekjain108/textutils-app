
import './App.css';
import Navbar from './CodeWithHarry/Navbar';
import TextForm from './CodeWithHarry/TextForm';
import { useState } from 'react';
import Alert from './CodeWithHarry/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";






function App() {

  let [mode , setMode] = useState('light')

  function toggleMode(){

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='black'
      showAlert("Dark Mode has Been Enabled", "success")
      document.title ='TextUtils - dark mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light Mode has Been Enabled", "success")
      document.title ='TextUtils - light mode'
    }

  }

  const [alert, setAlert] = useState(null)

  function showAlert( message , type){
    setAlert({
      message: message,
      type : type
    })
    setTimeout(()=>{
      
      setAlert(null)
    } , 1500);   
  }


  return (
    <>

    <Router>
   

    

  

    <Navbar title='TextUtlis' about='about' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container"> 
    <Routes>

      <Route path='/' element={ <TextForm showAlert={showAlert} headingbox="Enter your text below !" mode={mode} />}/>
    </Routes>
    </div>

    </Router>
    

    </>
  );
}

export default App;


