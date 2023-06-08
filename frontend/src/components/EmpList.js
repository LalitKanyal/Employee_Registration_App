import React from 'react'
import { Link } from 'react-router-dom'
export default function EmpList() {
  return (
    <table class="table table-bordered">
  <thead class="thead-light">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Address</td>
      <td>
        <Link to={"/update/1"} className="btn btn-primary mr-2">Update</Link>
        <button className='btn btn-danger'>Delete</button>
        
      </td>
      {/* <td>
        <Link to={"/update/1"} className="btn btn-primary">Update</Link>
      </td> */}
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Address</td>
      <td>
        <Link to={"/update/1"} className="btn btn-primary mr-2">Update</Link>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Address</td>
      <td>
        <Link to={"/update/1"} className="btn btn-primary mr-2">Update</Link>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  )
}