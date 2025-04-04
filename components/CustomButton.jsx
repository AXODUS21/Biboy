import React from 'react'

const CustomButton = ({title, customStyle, func}) => {
  return (
    <button className={`${customStyle} bg-primary px-4 py-2 text-white font-bold rounded-sm cursor-pointer`}>
        {title}
    </button>
  )
}

export default CustomButton