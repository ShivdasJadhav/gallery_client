import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import {
  mayur,
  yogesh,
  shankar,
  vaibhav,
  ssit,
} from "../assets/img";
function Review() {
  let slide_as_screen = "auto";
  if (window.innerWidth > 800) {
    slide_as_screen = 3;
  }
  return (
    <div id="review" className="p-2 my-2 py-8 w-full mx-auto">
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
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="swiper my-4 md:py-12 w-full sm:w-8/12 md:w-12/12"
      >
        <SwiperSlide className="h-fit pt-10 sm:pt-12 mx-2 md:pt-16">
          <div className="flex">
            <div className="ml-4 w-auto h-12 md:h-14 bg-white overflow-hidden items-center border border-fuchsia-600 rounded-full">
              <img
                className="h-full w-auto"
                src={shankar}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-left my-1 md:text-lg">
                Shankar sable
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
          <div className="h-58 pt-3 border border-fuchsia-600 rounded-md md:h-58 md:pt-6">
            <p className="w-fit mx-auto text-4xl font-bold text-fjord h-fit text-sky-600">
              ***
            </p>
            <p className="h-32 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-26 md:text-md ">
              A great place to showcase the artist inside a individual one. the platform is very easy to handle and understand. no complex things.
              just upload and wait to get verified and then... booom!<br/>Your arts are published...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit pt-10 sm:pt-12 mx-2 md:pt-16">
          <div className="flex">
            <div className="ml-4 bg-white overflow-hidden items-center border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={vaibhav}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-left my-1 md:text-lg">
                Vaibhav wakte
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
          <div className="h-58 pt-3 border border-fuchsia-600 rounded-md md:h-58 md:pt-6">
            <p className="w-fit mx-auto text-4xl font-bold text-fjord h-fit text-sky-600">
              ****
            </p>
            <p className="h-32 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-26 md:text-md ">
              The platform provided is very supportive to the artists, the application is so easy to use, I got various
              new connection to get connected with.<br/><br/>Networked well!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit pt-10 sm:pt-12 mx-2 md:pt-16">
          <div className="flex">
            <div className="ml-4 bg-white overflow-hidden items-center border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={mayur}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-left my-1 md:text-lg">
                Mayur Raut
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Enthusiast
              </p>
            </div>
          </div>
          <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
          <div className="h-58 pt-3 border border-fuchsia-600 rounded-md md:h-58 md:pt-6">
            <p className="w-fit mx-auto text-4xl font-bold text-fjord h-fit text-sky-600">
              ****
            </p>
            <p className="h-32 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-26 md:text-md ">
              If this kind of platform was there when I supposed to be a teen,
              definitely I would able to build my network then. might be the
              present could be something else. but still happy to see artwork of
              others.
              <br />A big Appreciation!
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="h-fit pt-10 sm:pt-12 mx-2 md:pt-16">
          <div className="flex">
            <div className="ml-4 bg-white overflow-hidden items-center border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={yogesh}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-left my-1 md:text-lg">
                Yogesh Kamble
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Artist
              </p>
            </div>
          </div>
          <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
          <div className="h-58 pt-3 border border-fuchsia-600 rounded-md md:h-58 md:pt-6">
            <p className="w-fit mx-auto text-4xl font-bold text-fjord h-fit text-sky-600">
              ***
            </p>
            <p className="h-32 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-26 md:text-md ">
              I got valuable features up here but the most I like is "its free
              to publish my art pieces here..." also can I get valuable feedback
              on publish. it is very useful platform to nearish my skills.
              <br></br>Thanks!
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="h-fit pt-10 sm:pt-12 mx-2 md:pt-16">
          <div className="flex">
            <div className="ml-4 bg-white overflow-hidden items-center border border-fuchsia-600 rounded-full">
              <img
                className="h-12 w-auto md:h-14"
                src={ssit}
                alt="pic of the person"
              />
            </div>
            <div className="flex ml-1 justify-center flex-col">
              <h3 className="text-sky-900 text-fjord_one text-base text-left my-1 md:text-lg">
                SSIT
              </h3>
              <p className="text-black text-sm text-allura md:text-md">
                Organization
              </p>
            </div>
          </div>
          <div className="bg-fuchsia-400 rounded-md mb-2 w-1/6 mx-auto h-1 md:mb-4"></div>
          <div className="h-58 pt-3 border border-fuchsia-600 rounded-md md:h-58 md:pt-6">
            <p className="w-fit mx-auto text-4xl font-bold text-fjord h-fit text-sky-600">
              ****
            </p>
            <p className="h-32 text-xs text-fjord_one px-4 pb-4 text-justify overflow-hidden md:h-26 md:text-md ">
              A helpful platform to flourish the world of artists. It also
              brings courier opportunities to the artists by getting in touch
              with various organizations for supportive work.<br></br>Great
              work!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Review;
