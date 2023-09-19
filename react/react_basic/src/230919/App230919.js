import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import WormComponent from "./WormComponent";
import Test from "./Test";
import Test2 from "./Test2";
import FoodComponent from "./FoodComponent";
import BookComponent from "./BookComponent";
import Event from "./Event";
import EventClass from "./EventClass";
import EventComponent from "./EventComponent";

function App() {
  const book = {
    title: "나의 하루는 4시 40분에 시작된다.",
    author: "김유진",
    price: "13,500원",
    type: "자기계발서",
  };
  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <WormComponent></WormComponent>
      <Test></Test>
      <Test2></Test2> */}
      {/* <ClassComponent name="이상녕" age={28}></ClassComponent> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent myClass={"kdt9"}>나 는 코 딩</FunctionComponent>
      <FunctionComponent></FunctionComponent> */}
      {/* <FoodComponent food={"족발"}></FoodComponent>
      <FoodComponent></FoodComponent> */}
      {/* <BookComponent book={book}></BookComponent> */}
      {/* <Event /> */}
      <EventClass></EventClass>
      <EventComponent message={"메시지입니다.."}></EventComponent>
    </>
  );
}

export default App;
