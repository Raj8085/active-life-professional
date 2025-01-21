import { Card } from "@/components/ui/card"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "I've more than doubled my client roster in just the first 2 months of AL-P",
      author: "Nathan G, Ontario",
    },
    {
      quote: "AL-P has completely transformed my fitness coaching business",
      author: "Sarah L, California",
    },
    {
      quote: "The support and resources provided by AL-P are unmatched",
      author: "Michael R, New York",
    },
  ]

  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12"> Success Stories from AL-P Members</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <blockquote className="text-lg font-medium mb-4">&quot;{testimonial.quote}&quot;</blockquote>
              <cite className="text-sm text-gray-600 block text-right">- {testimonial.author}</cite>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

