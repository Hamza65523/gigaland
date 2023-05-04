import React from 'react'


const Button = ({children}:any) => {
  return (
    <button className='py-1 px-6 rounded-md bg-[#8364e2] w-full font-sp text-white text-[14px] font-[700]'>{children}</button>
  )
}

export default Button