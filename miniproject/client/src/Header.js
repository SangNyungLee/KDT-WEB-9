import { useState, useEffect } from "react";
import axios from "axios";
export default function Header() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  useEffect(() => {
    const getTodo = async () => {
      const result = await axios.get("http://localhost:8000/todos");
      setTodos(result.data);
    };
    getTodo();
  }, []);
  const addTodos = async () => {
    try {
      const newTodo = {
        id: Date.now(),
        title: inputTodo,
        checked: false,
        done: 0,
      };
      const result = await axios.post("http://localhost:8000/todo", newTodo);
      console.log("받은결과", result);
      setTodos(result.data);
      setInputTodo("");
    } catch (error) {
      console.log("전송에러", error);
    }
  };

  const toggleTodo = async (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, checked: !todo.checked, done: !todo.done }
          : todo
      )
    );
  };
  const updateTodoTitle = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  };
  const removeTodo = () => {};
  const deleteTodo = async (event) => {
    const id = Number(event.target.id);
    const result = await axios.delete(`http://localhost:8000/todo/:${id}`);
    const filterItem = todos.filter((item) => item.id !== id);
    setTodos(filterItem);
  };
  return (
    <>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="할일 입력"
      />
      <button onClick={addTodos}>ADD</button>
      <ul>
        {todos.map((value) => {
          return (
            <li key={value.id}>
              <input
                type="checkbox"
                checked={value.checked}
                onChange={() => {
                  toggleTodo(value.id);
                }}
              />
              <input
                type="text"
                value={value.title}
                readOnly={!value.checked}
                onChange={(e) => updateTodoTitle(value.id, e.target.value)}
              />
              <button id={value.id} onClick={deleteTodo}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={removeTodo}>할일완료</button>
    </>
  );
}
