import React from "react";

class Screenshots extends React.Component {
  render() {
    //var test = [...this.props.data];
    var id = this.props.match.params.id;
    var data = this.props.data.filter(item => item.id == id);
    //console.log(data);
    //console.log(">>>>>><<>", data, item.id, item, this.props.match.params.id);
    //map, filter and reduce returns array not object
    return (
      <div className="game">
        <h1>Screenshots</h1>
        {data[0].short_screenshots.map((picture, screenshotIndex) => (
          <img key={screenshotIndex} src={picture.image} alt="screenshots" />
        ))}
      </div>
    );
  }
}

export default Screenshots;
