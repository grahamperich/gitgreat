import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: []
    }
  }


  render() {
    var mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDMwCZtOT8kkwzQuDfktBsoC6hUR5USgRI
          &q=place_id:${this.props.featuredEvent.location.placeID}`;
    var styles = {
      map: {
        height: "600px",
        width: "450px",
        border: "0"
      }
    }
    return (
      <div>
      <h3>Information</h3>
        <iframe
          style={styles.map}
          frameBorder="0"
          src={mapSrc} allowFullScreen>
        </iframe>
      </div>);
  }
}

module.exports = Info;