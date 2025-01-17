import { useState } from "react";

// eslint-disable-next-line react/prop-types
const DemoForm = ({ onSubmit, onPrev }) => {
  // You can receive onSubmit & onPrev as props to integrate with multi-step flow.
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass form data up to parent if needed
    onSubmit({ fullName, phone, email, agreed });
  };

  return (
    <div className="w-full flex flex-col">
      {/* Main form */}
      <form
        onSubmit={handleSubmit}
        className="flex-grow max-w-lg w-full mx-auto px-4 py-8"
      >
        {/* Full Name */}
        <label htmlFor="fullName" className="block font-medium mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Full Name"
          required
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        {/* Phone */}
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Phone"
          required
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Email */}
        <label htmlFor="email" className="block font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Checkbox */}
        <div className="flex items-start mb-6">
          <input
            id="agree"
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1 mr-2"
          />
          <label htmlFor="agree" className="text-gray-700 text-sm">
            I agree to{" "}
            <a
              href="#"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms &amp; conditions
            </a>{" "}
            provided by the company. By providing my phone number, I agree to
            receive text messages from the business.
          </label>
        </div>

        {/* Instruction text */}
        <h2 className="text-2xl font-semibold mb-4">Click submit when done</h2>
      </form>

      {/* Bottom bar with PREV / SUBMIT */}
      <div className="w-full bg-blue-500 text-white flex justify-between items-center px-4 py-3">
        {/* Prev button */}
        <button
          type="button"
          onClick={onPrev}
          className="flex items-center space-x-2 text-white hover:bg-blue-600 px-4 py-2 rounded"
        >
          <span className="text-xl">&larr;</span>
          <span>PREV</span>
        </button>

        {/* Submit button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-base"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default DemoForm;
