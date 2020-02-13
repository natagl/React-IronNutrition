import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
class App extends Component {
  state = {
    foods,
    foodForm: false
  };

  showFoods = () => {
    let foodList = this.state.foods.map((eachFood, i) => {
      return <FoodBox key={i} {...eachFood} />;
    });
    return foodList;
  };

  toggleFoodForm = () => {
    this.setState({
      foodForm: !this.state.foodForm
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.toggleFoodForm();
    console.log("submit ", this.state);
    let newFoods = [...this.state.foods];
    newFoods.unshift({
      name: this.state.food,
      calories: null,
      quantity: 1,
      image: null
    });

    this.setState({
      foods: newFoods
    });
  };

  handleInputChange = e => {
    console.log("change", e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value }); //food : 'lasagna'
  };

  showFoodForm = () => {
    if (this.state.foodForm) {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <input onChange={this.handleInputChange} type="text" name="food" />
          <input type="submit" />
        </form>
      );
    } else {
      return <button onClick={this.toggleFoodForm}>Add New Food</button>;
    }
  };

  render() {
    return (
      <div className="App">
        <br></br>
        {this.showFoodForm()}
        <br></br>

        {this.showFoods()}
      </div>
    );
  }
}

export default App;
