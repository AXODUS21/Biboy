import React from 'react'

const CustomButton = ({title, customStyle, func}) => {
  return (
    <div className={`${customStyle} bg-primary px-4 py-2 text-white font-bold rounded-sm`}>
        {title}
    </div>
  )
}

export default CustomButton