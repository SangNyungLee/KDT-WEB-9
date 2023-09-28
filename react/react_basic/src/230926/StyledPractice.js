import styled from "styled-components";
import { useState } from "react";

const _Btn = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;
const _StyledButton = styled.button`
  background-color: ${(props) => (props.isClicked ? "red" : "blue")};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  padding: 10px;
  cursor: pointer;
`;
export default function StyledPractice() {
  let [bgColor, setBgColor] = useState("blue");
  let [color, setColor] = useState("white");
  const [isClicked, setIsclicked] = useState(false);

  const change = () => {
    if (bgColor == "blue" && color == "white") {
      setBgColor("red");
      setColor("black");
    } else {
      setBgColor("blue");
      setColor("white");
    }
  };
  const onclick = () => {
    if (isClicked) {
      setIsclicked(!isClicked);
    }
  };
  return (
    <>
      <_Btn bgColor={bgColor} color={color} onClick={change}>
        버튼 ㅋㅋ
      </_Btn>
      <_StyledButton onClick={onclick} isClicked={isClicked}>
        색상변경
      </_StyledButton>
    </>
  );
}
