import React from "react";

const OurApproach = () => {
  return (
    <div className="bg-[#540F0A] px-3 pt-[6%] pb-[9%] text-white">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="">
          <h1 className="text-3xl font-bold mb-7">Our Approach</h1>
          <p>
            We believe that if the energy is well harnessed, it can lead us on
            the path to greatness.
          </p>
        </div>

        <div className="py-9 grid grid-cols-3 gap-7 items-start">
          {ourApproach.map((approach, idx) => (
            <div key={idx} className="border border-[#FBF9ED] rounded py-9 px-6">
              <h1 className="">{approach.title}</h1>

              <p className="text-sm text-white/70 my-5">{approach.desc}</p>
            </div>
          ))}
        </div>
        <div className="my-16 border border-[#FBF9ED] rounded p-9 gap-4 flex items-center flex-col justify-center text-center mx-14">
          <h1 className="text-4xl font-bold">ETA Aids</h1>
          <div className="flex items-center gap-4">
            <h1>Technology</h1>
            <h1>Technology</h1>
            <h1>Technology</h1>
            <h1>Technology</h1>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-7">Our Values</h1>
          <div className="grid grid-cols-2 items-start gap-8 mx-14">
            {ourValues.map((value, idx) => (
              <div key={idx} className="border border-[#FBF9ED] rounded p-9">
                <h1 className="">{value.title}</h1>

                <p className="text-sm font-medium my-5">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;

const ourApproach = [
  {
    title: "Ecosystem Building",
    desc: "Through its programmes and interventions, Friends Of Like Minds, Akabor Development Initiative enlists, equips and empowers other youth-led and youth focused organisations across Africa. Through its programmes and interventions, Friends Of Like Minds, Akabor Development Initiative enlists, equips and empowers other youth-led and youth focused organisations across Africa.",
  },
  {
    title: "Thought Leadership",
    desc: "Friends Of Like Minds, Akabor Development Initiative continues to serve as a thought leader that generates knowledge products and evidence-based models that have lasting impact on policies and development programmes.",
  },
  {
    title: "Thought Leadership",
    desc: "Friends Of Like Minds, Akabor Development Initiative continues to serve as a thought leader that generates knowledge products and evidence-based models that have lasting impact on policies and development programmes.",
  },
];

const ourValues = [
  {
    title: "Audacity",
    desc: "We believe in being bold and challenging the status quo to catalyze the change we want to see in Africa.",
  },
  {
    title: "Respect",
    desc: "We are committed to working at the highest level of professionalism and upholding the dignity of all our stakeholders.",
  },
];
