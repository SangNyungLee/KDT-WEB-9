import { useState } from "react";
import Form from "./Form";
import Practice1 from "./Practice1";
import MyContext from "./store/lang-context";
import LangSelector from "./LangSelector";

function App231004() {
  const [language, setLanguage] = useState("ko");
  return (
    <>
      <MyContext.Provider value={{ language, setLanguage }}>
        {/* <Form /> */}
        <LangSelector />
      </MyContext.Provider>
      {/* <Practice1 /> */}
    </>
  );
}
export default App231004;
