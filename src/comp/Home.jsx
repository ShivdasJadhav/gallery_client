import React, { useEffect, useState } from "react";
import axios from "axios";
import Art from "./Art";
function Home() {
  const [items, setItems] = useState();
  useEffect(() => {
    const fetch_data = async () => {
      await axios.get("http://localhost:5000/items").then((data) => {
        setItems(data.data.Items);
      });
    };
    fetch_data();
  }, []);

  return (
    <div className="full capitalize p-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items && items.map((element) => <Art data={element} />)}
      </div>
    </div>
  );
}

export default Home;
