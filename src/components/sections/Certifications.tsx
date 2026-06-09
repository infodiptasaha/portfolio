import { CheckCircle } from 'lucide-react'

interface Certification {
  name: string
  issuer: string
  year: string
  credential: string
  badge: string
  level: string
}

const certifications: Certification[] = [
  {
    name: 'Salesforce Certified Administrator',
    issuer: 'Salesforce',
    year: '2019',
    credential: 'SCA-001',
    badge: '🛡️',
    level: 'Core',
  },
  {
    name: 'Platform Developer I',
    issuer: 'Salesforce',
    year: '2020',
    credential: 'SFPD1-002',
    badge: '⚙️',
    level: 'Developer',
  },
  {
    name: 'Platform App Builder',
    issuer: 'Salesforce',
    year: '2020',
    credential: 'SFPAB-003',
    badge: '🏗️',
    level: 'Builder',
  },
  {
    name: 'Advanced Administrator',
    issuer: 'Salesforce',
    year: '2021',
    credential: 'SFAA-004',
    badge: '⭐',
    level: 'Advanced',
  },
  {
    name: 'Sales Cloud Consultant',
    issuer: 'Salesforce',
    year: '2021',
    credential: 'SFSCC-005',
    badge: '💼',
    level: 'Consultant',
  },
  {
    name: 'Service Cloud Consultant',
    issuer: 'Salesforce',
    year: '2022',
    credential: 'SFSVC-006',
    badge: '🎧',
    level: 'Consultant',
  },
  {
    name: 'Platform Developer II',
    issuer: 'Salesforce',
    year: '2022',
    credential: 'SFPD2-007',
    badge: '🚀',
    level: 'Expert',
  },
  {
    name: 'Integration Architecture Designer',
    issuer: 'Salesforce',
    year: '2023',
    credential: 'SFIAD-008',
    badge: '🔗',
    level: 'Architect',
  },
]

const levelColors: Record<string, string> = {
  Core: 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/30',
  Developer: 'border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30',
  Builder: 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/30',
  Advanced: 'border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/30',
  Consultant: 'border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/30',
  Expert: 'border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/30',
  Architect: 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950/30',
}

const levelBadgeColors: Record<string, string> = {
  Core: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
  Developer: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300',
  Builder: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
  Advanced: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300',
  Consultant: 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300',
  Expert: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
  Architect: 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300',
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Verified Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            8 active Salesforce certifications demonstrating comprehensive platform mastery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.credential}
              className={`relative rounded-2xl p-6 border-2 bg-white dark:bg-gray-800 hover:shadow-xl transition-all hover:-translate-y-1 ${levelColors[cert.level]}`}
            >
              <div className="text-4xl mb-4 text-center">{cert.badge}</div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-2">
                  {cert.name}
                </h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {cert.issuer} · {cert.year}
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${levelBadgeColors[cert.level]}`}
                >
                  {cert.level}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <CheckCircle size={16} className="text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
