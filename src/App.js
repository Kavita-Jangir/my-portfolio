import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import { BrowserRouter, Switch, Route,Router,Routes } from "react-router-dom";

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
    console.log(cls)
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
      <BrowserRouter forceRefresh>
        <Navbar
          title="TextUtiles"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          {/* <Route exact path="/about" component={About}>
            <About/>
          <Route/> */}
          <Route exact path="/about" component={About}>
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
            <TextForms
              showAlert={showAlert}
              heading="Try TextUtils-Word Counter, Character Counter, Remove extra spaces"
              mode={mode}
            />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
