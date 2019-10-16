import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <div>
    <p>I went to {destination}, in {country}, located over {distance} km from Lisbon! </p>
    <img src={photo} alt={destination}></img>
  </div>
);

export default Travel;







/* From React 2

import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <div>
    <p>I went to {destination}, in {country}, located over {distance} km from Lisbon! </p>
    <img src={photo} alt={destination}></img>
  </div>
);

export default Travel;

*/


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