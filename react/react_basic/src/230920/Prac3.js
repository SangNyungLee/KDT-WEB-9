import React, { Component } from "react";
import "./prac3.css";

class Prac3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 1,
      writer: "",
      title: "",
      now: "전체",
      searchWriter: "",
      searchTitle: "",
      result: [],
    };
    this.write = this.write.bind(this);
    this.search = this.search.bind(this);
  }

  write() {
    var writer = this.state.writer;
    var title = this.state.title;
    var userInfo = { id: this.state.id, writer: writer, title: title };

    const newUsers = [...this.state.users, userInfo];

    this.setState({
      users: newUsers,
      id: this.state.id + 1,
      writer: "",
      title: "",
    });
  }

  search() {
    const searchResult = this.state.users.filter((value) => {
      // console.log("작성자 : ", value.writer); //id, writer, title
      // console.log("타이틀 : ", value.title);
      console.log(value[this.state.now]);
      const type = value[this.state.now];
      const include = type.include(this.state.now);
      if (!include) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ result: searchResult });
  }

  render() {
    const { writer, title, users, result } = this.state;
    return (
      <>
        <div>
          작성자 :{" "}
          <input
            type="text"
            className="headWriter"
            value={writer}
            onChange={(e) => this.setState({ writer: e.target.value })}
          />
          제목 :{" "}
          <input
            type="text"
            className="headTitle"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <button onClick={this.write}>작성</button>
        </div>
        <br />
        <select onChange={(e) => this.setState({ now: e.target.value })}>
          <option>전체</option>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          onChange={(e) => this.setState({ now: e.target.value })}
        />
        <button onClick={this.search}>검색</button>

        <table>
          <thead className="tableHead">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <h4>검색결과</h4>
        <table>
          <thead className="tableHead">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </>
    );
  }
}

export default Prac3;
