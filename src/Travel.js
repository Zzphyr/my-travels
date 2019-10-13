import React, {Fragment} from "react";

const Travel = props => (
  <Fragment>
    <p>I went to {props.destination}, in {props.country}, located over {props.distance} km from Lisbon! </p>
    <img src={props.photo} alt={props.destination}></img>
  </Fragment>
);

export default Travel;