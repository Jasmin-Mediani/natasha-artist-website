'use client'

export default function Home () {
  return (
  <div>
    <main className="w-full h-[calc(100vh - 100px)] bg-gradient-to-b from-[#F3F3F3] to-[#fff] p-[20px] lg:p-[50px]">

      <div className="flex gap-20 justify-between w-[95%] mx-auto pt-[0px]">
        <img src="https://picsum.photos/750/500?grayscale" alt="" className="w-[750px] h-[500px]"/>

          
          <div className="flex flex-col content-between relative h-inherit">
            {/* Banner lg */}
            <div className="hidden lg:block bg-[#0EB2E7] h-[165px] p-[30px] text-white flex items-center lg:text-[75px] mb-20 absolute top-5 -left-[250px]" style={{ width: "calc(100% + 250px)" }} >Natasha Sood</div>

            {/* Banner md */}
            {/* Banner sm */}

            {/* Page main paragraph */}
            <h2 className="lg:text-[42px] mb-6 lg:mt-[250px]">Lorem ipsum dolor sit amet</h2>
            <div className="mb-[80px]">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta.</div>

            {/* <button className="bg-[#0EB2E7] px-10 py-4 text-white w-fit"><a href="#">La mia storia</a></button> */}
          </div>
        </div>
    </main>

    <section className="p-[20px] lg:p-[50px] bg-[#F3F3F3]">
      <h2 className="lg:text-[42px] mb-6">La mia storia</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, praesentium provident deserunt itaque aut, officiis sed consequuntur dolorem reprehenderit harum a corporis aperiam, quaerat ipsam. Dolorum odit voluptates neque asperiores maxime fugiat at officia, illum nemo est, ab eaque ex quibusdam qui hic sapiente nisi ad. Vitae provident, vero corrupti animi officiis, dignissimos fugiat harum cumque incidunt est quos. Dolorem ea accusamus vero consequatur consequuntur cum, tempora veritatis ullam aliquid eveniet illum eos impedit sint expedita dolor perferendis nam inventore fugit sapiente consectetur accusantium repudiandae facere? Neque incidunt aliquam mollitia nemo blanditiis ipsum nisi pariatur repellendus. Nobis voluptatibus modi velit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium rerum repellat molestiae expedita sunt quae, maiores veniam quaerat! Repudiandae id quisquam similique culpa exercitationem debitis quas voluptate. Modi vel ratione totam odit et nulla? Minima beatae inventore, velit quia obcaecati suscipit, molestiae reiciendis necessitatibus autem qui nostrum veniam asperiores.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum sint voluptas dicta magnam nesciunt, nam incidunt fugit quia rerum a at qui animi quos! Nesciunt dolores quisquam ab architecto?</p>
    </section>
  </div>)
}