import { Card } from "@/components/ui/card"
import MultiStepQuestions from "./component/MultipleQuestions"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
             <header className="w-full to-blue-50 p-6">
         <div className="container mx-auto">
           <div className="flex items-center gap-4 text-white">
             <img src="/b1c0159e-cf3e-432c-b46e-38657cc43c0b.png" alt=""/>
           </div>
         </div>
       </header>

      <main className="flex-1 container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Personal Trainers and Fitness Coaches- Build a career by bridging the gap between healthcare and fitness.
          </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6 mb-8 sm:mb-12 px-4">
            APPLY FOR AN AL-P DEMO CALL 👇
          </h1>
        </div>

        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Column - Video Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg sm:text-xl mb-4 px-2">
              STEP ONE:
              <br />
              Watch this quick 6 minute training to make sure you&apos;re a good fit for a demo call...
            </h2>
            <div className="relative w-full pb-[56.25%]">
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/3f_wyzZ-J6M?si=bpYk4mSpSYHnWR7r" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
             
            </div>
            <h1 className="font-semibold text-lg sm:text-xl mb-4">STEP TWO: Fill out the application to apply for an AL-P demo call 👉</h1>
            <div className="text-center mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
          <p>(These 60-minute calls are to see if AL-P might be a good fit for you or not. If it is a fit, our team will help you get started with the next steps in the process. If it isn&apos;t a fit, they will let you know that too and point you in the direction of someone better suited to help with your specific goals)</p>
          <blockquote className="text-base sm:text-lg font-medium">
            &quot;I&apos;ve more than doubled my client roster in just the first 2 months of AL-P&quot;
          </blockquote>
          <cite className="text-sm sm:text-base text-gray-600 mt-2 block">-Nathan G, Ontario</cite>
        </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="w-full max-w-xl mx-auto lg:max-w-none">
            <Card className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                
                <MultiStepQuestions/>
              </div>
              
            </Card>
          </div>
          
        </div>

        {/* Testimonial Section */}
    
      </main>

      {/* Footer */}
      <footer className="w-full py-4 sm:py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center sm:justify-start">
            <header className="w-full to-blue-50 p-6">
         <div className="container mx-auto">
           <div className="flex items-center gap-4 text-white">
             <img src="/b1c0159e-cf3e-432c-b46e-38657cc43c0b.png" alt=""/>
           </div>
         </div>
       </header>
          </div>
        </div>
      </footer>
    </div>
  )
}