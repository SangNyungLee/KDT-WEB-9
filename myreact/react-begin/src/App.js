import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get("/api/demo-web").then((res) => {
      console.log("?!?!?!?!?!?!?", res);
      setMessage(res.data);
    });
  }, []);

  return (
    <>
      <h2>메시지 테스트 입니다.</h2>
      <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
      <img src="https://img.shields.io/badge/springboot-000000?style=for-the-badge&logo=springboot&logoColor=white" />
      <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" />
      <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
      <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
      <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
      <img src="https://img.shields.io/badge/angular-0F0F11?style=for-the-badge&logo=angular&logoColor=white" />
      <img src="https://img.shields.io/badge/vuedotjs-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
      <img src="https://img.shields.io/badge/기술이름-#제외색상번호?style=for-the-badge&logo=아이콘이름&logoColor=white" />
    </>
  );
}

export default App;
