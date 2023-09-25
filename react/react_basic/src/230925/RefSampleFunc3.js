import { useRef, useState, useEffect } from "react";

export default function RefSampleFunc3() {
  const lastTime = useRef(null);

  const handleSubmit = () => {
    const now = Date.now();

    //마지막 클릭 후 1초 이내 다시 클릭되면 무시한다.
    if (lastTime.current && now - lastTime.current < 1000) {
      console.log("클릭시간이 짧습니다.");
      return false;
    }

    lastTime.current = now;
    console.log("제출이 완료되었습니다.");
  };

  return (
    <>
      <button onClick={handleSubmit}>제출</button>
    </>
  );
}
