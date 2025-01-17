
const HeaderWithSeparateContent = () => {
    return (
      <header className="w-full">
        {/* Top section: Gradient banner with logo */}
        <div className="w-full flex justify-center py-6">
          {/* Replace with your actual logo */}
          <img
            src="/b1c0159e-cf3e-432c-b46e-38657cc43c0b.png"
            alt="Turn Pro Logo"
            className="h-auto w-auto max-h-44 object-contain"
          />
        </div>
  
        {/* Below the banner: separate text/content */}
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Personal Trainers and Fitness Coaches – Build a career by bridging
            the gap between healthcare and fitness.
          </h1>
          {/* You can add more paragraphs or elements here if needed */}
        </div>
      </header>
    );
  };
  
  export default HeaderWithSeparateContent;
  