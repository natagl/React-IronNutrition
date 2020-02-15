import React, { Component } from "react";

class TodayFood extends Component {
  displayFood1 = () => {
    let copyOfDisplayFoodArr = this.props.displayFoodArr.map(
      (eachFood, index) => {
        return <li>{eachFood.name}</li>;
      }
    );
    return copyOfDisplayFoodArr;
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Today's Food</h1>
        <ul>
          {this.displayFood1()}
          {/* <li>foodName</li> */}
          {/* <li>AnotherFoodName</li> */}
          {/* <li></li> */}
          {/* <li></li> */}
          {/* <li></li> */}
          {/* <li></li> */}
        </ul>
        <p>Calories : 0</p>
      </div>
    );
  }
}

export default TodayFood;
