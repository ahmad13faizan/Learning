import {useState} from "react";

export const formFields = [
    { label: "First Name", name: "first", type: "text" },
    { label: "Last Name", name: "last", type: "text" },
    { label: "Username", name: "username", type: "text" },
    { label: "Phone No", name: "phone", type: "number" },
    { label: "Email", name: "email", type: "email" },
    { label: "Address", name: "address", type: "textarea" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" }
  ];
  

export const [fields, setfields] = useState({
  username: "",
  password: "",
});

export const initData = {
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
      message: ""
    };

    