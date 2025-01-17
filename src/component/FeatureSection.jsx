import MultiStepQuestions from "./MultipleQuestions";

/* eslint-disable react/no-unescaped-entities */
const LandingPage = () => {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      {/* STEP ONE Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">
          STEP ONE:
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          Watch this quick 6 minute training to make sure you're a good fit for a demo call...
        </p>

        {/* Two-column layout for large screens */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Video box with border */}
          <div className="lg:w-1/2 border-2 border-gray-700 p-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
  <iframe
    src="https://www.youtube.com/embed/3f_wyzZ-J6M?si=rmPJCO6BloMwrGXz"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full md:h-[40rem]"
  ></iframe>
</div>

          </div>

          {/* Right column: Form/description card */}
          <div className="lg:w-1/2 bg-white shadow-md rounded-md p-6 flex flex-col">
            {/* Logo or image at top (optional) */}
            <div className="mb-4">
              {/* Replace with your actual image/logo */}
              <img
                src="/c7b372f5e7ba139d6d95f83344b4d125_1000.jpg"
                alt="Active Life"
                className="w-full h-auto object-contain"
              />
            </div>
            <MultiStepQuestions/>
          </div>
        </div>
      </section>

      {/* STEP TWO Section */}
      <section className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          STEP TWO: Fill out the application to apply for an AL-P demo call <span role="img" aria-label="finger pointing down">👇</span>
        </h2>
        <p className="mb-4 text-sm text-gray-700">
          (These 60-minute calls are to see if AL-P might be a good fit for you or not.
          If it is a fit, our team will help you get started with the next steps in
          the process. If it isn't a fit, they will let you know that too and point
          you in the direction of someone better suited to help with your specific goals)
        </p>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-4 pb-8 text-center">
        <blockquote className="italic text-gray-600 mb-2">
          "I've more than doubled my client roster in just the first 2 months of AL-P"
        </blockquote>
        <cite className="text-gray-800 font-semibold">
          - Nathan G, Ontario
        </cite>
      </section>
    </main>
  );
};

export default LandingPage;
