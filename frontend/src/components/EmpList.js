import React from 'react'
import { Link } from 'react-router-dom'
class EmpList extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    };
  }
  fetchData(){
    fetch('http://localhost:8000/employee/')
    .then(response=>response.json())
    .then((data)=>{
      this.setState({
        data:data
      })
      // console.log("data>>>>>>", data)
    })
  }

  componentDidMount(){
    this.fetchData();
  }
  render() {
    const empData=this.state.data;
    const rows=empData.map((emp)=>
      <tr key={emp.id}>
        <td>{emp.full_name}</td>
        <td>{emp.contact}</td>
        <td>{emp.email}</td>
        <td>{emp.address}</td>
        <td>
          <Link to={"/update/"+emp.id} className="btn btn-primary mr-2">Update</Link>
          <button className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    );
    return (  
    <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Full Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
  )
  }
}
  
export default EmpList