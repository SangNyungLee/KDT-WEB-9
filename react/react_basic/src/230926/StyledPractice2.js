import styled from "styled-components";
import { useState } from "react";

const _addButton = styled.button`
  background-color: aqua;
  padding: 5px;
  margin: 5px;
`;
const _addinput = styled.input``;
const _listDiv = styled.div`
  width: 300px;
  height: 200px;
  overflow-y: auto;
  text-align: center;
`;
const _styledLi = styled.li`
  list-style-type: none;
  &::before {
    content: "🙏";
    margin-right: 5px;
  }
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
        <ul>
          {checkList.map((todo, index) => {
            return <_styledLi key={index}>{todo}</_styledLi>;
          })}
        </ul>
      </_listDiv>
    </>
  );
}
