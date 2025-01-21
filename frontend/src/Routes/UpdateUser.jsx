import { useLoaderData } from "react-router-dom";

function UpdateUser() {

  const user = useLoaderData();

  return (
    <>
    {user}
    </>
  )
}

export default UpdateUser