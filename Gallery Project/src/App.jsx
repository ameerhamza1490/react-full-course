import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import axios from "axios";
import Loader from "./Components/Loader";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const userData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    userData();
  }, [index]);

  let printUserData = <Loader />;

  if (data.length > 0) {
    printUserData = data.map((elem, idx) => (
      <div key={idx}>
        <a href={elem.url} target="_blank">
          <div className="h-70 w-70 overflow-hidden">
            <img
              className="h-full w-full object-cover hover:scale-95 transition-transform duration-300"
              src={elem.download_url}
            />
          </div>
          <h2 className="font-bold text-lg">{elem.author}</h2>
        </a>
      </div>
    ));
  }

  return (
    <div>
      <div className="bg-black text-white w-full min-h-screen ">
        <div className="flex h-[82%] flex-wrap gap-4 justify-center pt-4 items-center ">
          {printUserData}
        </div>
        <div className="flex justify-center gap-6 items-center p-4">
          <button
            style={{ opacity: index == 1 ? 0.4 : 1 }}
            className="bg-amber-400 text-lg cursor-pointer active:scale-95 text-black rounded px-6 py-2 font-semibold"
            onClick={() => {
              if (index > 1) setIndex(index - 1);
            }}
          >
            Prev
          </button>
          <h4>Page {index}</h4>
          <button
            className="bg-amber-400 text-lg cursor-pointer active:scale-95 text-black rounded px-6 py-2 font-semibold"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
