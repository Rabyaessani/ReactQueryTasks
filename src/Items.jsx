import { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import axios from "axios";
import customFetch from "./utils";
import { useQuery } from "@tanstack/react-query";
const Items = () => {
  // const[items,setItems]=useState([])
  // const FetchData = async() => {
  //   try {
  //     const response = await axios("http://localhost:5000/api/tasks");
  //     console.log("response",response)
  //     const Taskdata = response.data;
  //    // console.log(Taskdata)
  //     setItems(Taskdata.taskList);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // useEffect(() => {
  //   FetchData();
  // },[]);

  const { isPending, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch("/"),
  });

  if (isPending) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }
  console.log(error);
  if (isError) {
    return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  }

  return (
    <div className="items">
      {data?.data?.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
