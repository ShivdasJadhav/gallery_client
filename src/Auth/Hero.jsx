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
            className="w-10/12 mx-auto text-fjord_one text-xs text-center font-normal text-slate-900 md:text-lg md:w-5/12"
          >
            Art galleries are spaces where visual art is displayed and sold.
            They provide a formal environment for artists to showcase their work
            and engage with gallery officials on the sale, marketing,
            networking, and customer relations associated with the sale of an
            artwork
          </p>
          <button autoFocus className="w-fit px-4 py-1 text-base text-fjord_one text-white bg-sky-500 hover:bg-sky-600 rounded-md outline focus:outline-sky-800">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
