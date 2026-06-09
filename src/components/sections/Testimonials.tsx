import { Quote, Star } from 'lucide-react'

interface Testimonial {
  name: string
  title: string
  company: string
  avatar: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Rahat Rahman',
    title: 'Regional Sales Manager',
    company: 'Remark Distribution Network',
    avatar: 'RR',
    rating: 5,
    text: "The integration of the secondary DMS application completely changed our operations. Ground level synchronization bottlenecks were wiped out, and our sales officers can now input field actions with absolute ease and transparency.",
  },
  {
    name: 'Asif Iqbal',
    title: 'Lead Corporate Auditor',
    company: 'Remark HB Limited',
    avatar: 'AI',
    rating: 5,
    text: "Digitizing the Claim Management module was a massive milestone. It eliminated manual tracking errors and slashed our distributor settlement delays dramatically. Financial accountability is now at an all-time high.",
  },
  {
    name: 'Tanvir Hossain',
    title: 'Managing Director',
    company: 'Hossain & Co. Distributors',
    avatar: 'TH',
    rating: 5,
    text: "The automated credit limit and dynamic routing workflows saved our business from risk exposures. We can request limit updates and monitor outstanding balances in real-time, making channel logistics frictionless.",
  },
  {
    name: 'M. B. Zaman',
    title: 'Head of Supply Chain & Logistics',
    company: 'FMCG Alliance',
    avatar: 'MZ',
    rating: 5,
    text: "Database route mapping and inventory alignment configurations matching our central warehouses have reached 100% trace accuracy. An exceptional display of structured data management and system design.",
  },
  {
    name: 'Sultana Ahmed',
    title: 'Area Sales Coordinator',
    company: 'Remark Corporate Operations',
    avatar: 'SA',
    rating: 5,
    text: "His approach to change management and user enablement made onboarding hundreds of field force tiers (TMs, SOs) completely frictionless. The training workflows built platform compliance up to 98%.",
  },
  {
    name: 'Kazi Arif',
    title: 'Commercial Operations Manager',
    company: 'ACI Logistics Division',
    avatar: 'KA',
    rating: 5,
    text: "During his tenure, the operational support for field force sales tools was highly reliable. He possesses a brilliant capacity to break down complex commercial workflows into functional application blueprints.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Stakeholder Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            What Professionals <span className="text-blue-600 dark:text-blue-400">Say</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Trusted by corporate leaders, regional managers, and network distributors to deliver seamless ecosystem automations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Five Stars Rating Row */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Quote Layout Icon */}
                <Quote size={24} className="text-blue-100 dark:text-blue-900/40 mb-3 transform group-hover:rotate-6 transition-transform duration-300" />

                {/* Feedback Review Text */}
                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed mb-6 font-medium italic">
                  "{t.text}"
                </p>
              </div>

              {/* User Avatar & Corporate Meta Profile Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black tracking-wide flex-shrink-0 shadow-sm select-none"
                  style={{ background: 'linear-gradient(135deg, #032d60, #1b96ff)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-extrabold text-gray-900 dark:text-white text-sm tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 leading-none mt-0.5">
                    {t.title}
                  </div>
                  <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                    {t.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
