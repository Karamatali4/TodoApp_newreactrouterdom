import axios from "axios";
import { Form, useLoaderData } from "react-router-dom";

function UserCreate() {
  const user = useLoaderData();

  const handleForm = () => {};
  return (
    <>
      <div className="container w-[50rem] h-[23rem] bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className="p-5 text-lime-50 ">
          <h1 className="text-2xl font-bold"> {user.name}</h1>

          <Form
            action=""
            onClick={handleForm}
            className="flex flex-col justify-center items-center gap-10"
          >
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="ms-2 outline-none text-black rounded-md py-2 px-4"
                name=""
                value={user.name}
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
                className="ms-2 outline-none text-black rounded-md py-2 px-4"
              />
            </div>
            <div className="box">
              <label htmlFor="" className="text-2xl font-bold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="ms-2 outline-none text-black rounded-md py-2 px-4"
              />
            </div>
            <div className="box">
              <button className="bg-cyan-700 py-2 px-8 rounded-md hover:bg-cyan-800 font-bold">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default UserCreate;
