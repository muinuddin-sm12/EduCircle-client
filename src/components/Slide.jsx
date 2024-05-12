import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Slide = ({image, text}) => {
    return (
        <div
        className="w-full bg-center bg-cover h-[28rem] md:h-[38rem]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/20">
          <div className="text-center">
            <h1 className="text-2xl font-semibold font-sans  text-white lg:text-4xl max-w-3xl">
              {text}
            </h1>
            <br />
            <div className="mt-2 lg:mt-5">
            <Link to='/assignments' className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#1979C1] rounded-md lg:w-auto hover:bg-[#FCB138] focus:outline-none focus:bg-gray-500">
              Explore Assignments
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slide;