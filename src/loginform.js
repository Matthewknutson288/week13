import React from 'react';
import './App.css';

function LoginForm() {
  return (
    <div className="LoginForm">
      <h3>Log In</h3>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
    </div>
  );
}

export default LoginForm;