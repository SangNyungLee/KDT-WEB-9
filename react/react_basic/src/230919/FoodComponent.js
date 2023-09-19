import { Component } from "react";
import PropTypes from "prop-types";

class FoodComponent extends Component {
  styles = {
    color: "red",
  };
  render() {
    return (
      <>
        <h2>
          나는 <span style={this.styles}>{this.props.food}</span>을 좋아합니다.
        </h2>
      </>
    );
  }
}

FoodComponent.defaultProps = {
  food: "짜장면",
};
export default FoodComponent;
