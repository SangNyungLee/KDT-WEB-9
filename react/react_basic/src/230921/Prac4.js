import { useState } from "react";

export default function Prac4() {
  const [scText, setText] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [id, setId] = useState(0);
  //데이터를 넣을 빈 배열
  const [checkedList, setCheckedList] = useState([]);
  const [checkSchedule, setCheckSchedule] = useState([]);

  const onCheckedElement = (checked, scText, id) => {
    console.log("체크된값", checked, scText, id);
    const user = { id: Number(id), scText: scText };
    if (checked) {
      //   setCheckedList((prevList) => [...prevList, user]);
      console.log(user);
      setCheckSchedule((prevList) => prevList.filter((item) => item.id !== id));
    } else if (!checked) {
      //   setCheckedList((prevList) => prevList.filter((user) => user.id !== id));
      setCheckSchedule((prevList) => [...prevList, user]);
    }
  };

  const addSchedule = () => {
    const user = { id, scText };
    const users = [...schedule, user];
    setSchedule(users);
    setCheckSchedule(users);
    setId(id + 1);
  };

  const deleteSchedule = () => {
    // console.log(checkedList);
    // console.log(schedule);
    console.log(checkSchedule);
    // setSchedule(checkedList);
    // console.log(checkedList);
  };

  return (
    <div>
      할일 입력 :{" "}
      <input
        type="text"
        value={scText}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addSchedule}>추가</button>
      <ul>
        {schedule.map((value, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={value.id}
                value={value.scText}
                onChange={(e) =>
                  onCheckedElement(
                    e.target.checked,
                    e.target.value,
                    e.target.id
                  )
                }
                // checked={checkedList.includes(value.scText) ? true : false}
              />
              {value.scText}
            </li>
          );
        })}
      </ul>
      <button onClick={deleteSchedule}>완료한 일 삭제</button>
    </div>
  );
}
