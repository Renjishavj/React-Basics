import React, { useState } from 'react';
// external style sheet
import "./style.css"

//module css
import styles from "../src/app.module.css"

const App = () => {
  // internal css
  const myStyle ={
    color:"blue",
  }
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true }
  ]);
  const [showActive, setShowActive] = useState(true);

  // Event handler to toggle user status
  const toggleStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    ));
  };

  // Event handler to toggle visibility of active users
  const toggleShowActive = () => {
    setShowActive(!showActive);
  };

  const filteredUsers = users.filter(user => user.active === showActive);

  return (
    <div>
      {/* inline style in react */}
      <h1 style={{color:"red"}}>User List</h1>

      {/* module css */}
      <button className={styles.button} onClick={toggleShowActive}>
        {showActive ? 'Show active Users' : 'Show inActive Users'}
      </button>
      <ul>
        {filteredUsers.map(user => (
          // internal css for li
          <li key={user.id} style={myStyle}>
            {user.name} - {user.active ? 'Active' : 'Inactive'}
            <button onClick={() => toggleStatus(user.id)}>
            {user.active ? 'Set Inactive' : 'Set Active'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
