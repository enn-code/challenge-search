import React, { Component } from "react";
import CountryList from "./components/CountryList";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleSearchTermUpdate = (updatedSearchTerm) => {
      this.setState({ searchTerm: updatedSearchTerm });
    };
  }

  render() {
    console.log(this.state.searchTerm);
    return (
      <div className="container">
        <center>
          <h1>Country Filter</h1>
        </center>
        <Search
          searchTerm={this.state.searchTerm}
          handleSearchTermUpdate={this.handleSearchTermUpdate}
        />
        <CountryList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
