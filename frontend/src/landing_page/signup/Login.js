import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        // localStorage.setItem("USERID", data.userId); // Save USERID in local storage
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
    });
  };
  return (
    <div className="container">
      <div className="row p-3 mt-5">
        <div className="col">
          <h1 className="text-center mb-4" style={{ fontSize: "45px" }}>
            Login your trading account invest and earn fastly with Zerodha
          </h1>
          <h4 className="text-muted fs-5 text-center">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </h4>
        </div>
      </div>
      <div className="row p-5" style={{marginBottom:"80px"}}>
        <div className="col-1"></div>
        <div className="col-5">
          <img src="media/images/account_open.svg" alt="..." />
        </div>
        <div className="col-5 p-4">
      <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p>Or track your existing application</p>
          <input  type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange} className="mb-1 p-2"  style={{width:"60%",outline:"none",borderRadius:"5px",borderWidth:"1px"}}/>
          <br />
          <input  type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange} className="mb-1 p-2"  style={{width:"60%",outline:"none",borderRadius:"5px",borderWidth:"1px"}} />
          <br />
          <input type="submit" value="Log In" className="btn btn-primary fs-5 mb-2" style={{width: "60%"}}/> <br/>
          <span style={{marginLeft:"30px"}} >Don't have an account?</span><Link to={"/signup"}>Signup</Link>
        </form>
        <ToastContainer />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Login;
