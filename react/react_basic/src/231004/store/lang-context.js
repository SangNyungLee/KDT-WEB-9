import React from "react";

//Context 생성
//createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = React.createContext({
  language: "",
  abc: 0,
  setLanguage: () => {},
});

export default MyContext;
