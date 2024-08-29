import React, { useState } from 'react';

const App = () => {
  // Using destructuring to get state and setState function
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  // Destructuring the formData state
  const { firstName, lastName } = formData;

  // Event handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <h1>React Form with Destructuring and Event Handlers</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
