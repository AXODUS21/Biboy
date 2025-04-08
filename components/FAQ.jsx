"use client"
import React, { useState } from 'react'
import { Element } from 'react-scroll'
import CustomTitle from './CustomTitle';
import { faqs } from '@constants';
import { FaChevronDown } from '@node_modules/react-icons/fa';

const FAQ = () => {
   const [activeId, setActiveId] = useState("");

   const handleActiveId = (id) => {
     if (id === activeId) {
       setActiveId(null);
     } else {
       setActiveId(id);
     }
   };

  return (
    <Element name="FAQ">
      <div className="pt-20 mb-10">
        <div className="flex-col items-center flex mb-12">
          <CustomTitle title={"FAQ"} />
          <h1 className="page_header mb-1">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl opacity-65 text-center">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid gap-10 px-10 lg:w-2/3">
            {faqs.map((faq) => {
              const active = activeId === faq.id;

              return (
                <div
                  key={faq.id}
                  onClick={() => handleActiveId(faq.id)}
                  className={`w-full border-b-2 overflow-hidden relative transition-all duration-500 cursor-pointer ${
                    active ? "h-20 max-sm:h-28" : "h-10"
                  }`}
                >
                  <div className="text-xl font-semibold flex justify-between items-center mb-5">
                    <p className="text-xl max-sm:text-base">{faq.question}</p>
                    <div
                      className={`transition-all duration-400 ${
                        active ? "rotate-180" : "rotate-0"
                      }`}
                    >

                      <FaChevronDown size={25}/>
                    </div>
                  </div>

                  <div className="">{faq.answer}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default FAQ