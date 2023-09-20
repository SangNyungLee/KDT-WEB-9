import { Component } from "react";

class Prac1 extends Component{

    styles={
        color: "black",
    }
    state = {
        colorText : "검정색 글씨",
        color : "black"
    }
    redColor = () => {
        this.setState({colorText : "빨간색 글씨", color : "red"})
    }

    blueColor = () => {
        this.setState({colorText : "파란색 글씨", color : "blue"})
    }
    render(){
        return(
            <>
            <div style={{color : this.state.color}}>{this.state.colorText}</div>
            <button onClick={this.redColor}>빨간색</button>
            <button onClick={this.blueColor}>파란색</button>
            </>
        )
    }
}
export default Prac1;