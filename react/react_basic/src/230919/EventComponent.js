import { Component } from "react";

class EventComponent extends Component {
  constructor(props) {
    super(props);

    this.EventClick = this.EventClick.bind(this);
  }
  EventClick() {
    alert(this.props.message);
  }
  render() {
    return (
      <>
        <button onClick={this.EventClick}>show Message</button>
      </>
    );
  }
}
export default EventComponent;
