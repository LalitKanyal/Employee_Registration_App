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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link class="navbar-brand" to={"/"}>EmpReg</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to={"/"}>Employees</Link>
            <Link class="nav-item nav-link" to={"/add"}>Add Employee</Link>
            {/* <Link class="nav-item nav-link" to={"/update/1"}>Update Employee</Link> */}
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
