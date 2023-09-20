import React, { Component } from "react";
import './prac3.css'

class Prac3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 1,
      writer: "",
      title: "",
      now: "전체", // 기본 검색 옵션을 "전체"로 설정
      searchWriter: "",
      searchTitle: "",
    };
    this.write = this.write.bind(this);
    this.search = this.search.bind(this);
  }

  write() {
    var writer = this.state.writer;
    var title = this.state.title;
    var userInfo = { id: this.state.id, writer: writer, title: title };

    // 새로운 행을 생성하여 users 배열에 추가
    // const newRow = (
    //   <tr key={this.state.id}>
    //     <td>{this.state.id}</td>
    //     <td>{title}</td>
    //     <td>{writer}</td>
    //   </tr>
    // );

    const newUsers = [...this.state.users, userInfo];

    this.setState({
      users: newUsers,
      id: this.state.id + 1,
      writer: "",
      title: "",
    });
  }

  search() {
    console.log(this.state.users)
    console.log(...this.state.users);
  }

  render() {
    return (
      <>
        <div>
          작성자 :{" "}
          <input
            type="text"
            className="headWriter"
            value={this.state.writer}
            onChange={(e) => this.setState({ writer: e.target.value })}
          />
          제목 :{" "}
          <input
            type="text"
            className="headTitle"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <button onClick={this.write}>작성</button>
        </div>
        <br />
        <select onChange={(e) => this.setState({ now: e.target.value })}>
          <option>전체</option>
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input
          type="text"
          onChange={(e) => this.setState({now: e.target.value})}
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
          <tbody>{this.state.users.map((value,index)=>{
            return <tr key={index}>
                <td>{index}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
            </tr>
          })}</tbody>
        </table>
      </>
    );
  }
}

export default Prac3;