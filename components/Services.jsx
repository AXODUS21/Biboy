"use client"

import { services } from '@constants';
import React from 'react'
import { Element } from 'react-scroll'

const Services = () => {
  return (
    <Element>
      <div className="h-screen w-full pt-20">
        <div className="flex-col items-center flex">
          <h2 className="">Our Services</h2>
          <h1 className="page_header mb-1">
            What We <span className="text-primary">Offer</span>
          </h1>
          <p className="text-xl opacity-65 text-center">
            Comprehensive marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-red-600 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Services