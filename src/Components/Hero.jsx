import React from "react";

function Hero() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ position: "relative" }}
    >
      <div className="picHub-mainHeading">
        <h2>picHub</h2>
        <p> Your Gateway to Stunning Stock Images</p>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            className="d-block w-100 crosual-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1585499831588-1b4d39e9a824?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            className="d-block w-100 crosual-image"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1415356838286-df6fd593e8b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
            className="d-block w-100 crosual-image"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
