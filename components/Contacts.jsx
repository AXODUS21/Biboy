"use client";
import { Element } from "@node_modules/react-scroll/modules";
import React, { useEffect } from "react";
import CustomTitle from "./CustomTitle";

const Contacts = () => {
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Element name="book">
      <section className="mb-10 !h-fit pt-20">
        <div className="flex flex-col text-center items-center mb-10">
          <CustomTitle title={"Contact Us"} />
          <div className="page_header">
            Want More <span className="text-primary">Qualified</span> Leads?
          </div>
          <p className="text-xl opacity-65">
            Schedule a call with our consultant.
          </p>
        </div>

        <div className="relative min-w-[84vw] lg:px-20">
          <div className="relative z-20 mb-5 border-2 border-default border-opacity-45 rounded-3xl overflow-hidden lg:p-7 h-[90vh]">
            <div
              className="calendly-inline-widget h-full bg-default"
              data-url={`https://calendly.com/lubi-axellerosh/30min?hide_gdpr_banner=1&date=${today}`}
            ></div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contacts;
