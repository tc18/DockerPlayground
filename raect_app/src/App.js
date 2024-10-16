import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import UsersTable from './components/UsersTable';

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div className="App">
            <SignUp addUser={addUser} />
            <UsersTable users={users} />
        </div>
    );
}

export default App;
