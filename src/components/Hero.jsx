import React from 'react'
import { heroapi } from '../data/data.js'
import Clips from './utils/Clips.jsx';
import SocialLink from './utils/SocialLink.jsx';
const Hero = ({heroapi:{title,subtitle,btntext,img,sociallinks,videos}}) => {
  console.log(heroapi)
  return (<>
    <div className='relative flex flex-col h-auto w-auto '>
      <div className='absolute bg-theme h-[85vh]  opacity-100 z-10 top-0 left-0 right-0
      justify-items-center w-auto lg:h-[75vh] md:h-[65vh] sm:h-[55vh] flex clip-path'></div>
      <div className="nike-container grid items-center justify-items-center z-20 relative opacity-100">
        <div className="grid items-center justify-items-center mt-28 md:mt-24">
      <h1 className='text-6xl lg:text-5xl md:text-4xl text-slate-200
      sm-text-3xl xsm:text-2xl font-extrabold
      filter drop-shadow-sm'>{title}</h1>
      <h1 className='text-6xl lg:text-5xl text-slate-200
      sm-text-3xl xsm:text-2xl font-extrabold
      filter drop-shadow-sm md:text-4xl'>{subtitle}</h1>
      <button className='button-theme rounded-xl my-5 bg-slate-200 shadow-slate-200'>{btntext}</button>
    <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh]
    lg:top-[27vh] xl:left-0 left-[11%] w-auto h-auto'>{videos?.map((val,i)=>(
      <Clips key={i}
      imgsrc={val.imgsrc}
      clip={val.clip}/>
    ))}</div>    
    <div className="grid items-center absolute top-[33vh] gap-3
    lg:top-[27vh] right-0">
    {sociallinks?.map((val,i)=>(
      <SocialLink
      key={i}
      icon={val.icon} />
      ))}
     </div></div>
      <div className="flex items-center">
      <img src={img}className='h-[45vh]  w-auto transitions-theme 
      lg:[35vh]md:[31vh]lg:[35vh]sm:[21vh]xsm:[19vh] cursor-pointer object-fill -rotate-[25deg] hover:rotate-0'/>
      </div></div></div>
      </>
  )
}

export default Hero