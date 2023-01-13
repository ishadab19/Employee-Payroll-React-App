import React from "react";
import PayrollForm from "./components/PayrollForm";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";

class App extends React.Component{
  render(){
    return(
      <div>
        <Routes>
        <Route path="/form" element={<PayrollForm/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/form/:id" element={<PayrollForm/>}></Route>
        </Routes>
        {/* <h2>
          <Link to="/homepage" >Home </Link>  |
          <Link to="/form">PayrollForm </Link>
        </h2> */}
      </div>
    );
  }
}
export default App;