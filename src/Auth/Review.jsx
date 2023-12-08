import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Pagination,Navigation } from "swiper/modules";
import bg_logo from "../assets/img/bg_logo.png";

function Review() {
  let slide_as_screen = "auto";
  if (window.innerWidth > 600) {
    slide_as_screen = 3;
  }
  return (
    <div id="review" className="p-2 my-2 py-8 md:w-10/12 mx-auto">
      <h2 className="text-center text-2xl text-medium text-allura text-fuchsia-900 md:text-4xl">
        Reviews
      </h2>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slide_as_screen}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination,Navigation]}
        className="swiper my-4 md:py-12"
      >
        <SwiperSlide className="h-fit pt-8 mx-2 md:pt-16">
          <div className="flex absolute bottom-40 md:bottom-36">
            <div className="ml-4 bg-white p-2 border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={bg_logo}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-center my-1 md:text-lg">
                @jshivdas
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="h-58 pt-9 border border-fuchsia-600 rounded-md md:h-58 md:pt-18">
            <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
            <p className="h-3/6 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-4/6 md:text-md ">
              He stood on the bridge, watching the mist rise from the river. He
              felt a chill in his bones, and a heaviness in his heart. He
              remembered the last time he saw her, how they had kissed goodbye,
              and how she had promised to come back. He waited for her every
              day, hoping to see her silhouette in the fog. But she never came.
              He wondered if she was still alive, or if she had forgotten him.
              He felt like he was fading away, like the mist that dissolved in
              the air.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit pt-8 mx-2 md:pt-16">
          <div className="flex absolute bottom-40 md:bottom-36">
            <div className="ml-4 bg-white p-2 border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={bg_logo}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-center my-1 md:text-lg">
                @jshivdas
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="h-58 pt-9 border border-fuchsia-600 rounded-md md:h-58 md:pt-18">
            <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
            <p className="h-3/6 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-4/6 md:text-md ">
              He stood on the bridge, watching the mist rise from the river. He
              felt a chill in his bones, and a heaviness in his heart. He
              remembered the last time he saw her, how they had kissed goodbye,
              and how she had promised to come back. He waited for her every
              day, hoping to see her silhouette in the fog. But she never came.
              He wondered if she was still alive, or if she had forgotten him.
              He felt like he was fading away, like the mist that dissolved in
              the air.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit pt-8 mx-2 md:pt-16">
          <div className="flex absolute bottom-40 md:bottom-36">
            <div className="ml-4 bg-white p-2 border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={bg_logo}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-center my-1 md:text-lg">
                @jshivdas
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="h-58 pt-9 border border-fuchsia-600 rounded-md md:h-58 md:pt-18">
            <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
            <p className="h-3/6 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-4/6 md:text-md ">
              He stood on the bridge, watching the mist rise from the river. He
              felt a chill in his bones, and a heaviness in his heart. He
              remembered the last time he saw her, how they had kissed goodbye,
              and how she had promised to come back. He waited for her every
              day, hoping to see her silhouette in the fog. But she never came.
              He wondered if she was still alive, or if she had forgotten him.
              He felt like he was fading away, like the mist that dissolved in
              the air.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit pt-8 mx-2 md:pt-16">
          <div className="flex absolute bottom-40 md:bottom-36">
            <div className="ml-4 bg-white p-2 border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={bg_logo}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-center my-1 md:text-lg">
                @jshivdas
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="h-58 pt-9 border border-fuchsia-600 rounded-md md:h-58 md:pt-18">
            <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
            <p className="h-3/6 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-4/6 md:text-md ">
              He stood on the bridge, watching the mist rise from the river. He
              felt a chill in his bones, and a heaviness in his heart. He
              remembered the last time he saw her, how they had kissed goodbye,
              and how she had promised to come back. He waited for her every
              day, hoping to see her silhouette in the fog. But she never came.
              He wondered if she was still alive, or if she had forgotten him.
              He felt like he was fading away, like the mist that dissolved in
              the air.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Review;
