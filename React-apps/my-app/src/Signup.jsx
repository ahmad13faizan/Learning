import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import icon from "./icon.png";

function Signup() {
  const initData = {
    username: "",
    first: "",
    last: "",
    phone: "",
    email: "",
    gender: "",
    state: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
    message: "",
  };

  const [formData, setFormData] = useState(initData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (
      !formData.first ||
      formData.first.length < 2 ||
      formData.first.length > 30
    ) {
      newErrors.first = "First Name must be between 2 to 30 characters.";
    }

    if (
      !formData.last ||
      formData.last.length < 2 ||
      formData.last.length > 30
    ) {
      newErrors.last = "Last Name must be between 2 to 30 characters.";
    }

    if (!/^[a-zA-Z0-9]{3,15}$/.test(formData.username)) {
      newErrors.username =
        "Username must be 3-15 characters (letters/numbers).";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender selection is required.";
    }

    if (!formData.state || formData.state === "select") {
      newErrors.state = "Please select a state.";
    }

    if (formData.password.length < 6 || formData.password.length > 20) {
      newErrors.password = "Password must be between 6 to 20 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms & conditions.";
    }

    if (localStorage.getItem(formData.username)) {
      newErrors.userpresent = "userpresent";
      alert("User already present");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem(formData.username, JSON.stringify(formData));
      alert("🎉 Signup Successful!");
      setFormData(initData);
      setErrors({});
    }
  };

  const formFields = [
    { label: "First Name", name: "first", type: "text" },
    { label: "Last Name", name: "last", type: "text" },
    { label: "Username", name: "username", type: "text" },
    { label: "Phone No", name: "phone", type: "number" },
    { label: "Email", name: "email", type: "email" },
    { label: "Address", name: "address", type: "textarea" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  return (
    <div id="main-div" className="signup-card">
      <h2>Signup</h2>
      <img src={icon} alt="icon" />
      <form onSubmit={handleSubmit}>
        {formFields.map(({ label, name, type }) => (
          <>
            <div key={name}>
              <label>{label}:</label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  maxLength={100}
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                />
              )}
            </div>
            {errors[name] && <p className="error">{errors[name]}</p>}
          </>
        ))}

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div>
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="select">Select state</option>
            <option value="Haryana">Haryana</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttarakhand">Uttarakhand</option>
          </select>
          {errors.state && <p className="error">{errors.state}</p>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />{" "}
            Accept Terms & Conditions
          </label>
          {errors.terms && <p className="error">{errors.terms}</p>}
        </div>

        <button type="submit">Submit</button>
        <button
          type="button"
          className="reset"
          onClick={() => setFormData(initData)}
        >
          Reset
        </button>
        <Link to="/">
          <button type="button">Login</button>
        </Link>
      </form>
      <h4>{formData.message}</h4>
    </div>
  );
}

export default Signup;
