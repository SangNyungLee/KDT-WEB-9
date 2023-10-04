import React, { useState } from "react";

//Context 생성
//createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
export const MyContext = React.createContext({
  language: "",
  abc: 0,
  setLanguage: () => {},
  theme: "",
  setTheme: () => {},
});

//provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("한국어");
  const [theme, setTheme] = useState("dark");
  return (
    <MyContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}
