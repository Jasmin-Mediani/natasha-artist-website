export default function Home () {
  return (
    <main className='px-[50px]'>
      <nav className='h-[70px] py-[15px] lg:h-[100px] flex justify-between bg-orange-500'>
        <img
          src='https://picsum.photos/200'
          alt=''
          className='h-[61px] w-[220px]'
        />
        <ul className='flex bg-red-500 gap-[20px]'>
          <li>Homepage</li>
          <li>Chi sono</li>
          <li>Servizi</li>
          <li>Galleria</li>
          <li>Contatti</li>
        </ul>
      </nav>
    </main>
  )
}
