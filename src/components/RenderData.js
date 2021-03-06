import React from "react";
import Data from "../data/data";

// console.log(typeof Data)

const RenderData = (person) => {
  //console.log(person);

  return (
    <div className="ui circular floating red padded grid">
      <a className="ui image label">
        {/* <img className="ui avatar image" src=""></img> */}
        <li>
          <div className="ui blue left pointing label">{person.name}</div>

          <div className="ui red left pointing label">{person.phone}</div>

          <div className="ui basic green label ">{person.address}</div>
        </li>
      </a>
    </div>
  );
};

export default RenderData;
