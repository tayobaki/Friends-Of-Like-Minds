import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header
      style={{
        boxShadow:
          "0px 0px 4px 0px rgba(170.99999999999997, 170.99999999999997, 170.99999999999997, 0.25098039215686274)",
      }}
      className="h-[100px] bg-[#FBF9ED] border-b border-black w-full px-8 py-4 flex items-center"
    >
      <div className="max-w-[1500px] w-full mx-auto flex items-center justify-between">
        {/* <Image src={""} alt="Logo" width={60} height={60} /> */}
        <ul className="uppercase flex items-center gap-5">
          {navLinks.map((link) => (
            <li
              key={link.link}
              className="font-semibold relative flex items-center cursor-pointer group hover:text-black/60 duration-500 transition gap-1"
            >
              <>{link.link}</>
              {link.dropdownIcon && (
                <Icon
                  icon={"line-md:chevron-down"}
                  color="#000"
                  fontSize={20}
                  className="group-hover:-rotate-180 transition duration-500"
                />
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-sm text-white">
          <button className="bg-[#540f0a] h-14 py-1.5 flex items-center justify-center px-4 text-nowrap text-center rounded uppercase font-semibold">
            <Icon icon={'stash:search-duotone'} fontSize={20} className=""/>
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
    link: "home",
  },
  {
    link: "who  we are",
    dropdownIcon: true,
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
