import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  const addUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/users", { name });
    setName("");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl text-yellow-300">Create Users</h1>
      <Form onSubmit={addUser}>
        <input
          type="text"
          value={name}
          className="py-1 rounded-s-sm placeholder:ps-2 "
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <button className="px-2 py-1 bg-lime-200 rounded-e-lg hover:bg-lime-300 " type="submit">Add User</button>
      </Form>
      <ul className="ps-2 pt-2">
        {users.map((user) => (
          <li className="font-bold text-lg text-yellow-300 " key={user._id}>
            <Link to={`/usercreate/${user._id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
