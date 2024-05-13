const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 max-w-[936px] mx-auto px-4 lg:px-20 my6  lg:my-20">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600">
          Explore our FAQs to find answers to common questions about using our platform. If you dont see your question answered here, feel free to reach out to us for assistance.
          </p>
        </div>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
            How do I register as a user on the platform?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            This question addresses the initial steps a new user might need to take to join the platform and start engaging with assignments and other users.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
            How can I ensure the privacy and security of my assignments and personal information?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            This question delves into concerns about data protection, privacy settings, and security measures implemented on the platform to safeguard user information and submissions.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
            Is there a limit to the number of assignments I can review or grade?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            This addresses whether there are any restrictions on how many assignments a user can interact with as a reviewer or grader.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-default-600">
            What happens if I disagree with the feedback or grade I received on my assignment?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            This addresses the process for resolving disputes or seeking clarification on feedback or grades provided by other users.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
