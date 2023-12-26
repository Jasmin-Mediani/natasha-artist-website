'use client'

export default function Home () {
  return (
    <div>
      <main className='flex w-full h-[calc(100vh - 100px)] justify-center lg:justify-normal bg-gradient-to-b from-[#F3F3F3] to-[#fff] p-[20px] lg:p-[50px]'>
        <div className='2xl:flex lg:justify-between lg:mx-auto pt-[0px] w-[95%] items-center lg:items-start justify-center flex flex-col'>
          <img
            src='/assets/6X9A6141_BN.png'
            alt=''
            className='w-fit'
          />

          <div
            className='hidden lg:block bg-[#0EB2E7] h-[165px] p-[30px] text-white flex items-center lg:text-[68px] absolute top-[150px] -t-12'
            style={{ width: '60vw', right: 0, marginTop: "30px" }}
          >
            Natasha Sood
          </div>

          <div className='flex flex-col content-between relative h-inherit'>
            {/* Banner sm */}
            <div className='lg:hidden bg-[#0EB2E7] p-[30px] text-white flex items-center text-[40px] mb-[30px] max-w-[750px] self-center -mt-8 text-center'>
              Natasha Sood
            </div>

            {/* Page main paragraph */}
            <h2 className='lg:text-[42px] mb-6 mt-[20px] text-[25px] '>
              Lorem ipsum dolor sit amet
            </h2>
            <div className='mb-[40px] text-justify hyphens-auto'>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
              sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Donec sollicitudin molestie
              malesuada. Cras ultricies ligula sed magna dictum porta. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
              congue leo eget malesuada. Cras ultricies ligula sed magna dictum
              porta.
            </div>

            {/* <button className="bg-[#0EB2E7] px-10 py-4 text-white w-fit"><a href="#">La mia storia</a></button> */}
          </div>
        </div>
      </main>

      
    </div>
  )
}
