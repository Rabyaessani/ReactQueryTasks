import { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import {toast} from 'react-toastify'

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const queryClient = useQueryClient()

  const { mutate: CreateTask, isLoading } = useMutation({
    mutationFn: (newTask) => customFetch.post("/", { title: newTask }),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["tasks"]})
      toast.success("Task Added");
      setNewItemName('')
    },
    onError:(error)=>{
     toast.error(error.response.data.msg)
    }
  });

  // console.log(Result);

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateTask(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
