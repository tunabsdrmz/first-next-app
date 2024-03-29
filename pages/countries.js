import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import arrow from "../assets/MaterialSymbolsArrowBack.svg"
function countries() {
  return (
    <div className='w-full min-h-screen h-auto bg-[url("/rotated-bg.jpg")] bg-cover'>
    <Head>
    <title>Tuna Boşdurmaz</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='h-32 flex items-center justify-start '>
    <div className='w-48 ml-5 pl-2 py-2 gap-2 border-2 rounded-md  flex items-center justify-start cursor-pointer border-[#082e55] bg-[#0e5fb1] hover:bg-[#0a66c2] text-[#021128] shadow-inner '>
       <Image
       src={arrow}
       height={30}
       width={50}
       alt="//"
       />
        <Link href="/">
            <a className='text-2xl font-league w-full'> Go back</a>
            </Link> 
        </div> 
    
    </div>
    <h1 className='text-left pl-5 mb-10 lg:text-center lg:pl-0 text-4xl lg:text-5xl  text-[#B0CFDC] font-league'>Countries App</h1>
    <h2 className='text-[#B0CFDC] text-left pl-5 mb-10 lg:text-center lg:pl-0 text-lg lg:text-xl font-josefin'>In this project i learned dynamic routes, how to make search and filter inputs. I use useRef hook and api. </h2>
    <div className='flex flex-wrap items-center justify-center gap-7 w-full'>
        <div className='bg-[url("/countries-splash.png")]  bg-contain bg-center bg-no-repeat  w-11/12 h-48  rounded-t-lg  md:h-96  max-w-3xl '></div>
        <div className='bg-[url("/countries-splash-2.png")]  bg-contain bg-center bg-no-repeat  w-11/12 h-48  rounded-t-lg  md:h-96  max-w-3xl '></div>
        
        <div className='bg-[url("/countries-splash-3.png")]  bg-contain bg-center bg-no-repeat w-11/12   rounded-t-lg h-48   md:h-96  max-w-3xl '></div>
        <div className='bg-[url("/countries-splash-4.png")]  bg-contain bg-center bg-no-repeat  w-11/12   rounded-t-lg h-48   md:h-96  max-w-3xl '></div>
        <div className='bg-[url("/countries-splash-5.png")]  bg-contain bg-center bg-no-repeat w-44   rounded-t-lg h-72 lg:h-80 xl:h-96  max-w-3xl '></div>
        <div className='bg-[url("/countries-splash-6.png")]  bg-contain bg-center bg-no-repeat  w-44   rounded-t-lg h-72 lg:h-80 xl:h-96  max-w-3xl '></div>
    </div>


  </div>
  )
}

export default countries