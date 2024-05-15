import { Link, useLoaderData } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Details = () => {
  const assignmentData = useLoaderData();
  const {_id, assignment_title, img_url, description, marks, difficulty_level } =
    assignmentData;
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 md:py-14 bg-base-200">
      <ScrollToTop/>
      <div className="container flex flex-col justify-center p-6 mx-auto max-w-[1240px] sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 md:mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img_url}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-6xl">
            {assignment_title}
          </h1>
          <p className="mt-6 mb-4 text-lg sm:mb-6">{description}</p>
          <div className="flex justify-between items-center">
            <p className="mb-4 sm:mb-6 text-sm">
              Marks: <span className="text-base font-semibold">{marks}</span>
            </p>
            <p className="flex items-center mb-4 sm:mb-6 gap-2">
              <span className="text-sm">Difficulty Level:{" "}</span>
              <span className="font-semibold">{difficulty_level}</span>
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to={`/take-assignment?id=${_id}`} className="btn bg-[#1979C1] text-white">Take Assignment</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
