import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from "./robots";//misto vlastniho souboru napojujeme externi API
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // .then((users) => ({  })); //v tomto pripade by se zobrazilo LOADING... viz nize
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>LOADING...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1"> RoboFriends </h1>{" "}
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;

//jakmile return vice polozek, musim je dat do div, aby se vracela jen jedna komponenta
//a taky musim dat kulate zavorky
