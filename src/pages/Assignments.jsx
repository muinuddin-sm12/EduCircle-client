import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios("http://localhost:7000/assignments");
    setData(data);
  };
  // delete assignment
  const handleDelete = async (id) => {
    try {
      // Fetch the assignment data
      const response = await fetch(`http://localhost:7000/assignments/${id}`);
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
              `http://localhost:7000/assignments/${id}`
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1536px] mx-auto px-4 md:px-10 gap-6 py-12">
      {data.map((singleData) => (
        <div
          key={singleData._id}
          className="w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-white shadow-lg dark:bg-gray-800"
        >
          <img
            className="object-cover object-center border-b-[1px] border-gray-100 w-full h-44"
            src={singleData?.img_url}
            alt="Assignment Picture"
          />

          <div className="flex flex-col px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
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

            <div>
              <div className="mt-4 text-gray-700 dark:text-gray-200">
                <h1 className="font-medium pb-2">Marks: <span>{singleData.marks}</span></h1>
                <h1 title={singleData.description} className="text-sm">
                  {singleData.description.slice(0, 60)}..
                </h1>
              </div>

              <div className="flex items-center h-full justify-between mt-4 text-gray-700 dark:text-gray-200">
                <Link>
                  <button className="btn bg-[#1979C1] text-white border-none">
                    View Details
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
  );
};

export default Assignments;
