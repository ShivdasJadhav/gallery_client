import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Take a look
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import view_more from "../assets/img/view_more.png";
import bg_logo from "../assets/img/bg_logo.png";
import { Link } from "react-router-dom";
function TopArts() {
  let slide_as_screen = "auto";
  if (window.innerWidth > 800) {
    slide_as_screen = 2;
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
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://th.bing.com/th/id/OIP.4TRoYW1T0Gw9tcL5yYl8HwHaEo?rs=1&pid=ImgDetMain')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize ">
                Misty Mood
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
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://i.pinimg.com/originals/72/a4/bd/72a4bda87e6c10b7da0dfdc42269b7bd.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                The Rain
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                The art piece represents the idea of finding peace
                and harmony in nature, even in adverse weather conditions. The
                people in the painting seem to be calm and content, enjoying
                their ride or walk in the rain. They are not bothered by the
                wetness or the cold, as if they have found their own way of
                coping with the challenges of life. The painting evokes a sense
                of resilience, tranquility, and beauty.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://i.pinimg.com/originals/18/fb/10/18fb1041512a3bf7e66dc1b3d2977e2f.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                I'll Raise You
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                The image depicts a serene and poignant moment of two
                silhouetted figures, likely an adult and a child, walking hand
                in hand along a tranquil beach at sunset. The sky is painted
                with soft hues of yellow, orange, and brown, blending seamlessly
                to create a warm and inviting atmosphere. Clouds are scattered
                artistically across the sky, partially obscuring the setting sun
                that casts an illuminating glow upon the waters and wet sands of
                the beach. The reflections dance gracefully on the surface,
                adding depth and dimension to this evocative scene.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://i.pinimg.com/originals/0d/2f/7c/0d2f7c5d5dd26b2343b295abf4654e40.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                Grown Up
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                The painting could be interpreted in different ways, but one
                possible meaning is that it represents the idea of finding love
                and harmony in nature. The couple seems to be happy and content,
                enjoying each other's company and the beauty of the forest. They
                are the only ones on the path, as if they have found their own
                secluded paradise. The contrast between their clothing colors
                could symbolize their individuality or complementarity, while
                their hand-holding gesture could indicate their intimacy or
                support. The painting evokes a sense of romance, joy, and
                tranquility.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://i.pinimg.com/originals/aa/52/09/aa5209b7f1482c285b17c04eddbd2ed8.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                Do We?
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                The painting represents the idea of finding love and harmony in
                nature. The couple seems to be happy and content, enjoying each
                other's company and the beauty of the forest. They are the only
                ones on the path, as if they have found their own secluded
                paradise. The contrast between their clothing colors could
                symbolize their individuality or complementarity, while their
                hand-holding gesture could indicate their intimacy or support.
                The painting evokes a sense of romance, joy, and tranquility.
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
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://i.pinimg.com/736x/c3/e1/13/c3e11320f98cb4a0ecfad8001651ba76.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                What's There Inside You?
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
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://th.bing.com/th/id/R.537e1451fd059942185a9a0059b748b3?rik=Q3Nu%2fhXphQBFMQ&riu=http%3a%2f%2fwww.marchmontgallery.com%2fuploads%2f1%2f2%2f7%2f6%2f127618950%2fs333615940379845943_p555_i1_w2045.jpeg%3fwidth%3d640&ehk=VZkWOAoC%2bx29BriclVKEnF9yOCoV36cjg6Dy8X5MpP0%3d&risl=&pid=ImgRaw&r=0')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                At a Comfort
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                The image is a watercolor painting depicting a serene park scene
                with blooming cherry blossom trees and people enjoying the
                environment. The painting showcases a lush green park with
                several cherry blossom trees in full bloom, displaying vibrant
                pink flowers. There are two individuals visible; one is walking,
                and the other is seated on a bench, both enjoying the scenic
                beauty of the park. The shadows of the trees stretch across the
                grassy ground, adding depth to the scene. In the background,
                more greenery and additional blossoming trees are visible,
                creating an atmosphere of springtime renewal. The sky is painted
                in light hues suggesting it might be either early morning or
                late afternoon. The painting could be interpreted in different
                ways, but one possible meaning is that it represents the idea of
                finding peace and harmony in nature. The cherry blossom trees
                are a symbol of beauty, fragility, and impermanence in many
                cultures, especially in Japan. The people in the painting seem
                to appreciate the moment and the surroundings, without any
                worries or distractions. The painting evokes a sense of
                calmness, joy, and gratitude for the simple pleasures of life.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide m-2 ">
          <div className="h-72 relative border border-sky-600 rounded-md bg-[url('https://www.bjorkartstudio.com/uploads/1/3/9/6/13969122/________7361271_orig.jpg')] bg-no-repeat bg-center bg-cover md:h-96">
            <div className="mt-auto bg-white absolute bottom-0 border border-0 border-t border-fuchsia-500 h-24 w-full">
              <h3 className="text-fuchsia-900 text-allura text-base text-center my-1 capitalize">
                We Hope
              </h3>
              <p className="h-3/6 text-xs leading-1 text-fjord_one px-4 text-justify overflow-hidden">
                Hope is a bird that sings in the dark Hope is a flower that
                blooms in the snow Hope is a star that shines in the night Hope
                is a fire that burns in the cold Hope is a voice that whispers
                in the silence Hope is a hand that reaches out in the storm Hope
                is a heart that beats in the pain Hope is a soul that lives in
                the love.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopArts;
