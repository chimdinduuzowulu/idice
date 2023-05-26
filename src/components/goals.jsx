import React from "react";

export const Goals = (props) => {
  return (
    <div id="Goals" className="bg-[#4089fb] py-32 text-white">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-white font-bold text-3xl">GOALS OF I-DICE</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial flex gap-8">
                    <div className="rounded-full w-[30px] h-[30px] bg-white p-6">                      
                    </div>
                    <div className="testimonial-content">
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
