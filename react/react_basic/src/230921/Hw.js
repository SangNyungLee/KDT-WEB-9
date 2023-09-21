import { useState } from "react";

export default function Hw(){
    const [todos, setTodos] = useState([]);
    const [inputTodo, setInputTodo] = useState([]);

    const addTodo = () =>{
        if(todos.length >= 10){
            alert("할일이 너무 많음")
        }else{
            if(inputTodo !== ""){
                const newTodo = {
                    id : Date.now(),
                    text : inputTodo,
                    checked : false,
                };
                setTodos([...todos, newTodo]);
                setInputTodo("");
            }
        }
    }
    const toggleTodo = (id) =>{
        setTodos(
            todos.map((todo)=>{
                return todo.id === id ? {...todo, checked : !todo.checked} : todo;
            })
        )
    }
    const removeTodo = () =>{
        const result = todos.filter((value)=> value.checked == false);
        setTodos(result);
    }
    return(
        <>
        <input type="text" value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)} placeholder="할일입력"/>
        <button onClick={addTodo}>추가</button>
        <ul>
            {todos.map((todo)=>{
                return(
                    <li key={todo.id}>
                        <input type="checkbox" checked ={todo.checked} onChange={()=> toggleTodo(todo.id)}/>
                        {todo.text}
                    </li>
                )
            })}
        </ul>
        <button onClick={removeTodo}>완료된 할일삭제</button>
        </>
    )
}