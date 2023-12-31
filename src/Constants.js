import toast from "react-hot-toast";

export const db_connect="https://gallary-server.vercel.app";
// export const db_connect = "http://localhost:5000";
export const custom_toast = (msg, type, icon, due = 4000) => {
  const toast_style = () => {
    if (type === "success") {
      return {
        border: "2px solid green",
      };
    } else if (type === "warning") {
      return {
        border: "2px solid yellow",
      };
    } else if (type === "alert") {
      return {
        border: "2px solid red",
      };
    }
  };
  let obj_toast = {
    duration: due,
    position: "top-center",

    // Styling
    style: toast_style(),
    className: "",

    // Custom Icon
    icon: icon,

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  };
  toast(msg, obj_toast);
};
export const Loader = () => {
  return (
    <>
      <div className="absolute z-[99] bg-blue-cover h-screen w-full flex justify-center items-center">
        <div className="flex items-center">
          <span
            class="inline-block mx-4 h-8 w-8 animate-spin border-fuchsia-500 rounded-full border-4 border-solid border-current border-r-transparent border-l-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></span>
          <span class="text-fuchsia-500 text-2xl text-allura">Loading...</span>
        </div>
      </div>
    </>
  );
};
