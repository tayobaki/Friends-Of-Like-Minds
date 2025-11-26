import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FBF9ED] shadow-xl border-t border-orange-200 px-8 py-[4%] text-black">
      <div className="max-w-[1500px] mx-auto w-full flex items-start justify-between">
        <div className="pr-[10%] flex-1">
          <p>
            Friends Of Like Minds, Akabor Development Initiative is a
            youth-focused leadership development organization committed to
            raising leaders who will transform Africa; through interventions for
            young people, that bridges the gap in five areas: Education,
            Entrepreneurship, Employability, Active Citizenship, and Health and
            Wellbeing.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Quick Links</h1>
          <ul className="mt-4 flex flex-col gap-4 capitalize text-sm font-medium">
            {quickLinks.map((link, idx) => (
              <Link href={link.link} key={idx}>{link.title}</Link>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Get In Touch</h1>
          <ul className="mt-4 flex flex-col gap-4 capitalize text-sm font-medium">
            <p>
              2/4 Custom Street, Nigerian Exchange Group Building, Marina, Lagos
              State, Nigeria.
              <br />
              Email: info@leapafrica.org Hours: Mon-Fri 9:00AM - 5:00PM
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const quickLinks = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Resources",
    link: "/resources",
  },
  {
    title: "Volunteer",
    link: "/volunteer",
  },
  {
    title: "Priacy Policy",
    link: "/privacy-policy",
  },
];
