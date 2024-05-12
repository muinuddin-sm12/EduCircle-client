import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateAssignment =  () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const assignment_title = form.assignment_title.value;
    const marks = form.marks.value;
    const img_url = form.image_url.value;
    const difficulty_level = form.difficulty_level.value;
    const email = form.email.value;
    const due_date = startDate;
    const description = form.description.value;
    const assignmentData = {
      assignment_title,
      marks,
      img_url,
      difficulty_level,
      email,
      due_date,
      description,
    };
    console.log(assignmentData);
    try{
      const {data} = await axios.post('http://localhost:7000/assignments', assignmentData)
      console.log(data)
      toast.success('Assignment Created Successfully!')
      form.reset()
      navigate('/assignments')
    }catch(err){
      console.log(err.message)
    }
  };
  return (
    <div className="flex justify-center text-sans items-center py-12">
      <section className=" p-2 md:p-6 mx-auto border border-[#1979c1] rounded-md shadow-md ">
        <h2 className="text-lg font-semibold  capitalize ">
          Create an Assignment
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="job_title">
                Assignment Title
              </label>
              <input
                id="assignment_title"
                name="assignment_title"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label  htmlFor="job_title">
                Marks
              </label>
              <input
                id="marks"
                name="marks"
                type="number"
                required
                className="block w-full px-4 py-2 mt-2   border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label htmlFor="job_title">
                Image URL
              </label>
              <input
                id="image_url"
                name="image_url"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label htmlFor="category">
                Difficulty Level
              </label>
              <select
                name="difficulty_level"
                id="difficulty_level"
                className="border border-gray-600 p-2 rounded-md"
                required
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2   border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label>Due Date</label>
              <ReactDatePicker
                className="border p-2 border-gray-600 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              required
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#1979C1] rounded-md hover:bg-[#FCB138]  focus:outline-none focus:bg-gray-600">
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateAssignment;
