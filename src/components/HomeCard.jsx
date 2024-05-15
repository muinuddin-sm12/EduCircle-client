import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://edu-circle-server.vercel.app/assignments")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 8));
      });
  }, []);
  // console.log(card)
  return (
    <div className="mt-20">
      <p className=" text-center text-2xl font-semibold sm:text-3xl mb-12">
        Assignments
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1536px] mx-auto px-4 md:px-10 gap-6">
        {data.map((singleData) => (
          <div
            key={singleData._id}
            className="w-full max-w-sm mx-auto flex h-[420px] flex-col rounded-lg overflow-hidden border-[1px]  border-gray-500 shadow-lg hover:border-[#FCB138] hover:scale-105 duration-200 "
          >
            <div>
            <img
              className="object-cover object-center border-b-[1px] border-gray-500 w-full h-44"
              src={singleData?.img_url}
              alt="Assignment Picture"
            />
            </div>

            <div className="px-6 py-4 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">
                  {singleData.assignment_title}
                </h1>
                <span
                  className={`px-3 py-1 text-xs
              ${
                singleData.difficulty_level === "Easy" &&
                "text-green-500 bg-green-100/60"
              }
              ${
                singleData.difficulty_level === "Medium" &&
                "text-yellow-500 bg-yellow-100/60"
              }
              ${
                singleData.difficulty_level === "Hard" &&
                "text-red-500 bg-red-100/60"
              }
              text-blue-800 uppercase bg-blue-200 rounded-full`}
                >
                  {singleData?.difficulty_level}
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <div className="mt-4">
                  <h1 className="font-medium pb-2">
                    Marks: <span>{singleData.marks}</span>
                  </h1>
                  <h1 title={singleData.description} className="text-sm">
                    {singleData.description.slice(0, 60)}..
                  </h1>
                </div>
                <div className="flex justify-end mt-4 text-gray-700 dark:text-gray-200">
                  <Link to={`/details/${singleData._id}`}>
                    <button className="btn bg-[#1979C1] text-white border-none">
                      View Assignment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
