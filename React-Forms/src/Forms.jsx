import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  //   let handleChange = (e) => {
  //     let inputName = e.target.name;
  //     let inputValue = e.target.value;

  //     setFormData((currValue) => {
  //       return { ...currValue, [inputName]: inputValue };
  //     });
  //   };

  //OR

  let handleChange = (e) => {
    setFormData((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };

  let submitChange = (e) => {
    e.preventDefault();
    setFormData({
      fullname: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={submitChange}>
      <label htmlFor="fullname">Full Name</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Type your full name"
        value={formData.fullname}
        id="fullname"
        name="fullname"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="username">Username</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Type your username"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="password"
        placeholder="Type your password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
