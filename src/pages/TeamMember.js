import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'

function TeamMember() {
    const params = useParams()
    const [member, setMember] = useState({})
    const members = {
        sierra: {
            name: 'Sierra',
            desc: `
           Born and raised in the vibrant city of Semarang, Sierra discovered her passion for hairstyling at a young age. As a child, she would watch her grandmother craft intricate sanggul (traditional Javanese hair buns) for weddings, mesmerized by how hair could tell a story. By her teens, she was already experimenting with cuts and colors on friends, blending modern trends with Indonesia’s rich grooming traditions.

After graduating with honors from Semarang’s prestigious Beauty Academy, Sierra sought to refine her craft in a professional setting. She joined Ramir’s Barbershop, drawn by its reputation for precision and innovation—a rare gem in Central Java’s grooming scene. Though initially known for classic men’s cuts, Ramir recognized Sierra’s unique ability to bridge tradition and contemporary style.

At Ramir’s, Sierra introduced fresh techniques, from textured fades inspired by Jakarta’s street culture to tailored styles for Semarang’s young professionals. Her signature touch? Incorporating Javanese hair care rituals, like lulur-infused treatments for scalp health, into modern grooming. Clients quickly embraced her artistry, and even Ramir—once skeptical of "non-traditional" styles—became her biggest advocate.

Today, Sierra is a cornerstone of the shop, proving that great barbering knows no gender. Whether it’s a sharp undercut or a sleek pompadour, her work celebrates Semarang’s diversity—one cut at a time.


          `,
            image: 'https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-a4f8-61fb-b3c8-daf356430e6a/raw?se=2025-07-10T15%3A12%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=2828f213-f122-5d4f-a6e5-ea2d61250131&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-10T12%3A15%3A34Z&ske=2025-07-11T12%3A15%3A34Z&sks=b&skv=2024-08-04&sig=vJgJrWD57VO2dBaO1MAotBSKe4uOjZAeH1WfVQD8jPU%3D',
            subheader: 'Expert Stylist'
        },
        billy: {
            name: 'Billy',
            desc: `
            Billy, the soul behind Ramir’s Barbershop, was born and raised in the bustling streets of Semarang, where the scent of lumpia vendors mingled with the buzz of motorbikes. His love for barbering began in childhood, watching his grandfather—a tukang cukur keliling (traditional Javanese mobile barber)—shave men in the alleys of Kampung Melayu with nothing but a straight razor and warm towels steeped in jamu herbs.

Determined to honor this legacy, Ramir apprenticed under Semarang’s most respected barbers, mastering everything from classic Javanese taper cuts to the precise fades favored by the city’s younger crowd. In 2023, he opened his own shop near Pasar Johar, blending old-world charm with modern flair.

Ramir’s Barbershop quickly became more than a grooming spot—it was a warung cerita (a place for stories). Regulars came for the crisp cuts but stayed for the laughter and kopi joss (charcoal coffee) served in the waiting area. Ramir believed a great haircut wasn’t just about style; it was about respect. His signature "Rapi ala Semarang" (Semarang-neat) cuts combined the discipline of traditional barbering with the city’s laid-back coastal vibe.

A natural mentor, Ramir trained his team with the same patience his grandfather once showed him. He’d say, "Guntingan yang baik dimulai dari hati" ("A good cut begins from the heart"). Whether serving elderly pak dhe (uncles) who wanted their weekly straight-razor shave or Gen-Z clients experimenting with bold designs, Ramir made everyone feel like family.

Today, his shop stands as a testament to Semarang’s spirit—where tradition and modernity meet under the hum of clippers and the warmth of Javanese hospitality.
          `,
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jztaeq0kf9g8wkkbasjxh1qp%2F1752156435_img_0.webp?st=2025-07-10T12%3A52%3A51Z&se=2025-07-16T13%3A52%3A51Z&sks=b&skt=2025-07-10T12%3A52%3A51Z&ske=2025-07-16T13%3A52%3A51Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=S7Fz%2F%2Bh05oySitrPDM%2FkiL2xdt8z%2FyGlEezaJzr1Zm4%3D&az=oaivgprodscus',
            subheader: 'Master Barber'
        },
        jonny: {
            name: 'Jonny',
            desc: `
            Jonny grew up in Semarang's artistic heart, where batik workshops and street murals colored his childhood. The son of a tukang ukir (woodcarver) and a penari jatilan (traditional Javanese dancer), he learned early that art lives in every strand of hair. By 15, he was transforming his schoolmates' looks—crafting edgy undercuts inspired by Semarang’s punk scene and intricate braids worthy of a Jathilan performance.

After graduating from Sekolah Kecantikan Semarang with honors, Jonny sought a salon that valued creativity as much as technique. He found his match at Ramir’s Barbershop—a place where classic Javanese grooming met modern experimentation. Though known for traditional cuts, Ramir saw genius in Jonny’s ability to blend urban edge with Indonesian aesthetics.

At Ramir’s, Jonny became the go-to artist for Semarang’s boldest looks:

"Ombre Merapi" – Fades transitioning like the slopes of Mount Merapi

Batik-inspired shaved designs honoring Central Java’s heritage

Vibrant warna pelangi (rainbow colors) for daring clients

His secret? Treating every head as a kain mori (blank canvas). He’d sip wedang jahe (ginger tea) with clients, listening to their stories before sketching designs that reflected their personality—whether a banker wanting a subtle "fade berkelas" or a musician craving a radical "punk Jawa" look.

Ramir’s Barbershop became Semarang’s hub for hair innovation, proving tradition and rebellion could coexist. For Jonny, cutting hair wasn’t just a job—it was nguri-uri (preserving culture) while pushing boundaries. As he often says:
"Gaya rambutmu adalah ceritamu—dan Semarang punya banyak cerita."
("Your hairstyle is your story—and Semarang has many stories.")


          `,
            image: 'https://lh3.googleusercontent.com/fife/ALs6j_ESIuMQyDg1b23W8z8S7CCW1p_4gyvI7_3ucwg6tDIf1g3b2S5G0KtQA_C1-eiqd0vInJ242WVSGkxIx83SDimY9bVVZf-go3jjDfs3_vHPuXaiuT_ROxK9j3BFovgsXNE892sZLaH3dmLzcVmG37uzekMzQ3YTqI-5XNn6cwO4NUUPbARiTAAKMnzWdDACYkSuWxGUppvLsPzsO0_FXIjy9o5NrPCLIAO_Na-wnYLX9T8HlZJ5qLp7Bh0EZHPOSUKfwna75zmWi4uyqtcQ7SN7_m6-1m0iYsQaIODCisi1hNx9FTMgym2wq2NnxmEmAM1lWsJ0IYyqbmwcwdUo5PxyX-ygpSzv2HQygiei8Zd77nx9msv-N1doil4orsKaO6vYDF8zQa0opMQqu8IgQAhEwo9hzQYsm9UXtI0D79kTLnOz6noMqK7EXYHP4Eb89fMn0ZAtktt_9odpf6cikDvhyYAeCE1cnHhZtkVc_31K30LTZJrE0mXFyjpbRdZGsay-y3j1L-857aJcyihkm9Keapr_jArlWwSdwtRafyvwLaK6_PiP3Ifihsoy5XyXFAzQuTVjNHiLCmlygdq41mHQojeInMNiiUwyoYgXf3zNjWFrPTC3QN3Y7Zdb-GQ2qQWwgzVQTR24i_Hb0FZ9E5COR1yR0lqCfPufLGm9zQPn6L7w2BwyoaAzQ1XsjxtC1DH6ua1Qwyc6-oai60mv54jTZ8TNLLWnz1KT0OU61KM63U_tq1YOuei8lQiHUJppImxq16nQQp53blx7oi4QyjCiWyzBTE2jGtVkWUWNrG5xAd6ztIvYrNSw944rwlIl3M1q-tKOPx3i_iPa5OpOWm9NR4Mwr8yeS4e9aC6Qz-wJflGrG5XAnsEagfRSDMrd_MDbIA2CVlVhZsrc3sdmaRO9KKu734pRk3EKe5YtVL6mMlrJWqLcnQ7IMznPJ_c8kPSoIvFTNVXa47u0_zDfF89pAJaBLGpWGiMYjbsvpMCi1VI-u04UovbCI9KGYqkSY5itzSRQS_9Jv7wpm_WdtWPAInNkbrJU2Qg5hjyH0hKyj7zzYncqXFPUlDb3P17Sv986pF3l_2zHkONdkOGE0XoGa2PPo0ZZAsmC-Qx4elbrpaf9nIbSudc54FyhyBXUVQ7prFDK45t16um0xkGRaxebPzxXFudmxjnFIYn6xFzryA-qRmX_z9dGbzuKJki99UUGHr4FBKNWY1cElOdjgBBYgRPfH19yxMreJGOs1Cf5iaLbOfrdEDm8v67fBN5ygWKOfEM5RHME0NMHZvErZ0ibnXxJ0zLvRnjkB6FKiVfKm4S05BaYZlgOyPIya2dLPdsRgDCvLxcgyP2QL2Asnj7DfpjrEAreMv6HFzC5D6UNRQ5ozuf_g5ZLg_bUVkzM72x_ntzxROegclZgJMzNzzLFkQ=s1024',
            subheader: 'Expert Stylist'
        }
    }
    useEffect(() => {
        scrollToTop()
        if(params.id === 'sierra') {
            setMember(members.sierra)
        }
        if(params.id === 'billy') {
            setMember(members.billy)
        }
        if(params.id === 'jonny') {
            setMember(members.jonny)
        }
      },[])
    return (
      <div className='min-h-screen'>
          <div className='relative'>
              <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'></img>
              <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Team</h2>
          </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
          <div className="flex flex-col gap-4 px-4">
            <p className="text-4xl">{member.name}</p>
            <p className="italic">{member.subheader}</p>
            <p className="max-w-lg mx-auto text-xl">{member.desc}</p>
          </div>
          <img src={member.image} className="w-1/4 h-fit grayscale object-cover hidden md:block" ></img>
        </section>
      </div>
    )
}

export default TeamMember