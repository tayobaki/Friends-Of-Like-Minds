import React from "react";

const Updated = () => {
  return (
    <div className="max-w-full mx-auto py-[6%] flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-4xl font-semibold">Stay updated</h1>
      <p className="text-lg font-medium text-black/60">
        Stay up to date on our entrepreneurs, events, research and more.
      </p>
      <div className="flex items-center gap-4">
        <input className="border border-black text-black/40 pr-12 pl-7 py-4" type="text" placeholder="Your Name" />
        <input className="border border-black text-black/40 pr-12 pl-7 py-4" type="email" placeholder="Your Email" />
        <button className="bg-[#540F0A] text-white px-12 py-4 cursor-pointer">Subscribe</button>
      </div>
    </div>
  );
};

export default Updated;
