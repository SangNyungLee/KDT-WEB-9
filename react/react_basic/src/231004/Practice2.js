import { useContext } from "react";
import { MyContext } from "./store/lang-context";

export default function Practice2() {
  const v = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 언어 : {v.language}</h2>
      <select
        value={v.language}
        onChange={(e) => v.setLanguage(e.target.value)}
      >
        <option value={"한국어"}>한국어</option>
        <option value={"영어"}>영어</option>
      </select>
    </div>
  );
}
