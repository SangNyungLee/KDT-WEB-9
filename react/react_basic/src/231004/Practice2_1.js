import { useContext } from "react";
import { MyContext, MyTheme } from "./store/lang-context";

export default function Practice2_1() {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 테마 : {theme}</h2>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value={"dark"}>다크모드</option>
        <option value={"light"}>라이트모드</option>
      </select>
    </div>
  );
}
