import { useState, useEffect } from "react";
import axios from "axios";
import "./headCss.css";

export default function Header() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [todoLength, setTodoLength] = useState(0);
  useEffect(() => {
    const getTodo = async () => {
      const result = await axios.get("http://localhost:8000/todos");
      setTodos(result.data);
    };
    getTodo();
  }, []);
  useEffect(() => {
    setTodoLength(todos.length);
  }, [todos]);
  const addTodos = async () => {
    try {
      const newTodo = {
        id: Date.now(),
        title: inputTodo,
        checked: false,
        done: false,
      };
      const result = await axios.post("http://localhost:8000/todo", newTodo);
      console.log("받은결과", result);
      setTodos(result.data);
      setInputTodo("");
    } catch (error) {
      console.log("전송에러", error);
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          console.log(todo.done);
          const result = axios.patch(`http://localhost:8000/todo/:${todo.id}`, {
            done: todo.done,
          });
          return { ...todo, checked: !todo.checked, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  const updateTodoTitle = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          console.log("키 눌렸음");
          return { ...todo, title: newTitle };
        } else {
          return todo;
        }
      })
    );
  };

  const keyPressEnter = async (id, newTitle) => {
    console.log("아이디값", id);
    console.log("들어간 값은?", newTitle);
    const result = await axios.patch(`http://localhost:8000/todo/:${id}`, {
      title: newTitle,
    });
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
      <div className="headTitle">📄My TodoList</div>

      <div className="todoLength">📌{todoLength} Todos</div>
      <div>
        {todos.map((value) => {
          return (
            <div className="todoList">
              <span key={value.id}>
                <input
                  type="checkbox"
                  checked={value.checked}
                  onChange={() => {
                    toggleTodo(value.id);
                  }}
                />
                <input
                  type="text"
                  className="todoListValue"
                  value={value.title}
                  readOnly={!value.checked}
                  onChange={(e) => updateTodoTitle(value.id, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      keyPressEnter(value.id, e.target.value);
                    }
                  }}
                />
                <button id={value.id} onClick={deleteTodo}>
                  🗑
                </button>
                <br />
              </span>
            </div>
          );
        })}
      </div>
      <button onClick={removeTodo} hidden>
        할일완료
      </button>
      <div className="headDiv">
        <input
          type="text"
          className="headInput"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="Add Todo here"
        />
        <button onClick={addTodos} className="addTodo">
          +
        </button>
      </div>
    </>
  );
}
