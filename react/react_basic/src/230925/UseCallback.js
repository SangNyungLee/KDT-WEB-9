import { useCallback, useState } from "react";

function ChildComponent({ onClick }) {
  console.log("Child");
  return (
    <>
      <button onClick={onClick}>P L U S</button>
    </>
  );
}
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const plusCount = () => {
    setCount(() => count + 1);
  };
  const plusCountCallback = useCallback(() => {
    setCount(() => count + 1);
  }, []);

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChildComponent onClick={plusCountCallback} />
      <p>{count}</p>
    </>
  );
}
