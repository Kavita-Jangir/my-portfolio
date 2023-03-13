import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import {BrowserRouter as Router,Switch,Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = (cls) => {
    console.log(cls);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "sucess");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enable", "sucess");
    }
  };
  return (
    <>
      
        <Navbar
          title="TextUtiles"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3" ></div>
        <Switch>
        
           <Route  path="/about" >
            <About  mode={mode}/>
          </Route> 
          
          <Route exact path="/" >
              <TextForms showAlert={showAlert}
              heading="Try TextUtils-Word Counter, Character Counter, Remove extra spaces"
              mode={mode}/></Route>
           
           </Switch>
     
    </>
  );
}

export default App;
