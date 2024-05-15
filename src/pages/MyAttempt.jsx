import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyAttempt = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://edu-circle-server.vercel.app/take/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [user]);
  // console.log(user.email);
  return (
    <div className="overflow-x-auto bg-base-200 max-w-[800px] min-h-[calc(100vh-499px)] mx-auto mt-14 mb-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-base">
            <th colSpan="6" className="py-4">
              My List : {data?.length}
            </th>
          </tr>
          <tr className="text-sm text-left">
            <th></th>
            <th className="py-2">Title</th>
            <th className="py-2">Status</th>
            <th className="py-2">Marks</th>
            <th className="py-2">Obtained Marks</th>
            <th className="py-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data.map((singleData) => (
            <tr key={singleData?._id}>
              <td>
                <div className="w-24 h-20 bg-sky-200 rounded-md overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={singleData?.img}
                    alt={singleData?.title}
                  />
                </div>
              </td>
              <td className="font-bold">{singleData?.title}</td>
              <td className="text-sm opacity-70">{singleData?.status}</td>
              <td className="text-sm opacity-70">{singleData?.mark}</td>
              <td className="text-sm opacity-70">----</td>
              <td className="text-sm opacity-70">----</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyAttempt;