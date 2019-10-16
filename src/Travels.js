import React from "react";
import Travel from "./Travel";

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

const Travels = () => (
  <div>
    {places.map((place) => {
        // destructures the object
        return <Travel destination={place.destination} country={place.country} photo={place.photo} distance={place.distance}/>;
    }
    )}
  </div>
);

export default Travels;








/* from React 2

import React from "react";
import Travel from "./Travel";

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

const Travels = () => (
  <div>
    {places.map((place) => {
        return <Travel destination={place.destination} country={place.country} photo={place.photo} distance={place.distance}/>;
    }
    )}
  </div>
);

export default Travels;

*/