import React from 'react'

function Table({data}) {

  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {data.map((e,i)=>(
          
            <tr key={i}>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>{e.email}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table