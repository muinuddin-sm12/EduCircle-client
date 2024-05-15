import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useState } from "react";

const GiveMark = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://edu-circle-server.vercel.app/take/${id}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [id]);
    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    return (
        <div className="min-h-[calc(100vh-369px)] bg-base-200 flex items-center justify-center py-10 md:py-20 ">
      <ScrollToTop/>
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-lg font-semibold  capitalize mb-6">
            Give Mark Form
        </h2>
        <div>
            <iframe src={data?.pdfURL} width='300px' height='200px'></iframe>
        </div>
        <h3>{data?.note}</h3>
        <form>
          <div className="flex flex-col mx-w-[500px] mt-4">
            <label htmlFor="feedback" className="text-sm font-medium">
              Marks
            </label>
            <input
              className="block w-full px-4 py-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="feedback"
              id="feedback"
              type="number"
              required
            ></input>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="feedback" className="text-sm font-medium">
              Feedback
            </label>
            <textarea
              className=" w-full px-4 py-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="feedback"
              id="feedback"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-sm text-white mt-4 bg-[#1979C1]"
          />
        </form>
      </div>
    </div>
    );
};

export default GiveMark;