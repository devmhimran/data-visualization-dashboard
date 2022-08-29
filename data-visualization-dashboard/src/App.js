
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Graph from './Components/Dashboard/graph'
import Loading from './Components/Loading/Loading';
function App() {
  return (
    <div className="">
      <Routes>
        {/* <Route path="/" element={<Dashboard></Dashboard>} /> */}
        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />
        <Route path="/loading" element={<Loading></Loading>} />
        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>} />
        {/* <Route path='/' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

        </Route> */}
        <Route path='/' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Graph></Graph>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
