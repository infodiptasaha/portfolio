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
    company: 'TechCorp Enterprises',
    role: 'Senior Salesforce Developer',
    duration: 'Jan 2022 – Present',
    location: 'San Francisco, CA',
    type: 'Full-time',
    achievements: [
      'Architected enterprise-grade CPQ automation reducing quote time from 3 days to 2 hours',
      'Led migration of legacy CRM to Salesforce, onboarding 300+ users with zero data loss',
      'Built LWC component library used across 15+ internal applications',
      'Mentored junior developers, increasing team delivery capacity by 40%',
    ],
    color: '#0176D3',
  },
  {
    company: 'CloudSolutions Inc.',
    role: 'Salesforce Developer',
    duration: 'Mar 2020 – Dec 2021',
    location: 'New York, NY',
    type: 'Full-time',
    achievements: [
      'Developed 50+ custom Apex classes and triggers supporting complex business logic',
      'Implemented Salesforce-SAP integration handling $50M+ in transactions monthly',
      'Designed and deployed Service Cloud for 5 enterprise clients',
      'Reduced automation deployment time by 60% through CI/CD pipeline setup',
    ],
    color: '#032D60',
  },
  {
    company: 'Digital CRM Agency',
    role: 'Salesforce Administrator & Developer',
    duration: 'Jun 2018 – Feb 2020',
    location: 'Austin, TX',
    type: 'Full-time',
    achievements: [
      'Administered Salesforce org for 10+ SMB clients with 98% uptime SLA',
      'Built 100+ process automations using Flow Builder and Process Builder',
      'Created custom reports and dashboards improving sales visibility by 45%',
      'Earned 4 Salesforce certifications while delivering client projects',
    ],
    color: '#1B96FF',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 dark:from-blue-400 dark:via-blue-600 dark:to-blue-900 md:-translate-x-px" />

          <div className="space-y-12">
            {jobs.map((job, idx) => (
              <div
                key={job.company}
                className={`relative flex flex-col md:flex-row gap-0 md:gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 top-6">
                  <div
                    className="w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                    style={{ backgroundColor: job.color }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <div>
                        <div className="font-black text-lg text-gray-900 dark:text-white">
                          {job.role}
                        </div>
                        <div className="font-semibold text-blue-600 dark:text-blue-400">
                          {job.company}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium flex-shrink-0">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {job.achievements.map((ach) => (
                        <li
                          key={ach}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 mt-0.5 flex-shrink-0">▸</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Date on opposite side (desktop) */}
                <div
                  className={`hidden md:flex items-center md:w-1/2 ${idx % 2 === 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'}`}
                >
                  <span className="text-sm font-bold text-gray-400 dark:text-gray-500">
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
