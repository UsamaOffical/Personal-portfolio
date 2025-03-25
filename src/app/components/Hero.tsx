
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen bg-[#011627] w-full text-[#cecfd0] flex '>
      <div className='flex flex-col-reverse gap-7 lg:gap-0 lg:flex-row lg:max-w-screen-xl justify-center lg:justify-between mx-auto w-full items-center'>
        <div className='w-full lg:w-[50%] space-y-3 px-6 lg:px-0'>
            <h1 className='text-2xl lg:text-5xl font-bold'>Hi,I'm <span className='text-[#6fffe9]'>Usama Jameel</span></h1>
            <h2 className='text-md lg:text-3xl font-semibold mb-3.5 text-[#6fffe9]'>Frontend Developer</h2>
            <p className='text-sm lg:text-base tracking-normal lg:tracking-widest mb-4'>I&apos;m Usama Jameel, a passionate Frontend Developer skilled in Next.js, TypeScript, and Tailwind CSS. I specialize in building fast, user-friendly, and visually stunning web applications.</p>
            <div className='flex gap-3.5'>
                <button className='py-1.5 px-5 border-0 bg-[#6fffe9] text-[#011627] rounded-3xl text-lg'>Contact</button>
                <button className='bg-transparent border-2 border-[#6fffe9] px-8 rounded-3xl'>CV</button>
            </div>
        </div>
        <div>
            <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center rounded-full overflow-hidden border-4 border-[#6fffe9]'>
                <Image src='/profile.jpg' alt='' height={600} width={600} className='object-fill w-full h-full rounded-full'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

