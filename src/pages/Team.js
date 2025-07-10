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
               <img className='grayscale brightness-90 w-full h-full object-cover' src='https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-a4f8-61fb-b3c8-daf356430e6a/raw?se=2025-07-10T15%3A12%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=2828f213-f122-5d4f-a6e5-ea2d61250131&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-10T12%3A15%3A34Z&ske=2025-07-11T12%3A15%3A34Z&sks=b&skv=2024-08-04&sig=vJgJrWD57VO2dBaO1MAotBSKe4uOjZAeH1WfVQD8jPU%3D'></img>
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
                <img className='grayscale w-full h-full object-cover' src='https://lh3.googleusercontent.com/fife/ALs6j_ESIuMQyDg1b23W8z8S7CCW1p_4gyvI7_3ucwg6tDIf1g3b2S5G0KtQA_C1-eiqd0vInJ242WVSGkxIx83SDimY9bVVZf-go3jjDfs3_vHPuXaiuT_ROxK9j3BFovgsXNE892sZLaH3dmLzcVmG37uzekMzQ3YTqI-5XNn6cwO4NUUPbARiTAAKMnzWdDACYkSuWxGUppvLsPzsO0_FXIjy9o5NrPCLIAO_Na-wnYLX9T8HlZJ5qLp7Bh0EZHPOSUKfwna75zmWi4uyqtcQ7SN7_m6-1m0iYsQaIODCisi1hNx9FTMgym2wq2NnxmEmAM1lWsJ0IYyqbmwcwdUo5PxyX-ygpSzv2HQygiei8Zd77nx9msv-N1doil4orsKaO6vYDF8zQa0opMQqu8IgQAhEwo9hzQYsm9UXtI0D79kTLnOz6noMqK7EXYHP4Eb89fMn0ZAtktt_9odpf6cikDvhyYAeCE1cnHhZtkVc_31K30LTZJrE0mXFyjpbRdZGsay-y3j1L-857aJcyihkm9Keapr_jArlWwSdwtRafyvwLaK6_PiP3Ifihsoy5XyXFAzQuTVjNHiLCmlygdq41mHQojeInMNiiUwyoYgXf3zNjWFrPTC3QN3Y7Zdb-GQ2qQWwgzVQTR24i_Hb0FZ9E5COR1yR0lqCfPufLGm9zQPn6L7w2BwyoaAzQ1XsjxtC1DH6ua1Qwyc6-oai60mv54jTZ8TNLLWnz1KT0OU61KM63U_tq1YOuei8lQiHUJppImxq16nQQp53blx7oi4QyjCiWyzBTE2jGtVkWUWNrG5xAd6ztIvYrNSw944rwlIl3M1q-tKOPx3i_iPa5OpOWm9NR4Mwr8yeS4e9aC6Qz-wJflGrG5XAnsEagfRSDMrd_MDbIA2CVlVhZsrc3sdmaRO9KKu734pRk3EKe5YtVL6mMlrJWqLcnQ7IMznPJ_c8kPSoIvFTNVXa47u0_zDfF89pAJaBLGpWGiMYjbsvpMCi1VI-u04UovbCI9KGYqkSY5itzSRQS_9Jv7wpm_WdtWPAInNkbrJU2Qg5hjyH0hKyj7zzYncqXFPUlDb3P17Sv986pF3l_2zHkONdkOGE0XoGa2PPo0ZZAsmC-Qx4elbrpaf9nIbSudc54FyhyBXUVQ7prFDK45t16um0xkGRaxebPzxXFudmxjnFIYn6xFzryA-qRmX_z9dGbzuKJki99UUGHr4FBKNWY1cElOdjgBBYgRPfH19yxMreJGOs1Cf5iaLbOfrdEDm8v67fBN5ygWKOfEM5RHME0NMHZvErZ0ibnXxJ0zLvRnjkB6FKiVfKm4S05BaYZlgOyPIya2dLPdsRgDCvLxcgyP2QL2Asnj7DfpjrEAreMv6HFzC5D6UNRQ5ozuf_g5ZLg_bUVkzM72x_ntzxROegclZgJMzNzzLFkQ=s1024'></img>
             </div>
        </section>
    </div>
  )
}

export default Team