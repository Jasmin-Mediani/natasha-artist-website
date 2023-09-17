'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'

export default function Home () {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  return (
    <main
      className='px-[20px] lg:px-[50px]'
      style={{ fontFamily: 'Poppins-regular' }}
    >
      <Navbar
        setToggleMobileNav={setToggleMobileNav}
        toggleMobileNav={toggleMobileNav}
      />
    </main>
  )
}
