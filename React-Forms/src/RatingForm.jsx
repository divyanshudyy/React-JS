import { useState } from "react";

export default function Comment() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "",
  });

  let handleChange = (e) => {
    setFormData((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        id="username"
        placeholder="Type your username"
        value={formData.username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="remark">Remarks</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <textarea
        type="text"
        id="remark"
        placeholder="Type your remarks"
        value={formData.remark}
        name="remark"
        onChange={handleChange}
      ></textarea>
      <br />
      <br />
      <label htmlFor="rating">Rating</label>
      <input
        type="number"
        id="rating"
        min={1}
        max={5}
        placeholder="Give Rating"
        value={formData.rating}
        name="rating"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
