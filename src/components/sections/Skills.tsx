interface Skill {
  name: string
  level: number
  category: string
  icon: string
}

const skills: Skill[] = [
  { name: 'Salesforce Administration', level: 98, category: 'Core', icon: '☁️' },
  { name: 'Salesforce Flow', level: 96, category: 'Automation', icon: '⚡' },
  { name: 'Apex Development', level: 92, category: 'Development', icon: '{ }' },
  { name: 'Lightning Web Components', level: 88, category: 'Development', icon: '🌩️' },
  { name: 'Process Builder', level: 95, category: 'Automation', icon: '🔄' },
  { name: 'SOQL & SOSL', level: 90, category: 'Development', icon: '🔍' },
  { name: 'REST & SOAP APIs', level: 85, category: 'Integration', icon: '🔗' },
  { name: 'Integration Development', level: 82, category: 'Integration', icon: '🌐' },
  { name: 'JavaScript', level: 80, category: 'Development', icon: 'JS' },
  { name: 'HTML / CSS', level: 78, category: 'Development', icon: '<>' },
  { name: 'Git & CI/CD', level: 82, category: 'DevOps', icon: '🐙' },
]

const categoryColors: Record<string, string> = {
  Core: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  Automation: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  Development: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  Integration: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
  DevOps: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A comprehensive toolkit built over 6+ years of Salesforce development, covering the
            entire platform ecosystem.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                      {skill.name}
                    </div>
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${categoryColors[skill.category] || ''}`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {skill.level}%
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, #0176D3, #1B96FF)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
