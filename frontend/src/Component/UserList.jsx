import axios from "axios";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Form, NavLink, useLoaderData, useSubmit } from "react-router-dom";

// loader data
export const loader = async () => {
  const res = await axios.get(`${import.meta.env.VITE_URL_API}/users`);
  return res.data;
};

const UserList = () => {
  const userData = useLoaderData();
  const [name, setName] = useState("");
  const [users, setUsers] = useState(userData);
  const submit = useSubmit();

  // creating user
  const addUser = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${import.meta.env.VITE_URL_API}/users`, {
      name,
    });
    setName("");
    setUsers([...users, res.data]);
  };

  // for delete user
  const handleDelete = (event, id) => {
    event.preventDefault();
    if (!confirm("Please confirm you want to delete this record.")) {
      return;
    }
    submit(event.currentTarget, {
      method: "post",
      action: `/users/${id}/destroy`,
    });
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div>
      <h1 className="font-bold text-2xl text-yellow-300">Create Users</h1>
      <Form onSubmit={addUser} method="post">
        <input
          type="text"
          value={name}
          name="name"
          className="py-1 rounded-s-sm placeholder:ps-2 ps-2 w-44 outline-none"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <button
          className="px-2 py-1 bg-lime-200 rounded-e-lg hover:bg-lime-300"
          type="submit"
        >
          Add User
        </button>
      </Form>
      <ul className="ps-2 pt-2 h-[37.3rem] scroll-smooth overflow-y-auto no-scrollbar">
        {users.map((user) => (
          <li
            className="font-bold text-lg text-yellow-300 flex justify-between"
            key={user._id}
          >
            <NavLink
              to={`/usercreate/${user._id}`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-yellow-100 font-bold"
                  : isPending
                  ? "mr-3 size-5 animate-spin ..."
                  : ""
              }
            >
              {user.name}
            </NavLink>
            <Form
              method="post"
              action={`/users/${user._id}/destroy`}
              onSubmit={(event) => handleDelete(event, user._id)}
            >
              <button type="submit" className="text-red-100 hover:text-red-500 text-xl font-bold">
                <MdDelete />
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
