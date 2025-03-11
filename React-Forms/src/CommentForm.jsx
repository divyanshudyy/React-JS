// import { useState } from "react";

// //WITHOUT VALIDATION

// export default function CommentForm({ addComment }) {
//   let [formData, setFormData] = useState({
//     username: "",
//     remark: "",
//     rating: "",
//   });

//   let handleChange = (e) => {
//     setFormData((currValue) => {
//       return { ...currValue, [e.target.name]: e.target.value };
//     });
//   };

//   let handleSubmit = (e) => {
//     addComment(formData);
//     e.preventDefault();
//     setFormData({
//       username: "",
//       remark: "",
//       rating: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username</label>
//       &nbsp;&nbsp;&nbsp;&nbsp;
//       <input
//         type="text"
//         id="username"
//         placeholder="Type your username"
//         value={formData.username}
//         name="username"
//         onChange={handleChange}
//       />
//       <br />
//       <br />
//       <label htmlFor="remark">Remarks</label>
//       &nbsp;&nbsp;&nbsp;&nbsp;
//       <textarea
//         type="text"
//         id="remark"
//         placeholder="Type your remarks"
//         value={formData.remark}
//         name="remark"
//         onChange={handleChange}
//       ></textarea>
//       <br />
//       <br />
//       <label htmlFor="rating">Rating</label>
//       <input
//         type="number"
//         id="rating"
//         min={1}
//         max={5}
//         placeholder="Give Rating"
//         value={formData.rating}
//         name="rating"
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// WITH VALIDATION  [ USING FORMIK ]

// npm i formik

import { useFormik } from "formik";

export default function CommentForm({ addComment }) {
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Cannot be Empty";
    }

    if (!values.remark) {
      errors.remark = "Required";
    } else if (values.remark.length > 20) {
      errors.remark = "Must be 50 characters or less";
    }

    if (!values.rating) {
      errors.rating = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      addComment(formik.values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        id="username"
        placeholder="Type your username"
        value={formik.values.username}
        name="username"
        onChange={formik.handleChange}
      />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <br />
      <br />
      <label htmlFor="remark">Remarks</label>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <textarea
        type="text"
        id="remark"
        placeholder="Type your remarks"
        value={formik.values.remark}
        name="remark"
        onChange={formik.handleChange}
      ></textarea>
      {formik.errors.remark ? <div>{formik.errors.remark}</div> : null}
      <br />
      <br />
      <label htmlFor="rating">Rating</label>
      <input
        type="number"
        id="rating"
        min={1}
        max={5}
        placeholder="Give Rating"
        value={formik.values.rating}
        name="rating"
        onChange={formik.handleChange}
      />
      {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
}
