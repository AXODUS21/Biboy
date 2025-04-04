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

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100 opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-100 opacity-50 blur-xl"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-10">
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

              {/* Optional: Video overlay with play button (remove if using iframe) */}
              {/* 
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                </div>
                */}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Strategy