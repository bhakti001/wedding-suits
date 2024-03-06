import React from "react";

const Home = () => {
  const items = [
    {
      _id: 990,
      title: "PRIVACY POLICY",

    },
    {
      _id: 991,
      title: "COOKIE POLICY",

    },
  ];
  return (
    <div className="w-full side-tex">
      <div>
        <ul className="flex flex-col  gap-4 text-sm lg:text-base text-[#8d9494] hover:text-white">
          {items.map(({ _id, title}) => (
           <li
              key={_id}
              className="ml-16  pb-2 flex items-center text-lg  justify-between"
            >
              {title}
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
