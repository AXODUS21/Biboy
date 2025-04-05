"use client"
import React from 'react'
import { Element } from 'react-scroll'
import CustomTitle from './CustomTitle';

const Strategy = () => {
  return (
    <Element name="strategy">
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center mb-10">
            <div className="flex justify-center">
                <CustomTitle title={"Our Strategy"} />
            </div>
            <h2 className="page_header">
              See How We <span className="text-red-600">Transform</span> Brands
            </h2>
            <p className="text-gray-600 md:text-xl max-w-2xl mx-auto">
              Our creative process and strategic approach have helped hundreds
              of businesses achieve remarkable results.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg">
            {/* Simple attractive border instead of gradient */}
            <div className="absolute -inset-0.5 bg-red-600 rounded-xl"></div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white p-1">
              {/* Replace the iframe src with your actual video URL */}
              <iframe
                className="absolute inset-0 h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Agency Showcase Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Strategy