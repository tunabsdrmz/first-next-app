import React from 'react'
import Image from 'next/image'
import sneaker from "../assets/sneaker-splash.png"
import Link from 'next/link'

function Projects() {
  return (
    <div className='flex flex-col gap-6 items-center justify-around w-full bg-[url("../assets/rotated-bg.jpg")] bg-cover'>
      
        <div className='w-4/5 my-4 lg:my-16'>
                <h3 className='font-league text-gray-300 text-3xl lg:text-4xl'>Projects</h3> 
        </div>
        <div className='flex flex-col gap-6 items-center justify-around w-4/5 lg:gap-14 xl:flex-row xl:flex-shrink-0 xl:flex-grow xl:flex-wrap'>
        <div className='flex flex-col items-center w-4/5 h-52 md:h-96  max-w-lg xl:hover:scale-95 transition-all'>
            <div className='bg-[url("../assets/sneaker-splash.png")] bg-[#ffffff] bg-contain bg-center bg-no-repeat  w-full h-40 rounded-t-lg md:h-80'>
            </div>
            <div className='flex w-full h-10 md:h-16 font-league'>
              <div className='w-2/4 text-2xl rounded-bl-lg border-r-8 flex items-center justify-center cursor-pointer border-[#0a66c2] bg-[#0e5fb1] hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><Link href="/sneaker"><a className='w-full text-center'>See more</a></Link> </div> 
              <div className='w-2/4 text-2xl rounded-br-lg bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><a href='https://github.com/tunabsdrmz/sneaker-app-last-version' target={'_blank'} rel="noreferrer" className='w-full text-center'>Code</a></div>
            </div>
            
        </div>

        <div className='flex flex-col items-center w-4/5 h-52 md:h-96  max-w-lg xl:hover:scale-95 transition-all'>
        <div className='bg-[url("../assets/countries-splash.png")] bg-[#f4f4f4] bg-contain bg-center bg-no-repeat  w-full h-40 rounded-t-lg md:h-80'></div>
            <div className='flex w-full h-10 md:h-16 font-league'>
              <div className='w-2/4 text-2xl rounded-bl-lg border-r-8 bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><Link href="/countries"><a className='w-full text-center'>See more</a></Link></div>  
              <div className='w-2/4 text-2xl rounded-br-lg bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><a href='https://github.com/tunabsdrmz/countries-app' target={'_blank'} rel="noreferrer" className='w-full text-center'>Code</a></div>
            </div>
        </div>

        <div className='flex flex-col items-center w-4/5 h-52 md:h-96  max-w-lg xl:hover:scale-95 transition-all'>
        <div className='bg-[url("../assets/weather-splash.png")] bg-[#ffffff] bg-cover bg-center bg-no-repeat  w-full h-40 rounded-t-lg md:h-80'></div>
            <div className='flex w-full h-10 md:h-16 font-league'>
              <div className='w-2/4 text-2xl rounded-bl-lg border-r-8 bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><Link href="/weather"><a className='w-full text-center'>See more</a></Link></div>  
              <div className='w-2/4 text-2xl rounded-br-lg bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><a href='https://github.com/tunabsdrmz/weather-app' target={'_blank'} rel="noreferrer" className='w-full text-center'>Code</a></div>
            </div>
        </div>

        <div className='flex flex-col items-center w-4/5 h-52 md:h-96  max-w-lg xl:hover:scale-95 transition-all'>
        <div className='bg-[url("../assets/room-splash.png")] bg-[#eaeaeac9] bg-contain bg-center bg-no-repeat  w-full h-40 rounded-t-lg md:h-80'></div>
            <div className='flex w-full h-10 md:h-16 font-league'>
              <div className='w-2/4 text-2xl rounded-bl-lg border-r-8 bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><Link href="/room"><a className='w-full text-center'>See more</a></Link></div>  
              <div className='w-2/4 text-2xl rounded-br-lg bg-[#0e5fb1] flex items-center justify-center border-[#0a66c2] cursor-pointer hover:bg-[#0a66c287] text-[#021128] hover:text-slate-200'><a href='https://github.com/tunabsdrmz/room-homepage' target={'_blank'} rel="noreferrer" className='w-full text-center'>Code</a></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Projects