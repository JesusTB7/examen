import React, { useState } from 'react';
import './style.css';

export const UsersList = ({ users = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((usuario) =>
    usuario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Buscar por nombre o correo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Apellido</th>
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
