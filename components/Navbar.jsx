import Image from '@node_modules/next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Image
            src={"/assets/banner-no-bg.png"}
            height={30}
            width={120}
            alt='logo'
        />
    </nav>
  )
}

export default Navbar