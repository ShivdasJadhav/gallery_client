import React, { useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
function Update() {
  const navigate = useNavigate();
  let {id}=useParams();
  const [info, setInfo] = useState({
    name: "",
    author:"",
    price: "",
    url_pic:"",
    description: "",
  });
  useEffect(() => {
    const fetch_data = async () => {
      await axios.get("https://gallary-server.vercel.app/items/"+id).then((data) => {
        const obj=data.data.item;
        setInfo({
          name:obj.name,
          author:obj.author,
          price:obj.price,
          url_pic:obj.url_pic,
          description:obj.description
        })
      });
    };
    fetch_data();
  }, []);

  const update_info = (e) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };
  const Insert_gallary = async () => {
    const { name, author, price, url_pic, description } = info;
    if(name===""||author===""||price===""||url_pic===""||description===""){
      alert("all fields are Required");
      return;
  }
    await axios.post("https://gallary-server.vercel.app/"+id, {
        name,
        author,
        price,
        url_pic,
        description,
      })
      .then((msg) => {
        if (msg.statusText ==="OK") {
          alert(msg.data.message);
            navigate("/");
        }
      });
  };
  return (
    <div id="new_item">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Update Gallary
        </h2>
        <div className="relative text-left mb-4">
          <div className="relative text-left mb-4">
            <label for="name" className="text-sm text-left text-gray-600">
              Item Name
            </label>
            <input
              type="text"
              value={info.name}
              onChange={update_info}
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <label for="author" className="text-sm text-left text-gray-600">
            Aauthor
          </label>
          <input
            type="text"
            value={info.author}
            onChange={update_info}
            id="author"
            name="author"
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative text-left mb-4">
          <label for="description" className="text-sm text-left text-gray-600">
            Item description
          </label>
          <input
            type="text"
            value={info.description}
            onChange={update_info}
            id="description"
            name="description"
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative text-left mb-4">
          <label for="url_pic" className="text-sm text-left text-gray-600">
            Image Url
          </label>
          <input
            type="text"
            value={info.url_pic}
            onChange={update_info}
            id="url_pic"
            name="url_pic"
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative text-left mb-4">
          <label for="price" className="text-sm text-left text-gray-600">
            Price for Sell
          </label>
          <input
            type="text"
            value={info.price}
            onChange={update_info}
            id="price"
            name="price"
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={Insert_gallary}
          className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
        >
          Update Gallary
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
}

export default Update;
