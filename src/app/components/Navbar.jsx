'use client'
import { useState, useEffect } from 'react'

const useDeviceSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height]

}


export default function Navbar () {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)
  const [width, height] = useDeviceSize();


  return (
    <div className='px-[20px] lg:px-[50px] max-w-[1350px] 2xl:mx-auto 2xl:items-center 2xl:justify-center mx-auto'>
      <nav className='nav-desktop hidden lg:flex h-[70px] py-[15px] lg:h-[100px] justify-between'>
       <a href="/"> <img
          src='/assets/logo_1.png'
          alt=''
          className='h-[61px] w-[220px]'
        /></a>
        {/* <ul className='flex gap-[30px] items-center'><li>N S</li></ul> */}
        <ul className='flex gap-[30px] items-center'>
          <li><a href="/">Homepage</a></li>
          <li><a href="/about-me">About me</a></li>
          <li><a href="/art-lessons">Art Lessons</a></li>
          <li><a href="/commissions">Commissions</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contacts">Contacts</a></li>
          {/* <li className='bg-[#0EB2E7] p-3 px-10 text-white hover:bg-[#000C30]'>Shop</li> */}
        </ul>
      </nav>

      <div className='lg:hidden'>
        <nav className='nav-mobile h-[70px] lg:h-[100px] items-center justify-between flex '>
          
       <div style={{maxWidth: "160px"}}>

       <a href="/"> <img
          src='/assets/logo_1.png'
          alt=''
          style={{width: width < 280 ? "130px" : "144px"}}
          className='h-[44px] w-[160px]'
         
          
        /></a>
       
       </div>

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
            <li className='h-[42px] flex items-center'><a href="/about-me">About me</a></li>
            <li className='h-[42px] flex items-center'><a href="/commissions">Commissions</a></li>
            <li className='h-[42px] flex items-center'><a href="/art-lessons">Art Lessons</a></li>
            <li className='h-[42px] flex items-center'><a href="/gallery">Gallery</a></li>
            <li className='h-[42px] flex items-center'> <a href="/contacts">Contacts</a></li>
            {/* <li className='h-[42px] flex items-center bg-[#0EB2E7]'>Shop</li> */}
          </ul>
        )}
      </div>
    </div>
  )
}
