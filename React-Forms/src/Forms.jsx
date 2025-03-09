import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
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
    });
  };

  return (
    <form onSubmit={submitChange}>
      <label htmlFor="fullname">Full Name</label>
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
      <label htmlFor="fullname">Username</label>
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
      <button type="submit">Submit</button>
    </form>
  );
}
