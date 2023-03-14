import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter , Route, Link , Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TExtUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TExtUtils-LightMode";
    }
  };
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Routes> */}
         
          {/* <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          /> */}
            <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
           {/* <Route exact path="/about" element={<About/>} /> */}
        {/* </Routes> */}

        {/* <About/> */}
        {/* <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode} />  */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
