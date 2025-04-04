"use client"
import { testimonials } from '@constants';
import Image from '@node_modules/next/image';
import React from 'react'
import { Element } from 'react-scroll'
import { RiStarSFill } from "react-icons/ri";

const Testimonials = () => {
  return (
    <Element name="testimonials">
      <div className="pt-20">
        <div className="flex flex-col items-center">
          <h1 className="page_header mb-2">
            What Our <span className="text-primary">Clients</span> Say
          </h1>
          <p className="text-xl opacity-65 text-center">
            Comprehensive marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-14">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <RiStarSFill
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={testimonial.initial}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Testimonials