  import { FaChevronRight } from '@node_modules/react-icons/fa'
  import React from 'react'
import { Link } from 'react-scroll'

  const CustomButton = ({title, customStyle,chevron, location}) => {
    return (
      <Link to={location} duration={500} smooth className='z-40'>      
        <button className={`${customStyle} bg-primary px-4 py-2 text-white font-bold rounded-sm cursor-pointer`}>
            <div className="flex items-center gap-2">
              <h2>{title}</h2>
              {chevron && <FaChevronRight size={14} />}
            </div>
        </button>
      </Link>
    )
  }

  export default CustomButton