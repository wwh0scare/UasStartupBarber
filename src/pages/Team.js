import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'

function Team() {
   useEffect(() => {
      scrollToTop()
    },[])
  return (
    <div className='min-h-screen'>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Team</h2>
        </div>
        <section className='flex flex-wrap justify-center gap-8 py-8 bg-red-950 bg-opacity-10 text-neutral-900'>
             <div className='relative w-[350px] h-[400px]'>
               <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Sierra</p>
                  <p>|</p>
                  <p>Expert Stylist</p>
                  <p>|</p>
                  <Link className='underline' to='/team/sierra'>Read More</Link>
               </div>
               <img className='grayscale brightness-90 w-full h-full object-cover' src='https://i.pinimg.com/1200x/ae/c7/77/aec777f8c4a207cf1cc7e9541bb4328d.jpg'></img>
             </div>
             <div className='relative w-[350px] h-[400px]'>
             <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Billy</p>
                  <p>|</p>
                  <p>Master Barber</p>
                  <p>|</p>
                  <Link className='underline' to='/team/billy'>Read More</Link>
               </div>
                <img className='grayscale w-full h-full object-cover' src='https://videos.openai.com/vg-assets/assets%2Ftask_01jztaeq0kf9g8wkkbasjxh1qp%2F1752156435_img_0.webp?st=2025-07-10T12%3A52%3A51Z&se=2025-07-16T13%3A52%3A51Z&sks=b&skt=2025-07-10T12%3A52%3A51Z&ske=2025-07-16T13%3A52%3A51Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=S7Fz%2F%2Bh05oySitrPDM%2FkiL2xdt8z%2FyGlEezaJzr1Zm4%3D&az=oaivgprodscus'></img>
             </div>
             <div className='relative w-[350px] h-[400px]'>
             <div className='absolute z-10 text-xl top-0 px-2 py-8 flex justify-center items-end gap-2 w-full text-neutral-300'>
                  <p className='font-bold'>Jonny</p>
                  <p>|</p>
                  <p>Expert Stylist</p>
                  <p>|</p>
                  <Link className='underline' to='/team/jonny'>Read More</Link>
               </div>
                <img className='grayscale w-full h-full object-cover' src='https://i.pinimg.com/736x/8a/36/c1/8a36c1fe02df62cdad2e70dff2f6e43e.jpg'></img>
             </div>
        </section>
    </div>
  )
}

export default Team