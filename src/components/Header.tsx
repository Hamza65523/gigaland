'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { MdKeyboardArrowDown} from 'react-icons/md';
import { SlArrowDown} from 'react-icons/sl';
import { FaBars,FaWallet} from 'react-icons/fa';
import Logo from '../assets/logo-light.png'
import LogoBlack from '../assets/logo.png'


const Header = () => {

    let NavData = [
        {
          name:'Home',
          url:'/',
        },
        {
          name:'Explore',
          url:'',
        },
        {
          name:'Pages',
          url:'',
        },
        {
          name:'Stats',
          url:'',
        },
        {
          name:'Elements',
          url:'',
        },
      ]
      const [colpass,setColpass] = useState(false)
      const [fix,setFix] = useState(false)
  const setFixed = ()=>{
    console.log(window.scrollY)
    if(window.scrollY >= 40){
      setFix(true)
    }else{
      setFix(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',setFixed)
    return()=>window.removeEventListener('scroll',setFixed)
  },[])
  
  return (
    <div>
        <div className="w-full">
     <div className="px-4 bg-white lg:hidden xl:hidden flex items-center justify-between gap-4  h-[90px] ">
      <div className="w-full lg:w-32">
        <Image src={LogoBlack} alt='logo'/>
      </div>
      <div className="flex gap-6 items-center">
        <div className="hidden md:block  w-[149px]">
        <Button>Connect Wallet</Button>
        </div>
        <span className='bg-[#59499c] text-white py-2 px-2 rounded-sm'><FaWallet/></span>
      <div onClick={()=>setColpass(!colpass)} className="text-xl text-white py-2 px-2 bg-[#59499c]">
        <FaBars/>
      </div>
      </div>
     </div>
      <div className={`${colpass?'':'hidden'} lg:hidden xl:hidden  transition-all bg-white`}>
        <ul>
        {NavData.map((items,index)=>(
          <li key={index} className={`flex justify-between items-center font-sp text-[14px] w-full py-2  px-2 border-b font-[600] cursor-pointer  text-gray-500`}>{items.name}
          <SlArrowDown  className='text-gray-500 text-xl'/></li>
          ))}
        </ul>
      </div>
     <div className={`${fix&&'fixed top-0 left-0 bg-[#403f83] w-full px-24 '} md:hidden hidden lg:flex xl:flex items-center justify-between xl:gap-4 gap-3  h-[90px] w-[83%] mx-auto my-0`}>
      <div className="flex items-center xl:gap-8 gap-3">
      <div className="w-full lg:w-32">
        <Image src={Logo}   alt='logo'/>
      </div>
      <div className="">
        <input type="text" className={`${fix&&'bg-[#535390]'} outline-none hover:border-4 border-[#59499c] xl:w-64 lg:w-36 placeholder:text-white text-[14px] bg-[#3e307b] rounded-lg px-3 py-[6px]`} placeholder='search item here...'/>
      </div>
      </div>
      <div className="flex items-center lg:gap-3 xl:gap-4">
      <nav>
        <ul className='flex xl:gap-6 gap-4 items-center'>
        {NavData.map((items,index)=>(
          <li key={index} className={`flex items-center font-sp relative after:absolute  after:h-[3px] after:transition-all delay-500 after:mt-1 after:rounded-md hover:after:w-full after:w-0 after:bg-purple-600 after:content-[''] after:left-0 after:bottom-0 text-[14px] font-[600] cursor-pointer  text-white`}>{items.name}
          <MdKeyboardArrowDown  className='text-[rgba(255,255,255,0.5)] text-xl'/></li>
          ))}
        </ul>
      </nav>
      <div className="">
        <Button>Connect Wallet</Button>
      </div>
      </div>
     </div>
     </div>
      
    </div>
  )
}

export default Header