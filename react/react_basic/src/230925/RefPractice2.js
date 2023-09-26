import { useRef, useState } from "react";

export default function RefPractice2() {
  const myInput1 = useRef();
  const myInput2 = useRef();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const write = () => {
    if (writer.trim() == "") {
      myInput1.current.focus();
    } else if (title.trim() == "") {
      myInput2.current.focus();
    } else {
      const user = { writer, title };
      const newUsers = [...userInfo, user];
      setUserInfo(newUsers);
      setWriter("");
      setTitle("");
    }
  };

  return (
    <div>
      작성자 :{" "}
      <input
        type="text"
        ref={myInput1}
        value={writer}
        onChange={(e) => setWriter(e.target.value)}
      />
      제목 :{" "}
      <input
        type="text"
        ref={myInput2}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={write}>작성</button>
      <table border={1} cellPadding={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
