import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateEmp() {
  const [state, setState] = useState({
    full_name: '',
    email: '',
    contact: '',
    address: ''
  });

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/employee/${id}`)
      .then(response => response.json())
      .then(data => {
        setState({
          full_name: data.full_name,
          email: data.email,
          contact: data.contact,
          address: data.address
        });
      });
  };

  const changeHandler = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = () => {
    fetch(`http://127.0.0.1:8000/employee/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <th>Full Name</th>
          <td>
            <input
              value={state.full_name}
              name="full_name"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <input
              value={state.email}
              name="email"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </td>
        </tr>
        <tr>
          <th>Contact</th>
          <td>
            <input
              value={state.contact}
              name="contact"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            <input
              value={state.address}
              name="address"
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <input
              type="submit"
              onClick={submitForm}
              className="btn btn-dark"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UpdateEmp;
