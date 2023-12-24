'use client'
import { useState } from 'react'

export default function Navbar () {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  return (
    <div className='px-[20px] lg:px-[50px]'>
      <nav className='nav-desktop hidden lg:flex h-[70px] py-[15px] lg:h-[100px] justify-between'>
        <img
          src='/assets/logo_1.png'
          alt=''
          className='h-[61px] w-[220px]'
        />
        {/* <ul className='flex gap-[30px] items-center'><li>N S</li></ul> */}
        <ul className='flex gap-[30px] items-center'>
          <li><a href="/">Homepage</a></li>

          <li><a href="/servizi">Services</a></li>
          <li><a href="/galleria">Gallery</a></li>
          <li><a href="/contatti">Contacts</a></li>
          {/* <li className='bg-[#0EB2E7] p-3 px-10 text-white hover:bg-[#000C30]'>Negozio</li> */}
        </ul>
      </nav>

      <div className='lg:hidden'>
        <nav className='nav-mobile h-[70px] lg:h-[100px] items-center justify-between flex '>
          <img
            src='https://picsum.photos/200'
            alt=''
            className='h-[44px] w-[160px] mr-[20px]'
          />

          <button
            onClick={() => setToggleMobileNav(!toggleMobileNav)}
            className='bg-[#0EB2E7] w-[40px] h-[40px] rounded'
          >
            <div>
              {toggleMobileNav ? (
                <img src='/assets/close.png' />
              ) : (
                <img src='/assets/hamburger.png' />
              )}
            </div>
          </button>
        </nav>

        {toggleMobileNav && (
          <ul
            className='divide-y divide-slate-400'
            style={{ borderBottom: '1px solid rgb(148 163 184)' }}
          >
            <li className='h-[42px] flex items-center'><a href="/">Homepage</a></li>
            <li className='h-[42px] flex items-center'><a href="/servizi">Services</a></li>
            <li className='h-[42px] flex items-center'><a href="/galleria">Gallery</a></li>
            <li className='h-[42px] flex items-center'> <a href="/contatti">Contacts</a></li>
            {/* <li className='h-[42px] flex items-center bg-[#0EB2E7]'>Shop</li> */}
          </ul>
        )}
      </div>
    </div>
  )
}
