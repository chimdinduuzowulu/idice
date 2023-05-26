import React from "react";
import IdiceLogo from '../assets/img/iDICELOGOTransparent.png';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-2 intro-text">
                <h1 className="text-center w-full px-32">
                  {/* {props.data ? props.data.title : "Loading"} */}
                  <img src={IdiceLogo} />
                </h1>
                <div className="w-full px-[190px]">
                <p className="px-32">{props.data ? props.data.paragraph : "Loading"}</p>
                <p className="px-32"><a
                  href="#features"
                  className="w-full mx-[62px]text-center py-6 px-12 mx-32 page-scroll bg-white rounded-sm text-black shadow-lg hover:bounce"
                >
                  Learn More
                </a>{" "}</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
