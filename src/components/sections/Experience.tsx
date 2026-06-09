import { Calendar, MapPin } from 'lucide-react'

interface Job {
  company: string
  role: string
  duration: string
  location: string
  type: string
  achievements: string[]
  color: string
}

const jobs: Job[] = [
  {
    company: 'Remark HB Limited',
    role: 'Senior Executive – Remark Sales Automation',
    duration: 'Apr 2026 – Present',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    achievements: [
      'Leading the operational deployment, scaling, and feature evolution of the Remark DMS Secondary Application.',
      'Bridging the gap between software engineering development teams and field operations to build a fully connected sales ecosystem.',
      'Driving strategic commercial growth by engineering modern, data-driven sales solutions that eliminate manual operational bottlenecks.',
      'Spearheading core operational metrics across the country focused heavily on Process Digitization, Data Visibility, and Change Management.'
    ],
    color: '#032d60', // Royal deep blue matching your profile card
  },
  {
    company: 'Remark HB Limited',
    role: 'Executive – Remark Sales Automation',
    duration: 'Feb 2025 – Mar 2026',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    achievements: [
      'Drove the product development and modular optimization of the Claim Management system to streamline distributor financial settlements.',
      'Supervised credit limits, monitored outstanding channel balances, and structured approval workflows to minimize financial risks.',
      'Managed system verification and logistics tracking for distributor market returns, ensuring exact inventory accuracy across central warehouses.',
      'Designed and distributed daily, weekly, and monthly performance dashboards providing top-tier management with actionable analytics.'
    ],
    color: '#1a56db', // Dynamic corporate blue
  },
  {
    company: 'Remark HB Limited',
    role: 'Officer – Remark Sales Automation',
    duration: 'Apr 2024 – Jan 2025',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    achievements: [
      'Spearheaded master data configurations, core database (DB) structure updates, territory routing, and outlet mapping.',
      'Controlled distributor stock levels and warehouse alignment within the secondary automation systems to perfect supply chain visibility.',
      'Administered secure, role-based user management and access control hierarchies across all sales tiers (RSD, ASD, TM, SO, Distributors).',
      'Conducted extensive onboarding programs and market field-visits to monitor application health and train system end-users.'
    ],
    color: '#1b96ff', // Bright accent blue
  },
  {
    company: 'ACI Limited',
    role: 'Automation Support Officer',
    duration: 'Jul 2018 – Apr 2024',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    achievements: [
      'Provided end-to-end operational support for field force sales automation tools and commercial application ecosystems.',
      'Collaborated closely with cross-functional sales and business development units to capture user requirements and diagnose application errors.',
      'Tracked system metrics and compliance protocols on-site to drive operational efficiency throughout regional market segments.'
    ],
    color: '#475569', // Slate gray for historical foundation role
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#032d60] via-[#1b96ff] to-gray-300 dark:to-gray-700 md:-translate-x-px" />

          <div className="space-y-12">
            {jobs.map((job, idx) => (
              <div
                key={`${job.role}-${idx}`}
                className={`relative flex flex-col md:flex-row gap-0 md:gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-1/2 z-10 top-6">
                  <div
                    className="w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 shadow-md"
                    style={{ backgroundColor: job.color }}
                  />
                </div>

                {/* Card Content Block */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 group">
                    
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
                      <div>
                        <h3 className="font-extrabold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job.role}
                        </h3>
                        <div className="font-bold text-blue-600 dark:text-blue-400 text-sm">
                          {job.company}
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 w-fit bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-[11px] font-semibold tracking-wide uppercase flex-shrink-0">
                        {job.type}
                      </span>
                    </div>

                    {/* Metadata: Date and Location info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-gray-400" />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-gray-400" />
                        {job.location}
                      </span>
                    </div>

                    {/* Achievement Bullet Points */}
                    <ul className="space-y-2.5">
                      {job.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          <span className="text-blue-600 dark:text-blue-500 font-bold mt-0.5 flex-shrink-0">▸</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Desktop Date Badge on opposite side */}
                <div
                  className={`hidden md:flex items-center md:w-1/2 ${idx % 2 === 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'}`}
                >
                  <span className="text-xs md:text-sm font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/40 px-3 py-1 rounded-lg">
                    {job.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
