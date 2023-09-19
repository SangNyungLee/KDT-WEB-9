import PropTypes from "prop-types";
import "./book.css";
function BookComponent(props) {
  return (
    <>
      <div>
        <h1>이번 주 베스트셀러</h1>
        <div className="imgDiv">
          <img src="/img/booktitle.jpg"></img>
        </div>
        <h2>{props.book.title}</h2>
        <h3>저자 : {props.book.author}</h3>
        <h3>판매가 : {props.book.price}</h3>
        <h3>구분 : {props.book.type}</h3>
      </div>
    </>
  );
}
export default BookComponent;
