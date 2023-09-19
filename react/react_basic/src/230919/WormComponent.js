import { Component } from "react";
import "./worm.css";
class WormComponent extends Component {
  render() {
    return (
      <>
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
        <div className="circle five"></div>
        <div className="circle eye"></div>
        <div className="circle eye2"></div>
        <img src="img/pngwing.png" className="pic" />
      </>
    );
  }
}

export default WormComponent;
