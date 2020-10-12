import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
