import React from 'react';
import AI from '../Assets/images/AI.png';
import fullStack from '../Assets/images/fullStack.png';
import web from '../Assets/images/web2.png';
import mobile from '../Assets/images/mobile.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate()
  const images = [
    { src: AI, alt: "AI Image" },
    { src: fullStack, alt: "Full Stack Development Image" },
    { src: web, alt: "Web Development Image" },
    { src: mobile, alt: "Mobile Development Image" },
  ];

  const HandleContact=()=>{
    navigate('/contact')
  }
  return (
    <div className='w-full m-4  h-auto flex justify-center mt-[120px] '>
      <div className='flex flex-col py-10 sm:flex-row p-4 w-[1320px] bg-[#fdf0df] rounded-2xl shadow-xl '>
        <div className='sm:w-1/2 w-full h-full my-auto flex flex-col justify-center sm:justify-start  p-6 rounded-lg gap-4 ml-4'>
          <h1 className="text-4xl text-textColor font-bold mb-2 ">Craft a legacy of success with our cutting-edge AI expertise.</h1>
          <p className="mb-4 text-xl text-textColor pr-6">
            Elevate Your Legacy: Unlock Success with Our Leading AI Expertise. Transform Your Future through Innovative Precision and Vision.
          </p>
          <button onClick={HandleContact} className="bg-textColor w-[250px] py-3 text-lg text-white px-4 rounded hover:bg-textHover transition-transform hover:-translate-y-1 duration-500 mx-auto" href='#ContactUs'>
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
