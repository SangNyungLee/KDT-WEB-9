import ClassComponent from "./230919/ClassComponent";
import FunctionComponent from "./230919/FunctionComponent";
import WormComponent from "./230919/WormComponent";
import Test from "./230919/Test";
import Test2 from "./230919/Test2";
import FoodComponent from "./230919/FoodComponent";
import BookComponent from "./230919/BookComponent";
import Event from "./230919/Event";
import EventClass from "./230919/EventClass";
import EventComponent from "./230919/EventComponent";

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
      {/* <EventClass></EventClass> */}
      <EventComponent message={"메시지입니다.."}></EventComponent>
    </>
  );
}

export default App;
