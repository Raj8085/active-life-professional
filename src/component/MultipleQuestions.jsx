// import  { useState } from "react";
// import DemoForm from "./DemoForm";

// // Example question data
// const questions = [
//   {
//     type: "question",
//     id: 1,
//     title: "Answer the questions below so we can be effective on the call",
//     description:
//       "We help coaches bridge the gap between healthcare and fitness and build profitable careers doing it. Generally speaking, does this sound like what you're looking for?",
//     options: ["Yes", "No"],
//   },
//   {
//     type: "question",
//     id: 2,
//     description: "Coaches who join AL-P typically want help with one of two areas. They are either looking for help developing technical skills like assessing, programming, cueing etc. for clients who have pain, or they are looking for business skills to reclaim their time, make more money, and build profitable careers. Which would you say you are interested in?",
//     options: ["Technical coaching skills", "Business skills","Both"],

//   },
//   {
//     type: "question",
//     id: 3,
//     description: "How long have you been a coach or trainer?",
//     options: ["I'm not yet", "under a year","1-4 years","5-10 years","10-20 years"],

//   }, 
//   {
//     type: "question",
//     id: 4,
//     description: "How many hours per week do you train/coach?",
//     options: ["0 hours", "1-10 hours","11-24 hours","25+ hours"],

//   },
//   {type: "question",
//     id: 5,
//     description: "How much money do you currently make from coaching/training?",  
//     options: ["I'd rather not say", "$0-$1,000/ month","$1,000-$3,000/ month","$3,000-$6,000/ month","$6,000- $10,000/ month",
//         "$10,000 + / month"
//     ],

//   },
//   {
//     type: "question",
//     id: 6,
//     description: "Tell us about where you're starting from and where you want to get to What are your goals you're working towards or problems you're trying to solve in your career and life? Be as thorough as possible",  
//     options: ["I'd rather not say", "$0-$1,000/ month","$1,000-$3,000/ month","$3,000-$6,000/ month","$6,000- $10,000/ month",
//         "$10,000 + / month"
//     ],

//   },
//   {
//     type: "question",
//     id : 7,
//     description : "The minimum financial commitment to get started with AL-P is $1,315. If you decided AL-P we're a good fit for you, do you have the funds or could you get the funds to be able to get started?",
//     options: ["Yes", "No", "Maybe"],
//   },
//   {
//     type: "question",
//     id : 8,
//     description : "The next step is booking a no-pressure demo call about AL-P to learn more. If you book a call, can you commit to showing up?",
//     options: ["Yes", "No"],
//   },
//   {
//     type: "form",
//     id : 9,
//   }
// ];

// const MultiStepQuestions = () => {
//   // Track which question we’re on
//   const [currentStep, setCurrentStep] = useState(0);

//   // Track the user’s answers by question ID
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

//   const handleFormSubmit = (formData) => {
//     // Combine question answers + form data
//     const allData = {
//       questionAnswers: answers,
//       formData,
//     };
//     console.log("All Data:", allData);

//     alert("Form submitted! Check console for all data.");

//     // Possibly do an API call or navigation here...
//   };



//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-2">
//         <div className="relative w-[30rem] h-[120px] my-10">
//                   <img
//                     src="/c7b372f5e7ba139d6d95f83344b4d125_1000.jpg"
//                     alt="Active Life Logo"
//                     className="object-contain"
//                   />
//                 </div>
//       <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
        
//         {/* If current step is a question type, show the question layout */}
//         {stepData.type === "question" && (
//           <>
//             <h3 className="text-2xl sm:text-xl font-semibold text-center mb-2">
//               {stepData.title}
//             </h3>

//             <p className="text-xl sm:text-base text-gray-600 mb-2">
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
//                   <span className="text-base">{option}</span>
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
    title: "Answer the questions below so we can be effective on the call",
    description:
      "We help coaches bridge the gap between healthcare and fitness and build profitable careers doing it. Generally speaking, does this sound like what you're looking for?",
    options: ["Yes", "No"],
  },
  {
    type: "question",
    id: 2,
    description:
      "Coaches who join AL-P typically want help with one of two areas. They are either looking for help developing technical skills like assessing, programming, cueing etc. for clients who have pain, or they are looking for business skills to reclaim their time, make more money, and build profitable careers. Which would you say you are interested in?",
    options: ["Technical coaching skills", "Business skills", "Both"],
  },
  {
    type: "question",
    id: 3,
    description: "How long have you been a coach or trainer?",
    options: ["I'm not yet", "under a year", "1-4 years", "5-10 years", "10-20 years"],
  },
  {
    type: "question",
    id: 4,
    description: "How many hours per week do you train/coach?",
    options: ["0 hours", "1-10 hours", "11-24 hours", "25+ hours"],
  },
  {
    type: "question",
    id: 5,
    description: "How much money do you currently make from coaching/training?",
    options: [
      "I'd rather not say",
      "$0-$1,000/ month",
      "$1,000-$3,000/ month",
      "$3,000-$6,000/ month",
      "$6,000- $10,000/ month",
      "$10,000 + / month",
    ],
  },
  {
    type: "question",
    id: 6,
    description:
      "Tell us about where you're starting from and where you want to get to. What are your goals you're working towards or problems you're trying to solve in your career and life? Be as thorough as possible",
    options: [
      "I'd rather not say",
      "$0-$1,000/ month",
      "$1,000-$3,000/ month",
      "$3,000-$6,000/ month",
      "$6,000- $10,000/ month",
      "$10,000 + / month",
    ],
  },
  {
    type: "question",
    id: 7,
    description:
      "The minimum financial commitment to get started with AL-P is $1,315. If you decided AL-P we're a good fit for you, do you have the funds or could you get the funds to be able to get started?",
    options: ["Yes", "No", "Maybe"],
  },
  {
    type: "question",
    id: 8,
    description:
      "The next step is booking a no-pressure demo call about AL-P to learn more. If you book a call, can you commit to showing up?",
    options: ["Yes", "No"],
  },
  {
    type: "form",
    id: 9,
  },
];

const MultiStepQuestions = () => {
  // Track which question we’re on
  const [currentStep, setCurrentStep] = useState(0);

  // Track user’s answers by question ID
  // We’ll store them as an object like { [questionId]: "User's answer" }
  const [answers, setAnswers] = useState({});

  const stepData = questions[currentStep];

  // Handler: user selects an option for the current question
  const handleOptionChange = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [stepData.id]: option,
    }));
  };

  // Move to the next step if not at the last
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("No more steps. Possibly submit all data, etc.");
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
    // Possibly do an API call or navigate here...
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Logo container (now responsive) */}
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
            {/* Some questions have a title, some do not. Render if present */}
            {stepData.title && (
              <h3 className="text-2xl md:text-2xl font-semibold text-center mb-4">
                {stepData.title}
              </h3>
            )}

            <p className="text-xl md:text-lg text-gray-700 mb-4">
              {stepData.description}
            </p>

            {stepData.warning && (
              <p className="text-sm text-red-600 font-medium mb-4">
                {stepData.warning}
              </p>
            )}

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

            {/* Navigation buttons */}
            <div className="flex justify-between items-center">
              {/* Show PREV if not the first step */}
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
                NEXT →
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
