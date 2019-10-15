import React from "react";

const places = [
  {
    destination:"Toulouse",
    country:"France",
    photo:"https://i.imgur.com/mZZUFSL.png",
    distance:"1000"
  },
  {
    destination:"London",
    country:"UK",
    photo:"https://i.imgur.com/ddsvKtH.png",
    distance:"1550"
  },
  {
    destination:"Kraków",
    country:"Poland",
    photo:"https://i.imgur.com/ddPJwfY.png?1",
    distance:"2600"
  },
  {
    destination:"Hong Kong",
    country:"Hong Kong (technically China though)",
    photo:"https://i.imgur.com/HhhEzbl.jpg",
    distance:"11,000"
  },
  {
    destination:"Tokyo",
    country:"Japan",
    photo:"https://i.imgur.com/TBBLp75.png",
    distance:"11,150"
  }
]

const Travel = () => (
  <div>
    {places.map(place => (
      <div>
        <p>I went to {place.destination}, in {place.country}, located over {place.distance} km from Lisbon! </p>
        <img src={place.photo} alt={place.destination}></img>
      </div>
    ))}
  </div>
);

export default Travel;













/* From React 1

import React, {Fragment} from "react";

const Travel = props => (
  <Fragment>
    <p>I went to {props.destination}, in {props.country}, located over {props.distance} km from Lisbon! </p>
    <img src={props.photo} alt={props.destination}></img>
  </Fragment>
);

export default Travel;


*/