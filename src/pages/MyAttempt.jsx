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
    <div className="overflow-x-auto bg-base-200 max-w-[1200px] min-h-[calc(100vh-499px)] mx-auto my-8 md:mt-14 md:mb-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-base">
            <th colSpan="6" className="py-4">
              My List : {data?.length}
            </th>
          </tr>
          <tr className="text-base text-left">
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
                <div className="w-[120px] h-20 bg-sky-200 rounded-md overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={singleData?.img}
                    alt={singleData?.title}
                  />
                </div>
              </td>
              <td className="font font-medium">{singleData?.title}</td>
              <td className={`text-sm ${singleData?.status === 'pending' && 'text-yellow-500' } ${singleData?.status === 'completed' && 'text-green-500'} font-semibold`}>{singleData?.status}</td>
              <td className="text-sm">{singleData?.mark}</td>
              <td className="text-sm">{singleData?.obtain_mark || '-----'}</td>
              <td title={singleData?.feedback} className="text-sm cursor-pointer">{singleData?.feedback?.slice(0, 40) || '-----'}</td>
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
