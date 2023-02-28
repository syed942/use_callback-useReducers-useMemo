import { useState,useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

export const App1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    // setCount((c) => c + 1);
    setCount(()=>count +1 );
  };
//   const addTodo = () => {
//     console.log([...todos,"ahmed"])
//     // setTodos((t) => [...t, "New Todo"]);
//     setTodos(()=>[...todos,"ishfaq"])
//   };
//useCallback will return a memoized function etored in variable addT0do as below
  const addTodo = useCallback(() => {
    console.log([...todos,"ahmed"])
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};