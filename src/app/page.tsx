'use client';
import React from "react";
// import SwiperCarousel from "../app/carousel"
// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const HomePage = () => {
  return (
    <div className="bg-[#171C2F] text-white min-h-screen">
      <nav className="bg-[#171C2F] py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ASTRALSCOPE</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#testimonials" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Login</a></li>
          </ul>
        </div>
      </nav>

      <header className="min-h-screen flex justify-center items-center text-center py-16 relative">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center h-[90vh] w-[90vw]">
          <h1 className="text-4xl md:text-5xl font-bold">ASTRALSCOPE</h1>
          <button className="mt-6 bg-[#ca8a04] text-black px-6 py-3 rounded-lg hover:bg-yellow-600">
            BOOK NOW
          </button>
          <p className="text-lg md:text-xl mt-4">
            Unlock the Mysteries of the Universe with Expert Astrological Insights
          </p>
        </div>
      </header>

      <section id="about" className="py-16 relative h-screen flex flex-col items-center bg-gradient-to-b from-blue-900 to-black">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">About Astrologer</h2>

  <div className="bg-gray-800 rounded-xl shadow-lg p-10 w-full max-w-7xl h-[90%] flex flex-col items-center">
    <h6 className="text-gray-300 text-center text-xl mb-4">1300+ Astrologers</h6>
    <h5 className="text-gray-100 text-center text-3xl font-semibold mb-8">Meet Our Expert Astrologers</h5>

    <div className="relative w-full mt-8 flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://w0.peakpx.com/wallpaper/271/988/HD-wallpaper-kiara-advani-actor-bollywood-celeb-thumbnail.jpg"
              alt="Astrologer 1"
              className="w-48 h-48 object-cover mb-6 shadow-xl"
            />
            <blockquote className="bg-gray-700 p-6 rounded-xl text-white text-center italic">
              "The readings on this website were spot on! It gave me a clearer understanding of my life path and provided guidance when I needed it most. Highly recommend to anyone seeking clarity."
            </blockquote>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://w0.peakpx.com/wallpaper/271/988/HD-wallpaper-kiara-advani-actor-bollywood-celeb-thumbnail.jpg"
              alt="Astrologer 2"
              className="w-48 h-48 object-cover mb-6 shadow-xl"
            />
            <blockquote className="bg-gray-700 p-6 rounded-xl text-white text-center italic">
              "Navigating the website was a breeze. The design is intuitive, and I loved how easy it was to book a consultation. Truly a seamless experience."
            </blockquote>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://w0.peakpx.com/wallpaper/271/988/HD-wallpaper-kiara-advani-actor-bollywood-celeb-thumbnail.jpg"
              alt="Astrologer 3"
              className="w-48 h-48 object-cover mb-6 shadow-xl"
            />
            <blockquote className="bg-gray-700 p-6 rounded-xl text-white text-center italic">
              "The astrologers here are so professional and insightful. They helped me make important decisions with confidence."
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>



      <section id="services" className="py-16 relative h-screen flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-7xl h-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Personalized Birth Chart Readings</h3>
              <p className="mt-2 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quaerat placeat nostrum fugiat laudantium, consectetur harum officia fugit magnam neque dolore? Animi magnam, voluptas ducimus dolor consequuntur corrupti? Recusandae, qui.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Relationship Compatibility Analysis</h3>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias rerum explicabo laudantium libero natus officia neque quo, minima iste. Voluptates obcaecati dolorem velit? Expedita perferendis repudiandae doloremque? Enim, dignissimos?
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Daily, Weekly, and Monthly Horoscopes</h3>
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam officiis, laudantium saepe dignissimos recusandae quaerat possimus est non repellat vero illum. Voluptas harum voluptatum sapiente laborum ratione beatae dolorem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="interaction" className="py-16 relative h-screen flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Live Astralscope Interaction</h2>
        <div className="rounded-lg shadow-lg p-8 w-full max-w-7xl h-[90%]" style={{ backgroundColor: '#dad2bf' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-full">
            <div className="p-6 rounded-lg shadow-md flex items-center justify-center" style={{ backgroundColor: '#171C2F', height: '90%' }}>
              <h3 className="text-xl font-bold">Chat With Astrologer</h3>
            </div>
            <div className="p-6 rounded-lg shadow-md flex items-center justify-center" style={{ backgroundColor: '#171C2F', height: '90%' }}>
              <h3 className="text-xl font-bold">Talk With Astrologer</h3>
            </div>
            <div className="p-6 rounded-lg shadow-md flex items-center justify-center" style={{ backgroundColor: '#171C2F', height: '90%' }}>
              <h3 className="text-xl font-bold">Astromall Shop</h3>
            </div>
            <div className="p-6 rounded-lg shadow-md flex items-center justify-center" style={{ backgroundColor: '#171C2F', height: '90%' }}>
              <h3 className="text-xl font-bold">Book A Pooja</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 relative h-screen">
        <h2 className="text-3xl font-bold text-center mb-8">Why Us?</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-7xl mx-auto" style={{ height: "90%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p className="text-gray-300 text-center">
            At Astralscope, we combine expertise, innovation, and personalization to deliver an unmatched astrology
            experience. Our team of seasoned astrologers provides accurate, meaningful insights tailored to your unique
            astrological profile.
          </p>
        </div>
      </section>


 {/* Testimonials Section */}
 <section id="testimonials" className="py-16 relative h-screen bg-gradient-to-b from-blue-900 to-black">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Clients Say</h2>

    <div className="mt-6">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://w0.peakpx.com/wallpaper/271/988/HD-wallpaper-kiara-advani-actor-bollywood-celeb-thumbnail.jpg"
              alt="Testimonial 1"
              className="w-48 h-48 object-cover rounded-full mb-6 shadow-xl"
            />
            <blockquote className="bg-gray-700 p-6 rounded-xl text-white text-center italic">
              "The readings on this website were spot on! It gave me a clearer understanding of my life path and provided
              guidance when I needed it most. Highly recommend to anyone seeking clarity."
            </blockquote>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://w0.peakpx.com/wallpaper/271/988/HD-wallpaper-kiara-advani-actor-bollywood-celeb-thumbnail.jpg"
              alt="Testimonial 2"
              className="w-48 h-48 object-cover rounded-full mb-6 shadow-xl"
            />
            <blockquote className="bg-gray-700 p-6 rounded-xl text-white text-center italic">
              "Navigating the website was a breeze. The design is intuitive, and I loved how easy it was to book a consultation. Truly a seamless experience."
            </blockquote>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://w0.peakpx.com/wallpaper/271/988/HD-wallpaper-kiara-advani-actor-bollywood-celeb-thumbnail.jpg"
              alt="Testimonial 3"
              className="w-48 h-48 object-cover rounded-full mb-6 shadow-xl"
            />
            <blockquote className="bg-gray-700 p-6 rounded-xl text-white text-center italic">
              "The astrologers here are so professional and insightful. They helped me make important decisions with confidence."
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>


      <footer id="contact" className="py-16 relative h-screen">
        <h3 className="text-lg font-bold text-center mb-8">Connect with Astralscope</h3>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-7xl mx-auto" style={{ height: "90%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="flex justify-center space-x-6">
            <a href="www.facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="www.instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="www.linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="www.youtube.com" className="text-gray-400 hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
