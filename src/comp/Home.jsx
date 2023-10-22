import React, { useEffect, useState } from "react";
import axios from "axios";
import Art from "./Art";
import { db_connect } from "../Constants";
function Home() {
  const [items, setItems] = useState();
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${db_connect}/items`, { signal: controller.signal })
      .then((data) => {
        if (data.status === 200) {
          setItems(data.data.Items);
        } else {
          alert(data.message);
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="full capitalize p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items && items.map((element) => <Art data={element} from="home" />)}
      </div>
    </div>
  );
}

export default Home;
