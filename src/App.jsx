import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-wrapper">
        <Header></Header>
        <div className="d-flex vh-100">
          <Sidebar></Sidebar>
          <Dashboard></Dashboard>
        </div>
      </div>
    </>
  );
}

export default App;
