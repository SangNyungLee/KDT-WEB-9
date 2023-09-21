import { useState } from "react";

export default function Prac3() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [searchType, setType] = useState("작성자");
  const [inputSearch, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const write = () => {
    const user = { writer, title };
    const newUsers = [...userInfo, user];
    setUserInfo(newUsers);
    setWriter("");
    setTitle("");
  };
  const search = () => {
    const searchResult = userInfo.filter((value) => {
      const type = value[searchType];
      const include = type.includes(inputSearch);
      if (!include) {
        return false;
      }
      return true;
    });
    setResult(searchResult);
  };

  return (
    <div>
      작성자 :{" "}
      <input
        type="text"
        value={writer}
        onChange={(e) => setWriter(e.target.value)}
      />
      제목 :{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={write}>작성</button>
      <br />
      <br />
      <select value={searchType} onChange={(e) => setType(e.target.value)}>
        <option value="writer">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={inputSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={search}>검색</button>
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
      <h3>검색결과</h3>
      <table border={1} cellPadding={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {result.map((value, index) => {
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
