import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.first || formData.first.length < 2 || formData.first.length > 30) {
      newErrors.first = "First Name must be between 2 to 30 characters.";
    }

    if (!formData.last || formData.last.length < 2 || formData.last.length > 30) {
      newErrors.last = "Last Name must be between 2 to 30 characters.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
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
      alert("🎉 Signup Successful!");
      setFormData({
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
      });
      setErrors({});
    }
  };

  return (
    <div id="main-div">
      <h2>Signup Page using React JS</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="first" value={formData.first} onChange={handleChange} required />
          {errors.first && <p className="error">{errors.first}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" name="last" value={formData.last} onChange={handleChange} required />
          {errors.last && <p className="error">{errors.last}</p>}
        </div>

        <div>
          <label>Phone No:</label>
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} /> Female
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
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} maxLength={100}></textarea>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} /> Accept Terms & Conditions
          </label>
          {errors.terms && <p className="error">{errors.terms}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
