export default function Navbar ({ toggleMobileNav, setToggleMobileNav }) {
  return (
    <div>
      <nav className='nav-desktop hidden lg:flex h-[70px] py-[15px] lg:h-[100px] flex justify-between '>
        <img
          src='https://picsum.photos/200'
          alt=''
          className='h-[61px] w-[220px]'
        />
        <ul className='flex gap-[30px] items-center'>
          <li>Homepage</li>
          <li>Chi sono</li>
          <li>Servizi</li>
          <li>Galleria</li>
          <li>Contatti</li>
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
            <li className='h-[42px] flex items-center'>Homepage</li>
            <li className='h-[42px] flex items-center'>Chi sono</li>
            <li className='h-[42px] flex items-center'>Servizi</li>
            <li className='h-[42px] flex items-center'>Galleria</li>
            <li className='h-[42px] flex items-center'>Contatti</li>
          </ul>
        )}
      </div>
    </div>
  )
}
