import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <TextField
        variant="standard"
        label="Buscar por nombre..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}