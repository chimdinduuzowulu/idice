import React from "react";
import BG from "../assets/img/FG.jpeg";

export const Objectives = (props) => {
  return (
  <div id="serviceBg objectives" className="bg-cover bg-no-repeat" style={{backgroundImage: `url(${BG})`}}>
    <div id="objectives" className="text-center">
    {/* objectives */}
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl font-bold text-[#fe604c] font-bold">Our Objectives</h2>
          <p>
            I-DICE is commited to achieving the our objectives.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="objectives-desc">
                    <h3>{d.name}</h3>
                    <p className="text-2xl leading-[30px] text-bold">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
    </div>
  );
};
