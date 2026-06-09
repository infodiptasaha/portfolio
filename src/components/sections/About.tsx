import { Award, Target, TrendingUp, CheckCircle } from 'lucide-react'

const certifications = [
  'Salesforce Certified Administrator',
  'Salesforce Platform Developer I',
  'Salesforce Platform App Builder',
  'Salesforce Advanced Administrator',
]

const achievements = [
  'Reduced lead response time by 75% through intelligent automation',
  'Implemented CRM solutions serving 500+ enterprise users',
  'Built 200+ custom Flows and Process automations',
  'Delivered 50+ Salesforce projects on time and within budget',
  'Achieved 98% client satisfaction rate across all engagements',
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-3xl sf-gradient flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <div className="text-xl font-bold">Dipta Saha</div>
                  <div className="text-blue-200 text-sm">Salesforce Expert</div>
                </div>
              </div>
              {/* Floating badge – certs */}
              <div className="absolute -right-6 top-8 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">8 Certs</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">Salesforce</div>
                  </div>
                </div>
              </div>
              {/* Floating badge – experience */}
              <div className="absolute -left-6 bottom-12 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <TrendingUp className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">6+ Years</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate Salesforce Developer Building the Future of CRM
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
              With over 6 years of hands-on Salesforce experience, I specialize in architecting
              end-to-end automation solutions that drive business efficiency. My deep expertise
              spans Apex development, Flow Builder, Lightning Web Components, and enterprise system
              integrations—helping organizations unlock the full power of the Salesforce ecosystem.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I've partnered with Fortune 500 companies and fast-growing startups alike to design
              scalable CRM architectures, streamline sales processes, and deliver automation systems
              that save thousands of hours annually.
            </p>

            {/* Certifications */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Award size={18} className="text-blue-600" />
                Salesforce Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle size={14} className="text-blue-600 flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Target size={18} className="text-blue-600" />
                Career Achievements
              </h4>
              <ul className="space-y-2">
                {achievements.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-blue-600 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
