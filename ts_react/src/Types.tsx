import React, { useState, useRef } from "react";

interface Props {
  name: string;
}
interface Data {
  name: string;
  age: number;
}

//컴포넌트 제작방법 2
const Types: React.FC<Props> = (props) => {
  const [count, setCount] = useState<Data | null>(null);

  const myInput = useRef<HTMLInputElement>(null);
  return (
    <>
      <h2>Hello {props.name}</h2>
      <input ref={myInput} />
    </>
  );
};

export default Types;
/*
//컴포넌트 제작방법 1
export default function Types({ name }: Props) {
  return (
    <>
      <h2>Hello {name}</h2>
    </>
  );
}
*/
