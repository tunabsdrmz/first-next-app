import Image from 'next/image'
import React from 'react'
import İn from "../assets/LogosLinkedinIcon.svg"
import github from "../assets/LogosGithubIcon.svg"
import mail from "../assets/LogosGoogleGmail.svg"
function Main() {
 
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[url("../assets/pexels-adrien-olichon-2387793.jpg")] bg-cover'> 
      <h1 className='text-6xl lg:text-7xl text-[#B0CFDC]  font-league  '>TUNA BOŞDURMAZ</h1>
      <h3 className='text-3xl lg:text-4xl  text-[#B0CFDC] font-josefin'>Front-End Developer</h3>
      <div className='flex gap-4 mt-4 lg:mt-5'>
          <a href='https://www.linkedin.com/in/tuna-boşdurmaz-2b64b9240/' rel="noreferrer" target={'_blank'}> <Image 
            src={İn}
            width={36}
            height={36}
            className='hover:scale-125'
            alt="//"
            />
            </a> 
            <a href='https://github.com/tunabsdrmz' rel="noreferrer" target={'_blank'}>
            <Image 
            src={github}
            width={36}
            height={36}
            className='hover:scale-125'
            alt="//"
            />
            </a>
           </div>
           <a href='mailto:tunabosdurmaz2002@gmail.com' rel="noreferrer" target={'_blank'}><div className='flex items-center justify-center gap-2 mt-4 lg:mt-5 border rounded-md py-2 px-14 bg-[#0a66c287] border-[#0a66c2] hover:bg-[#0e5fb1] xl:animate-pulse cursor-pointer'> 
            <Image 
            src={mail}
            height={30}
            width={25}
            className='hover:scale-105 '
            alt="//"
            />
            <p className='text-slate-100 font-josefin text-xl'>Contact Me</p>
           </div></a>
    </div>
    
  )
}

export default Main