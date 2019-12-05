import React from "react";

class Screenshots extends React.Component {
  render() {
    var test = [...this.props.data];
    var filtered = test.filter(test => test.id === this.props.match.params.id);
    console.log(
      ">>>>>><<>",
      filtered,
      test.id,
      test,
      this.props.match.params.id
    );
    return (
      <div className="game">
        <h1>Screenshots</h1>
        {filtered[0].short_screenshots.map((img, screenshotIndex) => (
          <img key={screenshotIndex} src={img.image} alt="screenshots" />
        ))}
      </div>
    );
  }
}

export default Screenshots;
