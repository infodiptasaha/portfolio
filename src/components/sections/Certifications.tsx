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
    name: 'Foundations of Business Analysis',
    issuer: 'SAP',
    year: '2026',
    credential: 'UR2XWM4E1W7L',
    badge: '📊',
    level: 'Business Analysis',
  },
  {
    name: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera',
    year: '2026',
    credential: 'OMFLX739V3W8',
    badge: '📈',
    level: 'Data Analysis',
  }
]

const levelColors: Record<string, string> = {
  'Business Analysis': 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20',
  'Data Analysis': 'border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-950/20'
}

const levelBadgeColors: Record<string, string> = {
  'Business Analysis': 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
  'Data Analysis': 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Verified Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Professional credentials validating core expertise in data intelligence, systems analysis, and business process automation.
          </p>
        </div>

        {/* Certifications Grid (Centered and responsive for your active certificates) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.credential}
              className={`relative rounded-2xl p-6 border-2 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] flex flex-col justify-between ${levelColors[cert.level] || ''}`}
            >
              <div>
                {/* Badge Icon */}
                <div className="text-4xl mb-4 text-center select-none">{cert.badge}</div>
                
                <div className="text-center">
                  {/* Title */}
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-snug mb-2 group-hover:text-blue-600">
                    {cert.name}
                  </h3>
                  
                  {/* Issuer & Date */}
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {cert.issuer} · {cert.year}
                  </div>
                  
                  {/* Credential ID */}
                  <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-4">
                    ID: {cert.credential}
                  </div>
                </div>
              </div>

              {/* Category Tag */}
              <div className="text-center mt-auto">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${levelBadgeColors[cert.level] || ''}`}
                >
                  {cert.level}
                </span>
              </div>

              {/* Verified Badge Checkmark */}
              <div className="absolute top-3 right-3" title="Verified Credential">
                <CheckCircle size={18} className="text-green-500 drop-shadow-sm" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
