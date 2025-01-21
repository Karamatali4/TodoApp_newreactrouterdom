import React from "react";
import axios from "axios";
import { useParams, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const res = await axios.get(`http://localhost:5000/users/${params.id}`);
  return res.data;
};

const UserDetail = () => {
  const user = useLoaderData();
  if (!user) return <div>Loading...</div>;
  const dumimg = {
    avatar: "https://robohash.org/you.png?size=200x200",
    
  };
  return (
    <>
      <div className="container w-[50rem] h-[20rem] bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className="p-5 text-lime-50">
          <img src={dumimg.avatar || `https://robohash.org/${dumimg.id}.png?size=200x200`} alt="" />
          <h1>Name: {user.name}</h1>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
