"use client"
import React from 'react'
import { Element } from 'react-scroll'
import CustomTitle from './CustomTitle';
import { caseStudies } from '@constants';
import Image from '@node_modules/next/image';
import CustomButton from './CustomButton';

const CaseStudies = () => {
  return (
    <Element name="CS">
      <div className="pt-20">
        <div className="flex-col items-center flex mb-14">
          <CustomTitle title={"Case Studies"} />
          <h1 className="page_header mb-1">
            Our <span className="text-primary">Success</span> Stories
          </h1>
          <p className="text-xl opacity-65 text-center">
            Dive deeper into how we've helped businesses achieve remarkable
            results
          </p>
        </div>

        <div className="">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.title}
              className="grid grid-cols-2 max-sm:grid-cols-1 mb-10 px-10"
            >
              <div className="relative h-[600px] bg-black mr-8 rounded-xl">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full"
                />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-accent bg-accent/40 w-fit text-lg px-2 rounded-md mb-2">
                    {caseStudy.industry}
                  </h3>
                  <h2 className="text-white text-4xl font-semibold">
                    {caseStudy.title}
                  </h2>
                </div>
              </div>

              <div className="">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {caseStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white p-4 rounded-xl shadow-lg"
                    >
                      <h2 className="text-3xl font-bold text-primary">
                        {metric.value}
                      </h2>
                      <h3>{metric.label}</h3>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 mb-5">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl">Challenge</h2>

                    <p>{caseStudy.challenge}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl">Solution</h2>

                    <p>{caseStudy.solution}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl">Results</h2>
                    <p>{caseStudy.results}</p>
                  </div>
                </div>

                <CustomButton title={"Book A Call"} chevron={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default CaseStudies