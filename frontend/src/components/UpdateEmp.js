import React from 'react'

export default function UpdateEmp() {
  return (
    <table class="table table-bordered">
    <tr>
    <th scope="col">Full Name</th>
    <td>
        <input type='text' className='form-control'/>
    </td>
    </tr>
    <tr>
    <th scope="col">Contact</th>
    <td>
        <input type='text' className='form-control'/>
    </td>
    </tr>
    <tr>
    <th scope="col">Email</th>
    <td>
        <input type='text' className='form-control'/>
    </td>
    </tr>
    <tr>
    <th scope="col">Address</th>
    <td>
        <input type='text' className='form-control'/>
    </td>
    </tr>
    <tr>
        <td colSpan={2}>
        <input type='submit' className='btn btn-info'/>
        </td>
    </tr>
</table>
  )
}