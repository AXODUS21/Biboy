import { socials } from "@constants";
import Image from "@node_modules/next/image";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="lg:flex grid max-md:gap-2 max-md:text-center justify-center lg:justify-between border-t-2 py-5 items-center px-5 text-sm font-semibold">
      <div className="">
        ©{year} XellTech <br className="max-md:hidden" /> All rights reserved
      </div>
      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a href={social.url} className="" key={social.id}>
            {social.icon}
          </a>
        ))}
      </div>
      <div className="">VAT: 12345678</div>
    </div>
  );
};

export default Footer;
