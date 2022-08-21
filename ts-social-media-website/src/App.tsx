import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <User />
      <User />
      <User />
    </div>
  );
};

const User = () => {
  return (
    <div>
      <h1>Dohyun</h1>
      <h2>30</h2>
      <h2>dev-do@naver.com</h2>
    </div>
  );
};

export default App;
