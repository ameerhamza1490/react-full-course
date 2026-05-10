import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      return;
    }
    const newTask = [...task];
    newTask.push({ title, details });
    setTask(newTask);

    setTitle("");
    setDetails("");
    console.log(title, details, task);
  };

  const deleteBtn = (indx) => {
    const copyTask = [...task];
    copyTask.splice(indx, 1);
    setTask(copyTask);
  };

  return (
    <div className=" bg-black text-white">
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col">
        <div
          className="w-full border-r-2 h-screen pt-20 px-10 flex
        flex-col gap-10"
        >
          <h1 className="text-4xl font-bold">Add Notes</h1>

          <form
            action=""
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter Notes Heading"
              value={title}
              className="text-xl py-6 px-6 border-2 rounded-xl"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              name=""
              id=""
              value={details}
              placeholder="Write Details here"
              className="text-xl py-4 px-6 border-2 rounded-xl"
              rows="5"
              required
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
            <button className="bg-white text-black font-semibold text-2xl p-4 rounded-xl  active:scale-95 cursor-pointer">
              Add Note
            </button>
          </form>
        </div>

        <div className="lg:w-10/10 -mt-40 lg:mt-0 lg:pt-20 px-10">
          <h1 className="text-4xl font-bold">Recent Notes</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-5 sm:grid-cols-4  items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
            {task.map((elem, indx) => (
              <div
                key={indx}
                className="flex flex-col items-start justify-between h-60 bg-cover rounded-xl text-black pt-16 sm:pt-9 md:pt-9 px-6.5 sm:px-4 md:px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h1 className="font-bold uppercase underline">
                    {elem.title}
                  </h1>
                  <p>{elem.details}</p>
                </div>

                <button
                  className="w-full bg-red-700 text-white py-2 mb-2 rounded cursor-pointer hover:bg-red-900 active:scale-95"
                  onClick={() => {
                    deleteBtn(indx);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
App;
