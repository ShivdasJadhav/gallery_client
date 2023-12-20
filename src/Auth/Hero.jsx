import { Link } from "react-router-dom";

function Hero() {
  // functions

  // styles

  // jsx
  return (
    <>
      <div
        id="hero"
        className="w-full h-screen flex justify-center items-center bg-auth_cover"
      >
        <div className="flex flex-col items-center gap-4">
          <h1
            id="app_title"
            className="text-fuchsia-400 text-alex_brush text-5xl md:text-6xl font-normal"
          >
            ART <br />
            Exhibits
          </h1>
          <p
            id="description"
            className="w-10/12 mx-auto text-fjord_one text-xs text-center font-normal text-slate-900 md:text-lg md:w-10/12 lg:w-6/12"
          >
            Art galleries are spaces where visual art pieces are exhibited by an individual.
            We provide a formal environment for artists to showcase their work
            and engage with gallery officials, art enthusiasts and other organization on platform for networking and build business relation associated with artwork.
          </p>
          <Link to={"./login"} className="w-fit px-4 py-1 text-base text-fjord_one text-white bg-sky-500 hover:bg-sky-600 rounded-md text-xs sm:text-sm md:text-md">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
