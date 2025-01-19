

  import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserList from "../Component/UserList";

function Root() {
  const [userInput, setUserInput] = useState("");
  const [users, setUsers] = useState([]); // Initialize as an array

  const onclickHandle = (e) => {
    e.preventDefault();
    
    // Add userInput to the users array
    setUsers((prevUsers) => [...prevUsers, userInput]);
    
    // Clear the input field
    setUserInput("");
  };

  return (
    <>
      <div className="container flex">
        {/* Sidebar */}
        <div className="containersidebar w-[20rem] h-[100vh] bg-cyan-700 rounded flex flex-col items-center gap-5">
          <h1 className="text-xl font-extrabold text-yellow-50">React Router Todo List</h1>
          <div className="form flex justify-center items-center pb-5">
            <UserList/>
          </div>
          
        </div>

        {/* Right side */}
        <div id="detail" className="h-[100vh] flex justify-start gap-5 w-[100%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
