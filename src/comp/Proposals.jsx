import React, { useState } from "react";
import axios from "axios";
import Art from "./Art";
import { Route, useNavigate } from "react-router-dom";
function Items_group() {
    const navigate=useNavigate();
    let [Arts,setArts]=useState();
  const load_data = () => {
    let get_by=document.getElementById('load_by').value;
    let email=localStorage.getItem('authentic');
    axios.get('https://gallary-server.vercel.app/items/status/'+email+"/"+get_by).then((data)=>{
        if(data.status===200){
            if(Object.keys(data.data.item).length<=0){
              document.getElementById('text_none').innerText="Sorry you dont have Proposals!";
                document.getElementById('text_none').style.display="block";
            }else{
              document.getElementById('text_none').style.display="none";
            }
            setArts(data.data.item);
        }else{
            alert("some error occured");   
        }
    })
  };
  return (
    <>
    <div>
      <select
        onChange={load_data}
        id="load_by"
        className="px-8 py-1 m-1 text-sm bg-yellow-400 rounded-md text-white text-bold hover:cursor-pointer"
      >
        <option className="hidden" value="accepted">
          -- Load by Type --
        </option>
        <option className="bg-yellow-500" value="accepted">
          Accepted
        </option>
        <option className="bg-yellow-500" value="requested">
          Requested
        </option>
        <option className="bg-yellow-500" value="rejected">
          Rejected
        </option>
      </select>
      <button className="px-8 py-1 m-1 text-sm bg-yellow-400 rounded-md text-white text-bold hover:cursor-pointer" onClick={()=>navigate('./add')}>New Proposal</button>
      </div>
      <div className="full capitalize p-6">
      <h3 id="text_none">Choose a Type to load</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Arts && Arts.map((element) => <Art data={element} from='user'/>)}
      </div>
    </div>
    </>
  );
}

export default Items_group;
