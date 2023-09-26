import styled from "styled-components";
import { useState } from "react";
//기본 사용방법
const _Boxone = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
  color: white;
`;

//props를 이용하는 방법
const _Boxtwo = styled.div`
  background-color: ${(props) => props.color};
  width: 150px;
  height: 150px;
`;

//상속 받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
  /* background-color: ${(props) => props.color}; */
  /* width: 100px; */
  /* height: 100px; */
  border-radius: 50%;
`;

//기존태그를 이름만 바꿔서 사용하는 방법 => as 키워드 사용
const _Btn = styled.button`
  background-color: mediumorchid;
  color: azure;
  padding: 10px 15px;
  border-radius: 4px;
`;

//html 태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({ required: true })`
  background-color: yellow;
`;

//중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  line-height: 200px;
  text-align: center;
  //다른 컴포넌트를 불러와서 사용할 수 있다
  ${_Input} {
    background-color: dimgrey;
  }

  p {
    color: white;
    font-weight: bold;
    //pseudo
    &:hover {
      font-size: 30px;
    }
  }
`;
export default function StyledComponent() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div>
      <div>
        <_Boxthree>
          <p>Hello Styled</p>
          <_Input />
        </_Boxthree>
        {/* <_Boxone as="header"></_Boxone> */}
        {/* <_Boxtwo color={"red"}></_Boxtwo>
        <_Boxtwo color={"orange"}></_Boxtwo>
        <_Circle color={"green"}></_Circle> */}
        {/* <_Btn>클 릭 버 튼 </_Btn>
        <_Btn as="a" href="https://www.naver.com">
          에이태그
        </_Btn> */}
        <_Input />
        <_Input />
        <_Input />
      </div>
      <div></div>
    </div>
  );
}
