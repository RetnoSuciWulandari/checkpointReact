import React from "react";

class Screenshots extends React.Component {
  render() {
    console.log(this.props.match.params, this.props.data);
    return (
      <div className="game">
        <h1>Screenshots</h1>
        {/* {
          this.props.data[this.props.dataId].short_screenshots[
            this.props.screenshots
          ]
        } */}
      </div>
    );
  }
}

export default Screenshots;
