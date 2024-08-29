import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  // Event handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${name}! You are ${age} years old.`);
  };

  // Event handler to clear form fields
  const handleClear = () => {
    setName('');
    setAge('');
    setMessage('');
  };

  return (
    <div>
      <h1>React Form with Multiple Event Handlers</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      {message && <h2>{message}</h2>}
    </div>
  );
};

export default App;
