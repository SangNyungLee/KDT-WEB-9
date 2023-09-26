import styled from "styled-components";
import { useState } from "react";

const _Btn = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

export default function StyledPractice() {
  let [bgColor, setBgColor] = useState("blue");
  let [color, setColor] = useState("white");
  const change = () => {
    if (bgColor == "blue" && color == "white") {
      setBgColor("red");
      setColor("black");
    } else {
      setBgColor("blue");
      setColor("white");
    }
  };
  return (
    <>
      <_Btn bgColor={bgColor} color={color} onClick={change}>
        버튼 ㅋㅋ
      </_Btn>
    </>
  );
}
