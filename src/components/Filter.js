import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
  }

  handleClick = (event) => {

    let filter = event.target.dataset.filter;

    this.props.filterTodo(filter);
  };

  render() {
    return (
      <div>
          <button onClick={this.handleClick} data-filter="SHOW_ALL">
            All
          </button>
          <button onClick={this.handleClick} data-filter="SHOW_ACTIVE">
            Active
          </button>
          <button onClick={this.handleClick} data-filter="SHOW_COMPLETE">
            Complete
          </button>
      </div>
    );
  }
}

export default Filter;
