import feature1 from "../assets/images/feature-1.png";
import feature2 from "../assets/images/feature-2.png";
import feature3 from "../assets/images/feature-3.png";
import feature4 from "../assets/images/feature-4.png";

const Feature = () => {
  return (
    <div className="py-16 mx-auto px-4 md:px-10 bg-base-200 my-20">
        <p className=" text-center text-2xl font-semibold sm:text-3xl mb-12">Features</p>
      <div className="flex flex-wrap gap-6 max-w-[936px] mx-auto items-center justify-between">
        <div  className="flex flex-col h-[250px] w-[200px] justify-between items-center px-2 py-8 rounded-2xl border border-[#1979C1] hover:bg-base-100">
          <img className="w-36" src={feature1} alt="" />
          <h1>Privacy Controls</h1>
        </div>
        <div className="flex flex-col h-[250px] w-[200px] justify-between items-center px-2 py-8 rounded-2xl border border-[#1979C1] hover:bg-base-100">
          <img className="w-36" src={feature2} alt="" />
          <h1>Personalized Profiles</h1>
        </div>
        <div className="flex flex-col h-[250px] w-[200px] justify-between items-center px-2 py-8 rounded-2xl border border-[#1979C1] hover:bg-base-100">
          <img className="w-32" src={feature3} alt="" />
          <h1>Responsive Design</h1>
        </div>
        <div className="flex flex-col h-[250px] w-[200px] justify-between items-center px-2 py-8 rounded-2xl border border-[#1979C1] hover:bg-base-100">
          <img className="w-32" src={feature4} alt="" />
          <h1>User-Friendly Interface</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
