import React from "react";
import Data from "../data/data";
import RenderData from "./RenderData";
import "../css/nav.css";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui menu row">
        <div className="column eight wide">
          <nav>
            <ul>
              <Data />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default App;
