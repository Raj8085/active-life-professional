// import { useState } from "react";
// import DemoForm from "./DemoForm";

// // Example question data
// const questions = [

//   {
//     type: "question",
//     id: 1,
//     description:
//       "We help coaches bridge the gap between healthcare and fitness and build profitable careers doing it. Does this sound like what you're looking for?",
//     options: ["Yes", "No"],
//   },
//   {
//     type: "question",
//     id: 2,
//     description:
//       "Coaches who join AL-P typically focus on one of two areas. Are you looking for help developing technical skills, business skills, or both?",
//     options: ["Technical coaching skills", "Business skills", "Both"],
//   },
//   {
//     type: "question",
//     id: 3,
//     description:
//       "The next step is booking a no-pressure demo call to learn more about AL-P. If you book a call, can you commit to showing up and taking the next step toward your goals?",
//     options: ["Yes", "No"],
//   },
//   {
//     type: "form",
//     id: 9,
//   },
// ];

// const MultiStepQuestions = () => {
//   // Track which question we’re on
//   const [currentStep, setCurrentStep] = useState(0);

//   // Track user’s answers by question ID
//   // We’ll store them as an object like { [questionId]: "User's answer" }
//   const [answers, setAnswers] = useState({});

//   const stepData = questions[currentStep];

//   // Handler: user selects an option for the current question
//   const handleOptionChange = (option) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [stepData.id]: option,
//     }));
//   };

//   // Move to the next step if not at the last
//   const handleNext = () => {
//     if (currentStep < questions.length - 1) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       console.log("No more steps. Possibly submit all data, etc.");
//     }
//   };

//   // Move to the previous step if not at the first
//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   // Called when the form is submitted
//   const handleFormSubmit = (formData) => {
//     const allData = {
//       questionAnswers: answers,
//       formData,
//     };
//     console.log("All Data:", allData);

//     alert("Form submitted! Check console for all data.");
//     // Possibly do an API call or navigate here...
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4">
//       {/* Logo container (now responsive) */}
//       <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-6">
//         <img
//           src="/c7b372f5e7ba139d6d95f83344b4d125_1000.jpg"
//           alt="Active Life Logo"
//           className="object-contain w-full h-auto"
//         />
//       </div>

//       <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
//         {/* If current step is a question, show question layout */}
//         {stepData.type === "question" && (
//           <>
//             {/* Some questions have a title, some do not. Render if present */}
//             {stepData.title && (
//               <h3 className="text-2xl md:text-2xl font-semibold text-center mb-4">
//                 {stepData.title}
//               </h3>
//             )}

//             <p className="text-xl md:text-lg text-gray-700 mb-4">
//               {stepData.description}
//             </p>

//             {stepData.warning && (
//               <p className="text-sm text-red-600 font-medium mb-4">
//                 {stepData.warning}
//               </p>
//             )}

//             {/* Radio options */}
//             <div className="space-y-3 mb-6">
//               {stepData.options.map((option) => (
//                 <label
//                   key={option}
//                   className="flex items-center space-x-3 cursor-pointer"
//                 >
//                   <input
//                     type="radio"
//                     name={`question-${stepData.id}`}
//                     value={option}
//                     checked={answers[stepData.id] === option}
//                     onChange={() => handleOptionChange(option)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                   />
//                   <span className="text-sm md:text-base">{option}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Navigation buttons */}
//             <div className="flex justify-between items-center">
//               {/* Show PREV if not the first step */}
//               {currentStep > 0 && (
//                 <button
//                   onClick={handlePrev}
//                   className="flex items-center space-x-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
//                 >
//                   <span className="text-xl">&larr;</span>
//                   <span>PREV</span>
//                 </button>
//               )}

//               <button
//                 onClick={handleNext}
//                 className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
//               >
//                 NEXT →
//               </button>
//             </div>
//           </>
//         )}

//         {/* If current step is the form, render DemoForm */}
//         {stepData.type === "form" && (
//           <DemoForm onSubmit={handleFormSubmit} onPrev={handlePrev} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default MultiStepQuestions;


import { useState } from "react";
import DemoForm from "./DemoForm";

// Example question data
const questions = [
  {
    type: "question",
    id: 1,
    description:
      "We help coaches bridge the gap between healthcare and fitness and build profitable careers doing it. Does this sound like what you're looking for?",
    options: ["Yes", "No"],
  },
  {
    type: "question",
    id: 2,
    description:
      "Coaches who join AL-P typically focus on one of two areas. Are you looking for help developing technical skills, business skills, or both?",
    options: ["Technical coaching skills", "Business skills", "Both"],
  },
  {
    type: "question",
    id: 3,
    description:
      "The next step is booking a no-pressure demo call to learn more about AL-P. If you book a call, can you commit to showing up and taking the next step toward your goals?",
    options: ["Yes", "No"],
  },
  {
    type: "form",
    id: 9,
  },
];

const MultiStepQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null); // For error messages

  const stepData = questions[currentStep];

  // Handler: user selects an option for the current question
  const handleOptionChange = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [stepData.id]: option,
    }));
    setError(null); // Clear error when an option is selected
  };

  // Move to the next step if not at the last
  const handleNext = () => {
    if (!answers[stepData.id]) {
      setError("Please select an option to proceed.");
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("All Data Submitted:", answers);
      alert("Thank you for completing the questionnaire!");
    }
  };

  // Move to the previous step if not at the first
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Called when the form is submitted
  const handleFormSubmit = (formData) => {
    const allData = {
      questionAnswers: answers,
      formData,
    };
    console.log("All Data:", allData);

    alert("Form submitted! Check console for all data.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Logo container */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-6">
        <img
          src="/c7b372f5e7ba139d6d95f83344b4d125_1000.jpg"
          alt="Active Life Logo"
          className="object-contain w-full h-auto"
        />
      </div>

      <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
        {/* If current step is a question, show question layout */}
        {stepData.type === "question" && (
          <>
            <p className="text-xl md:text-lg text-gray-700 mb-4">
              {stepData.description}
            </p>

            {/* Radio options */}
            <div className="space-y-3 mb-6">
              {stepData.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${stepData.id}`}
                    value={option}
                    checked={answers[stepData.id] === option}
                    onChange={() => handleOptionChange(option)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm md:text-base">{option}</span>
                </label>
              ))}
            </div>

            {/* Show error message if no option is selected */}
            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
              {currentStep > 0 && (
                <button
                  onClick={handlePrev}
                  className="flex items-center space-x-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                >
                  <span className="text-xl">&larr;</span>
                  <span>PREV</span>
                </button>
              )}

              <button
                onClick={handleNext}
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
              >
                {currentStep < questions.length - 1 ? "NEXT →" : "SUBMIT"}
              </button>
            </div>
          </>
        )}

        {/* If current step is the form, render DemoForm */}
        {stepData.type === "form" && (
          <DemoForm onSubmit={handleFormSubmit} onPrev={handlePrev} />
        )}
      </div>
    </div>
  );
};

export default MultiStepQuestions;
