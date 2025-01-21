// import { Button } from "@/components/ui/button"

// export default function HeroSection() {
//   return (
//     <section className="bg-gradient-to-b from-blue-100 to-white py-20 md:py-32">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">Build Your Fitness Career with AL-P</h1>
//         <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
//           Personal Trainers and Fitness Coaches - Bridge the gap between healthcare and fitness.
//         </p>
//         <Button
//           size="lg"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300"
//         >
//           Apply for Demo Call
//         </Button>
//       </div>
//     </section>
//   )
// }


import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">Build Your Fitness Career with AL-P</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Personal Trainers and Fitness Coaches - Bridge the gap between healthcare and fitness.
        </p>
        <a href="tel:7869774426">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Apply for Demo Call
          </Button>
        </a>
      </div>
    </section>
  );
}
