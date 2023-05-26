import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item max-w-full max-h-[300px] m-2 shadow-xl">
      <div className="hover-bg w-full h-[300px]">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1" className="h-[300px] w-full m-2">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="w-full h-[300px]" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
