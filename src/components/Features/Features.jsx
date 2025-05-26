import React from "react";
import FeatureImgOne from "../../assets/icons/1.png";
import FeatureImgTwo from "../../assets/icons/2.png";
import FeatureImgThree from "../../assets/icons/3.png";
import FeatureImgFour from "../../assets/icons/4.png";

const Features = () => {
  return (
    <section className="bg-[#ECEAE3] py-[80px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-x-5">
          <div className="text-accent">
            <img
              className="w-12"
              src={FeatureImgOne}
              alt="Feature image"
            />
            <h4 className="text-2xl my-2">Awesome Aroma</h4>
            <p>
              You will definitely be a fan of the design & aroma of
              your coffee
            </p>
          </div>
          <div className="text-accent">
            <img
              className="w-12"
              src={FeatureImgTwo}
              alt="Feature image"
            />
            <h4 className="text-2xl my-2">High Quality</h4>
            <p>
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="text-accent">
            <img
              className="w-12"
              src={FeatureImgThree}
              alt="Feature image"
            />
            <h4 className="text-2xl my-2">Pure Grades</h4>
            <p>
              The coffee is made of the green coffee beans which you
              will love
            </p>
          </div>
          <div className="text-accent">
            <img
              className="w-12"
              src={FeatureImgFour}
              alt="Feature image"
            />
            <h4 className="text-2xl my-2">Proper Roasting</h4>
            <p>
              Your coffee is brewed by first roasting the green coffee
              beans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
