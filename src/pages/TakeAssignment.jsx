/* eslint-disable no-unused-vars */
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const TakeAssignment = () => {
  const queryParams = new URLSearchParams(location.search)
  const [assignmentData , setAssignmentData] = useState([])
  const id = queryParams.get('id')
  // console.log(id)
  useEffect(() =>{
    fetch(`https://edu-circle-server.vercel.app/assignments/${id}`)
    .then(res => res.json())
    .then(data => {
      setAssignmentData(data)
    })
  }, [id])
  // console.log(assignmentData)
  const {assignment_title, marks, img_url} = assignmentData; 
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const pdfURL = form.pdfURL.value;
    const note = form.note.value;
    const email = user.email;
    const examineeName = user.displayName
    const title = assignment_title
    const mark = marks
    const img = img_url
    const submissionData = { pdfURL, note , status: 'pending', email, examineeName , title, mark, img};
    // console.log(submissionData);
    try {
      const {data} = await axios.post('https://edu-circle-server.vercel.app/take', submissionData)
      // console.log(data)
      toast.success('Assignment taken!')
      form.reset()
      navigate('/my-attempt')
    }catch(err){
      // console.log(err.message)
    }
  };
  return (
    <div className="min-h-[calc(100vh-369px)] bg-base-200 flex items-center justify-center py-10 md:py-20 ">
      <ScrollToTop/>
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-lg font-semibold  capitalize mb-6">
          Assignment Submission Form
        </h2>
        <form onSubmit={handleFormSubmit}>
          <fieldset className="w-full space-y-1 dark:text-gray-800">
            <label htmlFor="pdfURL" className="block text-sm font-medium">
              Attachments (PDF URL)
            </label>
            <div className="flex">
              <input
                type="text"
                name="pdfURL"
                id="pdfURL"
                required
                className="px-8 py-12 w-[500px] border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
              />
            </div>
          </fieldset>
          <div className="flex flex-col mt-4">
            <label htmlFor="note" className="text-sm font-medium">
              Quick note
            </label>
            <textarea
              className="block w-full px-4 py-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="note"
              id="note"
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

export default TakeAssignment;
