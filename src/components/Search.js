import React, { Component } from "react";
import Input from "@material-ui/core/Input";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.handleChange;
  }

  render() {
    return (
      <Input
        onChange={(e) => this.handleChange(e.target.value)}
        className="search-box"
        placeholder="Enter Country Name"
      />
    );
  }
}

export default Search;
