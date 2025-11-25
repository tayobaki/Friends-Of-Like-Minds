import Image from "next/image";
import React from "react";

const Resources = () => {
  return (
      <div className="bg-[#540F0A] px-3 pt-[6%] pb-[9%] text-white">
        <div className="max-w-[990px] mx-auto w-full">
          <div className="text-right">
            <h1 className="text-3xl font-bold mb-7">Our resources</h1>
            <p>Articles, Updates and Reports from our community</p>
          </div>

          <div className="pt-6 grid grid-cols-2 gap-7 items-center">
            <div className="border border-white rounded p-3">
              <Image src={""} alt="resourceImg" width={300} height={200} />
              <p className="text-sm font-medium my-5">
                Policy Brief – Empowering Nigerian Secondary School Students
                through Leadership Clubs, Life Skills and TVET Training: A
                Pathway to Reducing Youth Unemploymentt
              </p>
              <button className="underline underline-offset-1">
                Read More
              </button>
            </div>
            <div className="border border-white rounded p-3">
              <Image src={""} alt="resourceImg" width={300} height={200} />
              <p className="text-sm font-medium my-5">
                Policy Brief – Empowering Nigerian Secondary School Students
                through Leadership Clubs, Life Skills and TVET Training: A
                Pathway to Reducing Youth Unemploymentt
              </p>
              <button className="underline underline-offset-1">
                Read More
              </button>
            </div>
            <div className="border border-white rounded p-3">
              <Image src={""} alt="resourceImg" width={300} height={200} />
              <p className="text-sm font-medium my-5">
                Policy Brief – Empowering Nigerian Secondary School Students
                through Leadership Clubs, Life Skills and TVET Training: A
                Pathway to Reducing Youth Unemploymentt
              </p>
              <button className="underline underline-offset-1">
                Read More
              </button>
            </div>
          </div>
        </div>
        
      </div>
  );
};

export default Resources;
