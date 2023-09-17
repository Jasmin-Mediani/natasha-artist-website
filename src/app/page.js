'use client'

import { useState } from 'react'

export default function Home () {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  return (
    <main
      className='px-[20px] lg:px-[50px] bg-yellow-500'
      style={{ fontFamily: 'Poppins-regular' }}
    >
      <nav className='nav-desktop hidden lg:flex h-[70px] py-[15px] lg:h-[100px] flex justify-between bg-orange-500'>
        <img
          src='https://picsum.photos/200'
          alt=''
          className='h-[61px] w-[220px]'
        />
        <ul className='flex bg-red-500 gap-[30px] items-center'>
          <li>Homepage</li>
          <li>Chi sono</li>
          <li>Servizi</li>
          <li>Galleria</li>
          <li>Contatti</li>
        </ul>
      </nav>

      <div className='lg:hidden'>
        <nav className='nav-mobile h-[70px] lg:h-[100px] items-center justify-between flex  bg-pink-500'>
          <img
            src='https://picsum.photos/200'
            alt=''
            className='h-[44px] w-[160px]'
          />

          <button onClick={() => setToggleMobileNav(!toggleMobileNav)}>
            HB
          </button>
        </nav>

        {toggleMobileNav && (
          <ul className='bg-green-200 divide-y divide-slate-400'>
            <li className='h-[42px]'>Homepage</li>
            <li className='h-[42px]'>Chi sono</li>
            <li className='h-[42px]'>Servizi</li>
            <li className='h-[42px]'>Galleria</li>
            <li
              className='h-[42px]'
              style={{ borderBottom: 'rgb(148 163 184)' }}
            >
              Contatti
            </li>
          </ul>
        )}
      </div>
    </main>
  )
}
