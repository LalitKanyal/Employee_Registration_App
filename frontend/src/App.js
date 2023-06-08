// import logo from './logo.svg';

import './bootstrap.min.css';
import EmpList from './components/EmpList';
import AddEmp from './components/AddEmp';
import UpdateEmp from './components/UpdateEmp';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      {/* <Link to={"/"}>Employee List</Link>|
      <Link to={"/add"}>Add Employee</Link>|
      <Link to={"/update/1"}>Update Employee</Link> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link className="navbar-brand" to={"/"}>EmpReg</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to={"/"}>Employees</Link>
            <Link className="nav-item nav-link" to={"/add"}>Add Employee</Link>
            {/* <Link className="nav-item nav-link" to={"/update/1"}>Update Employee</Link> */}
          </div>
        </div>
    </nav>
        <Routes>
          <Route path='/' element={<EmpList/>} />
          <Route path='/add' element={<AddEmp/>} />
          <Route path='/update/:id' element={<UpdateEmp/>} />
          <Route/>
          <Route/>
        </Routes>
    </div>
  );
}

export default App;
