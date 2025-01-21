import { useState } from "react"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-2xl mb-4">STEP ONE: Watch this 6-minute training</h2>
      <div className="relative w-full pb-[56.25%] bg-gray-200 rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center">
             <iframe 
                 className="absolute top-0 left-0 w-full h-full rounded-lg"
                 src="https://www.youtube.com/embed/3f_wyzZ-J6M?si=bpYk4mSpSYHnWR7r" 
                 title="YouTube video player" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowFullScreen
               ></iframe>
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity duration-300"
            >
              <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        ) : (
              <iframe 
                 className="absolute top-0 left-0 w-full h-full rounded-lg"
                 src="https://www.youtube.com/embed/3f_wyzZ-J6M?si=bpYk4mSpSYHnWR7r" 
                 title="YouTube video player" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowFullScreen
               ></iframe>
        )}
      </div>
      <p className="text-gray-700">Watch this quick 6-minute training to see if you&apos;re a good fit for a demo call.</p>
    </div>
  )
}

