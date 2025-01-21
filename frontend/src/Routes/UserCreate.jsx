import axios from "axios";
import { Form, useLoaderData } from "react-router-dom";

function UserCreate() {
  const user = useLoaderData();
  return (
    <>
      <div className="container w-[50rem] h-[20rem] bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className="p-5 text-lime-50">
          <h1>Name: {user.name}</h1>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>

          <Form
            action=""
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="ms-2 outline-none rounded-md py-2 px-4"
                name=""
                value={""}
                onChange={(e) => ""}
              />
            </div>
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Age:
              </label>
              <input
                type="text"
                placeholder="Enter Age "
                className="ms-2 outline-none rounded-md py-2 px-4"
              />
            </div>
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="ms-2 outline-none rounded-md py-2 px-4"
              />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default UserCreate;
