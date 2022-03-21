import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

export default function NavBar() {
  const [nav, setNav] = useState(false)
  const showNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex w-screen h-[80px] z-10 bg-zinc-200'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platforms</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                  <button className='border-none bg-transparent text-black mr-[2rem]'>Sign in</button>
                  <button className='px-6 py-2'>Sign up</button>
            </div>
            <div className='md:hidden hover:cursor-pointer' onClick={showNav}>
              {!nav ? <MenuIcon className='w-[30px] mr-4'/> : <XIcon className='w-[30px] mr-4'/>}
            </div>
        </div>
        {nav ? 
                <ul className='absolute md:hidden bg-zinc-200 w-full px-8 mt-[4rem]'>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                <div className='flex flex-col md:hidden'>
                  <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 border-none'>Sign In</button>
                  <button className='px-8 py-3 mb-[30px]'>Sign Up</button>
                </div>
                </ul>
        : 
                <div></div>
        }
    </div>
  )
}
