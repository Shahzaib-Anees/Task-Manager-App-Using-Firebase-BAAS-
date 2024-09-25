import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../../../../../configs/firebase/firebaseMethods";

function AllTask() {
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const data = await getSingleData("users", id);
      console.log(data);
    };

    getData();
  }, [id]);
  return (
    <>
      <div>AllTask</div>
    </>
  );
}

export default AllTask;
