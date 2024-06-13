import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import Form from "./Form";
import Items from "./Items";
import { useState,useEffect } from "react";
const defaultItems = [
  { id: nanoid(), title: "walk the dog", isDone: false },
  { id: nanoid(), title: "wash dishes", isDone: false },
  { id: nanoid(), title: "drink coffee", isDone: true },
  { id: nanoid(), title: "take a nap", isDone: true },
];
const App = () => {
  const [items, setItems] = useState(defaultItems);
  
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items items={items} />
    </section>
  );
};
export default App;
