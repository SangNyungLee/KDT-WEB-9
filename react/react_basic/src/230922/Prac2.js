import { useState, useEffect } from "react";
import axios from "axios";

function MyComponent(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get() {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(result.data);
    }
    get();
    return () => {
      console.log("연결해제완료");
    };
  }, []);

  useEffect(() => {
    console.log(`현재 유저 수 : ${data.length}`);
  }, [data]);

  return (
    <>
      <ul>
        {data.map((value) => {
          return (
            <li key={value.id}>
              {value.username} - {value.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default function Prac2() {
  const [visible, setVisible] = useState(true);

  const disconnected = () => {
    setVisible(() => !visible);
  };
  return (
    <>
      {visible && <MyComponent />}
      <button onClick={disconnected}>연결해제</button>
    </>
  );
}
