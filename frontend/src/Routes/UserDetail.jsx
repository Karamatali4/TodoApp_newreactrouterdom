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
        <div className="p-5 text-lime-50 flex justify-center items-center gap-5">
          <img
            src={
              dumimg.avatar ||
              `https://robohash.org/${dumimg.id}.png?size=200x200`
            }
            alt=""
            className="rounded"
          />

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Age
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Update
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td class="px-6 py-4">{user.age}</td>
                  <td class="px-6 py-4">{user.email}</td>

                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
