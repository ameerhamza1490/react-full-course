import "./Content.css";
const RightContent = (props) => {
  console.log(props);
  return (
    <div className="h-full flex rounded-4xl overflow-x-auto scroll-smooth flex-nowrap gap-10 p-6 ">
      {props.user.map((elem, indx) => {
        return (
          <div key={indx} className="relative h-full w-90 mr-8 shrink-0">
            <img
              key={indx}
              className=" h-full w-90 object-cover rounded-2xl mr-8 relative"
              src={elem.userImg}
              alt=""
            />
            <div className="absolute top-0 h-full">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="bg-white py-4 px-5 font-extrabold rounded-full text-sm">{indx + 1}</span>
                </div>
                <div className="">
                  <p className="text-white pb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vel nemo necessitatibus deserunt laudantium optio corporis.
                  </p>
                  <button className=" py-3 px-8 text-white rounded-4xl cursor-pointer" style={{backgroundColor:elem.color}}>
                  {elem.tag}

                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RightContent;
