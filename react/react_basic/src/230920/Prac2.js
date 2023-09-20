import { Component } from "react";

class Prac2 extends Component{
    state = {
        buttonText : "사라져라",
        text : "안녕하세요",
        display1 : "block",
        display2 : "none",
    }
    //사라져라
    btnClick = () => {
        this.setState({display2 : "block", display1 : "none", text : ""})
    }
    //보여라
    btnOff = () =>{
        this.setState({display2 : "none", display1 : "block", text: "안녕하세요"})
    }
    render(){
        return(
            <>
            <button style={{display : this.state.display2}} onClick={this.btnOff}>보여라</button>
            <button style={{display : this.state.display1}} onClick={this.btnClick}>사라져라</button>
            <div>{this.state.text}</div>
            </>
        )
    }
}
export default Prac2;