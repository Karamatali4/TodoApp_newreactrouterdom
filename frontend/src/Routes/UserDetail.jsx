import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
