interface Partner {
  name: string
  title: string
  company: string
  avatar: string
}

const partners: Partner[] = [
  {
    name: 'Rahat Rahman',
    title: 'Regional Sales Manager',
    company: 'Distribution Network',
    avatar: 'RR',
  },
  {
    name: 'Asif Iqbal',
    title: 'Lead Corporate Auditor',
    company: 'Syntex Limited',
    avatar: 'AI',
  },
  {
    name: 'Tanvir Hossain',
    title: 'Area Sales Director',
    company: 'Hossain & Co. Distributors',
    avatar: 'TH',
  },
  {
    name: 'M. B. Zaman',
    title: 'Head of Supply Chain & Logistics',
    company: 'FMCG Alliance',
    avatar: 'MZ',
  },
  {
    name: 'Sultana Ahmed',
    title: 'Area Sales Coordinator',
    company: 'Jaman Corporate Operations',
    avatar: 'SA',
  },
  {
    name: 'Kazi Arif',
    title: 'Commercial Operations Manager',
    company: 'Ritu Logistics Division',
    avatar: 'KA',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Professional Network
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Trusted <span className="text-blue-600 dark:text-blue-400">By Companies</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Collaborating with enterprise leaders, regional networks, and corporate distributors across the country.
          </p>
        </div>

        {/* Clean Partner Grid (No Review Text) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, idx) => (
            <div
              key={`${p.name}-${idx}`}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700/60 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 flex items-center gap-4"
            >
              {/* Profile Avatar Accent */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-black tracking-wide flex-shrink-0 shadow-sm select-none"
                style={{ background: 'linear-gradient(135deg, #032d60, #1b96ff)' }}
              >
                {p.avatar}
              </div>

              {/* Company & Profile Metadata */}
              <div className="flex-grow min-w-0">
                <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider truncate mb-0.5">
                  {p.company}
                </div>
                <div className="font-extrabold text-gray-900 dark:text-white text-base tracking-tight truncate">
                  {p.name}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate mt-0.5">
                  {p.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
