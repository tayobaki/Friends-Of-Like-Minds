"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <header
      style={{
        boxShadow:
          "0px 0px 4px 0px rgba(170.99999999999997, 170.99999999999997, 170.99999999999997, 0.25098039215686274)",
      }}
      className="h-[100px] bg-[#FBF9ED] shadow-xl border-b border-black/10 w-full px-8 py-4 flex items-center"
    >
      <div className="max-w-[1500px] w-full mx-auto flex items-center justify-between">
        <h1 className="text-xl font-black cursor-pointer">
          Friends Of Like Minds, <br /> Akabor Development Initiative
        </h1>
        <ul className="uppercase h-full lg:flex items-center gap-5 hidden">
          {navLinks.map((link, index) => (
            <li
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              key={link.link}
              className="font-semibold relative h-9 flex items-center justify-center cursor-pointer group hover:text-black/60 duration-500 transition gap-1"
            >
              {link.link}
              {link.dropdownIcon && (
                <Icon
                  icon={"line-md:chevron-down"}
                  color="#000"
                  fontSize={20}
                  className="group-hover:-rotate-180 transition duration-500"
                />
              )}
              {openIndex === index && link.dropdownIcon && (
                <div className="">
                  <ul className="absolute left-0 top-9 bg-[#540F0A] w-40 rounded overflow-hidden shadow-lg">
                    {link.dropdownItems?.map((item, idx) => (
                      <Link
                        href={item.link}
                        key={idx}
                        className="py-2 hover:bg-orange-300 cursor-pointer block text-white hover:text-black transition duration-500 overflow-hidden px-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-sm text-white">
          <button className="bg-[#540f0a] h-14 py-1.5 flex items-center justify-center px-4 text-nowrap text-center rounded uppercase font-semibold">
            <Icon icon={"stash:search-duotone"} fontSize={20} className="" />
          </button>
          <button className="bg-[#540f0a] h-14 py-1.5 flex items-center justify-center px-4 text-nowrap text-center rounded uppercase font-semibold">
            Donate Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const navLinks = [
  {
    link: "who  we are",
    dropdownIcon: true,
    dropdownItems: [
      {
        title: "About",
        link: "/about-us",
      },
      {
        title: "History",
        link: "/history",
      },
    ],
  },
  {
    link: "our work",
    dropdownIcon: true,
  },
  {
    link: "publications",
    dropdownIcon: true,
  },
  {
    link: "our resources",
    dropdownIcon: true,
  },
  {
    link: "blog",
  },
  {
    link: "join us",
    dropdownIcon: true,
  },
];
