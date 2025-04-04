import React from 'react'

const CustomTitle = ({title, customStyle}) => {
  return (
    <h2 className={`${customStyle} text-accent border-x-2 rounded-md px-3 mb-3`}>
        {title}
    </h2>
  );
}

export default CustomTitle