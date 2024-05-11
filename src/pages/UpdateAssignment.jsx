import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";


const UpdateAssignment = () => {
    // const {user} = useContext(AuthContext)
    const assignmentData = useLoaderData()
    const {assignment_title, marks, img_url,email, difficulty_level, due_date, description } = assignmentData || {}
    const [startDate, setStartDate] = useState(new Date(due_date) || new Date())

    const handleFormSubmit = async event => {
        event.preventDefault()
        const form = event.target 
        const assignment_title = form.assignment_title.value 
        const marks = form.marks.value 
        const img_url = form.img_url.value 
        const due_date = form.due_date.value 
        const description = form.description.value 
        const updateData = {assignment_title, marks, img_url, due_date, description}
        console.log(updateData)
    }
    return (
        <div className="flex justify-center text-sans bg-[#1978c12e] items-center py-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Create an Assignment
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Assignment Title
              </label>
              <input
                id="assignment_title"
                name="assignment_title"
                type="text"
                defaultValue={assignment_title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Marks
              </label>
              <input
                id="marks"
                name="marks"
                type="number"
                defaultValue={marks}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Image URL
              </label>
              <input
                id="image_url"
                name="image_url"
                type="text"
                defaultValue={img_url}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Difficulty Level
              </label>
              <select
                name="difficulty_level"
                id="difficulty_level"
                className="border p-2 rounded-md"
                defaultValue={difficulty_level}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Due Date</label>
              <ReactDatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              defaultValue={description}
              required
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#1979C1] rounded-md hover:bg-[#FCB138]  focus:outline-none focus:bg-gray-600">
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
    );
};

export default UpdateAssignment;