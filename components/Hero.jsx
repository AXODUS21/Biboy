"use client"

import React from 'react'
import { Element } from 'react-scroll'
import CustomButton from './CustomButton'
import Image from '@node_modules/next/image'

const Hero = () => {
  return (
    <Element name="hero" className="relative h-[90vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red-600 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-600 blur-3xl opacity-20"></div>
            <div className="absolute left-1/3 top-1/4 h-32 w-32 rounded-full bg-white blur-xl opacity-20"></div>
        </div>


      <div className="flex h-full items-center px-10 gap-5">
        <div className="w-1/2">
          <h1 className="text-6xl font-extrabold mb-3">
            Elevate Your <span className="text-primary">Brand</span> To New
            Heights
          </h1>
          <p className="text-lg mb-3">
            Strategic marketing solutions that drive growth, engagement, and
            results for your business.
          </p>

          <div className="flex gap-5 ">
            <CustomButton title={"Get Started"} chevron={true} customStyle={"px-8 py-4"} location={"book"}/>
            <CustomButton title={"Our Services"} customStyle={"!bg-stone-900 border-[0.2px] border-gray-600 py-4 px-8 "} location={"Services"} />
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-xl border border-red-600/30 bg-red-600/10"></div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-xl border border-sky-500/30 bg-sky-500/10"></div>

              {/* Main image with creative framing */}
              <div className="relative z-10 rounded-lg border-8 border-white/10 bg-gradient-to-br from-black to-gray-900 p-1 shadow-2xl">
                <div className="aspect-square w-[280px] sm:w-[320px] md:w-[280px] lg:w-[320px] xl:w-[380px] rounded-md">
                  <div className="relative h-full w-full">
                    <Image
                      src="/assets/logo.png"
                      alt="Marketing Innovation"
                      fill
                      className="object-cover"
                    />

                    {/* Overlay elements */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-600"></div>
                        <div className="h-3 w-3 rounded-full bg-sky-500"></div>
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Floating stats elements */}
                    <div className="absolute -right-6 top-6 rounded-lg bg-white/10 backdrop-blur-md px-8 py-2 text-white text-sm border border-white/20">
                      <div className="font-bold">+200%</div>
                      <div className="text-xs text-gray-300">Engagement</div>
                    </div>

                    <div className="absolute -left-6 bottom-16 rounded-lg bg-white/10 backdrop-blur-md px-8 py-2 text-white text-sm border border-white/20">
                      <div className="font-bold">+150%</div>
                      <div className="text-xs text-gray-300">Conversions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated dots */}
              <div className="absolute -right-4 top-1/4 flex gap-1">
                <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse delay-100"></div>
                <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse delay-200"></div>
              </div>

              <div className="absolute -left-4 bottom-1/4 flex gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse delay-100"></div>
                <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero