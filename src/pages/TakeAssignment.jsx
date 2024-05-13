import ScrollToTop from "../components/ScrollToTop";

const TakeAssignment = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const file = form.files.files[0];
    const feedback = form.feedback.value;
    const submissionData = { file, feedback };
    console.log(submissionData);
  };
  return (
    <div className="min-h-[calc(100vh-369px)] bg-base-200 flex items-center justify-center">
      <ScrollToTop/>
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-lg font-semibold  capitalize mb-6">
          Assignment Submission Form
        </h2>
        <form onSubmit={handleFormSubmit}>
          <fieldset className="w-full space-y-1 dark:text-gray-800">
            <label htmlFor="files" className="block text-sm font-medium">
              Attachments (PDF/doc)
            </label>
            <div className="flex">
              <input
                type="file"
                name="files"
                accept=".pdf, .doc, .docx"
                id="files"
                required
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
              />
            </div>
          </fieldset>
          <div className="flex flex-col mt-4">
            <label htmlFor="feedback" className="text-sm font-medium">
              Quick note
            </label>
            <textarea
              className="block w-full px-4 py-2  border border-gray-600 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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

export default TakeAssignment;
