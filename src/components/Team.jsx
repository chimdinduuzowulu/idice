import React from "react";
import FGN from '../assets/img/FG.jpeg';

export const Team = (props) => {
  return (
    <div id="team" className="w-full text-center overflow-hidden">
      <div className="w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${FGN})`}}>
      <div className="container-fluid bg-[rgba(0,0,0,0.77)] py-24 text-white">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 className="text-white font-bold text-3xl">Participating Organization</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row" className="w-full flex justify-center items-center flex-wrap gap-8">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team rounded-2xl shadow-3xl bg-white p-10 h-[350px] m-6 hover:cursor-pointer hover:bg-gradient-to-r hover:from-gray-300 to-[#7e65fc]">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      {/* <h4 className="text-3xl text-white">{d.name}</h4> */}
                      <p className="font-bold text-2xl text-black">{d.job}</p>
                    </div>
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
