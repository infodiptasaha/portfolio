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
    name: 'Sarah Chen',
    title: 'VP of Sales',
    company: 'TechCorp Enterprises',
    avatar: 'SC',
    rating: 5,
    text: "Alex completely transformed our sales process. The lead automation system he built reduced our response time by 75% and directly contributed to a 40% jump in conversions. He doesn't just write code — he understands business outcomes.",
  },
  {
    name: 'Marcus Johnson',
    title: 'CTO',
    company: 'CloudSolutions Inc.',
    avatar: 'MJ',
    rating: 5,
    text: 'Our Salesforce-SAP integration was a massive undertaking that multiple vendors said wasn\'t feasible. Alex designed and delivered it in 3 months with 100% data accuracy. His Apex skills and integration expertise are exceptional.',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Director of Operations',
    company: 'Digital CRM Agency',
    avatar: 'ER',
    rating: 5,
    text: "What sets Alex apart is his ability to translate complex business requirements into elegant Salesforce solutions. Our onboarding automation went from 40 manual steps to just 3. He's our go-to Salesforce expert for every major project.",
  },
  {
    name: 'David Kim',
    title: 'Head of Customer Success',
    company: 'GrowthCo',
    avatar: 'DK',
    rating: 5,
    text: "Alex built our entire Service Cloud setup from scratch. Case resolution time dropped by 60% and our CSAT score is now 4.8/5. He's incredibly responsive, proactive about edge cases, and delivers quality work every single time.",
  },
  {
    name: 'Jennifer Walsh',
    title: 'Salesforce Admin Lead',
    company: 'EnterpriseFlow',
    avatar: 'JW',
    rating: 5,
    text: 'Working with Alex on our CPQ implementation was a game-changer. He mentored our team while delivering the project, and we walked away with both a great system and significantly improved internal capabilities.',
  },
  {
    name: 'Robert Thompson',
    title: 'CEO',
    company: 'StartupScale',
    avatar: 'RT',
    rating: 5,
    text: 'Alex migrated our entire CRM to Salesforce with zero data loss and zero downtime. His attention to detail, clear communication, and deep technical knowledge made what seemed like a daunting project surprisingly smooth.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Trusted by enterprise leaders across industries to deliver Salesforce solutions that
            move the needle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <Quote size={22} className="text-blue-200 dark:text-blue-900 mb-3" />

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0176D3, #032D60)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t.title} · {t.company}
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
