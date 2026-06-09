import { Smartphone, ShieldCheck, Database, BarChart3, Users, Network } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ComponentType<{ size?: number | string; className?: string }> | string
}

const skills: Skill[] = [
  { name: 'DMS Secondary App Development', level: 95, category: 'Core Ecosystem', icon: Smartphone },
  { name: 'Sales Automation (SFA)', level: 96, category: 'Automation', icon: '⚡' },
  { name: 'Process Digitization & Module Design', level: 92, category: 'Core Ecosystem', icon: '🔄' },
  { name: 'Credit Management & Financial Controls', level: 88, category: 'Controls', icon: ShieldCheck },
  { name: 'Master Data & Infrastructure Management', level: 90, category: 'Data & Analytics', icon: Database },
  { name: 'Market Return & Reverse Logistics', level: 85, category: 'Controls', icon: '📦' },
  { name: 'Data Analytics & Report Generation', level: 88, category: 'Data & Analytics', icon: BarChart3 },
  { name: 'User Access & Hierarchy Management', level: 84, category: 'Controls', icon: '🔒' },
  { name: 'Change Management & Field Onboarding', level: 92, category: 'Strategy & Enablement', icon: Users },
  { name: 'Cross-Functional Team Collaboration', level: 90, category: 'Strategy & Enablement', icon: Network },
]

const categoryColors: Record<string, string> = {
  'Core Ecosystem': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  'Automation': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  'Controls': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  'Data & Analytics': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  'Strategy & Enablement': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Technical & Functional Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            A specialized core toolkit built over years of transforming field operations, leading continuous DMS deployments, 
            and architecting data-driven sales workflows.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Dynamic Icon Wrapper to support both Lucide Components and standard Emojis */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#032d60] to-[#1b96ff] flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      {typeof IconComponent === 'string' ? (
                        <span>{IconComponent}</span>
                      ) : (
                        <IconComponent size={18} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold mt-1 tracking-wide uppercase ${categoryColors[skill.category] || ''}`}
                      >
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-xl font-black text-blue-600 dark:text-blue-400 flex-shrink-0 tracking-tight">
                    {skill.level}%
                  </div>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #032d60, #1b96ff)',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
