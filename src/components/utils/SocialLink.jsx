import React from 'react'

const SocialLink = ({icon}) => {
  return (
    <div>
      <img
      src={icon}alt=''
      className='w-8 h-8 flex items-center cursor-pointer
      transition-all duration-200 hover:scale-110 md:w-6 md:h-6 sm:w-5 sm:h-5 '
      />
    </div>
  )
}

export default SocialLink