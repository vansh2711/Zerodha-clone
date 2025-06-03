import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          const userId = data.userId;
          navigate(window.location.href = `http://localhost:3001/?UI=${userId}`);
        }, 1000);
       
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <div className="container">
      <div className="row p-3 mt-5">
        <div className="col">
          <h1 className="text-center mb-4" style={{ fontSize: "50px" }}>
            Open a free demat and trading account online
          </h1>
          <h4 className="text-muted fs-5 text-center">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </h4>
        </div>
      </div>
      <div className="row p-5" style={{ marginBottom: "60px" }}>
        <div className="col-1"></div>
        <div className="col-5">
          <img src="media/images/account_open.svg" alt="..." />
        </div>
        <div className="col-5 p-4">
          <form onSubmit={handleSubmit}>
            <h1>Signup now</h1>
            <p>Or track your existing application</p>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleOnChange}
              
              className="mb-1 p-2"
              style={{
                width: "60%",
                outline: "none",
                borderRadius: "5px",
                borderWidth: "1px",
              }}
            />
            <input
              type="text"
              placeholder="Username"
              className="mb-1 p-2"
              name="username"
              value={username}
              onChange={handleOnChange}
              
              style={{
                width: "60%",
                outline: "none",
                borderRadius: "5px",
                borderWidth: "1px",
              }}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="mb-1 p-2"
              name="password"
              value={password}
              onChange={handleOnChange}
              
              style={{
                width: "60%",
                outline: "none",
                borderRadius: "5px",
                borderWidth: "1px",
              }}
            />
            <br />
            <input
              type="submit"
              value="SignUp"
              className="btn btn-primary fs-5 mb-2"
              style={{ width: "60%" }}
            />

            <br />
            <span style={{ marginLeft: "8px" }}>
              If you have an existing account?
            </span>
            <Link to={"/login"}>login</Link>
          </form>
          <ToastContainer />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Signup;
