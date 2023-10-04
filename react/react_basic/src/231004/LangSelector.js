import { useContext } from "react";
import MyContext from "./store/lang-context";
export default function LangSelector() {
  const v = useContext(MyContext);
  //두번째 방법
  return (
    <div>
      <h2>현재 선택된 언어 {v.language}</h2>
      <select
        value={v.language}
        onChange={(e) => v.setLanguage(e.target.value)}
      >
        <option value={"ko"}>한국어</option>
        <option value={"en"}>영어</option>
        <option value={"jp"}>일본어</option>
      </select>
    </div>
  );
  //첫번째 방법
  //   return (
  //     <MyContext.Consumer>
  //       {(v) => {
  //         return (
  //           <div>
  //             <h2>현재 선택된 언어 {v.language}</h2>
  //             <select
  //               value={v.language}
  //               onChange={(e) => v.setLanguage(e.target.value)}
  //             >
  //               <option value={"ko"}>한국어</option>
  //               <option value={"en"}>영어</option>
  //               <option value={"jp"}>일본어</option>
  //             </select>
  //           </div>
  //         );
  //       }}
  //     </MyContext.Consumer>
  //   );
}
