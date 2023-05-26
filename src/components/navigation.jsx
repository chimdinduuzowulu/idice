import React from "react";
import IdiceLogo from '../assets/img/iDICELOGO.png'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={IdiceLogo} className='h-20'/>
          </a>{" "}
        </div>

        <div
        // collapse
          className=" navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="hover:text-[#822bd8] cursor-pointer">
                <span className="hover:text-[#822bd8] text-[#fb5904] text-[#fb5904] font-bold"> Executing Agency</span>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#822bd8] cursor-pointer">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> About</span>
              </a>
            </li>
            
            <li>
              <a href="#Goals" className="page-scroll">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> Goals</span>
                
              </a>
            </li>
             <li>
              <a href="#objectives" className="page-scroll">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> Objectives</span>
                
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> Gallery</span>
              </a>
            </li>
            {/* <li>
              <a href="#faq" className="page-scroll">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> FAQ</span>
                
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> Team</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
              <span className="hover:text-[#822bd8] text-[#fb5904] font-bold"> Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
