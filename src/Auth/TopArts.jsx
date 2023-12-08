import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Take a look
import {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import view_more from "../assets/img/view_more.png";
import bg_logo from "../assets/img/bg_logo.png";
import { Link } from "react-router-dom";
function TopArts() {
  let slide_as_screen="auto";
  if(window.innerWidth>=600){
    slide_as_screen=2
  }
  return (
    <div id="top_arts" className="p-2 my-2 mx-auto md:w-10/12">
      <h2 className="text-center text-2xl text-medium text-allura text-fuchsia-900 md:text-4xl">
        Top Exhibits
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slide_as_screen}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="my-8 swiper md:rounded-2xl"
      >
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://th.bing.com/th/id/OIP.LlPvc6ko9I9s8lUdIUOFaQHaF4?pid=ImgDet&w=206&h=163&c=7&dpr=1.3')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize ">
                Misty mood
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden ">
                He stood on the bridge, watching the mist rise from the river.
                He felt a chill in his bones, and a heaviness in his heart. He
                remembered the last time he saw her, how they had kissed
                goodbye, and how she had promised to come back. He waited for
                her every day, hoping to see her silhouette in the fog. But she
                never came. He wondered if she was still alive, or if she had
                forgotten him. He felt like he was fading away, like the mist
                that dissolved in the air.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://th.bing.com/th/id/R.e9d7a95eae6ab376438d5da27d80a450?rik=hhpoiCbrGNibEg&riu=http%3a%2f%2ffeedinspiration.com%2fwp-content%2fuploads%2f2015%2f04%2fsurrealism-painting-568.jpg&ehk=Zf20hHtQLdKq12sNAvjicweBd8TdART3ed%2fsiTx2ypI%3d&risl=&pid=ImgRaw&r=0')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                beauty of an angel
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                You have always been fascinated by angels, but you never
                expected to meet one in person. One night, as you are walking
                home from work, you see a bright light in the sky. You follow it
                to a nearby park, where you find a wounded angel lying on the
                ground. You rush to help him, and as you get closer, you are
                stunned by his beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <Link to="./login">
            <div className="h-72 relative flex flex-col text-fjord_one cursor-pointer text-xs justify-center items-center border border-fuchsia-600 rounded-md bg-white md:h-96">
              <img
                src={bg_logo}
                alt="app logo"
                className="absolute h-full w-auto"
              />
              <img src={view_more} alt="view more" className="w-10 h-10" />
              <p className="my-2 text-fuchsia-900">&nbsp;&nbsp;View More...</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://images.fineartamerica.com/images-medium-large-5/aspirations-of-greatness-joe-misrasi.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                what's there inside you?
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                You have everything you need inside you to achieve your goals.
                You have the talent, the passion, the courage, and the will. You
                have the power to overcome any obstacle, to face any challenge,
                to learn from any mistake. You have the potential to grow, to
                improve, to excel. You have the vision, the creativity, the
                inspiration, and the action. You have the ability to make a
                difference, to create value, to contribute to the world. You
                have everything you need inside you. You just have to believe in
                yourself, and go for it.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/hope-ken-day.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                our hope
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                Hope is a bird that sings in the dark Hope is a flower that
                blooms in the snow Hope is a star that shines in the night Hope
                is a fire that burns in the cold Hope is a voice that whispers
                in the silence Hope is a hand that reaches out in the storm Hope
                is a heart that beats in the pain Hope is a soul that lives in
                the love
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopArts;
