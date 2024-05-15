import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ScrollToTop from "../components/ScrollToTop";
import { CircleLoader } from "react-spinners";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getData();
  }, [user, filter]);
  const getData = async () => {
    setLoading(true)
    try {const { data } = await axios(
      "https://edu-circle-server.vercel.app/assignments"
    );
    setData(data);
  }catch(err){
    console.log(err.message)
  }finally{
    setLoading(false)
  }
};
  // delete assignment
  const handleDelete = async (id) => {
    try {
      // Fetch the assignment data
      const response = await fetch(
        `https://edu-circle-server.vercel.app/assignments/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch assignment data");
      }
      const data = await response.json();

      if (data.email !== user.email) {
        toast.error("You are not authorized to delete this assignment");
        return;
      }
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          try {
            const { data } = await axios.delete(
              `https://edu-circle-server.vercel.app/assignments/${id}`
            );
            console.log(data);
            // confirm toast
            toast.success("Delete Successful");
            // refresh ui to show latest data
            getData();
          } catch (err) {
            toast.error(err.message);
          }
        }
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
  const filteredAssignments = filter
    ? data.filter((assignment) => assignment.difficulty_level === filter)
    : data;
  if(loading) return <div className=" w-full min-h-[calc(100vh-369px)] flex items-center justify-center"><span><CircleLoader color="#1979C1"/></span></div>
  return (
    <div>
      <ScrollToTop />
      {/* filter by difficulty level  */}
      <div className="w-full flex justify-end max-w-[1536px] mx-auto px-4 md:px-10 mt-8">
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
          name="difficulty_level"
          id="difficulty_level"
          className="rounded-lg btn bg-[#1979C1] border-none text-white outline-none"
        >
          <option value="">Filter By Difficlty Level</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1536px] min-h-[calc(100vh-369px)] mx-auto px-4 md:px-10 gap-6 py-12">
        {filteredAssignments.map((singleData) => (
          <div
            key={singleData._id}
            className="w-full max-w-sm mx-auto rounded-lg h-[420px] flex flex-col overflow-hidden  border-[1px] border-gray-500 shadow-lg dark:bg-gray-800 hover:border-[#FCB138] hover:scale-105 duration-200"
          >
            <div>
              <img
                className="object-cover object-center border-b-[1px] border-gray-500 w-full h-44"
                src={singleData?.img_url}
                alt="Assignment Picture"
              />
            </div>

            <div className="flex flex-col justify-between h-full px-6 py-4">
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

                <div className="flex items-center h-full justify-between mt-4 text-gray-700 dark:text-gray-200">
                  <Link to={`/details/${singleData._id}`}>
                    <button className="btn bg-[#1979C1] text-white border-none">
                      View Assignment
                    </button>
                  </Link>
                  <div className="flex text-2xl items-center gap-2">
                    <Link to={`/update-assignment/${singleData._id}`}>
                      <span className="cursor-pointer text-[#1979C1]">
                        <CiEdit />
                      </span>
                    </Link>
                    <span
                      onClick={() => handleDelete(singleData._id)}
                      className="cursor-pointer text-red-500"
                    >
                      <MdDelete />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
