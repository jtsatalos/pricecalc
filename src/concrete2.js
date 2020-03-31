import React from "react";

export default class concrete2 extends React.Component {
  render() {
    return (
      <form data-testid="edit-submission" onSubmit={this.handleSubmit}>
        <h3>Asphalt Calculator</h3>
      </form>
    );
  }
}
