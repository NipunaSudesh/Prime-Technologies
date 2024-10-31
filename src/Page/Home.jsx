import React from 'react';
import AI from '../Assets/images/AI.png';
import fullStack from '../Assets/images/fullStack.png';
import web from '../Assets/images/web2.png';
import mobile from '../Assets/images/mobile.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Home = () => {
  const images = [
    { src: AI, alt: "AI Image" },
    { src: fullStack, alt: "Full Stack Development Image" },
    { src: web, alt: "Web Development Image" },
    { src: mobile, alt: "Mobile Development Image" },
  ];
  return (
    <div className='w-full  m-4  h-[550px] flex justify-center mt-[100px] '>
      <div className='flex p-4 w-[1320px] bg-[#fbf9f6] rounded-2xl shadow-xl '>
        <div className='w-1/2 h-full my-auto flex flex-col justify-center p-6 rounded-lg gap-4 ml-4'>
          <h1 className="text-4xl text-textColor font-bold mb-2">Craft a legacy of success with our cutting-edge AI expertise.</h1>
          <p className="mb-4 text-xl text-textColor">
            Elevate Your Legacy: Unlock Success with Our Leading AI Expertise. Transform Your Future through Innovative Precision and Vision.
          </p>
          <button className="bg-textColor w-[250px] py-3 text-lg text-white px-4 rounded hover:bg-textHover transition-transform hover:-translate-y-1 duration-500 mx-auto">
            Contact Us
          </button>
        </div>
        <div className='flex items-center justify-center ml-10 w-[400px]'>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className="w-full rounded-xl h-[400px] z-20" />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  );
};
