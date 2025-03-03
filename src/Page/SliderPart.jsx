import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import sd1 from '../assets/sd1.avif'
import sd2 from '../assets/sd2.jpg'
import sd3 from '../assets/sd3.avif'
import sd4 from '../assets/sd4.avif'
import sd5 from '../assets/sd5.jpg'

const SliderPart = () => {
  return (
    <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide><div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${sd1})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">🌱Give Hope, Change Lives!</h1>
      <p className="mb-5 text-2xl">
      🎬 "Every donation is a step toward a brighter future. Be a part of the change today!"
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>




        <SwiperSlide><div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${sd2})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">🎨 Support Creativity, Empower Artists!</h1>
      <p className="mb-5 text-2xl">
      ✨"Fuel passion and creativity. Help artists bring their vision to life!"
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>




        <SwiperSlide><div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${sd3})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">📚 Turn Pages into Dreams!</h1>
      <p className="mb-5 text-2xl">
      "Support our book project and help us bring new stories to the world."
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>


        <SwiperSlide><div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${sd4})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">🔥 Join the Movement, Make an Impact!</h1>
      <p className="mb-5 text-2xl">
      Together, we can achieve great things. Every donation counts!"

Would you like captions for a specific type of campaign? 🚀
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>

        <SwiperSlide><div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${sd5})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default SliderPart;
