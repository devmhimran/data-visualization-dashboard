import logo from './logo.svg';
import './App.css';
import {
  Button
} from "@material-tailwind/react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />
        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>} />
      </Routes>
    </div>
  );
}

export default App;
