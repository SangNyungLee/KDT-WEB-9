import { useState } from "react";
import "./App.css";

function App() {
  //map 함수
  const lists = ["k", "d", "t", "w", "e", "b"];
  //filter함수
  const animals = ["dog", "cat", "rabbit"];
  const newAnimal = animals.filter((value) => {
    return value.includes("a");
  });
  console.log(newAnimal);
  //단축평가
  //&&연산자
  const result = true && "Hello";
  console.log(result);
  // || 연산자
  const defaultValue = 1000;
  const price = 1500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  //map, list
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  let newUsers = users.filter((value) => {
    return value.vip == true;
  });
  let check = true;
  return (
    <>
      {check && (
        <>
          {lists.map((value, idx, arr) => {
            return (
              <div key={idx}>
                Hello {idx} 번째 {value} {arr}
              </div>
            );
          })}
          {newUsers.map((value) => {
            return <div key={value.id}>{value.name}</div>;
          })}
        </>
      )}
    </>
  );
}

export default App;
