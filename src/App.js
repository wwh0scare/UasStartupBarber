import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import { useEffect } from "react";
import scrollToTop from "./helpers/scrollToTop";

function App() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className="relative">
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Ramir Barbershop</h2>
      <p className="italic text-center text-xl">We provide the freshest cuts in the city.</p>
      <section className="py-4">
        <ImageCarousel/>
      </section>
      <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">About Us</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We are</p>
        <p className="italic">Semarang | Since 2023</p>
        <p className="max-w-lg mx-auto text-xl">
        Your premier destination for expert grooming and hairstyling services in the heart of Semarang City, Indonesia. Founded with a deep passion for the art of barbering and a commitment to our local community, we strive to provide an exceptional grooming experience that leaves you looking sharp and confident.
        </p>
        <p className="max-w-lg mx-auto text-xl">Established in 2023, Ramir's Barbershop was born from a vision to blend traditional barbering techniques with modern styles. Our founder, [Founder’s Name], dreamed of creating a space where every client could enjoy high-quality grooming in a relaxed and welcoming atmosphere.
.</p>
        <p className="max-w-lg mx-auto text-xl">Our team consists of skilled and experienced barbers who take pride in their craft. We are dedicated to continuous improvement, staying updated with the latest trends, and ensuring every haircut, shave, or styling session meets the highest standards. At Ramir's Barbershop, we don’t just cut hair we create confidence.</p>
        </div>
        <img className="w-1/4 grayscale object-cover hidden md:block" src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg'></img>
      </section>
      <section className="w-xl pb-4 px-4 bg-red-950 bg-opacity-10 mt-4 flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
        <BarberServices/>
        <SalonServices/>
      </section>
    </div>
  );
}

export default App;
