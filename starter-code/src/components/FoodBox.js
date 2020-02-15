import React, { Component } from "react";

export default class FoodBox extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => this.props.addFood(this.props.addFoodIndex)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

// function someRandomFunc(parameterName){
//   console.log(parameterName)
// }

// someRandomFunc("thisValue")

// <someRandomFunc propName="thisValue"/>
