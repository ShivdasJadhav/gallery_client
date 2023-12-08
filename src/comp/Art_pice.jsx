import React from "react";
import order from "../assets/img/order.png";
import like from "../assets/img/like.png";
import view from "../assets/img/view.png";
import user from "../assets/img/user.png";
import logo from "../assets/img/logo.png";
function Art_pice() {
  return (
    <div id="art_pice" className="w-11/12 md:w-8/12 mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1 border border-sky-600 border-1 rounded-lg my-4">
          <img src={logo} alt="art piece" className="w-10/12 h-auto mx-auto" />
        </div>
        <div className="md:flex-1 md:mx-8">
          <h2 className="w-fit mx-auto text-allura text-2xl text-fuchsia-600">
            Title
          </h2>
          <p className="text-md text-fjord text-justify leading-5 h-56 overflow-y-scroll">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            excepturi quasi eaque ab dicta, omnis illum fuga quis a, adipisci
            unde minima fugit neque qui asperiores necessitatibus ad! Natus
            adipisci iusto temporibus quia iure, ut quasi aperiam ab
            necessitatibus consequatur expedita modi magnam asperiores repellat,
            hic beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae consequatur expedita modi magnam asperiores repellat, hic
            beatae quaerat placeat quae!F
          </p>
          <div className="flex justify-between md:flex-col md:justify-start my-4">
            <div className="flex md:my-2">
              <div className="p-1 mr-2 rounded-full border-fuchsia-500 border w-fit">
                <img src={user} alt="artists image" className="w-10 h-auto" />
              </div>
              <div className="w-fit mt-1">
                <p className="text-md text-fjord leading-3 text-sky-600">
                  shivdas jadhav
                </p>
                <p className="text-md text-allura">developer</p>
              </div>
            </div>
            <div className="flex md:my-2">
              <div className="flex h-fit px-2 mr-2 items-center border border-1 border-fuchsia-600 rounded-lg py-1 w-18 justify-around">
                <img className="w-4 mx-1 h-fit" src={like} alt="like thumb" />
                <p className="text-fjord text-sm">80K</p>
              </div>
              <div className="flex h-fit px-2 ml-2 items-center border border-1 border-fuchsia-600 rounded-lg py-1 w-18 justify-around">
                <img className="w-4 mx-1 h-fit" src={view} alt="eye view" />
                <p className="text-fjord text-sm">80K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 w-3/12 md:w-1/12 my-2 bg-fuchsia-400 rounded-md mx-auto"></div>
      <div className="flex items-center my-4">
        <p className="text-fjord text-md w-fit">116 comments</p>
        <div className="flex bg-fuchsia-400 rounded-md px-4 py-2 mx-2 items-center">
          <img
            src={order}
            alt="image button to order the comment list"
            className="w-6 h-fit"
          />
          <select
            name="order_comments"
            className="w-28 bg-fuchsia-400 text-white outline-none border-none"
          >
            <option value="old_top" className="text-fjord bg-white">
              Oldest First
            </option>
            <option value="new_top" className="text-fjord bg-white">
              Latest First
            </option>
          </select>
        </div>
      </div>
      <div>
        <div className="flex mt-8">
          <div className="p-1 h-fit mx-2 rounded-full border-fuchsia-500 border w-fit">
            <img src={user} alt="artists image" className="w-10 h-auto" />
          </div>
          <div className="ml-4 flex-1 ">
            <textarea
              name="comment"
              id="comment"
              rows={2}
              placeholder="Add your comment..."
              className="leading-5 w-full outline-none border-b border-gray-600 text-sm text-fjord"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end my-2">
          <button className="w-fit px-4 py-1 text-fjord text-sm text-white bg-sky-500 rounded-md">
            Comment
          </button>
        </div>
      </div>
      <div id="comments" className="h-96 overflow-y-scroll">
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>
        <div className="flex my-2">
          <div className="flex">
            <div className="p-1 w-12 h-12 md:w-16 md:h-16 mx-2 rounded-full border-fuchsia-500 border flex items-center justify-center">
              <img src={user} alt="artists image" className="w-12 h-auto" />
            </div>
          </div>
          <div className="">
            <p className="my-2 text-md text-fjord leading-3 text-sky-600 md:text-lg">
              @shivdas jadhav
            </p>
            <p className="ml-2 leading-4 outline-none border-b border-gray-600 text-xs text-fjord md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              dolore inventore quos, quod nemo porro consequatur architecto odit
              exercitationem cupiditate quam minus, id repellat quibusdam neque
              minima eaque sunt et.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Art_pice;
