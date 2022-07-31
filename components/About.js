import Image from 'next/image'
import React from 'react'
import avatar from '../assets/Avatar.jpeg'
import html from "../assets/LogosHtml5.svg"
import css from "../assets/LogosCss3.svg"
import js from "../assets/LogosJavascript.svg"
import react from "../assets/LogosReact.svg"
import nextjs from "../assets/LogosNextjsIcon.svg"
import tailw from "../assets/LogosTailwindcssIcon.svg"
import figma from "../assets/LogosFigma.svg"
import git from "../assets/LogosGitIcon.svg"
function About() {
  return (
    <div className='flex flex-col items-center justify-around  w-full h-screen bg-[url("/rotated-bg.jpg")] bg-cover xl:h-max'>
           <div className='w-4/5 flex mb-4 xl:mb-0 xl:mt-7'>
                <h3 className='font-league  text-gray-300 text-3xl lg:text-4xl'>About Me</h3> 
           </div>
          <div className='flex flex-col items-center justify-around  w-full xl:flex-row-reverse xl:w-4/5 xl:gap-8'>
            <div className='w-3/5 md:w-2/4 xl:w-3/4 xl:max-w-md'>
            <Image 
            src={avatar}
            layout="responsive"
            className='rounded-lg w-full h-full '
            alt="//"
            />
           </div>
           <div className='mt-5 w-3/4 md:mt-4 xl:w-3/4 2xl:max-w-3xl '>
            <p className='text-[#B0CFDC] text-center text-lg lg:text-2xl font-josefin'>I am Tuna, I’m from Turkey. I love coding because I get obsessed when I want something and fail. That’s why I was able to get to the job-ready level within 6 months. As an extra, I like to play frp and go to the gym.</p>
           </div>
           </div>  
           <div className='w-4/5 flex mt-7 mb-2 lg:mb-4 xl:mt-0'>
           <h3 className='font-league  text-gray-300 text-3xl lg:text-4xl'>Skills</h3> 
           </div>
           <div className='w-full h-max flex flex-col gap-8 mb-4 xl:flex-row xl:items-center xl:justify-start xl:w-4/5'>
            <div className='flex items-center justify-around px-2 xl:justify-between xl:px-0 xl:gap-6'>
               <Image 
            src={html}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
            <Image 
            src={css}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
            <Image 
            src={js}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
            <Image 
            src={react}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            /> 
            </div>
           <div className='flex items-center justify-around px-2 xl:px-0 xl:gap-6'>
            <Image 
            src={nextjs}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
            <Image 
            src={tailw}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
            <Image 
            src={figma}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
            <Image 
            src={git}
            width={40}
            height={40}
            className='hover:scale-105'
            alt="//"
            />
           </div>
            
           </div>
        
        

    </div>
  )
}

export default About