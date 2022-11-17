import "./App.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="React App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <FormText heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
Navbar.propTypes = {
  title: PropTypes.string,
};
