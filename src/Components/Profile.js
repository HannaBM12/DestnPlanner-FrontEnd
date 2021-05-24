import React, { useState } from "react";

function Profile( {traveler, setTraveler} ) {
  const [formData, setFormData] = useState({
    email: traveler.email,
    age: traveler.age,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const token = localStorage.getItem("token")
    fetch("http://localhost:3000/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(traveler => {
        console.log(traveler.name)
        setTraveler(traveler)
    })
  }

  const { email, age } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <h1>{traveler.name}'s Profile</h1>

      <label>Email</label>
      <input
        type="text"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleChange}
      />
      
      <label>Age</label>
      <textarea name="age" value={age} onChange={handleChange} />

      <input type="submit" value="Update" />
    </form>
  );
}

export default Profile;