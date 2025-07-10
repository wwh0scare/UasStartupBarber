import React, { useEffect } from 'react'
import scrollToTop from '../helpers/scrollToTop'

function About() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='min-h-screen'>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">About Us</h2>
        </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90"></h2>
        <img src='https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 grayscale object-cover hidden md:block" ></img>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">How We Started</p>
        <p className="italic">Semarang | Since 2023</p>
        <p className="max-w-lg mx-auto text-xl">
        At Ramir's Barbershop, our journey began with a deep passion for the art of barbering and a strong commitment to serving the vibrant community of Semarang. What started as a humble dream in a small, cozy shop became the foundation of a grooming sanctuary where skill, tradition, and modern style come together.
        </p>
        <p className="max-w-lg mx-auto text-xl">Ramir, our founder and master barber, spent years perfecting his craft, blending timeless techniques with contemporary trends. From the very first snip of the scissors, his dedication to precision and warm, friendly service earned the trust of our earliest clients. Word quickly spread across the city—not just about the sharp cuts and smooth shaves, but about the authentic, welcoming vibe that makes every visit feel like coming home.</p>
        <p className="max-w-lg mx-auto text-xl">As demand grew, so did our family. We carefully expanded our team, bringing on talented barbers who share Ramir’s commitment to excellence. Today, we take pride in upholding the same core values that built our legacy: meticulous craftsmanship, a relaxed yet professional atmosphere, and a genuine passion for helping you look and feel your best.</p>
        </div>
        
      </section>
      <section className="py-20 gap-4 flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">
        <h2 className="text-9xl hidden lg:block absolute top-64 -left-48 text-red-900 rotate-90">Our Story</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We Are</p>
        <p className="italic">Dedicated Professionals</p>
        <p className="max-w-lg mx-auto text-xl">
        In the heart of Semarang, a small but passionate barbershop opened its doors. It was here that Ramir, armed with his scissors, razors, and an unwavering commitment to his craft, began his journey. From the very first cut, it was clear—this wasn’t just a barbershop; it was a place where skill met heart.
        </p>
        <p className="max-w-lg mx-auto text-xl">As word spread, so did Ramir’s reputation. What started as a single-chair shop grew into a beloved local hub, where clients became friends, stories were exchanged, and the buzz of clippers mixed with laughter. The essence of Ramir's Barbershop wasn’t just in the precision of the cuts, but in the warmth of the experience—a true reflection of Semarang’s community spirit.</p>
        <p className="max-w-lg mx-auto text-xl">Today, our team has expanded, but our foundation stays the same. Every barber at Ramir's is handpicked not just for their technical skill, but for their dedication to the art and tradition of grooming. We believe a great haircut isn’t just about looking sharp—it’s about confidence, connection, and a touch of Semarang pride.</p>
        </div>
        <img src='https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 object-cover hidden md:block" ></img>
      </section>
    </div>
  )
}

export default About