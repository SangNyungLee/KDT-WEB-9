import styled from "styled-components";
import { useState } from "react";

const _addButton = styled.button``;
const _addinput = styled.input``;
const _listDiv = styled.div`
  height: 200px;
  overflow-y: auto;
`;
export default function StyledPractice2() {
  const [text, setText] = useState("");
  const [checkList, setList] = useState([]);

  const addList = () => {
    const lists = [...checkList, text];
    setList(lists);
    setText("");
  };
  return (
    <>
      <_addinput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <_addButton onClick={addList}>Add</_addButton>
      <_listDiv>
        {checkList.map((todo, index) => {
          return <div key={index}>{todo}</div>;
        })}
      </_listDiv>
    </>
  );
}
