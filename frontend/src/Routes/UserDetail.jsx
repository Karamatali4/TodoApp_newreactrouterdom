import React from "react";
import axios from "axios";
import { useParams, useLoaderData, Link, Form } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export const loader = async ({ params }) => {
  const res = await axios.get(`${import.meta.env.VITE_URL_API}/users/${params.id}`);
  return res.data;
};

const UserDetail = () => {
  const user = useLoaderData();
  console.log(user);
  if (!user) return <div>Loading...</div>;
  const dumimg = {
    avatar: "https://robohash.org/you.png?size=200x200",
  };
  
  return (
    <>
      <div className="container w-[50rem] h-[100vh] flex bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className=" text-lime-50 mx-auto mt-5">
          

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-cyan-500 h-[44rem] scroll-smooth overflow-y-auto no-scrollbar">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
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
              <tbody className="text-lime-100 font-bold h-[37.3rem] ">
                {user.map((data, index) => (
                  <>
                    <tr key={data._id}>
                      <td class="px-6 py-4">{data.name}</td>
                      <td class="px-6 py-4">{data.age}</td>
                      <td class="px-6 py-4 ">{data.email}</td>
                      <td class="px-6 py-4 hover:text-blue-900">
                        <Form method="post">
                        <button type="submit" >
            Edit
          </button>
                        </Form>
                        </td> 
                       <td class="px-6 py-4 hover:text-red-900">
                        <Form method="post" action={`/users/${data._id}/destroy`}>
                       
                        <button
                                        type="submit"
                                        className="text-red-100 hover:text-red-500 text-xl font-bold"
                                        onClick={(event) => {
                                          if (!confirm("Please confirm you want to delete this record.")) {
                                            event.preventDefault();
                                          }
                                        }}
                                      >
                                        <MdDelete />
                                      </button>
                         
                        </Form>
                        </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
