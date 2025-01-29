import axios from "axios";
import { useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

// action function
// export async function useraction({ request,params }) {
//   try {
//     const formData = await request.formData();
//     console.log("Formdata in action", formData);

//     // Add name, age, and email to the FormData object
//     formData.append('name', formData.get('name'));
//     formData.append('age', formData.get('age'));
//     formData.append('email', formData.get('email'));

//     await axios.post(`${import.meta.env.VITE_URL_API}/users/${params.id }`, formData, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     return { success: true };
//   } catch (error) {
//     console.error('Error uploading data:', error);
//     return { error: 'Failed to upload data' };
//   }
// }

function UserCreate() {
  const loaderData = useLoaderData();
  const submit = useSubmit();
  const [startData, setStartData] = useState({});

  const actionData = useActionData();
  const [actionOriginated, setActionOriginated] = useState("");

  // Handle data coming from loader
  useEffect(() => {
    if (loaderData.status === 200) {
      setStartData(loaderData.data);
    }
  }, [loaderData]);

  

  return (
    <>
      <div className="container w-[50rem] h-[23rem] bg-cyan-600 m-auto rounded-t-3xl shadow-gray-300">
        <div className="p-5 text-lime-50 ">
          <h1 className="text-2xl font-bold"> {loaderData.name}</h1>

          <Form
            method="post"
            // onClick={handleForm}
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
                name="name"
                value={loaderData.name}
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
                name="age"
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
                name="email"
              />
            </div>
            <div className="box">
              <button
                type="submit"
                className="bg-cyan-700 py-2 px-8 rounded-md hover:bg-cyan-800 font-bold"
              >
                Submit
              </button>
            </div>
          </Form>

          <p>{actionOriginated}</p>
        </div>
      </div>
    </>
  );
}

export default UserCreate;
