import { FaChevronRight } from '@node_modules/react-icons/fa'
import React from 'react'

const CustomButton = ({title, customStyle,chevron, func}) => {
  return (
    <button className={`${customStyle} bg-primary px-4 py-2 text-white font-bold rounded-sm cursor-pointer`}>
        <div className="flex items-center gap-2">
          <h2>{title}</h2>
          {chevron && <FaChevronRight size={14} />}
        </div>
    </button>
  )
}

export default CustomButton