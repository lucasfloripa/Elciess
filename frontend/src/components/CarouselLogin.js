import React from "react";

const CarouselPage = () => {
  return (
    <div className="container-fluid px-0">
      <div className="carousel slide" data-ride="carousel" data-pause="false">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item carousel-image-one min-vh-100 active"></div>
          <div className="carousel-item carousel-image-two min-vh-100"></div>
          <div className="carousel-item carousel-image-three min-vh-100"></div>
          <div className="carousel-item carousel-image-four min-vh-100"></div>
          <div className="carousel-item carousel-image-five min-vh-100"></div>
          <div className="carousel-item carousel-image-six min-vh-100"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
