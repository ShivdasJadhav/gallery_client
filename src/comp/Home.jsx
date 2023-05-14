import React, { useEffect, useState } from "react";
import axios from "axios";
import Art from "./Art";
function Home() {
  const [items, setItems] = useState();
  useEffect(() => {
    const fetch_data = async () => {
      await axios.get("https://gallary-server.vercel.app/items").then((data) => {
        if(data.status===200){
          setItems(data.data.Items);
        }else{
          alert(data.message);
        }
      });
    };
    fetch_data();
  }, []);

  return (
    <div className="full capitalize p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items && items.map((element) => <Art data={element} from={'home'}/>)}
      </div>
    </div>
  );
}

export default Home;
