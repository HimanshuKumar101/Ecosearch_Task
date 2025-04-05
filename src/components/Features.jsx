import React from 'react';
import leaf from "../assets/leaf.png";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

const Features = () => {
  const features = [
    {
      title: "Optimized Search",
      description: "We provide quality search results, reducing energy consumption by 300%",
      icon: leaf
    },
    {
      title: "Privacy First",
      description: "We don't collect or store any data. We are privacy-focused AI search engine.",
      icon: cross
    },
    {
      title: "Minimal Design",
      description: "Our Design System is minimal to reduce the carbon footprint with user interaction.",
      icon: circle
    }
  ];

  return (
    <section id="2" className="relative pt-60 w-full py-24 bg-[#fdf7f4] mb-60">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-40 bg-repeat bg-left-top"
        style={{
          backgroundImage: 'url(https://framerusercontent.com/images/bROAaoheAqHuPxlolSgUWq9wSM.png)',
          backgroundSize: '250px auto',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] flex flex-col items-center gap-16 px-6">
        
        {/* Title */}
        <div className="w-full max-w-[800px] text-center">
          <h2 className="font-satoshi text-[30px] font-bold leading-[1.1em] tracking-tighter md:text-5xl">
            Build sustainable system's
          </h2>
          <h2 className="font-satoshi text-[30px] font-bold leading-[1.1em] tracking-tighter md:text-5xl">
            with your search
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid w-full grid-cols-1 gap-16 p-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="w-full flex flex-col items-center gap-4">
              
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center">
                <img src={feature.icon} alt={feature.title} className="h-12 w-12 object-contain" />
              </div>

              {/* Feature title with underline */}
              <div className="relative text-center">
                <h3 className="relative z-10 font-satoshi text-[24px] font-bold leading-[1.1em] tracking-tighter">
                  {feature.title}
                </h3>
                <div className="absolute bottom-[-5px] left-1/2 h-1 w-full -translate-x-1/2 skew-x-[20deg] skew-y-[-2deg] rounded-full bg-[#7d9e77]"></div>
              </div>

              {/* Feature description */}
              <p className="text-center text-[16px] font-satoshi font-weight-500 text-base font-medium leading-[1.5em] tracking-tight text-[rgb(153,153,153)] max-w-[270px] ">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
