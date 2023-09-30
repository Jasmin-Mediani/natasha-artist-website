'use client'

export default function Home () {
  return <main className="w-full h-[calc(100vh - 100px)] bg-gradient-to-b from-[#F3F3F3] to-[#fff] p-[20px] lg:p-[50px]">

    <div className="flex gap-20 justify-between w-[95%] mx-auto pt-[100px]">
      <img src="https://picsum.photos/750/500?grayscale" alt="" className="w-[750px] h-[500px]"/>
      <div className="self-end flex flex-col content-between">
        <div className="bg-[#0EB2E7] h-[165px] p-[30px] text-white flex items-center text-[75px] mb-20">Natasha Sood</div>
        <h2 className="lg:text-[42px] mb-6">Lorem ipsum dolor sit amet</h2>
        <div className="mb-[80px]">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.</div>

        <button className="bg-[#0EB2E7] px-10 py-4 text-white w-fit">Discover Collection</button>
      </div>
    </div>

  </main>
}
