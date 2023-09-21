import { useState } from "react";

export default function Prac1() {
  const [textState, setText] = useState("검정색글씨");
  const [textColor, setColor] = useState("black");

  const setRed = () => {
    setText("빨간색 글씨");
    setColor("red");
  };
  const setBlue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };
  return (
    <div>
      <p style={{ color: textColor }}>{textState}</p>
      <button onClick={setRed}>빨간색</button>
      <button onClick={setBlue}>파란색</button>
    </div>
  );
}
