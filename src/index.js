import React from "react";
import ReactDOM from "react-dom";
import Button from "test-react-ts-npm-package/dist/button";
import Banner from "test-react-ts-npm-package/dist/banner";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Banner name="gigi" />
      <Button>Test</Button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
