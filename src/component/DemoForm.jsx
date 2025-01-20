/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const DemoForm = ({  onPrev }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling
  const [success, setSuccess] = useState(null); // For success message
  const [validationErrors, setValidationErrors] = useState({}); // Validation errors

  const validateForm = () => {
    const errors = {};

    if (!fullName.trim()) errors.fullName = "Full Name is required.";
    if (!phone.trim() || !/^\d{10}$/.test(phone))
      errors.phone = "Phone number must be 10 digits.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      errors.email = "A valid email is required.";
    if (!agreed) errors.agreed = "You must agree to the terms and conditions.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors({}); // Reset validation errors
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const formData = { fullName, phone, email, agreed };

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const response = await fetch("https://cooler-backend.onrender.com/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit the form");
      }

      // const data = await response.json();
      Swal.fire({
        title: "Thank you!",
        text: "Form submitted successfully!",
        icon: "success"
      });

      // Call onSubmit if provided by parent component
      // if (onSubmit) onSubmit(data);

      // Clear form
      setFullName("");
      setPhone("");
      setEmail("");
      setAgreed(false);
    } catch (err) {
      setError(err.message || "An error occurred during submission");
    } finally {
      setLoading(false);
    }
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
          className={`mb-2 w-full rounded-md border px-3 py-2 ${
            validationErrors.fullName
              ? "border-red-500"
              : "border-gray-300 focus:ring-blue-500"
          } focus:outline-none`}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {validationErrors.fullName && (
          <p className="text-red-500 text-sm mb-4">{validationErrors.fullName}</p>
        )}

        {/* Phone */}
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Phone"
          className={`mb-2 w-full rounded-md border px-3 py-2 ${
            validationErrors.phone
              ? "border-red-500"
              : "border-gray-300 focus:ring-blue-500"
          } focus:outline-none`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {validationErrors.phone && (
          <p className="text-red-500 text-sm mb-4">{validationErrors.phone}</p>
        )}

        {/* Email */}
        <label htmlFor="email" className="block font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`mb-2 w-full rounded-md border px-3 py-2 ${
            validationErrors.email
              ? "border-red-500"
              : "border-gray-300 focus:ring-blue-500"
          } focus:outline-none`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validationErrors.email && (
          <p className="text-red-500 text-sm mb-4">{validationErrors.email}</p>
        )}

        {/* Checkbox */}
        <div className="flex items-start mb-2">
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
        {validationErrors.agreed && (
          <p className="text-red-500 text-sm mb-4">{validationErrors.agreed}</p>
        )}

        {/* Instruction text */}
        <h2 className="text-2xl font-semibold mb-4">Click submit when done</h2>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        {loading && <p className="text-blue-500 mb-4">Submitting...</p>}
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
          disabled={loading} // Disable while loading
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </div>
    </div>
  );
};

export default DemoForm;
