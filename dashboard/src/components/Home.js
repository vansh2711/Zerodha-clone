import React,{useEffect} from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const userId = queryParams.get("UI");
    if(userId){
    toast(`Welcome ${userId || "Guest"}`,{
      className: "custom-toast",
      position: "top-center",
      autoClose: 1000, 
      hideProgressBar: false, 
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true,
      theme: "light",
    });}
  }, []);
  
  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
