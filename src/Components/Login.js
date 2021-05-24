import React, { useState } from "react";
import { useHistory } from "react-router";


function Login({ setTraveler}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([])
  const history = useHistory()
  console.log(errors)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        return res.json().then(data => {
            if(res.ok){
                return data
            } else{
                throw data
            }
        })
    })
    .then(data => {
      console.log(data)
        const { traveler, token } = data
        localStorage.setItem("token", token);
            setTraveler(traveler)
            history.push('/')
        })
        .catch(error => {
            setErrors(error.errors)
        })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        {errors.map(error => <p style={{ color: 'red'}} key={error}>
            {error}
        </p>)}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;