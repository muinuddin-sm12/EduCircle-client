import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Pending = () => {
  const { user } = useContext(AuthContext);
  const fetchData = useLoaderData();
  const [data] = useState(
    fetchData.filter((item) => item.status === "pending")
  );
  const handleGiveMark = () => {
      return toast.error("Invalid action (you submited this assignment)");
  };
  return (
    <div className="grid grid-cols-1 bg-base-200 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1536px] min-h-[calc(100vh-369px)] mx-auto px-4 md:px-10 gap-6 py-12">
      {data.length > 0 ? (
        data.map((singleData) => (
          <div
            key={singleData?._id}
            className="w-full max-w-sm mx-auto rounded-lg h-[190px] flex flex-col overflow-hidden border-[1px] border-gray-500 shadow-lg dark:bg-gray-800 hover:border-[#FCB138] hover:scale-105 duration-200"
          >
            {/* Add your content here */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{singleData?.title}</h2>
              <h1 className="pt-2">
                Examinee Name: {singleData?.examineeName}
              </h1>
              <p className="text-sm">
                Assignment Marks:{" "}
                <span className="text-base font-semibold">
                  {singleData?.mark}
                </span>
              </p>
              <div className="flex justify-end items-end">
                {user.email === singleData.email ? (
                  <button
                    onClick={handleGiveMark}
                    className="btn bg-[#1979C1] text-white mt-6"
                  >
                    Give Mark
                  </button>
                ) : (
                  <Link to={`/give-mark/${singleData?._id}`}>
                    <button className="btn bg-[#1979C1] text-white mt-6">
                      Give Mark
                    </button>
                  </Link>
                )}{" "}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Pending;
