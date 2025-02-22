import React, { useState } from 'react';

export const UsersList = ({ users = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((usuario) =>
    usuario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o correo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '18px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '10px'
        }}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Last_Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
