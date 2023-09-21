import { useState } from "react";

export default function Prac2() {
  const [status, setStatus] = useState(false);
  const [textStatus, setText] = useState("사라져라");
  const handleToggle = () => {
    if (status === false) {
      setStatus(true);
      setText("사라져라");
    } else {
      setStatus(false);
      setText("보여라");
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>{textStatus}</button>
      <p>{status && "안녕하세요"}</p>
    </div>
  );
}
