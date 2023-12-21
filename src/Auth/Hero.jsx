import { Link } from "react-router-dom";
import {
  color_block1,
  color_block2,
  bamboo_tree,
  color_tree,
} from "../assets/img";
function Hero() {
  // functions

  // styles

  // jsx
  return (
    <>
      <div
        id="hero"
        className="w-full relative h-screen flex justify-center overflow-hidden items-center bg-auth_cover"
      >
        <img src={color_tree} alt="tree" className="hidden md:block absolute h-full w-fit top-0 z-10 left-0 opacity-50" />
        <img src={bamboo_tree} alt="bamboo" className="hidden md:block absolute h-full w-fit top-0 z-20 right-0 opacity-70" />
        <img src={color_block1} alt="water colors" className="absolute w-10/12 h-auto md:w-fit right-0 bottom-0 md:top-0 md:right-0 z-10 md:rotate-180" />
        <img src={color_block2} alt="water colors" className="absolute md:hidden top-0 left-0 w-10/12 h-auto" />
        <div className="flex flex-col items-center z-30 gap-4">
          <h1
            id="app_title"
            className="text-fuchsia-600 text-alex_brush text-5xl md:text-6xl font-normal"
          >
            ART <br />
            Exhibits
          </h1>
          <p
            id="description"
            className="w-10/12 sm:w-8/12 mx-auto text-fjord_one text-md text-center text-black font-normal md:text-lg md:w-10/12 lg:w-6/12"
          >
            Art galleries are spaces where visual art pieces are exhibited by an
            individual. We provide a formal environment for artists to showcase
            their work and engage with gallery officials, art enthusiasts and
            other organization on platform for networking and build business
            relation associated with artwork.
          </p>
          <Link
            to={"./login"}
            className="w-fit px-4 py-1 text-base text-fjord_one text-white bg-sky-500 hover:bg-sky-600 rounded-md text-xs sm:text-sm md:text-md"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
