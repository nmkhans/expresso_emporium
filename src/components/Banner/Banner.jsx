import React from "react";
import BannerImg from "../../assets/more/3.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BannerImg})` }}
      className="bg-no-repeat bg-center bg-cover py-[160px]"
    >
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="basis-[50%]"></div>
          <div className="basis-[50%]">
            <div className="text-white">
              <h2 className="text-4xl font-medium mb-4">
                Would you like a Cup of Delicious Coffee?
              </h2>
              <p className="leading-7 mb-5">
                It's coffee time - Sip & Savor - Relaxation in every
                sip! Get the nostalgia back!! Your companion of every
                moment!!! Enjoy the beautiful moments and make them
                memorable.
              </p>
              <button className="btn btn-primary text-accent text-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
