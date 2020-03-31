import React from "react";
import concrete from "./concrete.js";

export default class asphalt extends React.Component {
  render() {
    return (
      <form data-testid="edit-submission" onSubmit={this.handleSubmit}>
        <h3>Asphalt Calculator</h3>

        <concrete />
      </form>
    );
  }
}
