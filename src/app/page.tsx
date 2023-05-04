import React,{ useEffect } from 'react'
import Button from '@/components/Button'
import Logo from '../assets/logo-light.png'
import LogoBlack from '../assets/logo.png'
import BGImg from '../assets/subheader.jpg'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import { FaFacebookF,FaTwitter,FaBars,FaLinkedinIn } from 'react-icons/fa';
import { TiSocialPinterestCircular } from 'react-icons/ti';
import { IoIosWifi} from 'react-icons/io';

import { BsMoon,BsArrowRight} from 'react-icons/bs';
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {

  // const [fix,setFix] = useState(false)
  // const setFixed = ()=>{
  //   if(window.screenY >= 392){
  //     setFix(true)
  //   }else{
  //     setFix(false)
  //   }
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',setFixed)
  //   return()=>window.removeEventListener('scroll',setFixed)
  // },[])
  
  return (
    <main className={`min-h-screen  ${inter.className}`}>
    {/* <div className="hidden md:hidden lg:flex xl:flex fixed bg-[#59499c] transition-all rounded-sm px-2 cursor-pointer hover:right-0  rounded-r-none py-2 -right-32 top-32 items-center  gap-2">
        <span className=' text-white text-[16px]'>RTL</span>
        <h1 className='text-white'>Click to Enable</h1>
      </div>
      <div className="hidden md:hidden lg:flex xl:flex py-2 rounded-r-none  bg-[#59499c] rounded-sm px-2  hover:right-0  cursor-pointer fixed -right-44 transition-all top-44  items-center gap-2">
          <div className="w-8 text-white">
          <BsMoon/>
        </div>
        <h1 className='text-white'>Switch Dark Scheme</h1>
        </div> */}
    <div className="bg-gradient-conic bg-cover pb-[6rem]">
     <Header/>
     <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row  flex-1 lg:mt-8 xl:mt-8 mt-20 h-full w-[95%] md:w-[90%] lg:w-[83%] xl:w-[83%]  mx-auto my-0">
        <div className="flex-1 flex items-center">
        <div className="">
          <div className="mb-4 w-full">
          <h1 className='mx-auto my-0 text-[50px] w-[95%] md:w-[95%] lg:w-[83%] xl:w-[83%] leading-[3.5rem] font-[600] text-white'>Create, sell or collect digital items.</h1>
        <p  className='mx-auto my-0 mt-4 text-[18px] w-[95%] md:w-[95%] lg:w-[83%] xl:w-[83%] font-[400] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
        </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-sm lg:w-[80%] xl:w-[70%] md:w-[95%] w-[95%] px-4 py-8">
           <div className="lg:w-[90%] xl:w-[90%] w-[95%] md:w-[95%] mx-auto my-0 ">
           <h1 className='text-[22px] font-[600]'>Sign In</h1>
            <p className='text-[15px] font-[400] mt-2 w-[83%] text-gray-500'>Login using a existing account or create a new account <span className='text-[#8364e2]'>here.</span></p>
            <div className="flex flex-col gap-4 mt-5">
            <input type="text" className='py-2 px-3 border border-gray-300 text-gray-400 rounded-md' placeholder='username' name="" id="" />
            <input type="text" className='py-2 px-3 border border-gray-300 text-gray-400 rounded-md' placeholder='password' name="" id="" />
            <Button>Submit</Button>
            </div>
            <div className="flex md:justify-start justify-start lg:gap-0 xl:gap-0 md:gap-4 gap-4 lg:justify-between xl:justify-between   mt-6">
              <span className='font-[400] text-[16px] text-gray-400'>Login with:</span>
              <span className='font-[600] text-[16px] text-[#8364e2]'>Facebook</span>
              <span className='font-[600] text-[16px] text-[#8364e2]'>Google</span>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
        <div className="bg-white ">
        <div className="grid md:grid md:grid-cols-2 grid-cols-1  lg:flex xl:flex justify-between lg:w-[83%] xl:w-[83%] md:w-[75%] w-[75%] mx-auto my-0 py-16">
          <div className="mt-4">
            <h1 className='font-[700] text-[16px]'>MarketPlace</h1>
            <ul className='flex flex-col gap-2 mt-4'>
              {['All NFTs','Art','Music','Domain Names','Virtual World','Collectibles'].map((items,index)=>(
              <li key={index}>{items}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
          <h1 className='font-[700] text-[16px]'>Resources</h1>
            <ul className='flex flex-col gap-2 mt-4'>
            {['Help Center','Partners','Suggestions','Discord','Docs','Newsletter'].map((items,index)=>(
              <li key={index}>{items}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
          <h1 className='font-[700] text-[16px]'>Community</h1>
            <ul className='flex flex-col gap-2 mt-4'>
            {['Community','Documentation','Brand Assets','Blog','Forum','Mailing List'].map((items,index)=>(
              <li key={index}>{items}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 lg:w-[26%] xl:w-[26%] w-[100%] md:w-[85%]">
            <h1 className='font-[700] text-[16px]'>Newsletter</h1>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='text-[13px] text-gray-500'>Signup for our newsletter to get the latest news in your inbox.</li>
              <li>
              <div className="flex items-center mt-4 mb-2">
                <input type="text"  placeholder='enter your email' className='px-3 border py-1 border-black border-r-0 rounded-md rounded-r-none' name="" id="" />
                <button className='bg-[#8364e2] px-4 py-[7px] rounded-md rounded-l-none text-white text-xl'><BsArrowRight/></button>
              </div>
              </li>
              <li className='text-[13px] text-gray-500'>Your email is safe with us. We don't spam.</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="lg:w-[83%] xl:w-[83%] w-[90%] mx-auto my-0 flex flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-between py-4 gap-4">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-6">
            <div className="">
              <Image alt='' src={LogoBlack}/>
            </div>
            <p className='text-gray-600 text-[14px] font-[400]'>© Copyright 2022 - Gigaland by Designesia</p>
            </div>
            <div className="flex gap-2">
              <span className='py-2 px-2 rounded-md text-white bg-[#403f83]'><FaFacebookF/></span>
              <span className='py-2 px-2 rounded-md text-white bg-[#403f83]'><FaTwitter/></span>
              <span className='py-2 px-2 rounded-md text-white bg-[#403f83]'><FaLinkedinIn/></span>
              <span className='py-2 px-2 rounded-md text-white bg-[#403f83]'><TiSocialPinterestCircular/></span>
              <span className='py-2 px-2 rounded-md text-white bg-[#403f83] '><IoIosWifi className='rotate-45'/></span>
            </div>
        </div>
        </div>
    </main>
  )
}
