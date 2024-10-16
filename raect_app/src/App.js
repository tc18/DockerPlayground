import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignUp from './components/SignUp';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  return (
    <div className="App">
      <h1>React Sign-Up and User List</h1>
      <SignUp fetchUsers={fetchUsers} />
      <UserTable users={users} />
    </div>
  );
}

export default App;
