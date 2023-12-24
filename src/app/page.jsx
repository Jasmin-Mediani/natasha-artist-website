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
            <div className='mb-[40px] text-justify'>
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

      <section className='p-[20px] lg:p-[50px] bg-[#F3F3F3]'>
          <h2 className='lg:text-[42px] text-[25px] mb-6 md:text-left text-center'>
            La mia storia
          </h2>

            <img
              src='/assets/natasha.jpg'
              className='md:float-left pb-0 md:pr-6 m-auto' 
              alt=''
            />

              <p className='text-justify mb-3 md:mt-0 mt-8'>
                I was born and brought up in a small frontier city deep within
                Eurasia, where the Siberian forests meet the open steppe. Though
                there were no art galleries or museums in my city, we had a lot
                of art books at home. My mother would often look at them with
                me. She also encouraged me to do crafts, which I came to love.
                Throughout my childhood, art enchanted me. The earliest memories
                I have of being in a thrall to something was due to works of art
                seen on holiday or on school trips... the sculpture of a girl in
                Vorontsov palace in Alupka by Quintilio Corbellini... Archip
                Kuinziin&apos;s painting of the Dnieper in moonlight... The ability
                of art to transport me to a special place was a leitmotif of my
                life as I grew up. But my family was practically oriented and
                the thought of going to art school, let alone becoming an
                artist, never entered my mind until much, much later and in a
                very different place.
              </p>
              <p className='mb-3 text-justify'>
                It was not until my early thirties that I tried my hand at art
                for the first time. The spur was a visit to MoMa in Berlin. I
                had never before encountered modern art, and it evoked in me a
                powerful, visceral response, which was completely new to me. I
                felt called. As soon I returned to Florence, where I was living
                at the time, I enrolled on an art course. So began my
                transformation. Painting and drawing became the same as
                breathing for me. They became my oasis, the place to nurture my
                soul, a fount of solace at difficult moments. I simply could not
                fathom how I had managed to exist up to then without doing art
                everyday, no matter what the circumstances. Perhaps this is what
                is meant by being reborn?
              </p>

              <img
              src='/assets/IMG_20210915_124112_034.png'
              className='md:my-0 md:float-right md:pl-6 pb-0 m-auto my-8' 
              alt=''
            />

              <p className='mt-3 text-justify'>
              Having discovered my calling for art, I have remained true to it
              ever since. It has been of huge benefit to me psychologically. To
              understand that process better, and to help others gain from art
              as I have, I studied for a diploma in art therapy at ArTeA School
              in Milan. This taught me that art is above all a language, with
              the ability to reveal otherwise hidden aspects of one&apos;s being.
              While working for my diploma, I witnessed individuals though lost
              causes by almost everyone, inhabiting the shadows with no hope of
              a future, who by doing art realised to their surprise and joy that
              they have talents which others appreciate. That gave them the
              confidence to enter society and work towards realising their
              potential.
            </p>
            <p className='mt-3 text-justify'>
              This understanding informs me as an art teacher and the art I do.
              Knowing the language of art and how it is articulated in practice
              enables me to guide my students to discern the means best - and
              uniquely - suited to them to achieve their goals in art. This
              understanding has also proved invaluable for my own artwork. My
              metier as an artist is painting. I like to paint flowers and
              animals, but I am fascinated, in particular, by portraiture. A
              face for me is a very personal, idiosyncratic landscape,
              reflecting that person&apos;s journey through life. When I paint
              someone&apos;s portrait, I travel the landscape of his life and give it
              artistic form. As I do that, I am acutely aware of the painting&apos;s
              capacity to influence that person&apos;s sense of self and to shape the
              environment in which it will be placed. And so in my portraits I
              focus on the brighter side of the lives of the people depicted and
              on their potential for a heartening future.
            </p>
      </section>
    </div>
  )
}
