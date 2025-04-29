"use client"
import { navigation } from '@constants'
import Image from '@node_modules/next/image'
import React from 'react'
import { Link } from 'react-scroll'
import CustomButton from './CustomButton'
import { FaPhone } from '@node_modules/react-icons/fa'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white z-50 fixed left-0 right-0 top-0 border-b-[1px] border-gray-700/20">
      <Link
        to="hero"
        duration={500}
        smooth
        offset={-100}
        className="cursor-pointer"
      >
        <Image
          src={"/assets/banner-no-bg.png"}
          height={40}
          width={70}
          alt="logo"
        />
      </Link>

      <div className="flex gap-8 font-semibold max-sm:hidden pl-16">
        {navigation.map((nav) => (
          <Link
            key={nav.title}
            spy
            duration={500}
            smooth
            activeClass="nav-active"
            to={nav.url}
            offset={nav.offset}
            className="cursor-pointer"
          >
            {nav.title}
          </Link>
        ))}
      </div>

      <div className="">
        <CustomButton
          title={
            <div className='flex items-center gap-2 '>
              <FaPhone /> 0955 188 2021
            </div>
          }
          location={"/"}
          customStyle={"!bg-transparent !select-text !cursor-auto"}
        />
      </div>
    </nav>
  );
}

export default Navbar