import React, { useState } from "react";
import { useHistory } from "react-router";

function SignUp( {setTraveler} ) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState([])
  const history = useHistory()
  console.log(errors)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  console.log(formData)
  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/signup', {
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
            history.push('/login')
        })
        .catch(error => {
            setErrors(error.errors)
        })
  }

  const { name, email, age, password } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>

      <label>Full Name</label>
      <input
        type="text"
        name="name"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      
      <label>Email</label>
      <input
        type="text"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleChange}
      />

      <label>Age</label>
      <input
        type="text"
        name="age"
        autoComplete="off"
        value={age}
        onChange={handleChange}
      />
    
      <label>Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />
        {errors.map(error => <p style={{ color: 'red'}} key={error}>
            {error}
        </p>)}
      <input type="submit" value="Signup" />
    </form>
  );
}

export default SignUp;