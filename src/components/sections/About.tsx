import { Award, Target, TrendingUp, CheckCircle, Smartphone, Database, ShieldCheck, BarChart3, Users } from 'lucide-react'

const corePillars = [
  {
    title: 'DMS Product Evolution',
    desc: 'Partnering with developers to design, test, and deploy modules within the Remark Sales Automation ecosystem.',
    icon: Smartphone
  },
  {
    title: 'Process Digitization & Controls',
    desc: 'Automating Credit Management, Claim Processing, and Reverse Logistics to remove manual risks.',
    icon: ShieldCheck
  },
  {
    title: 'Data Infrastructure',
    desc: 'Structuring database frameworks, automated routing, and warehouse tracking for structural inventory sync.',
    icon: Database
  },
  {
    title: 'Data-Driven Insights',
    desc: 'Converting raw field automation data into crystal clear performance reports for corporate decision-makers.',
    icon: BarChart3
  },
  {
    title: 'Digital Enablement & Change Management',
    desc: 'Driving ecosystem adoption across the entire sales hierarchy (RSD/ASD/TM/SO/Distributors).',
    icon: Users
  }
]

const recentMilestones = [
  'Leading operational deployment and feature evolution of the Remark DMS Secondary Application',
  'Successfully replacing legacy, manual workflows with agile, data-driven digital architecture',
  'Bridging the gap between field sales operations and engineering development teams',
  'Eliminating operational bottlenecks to optimize field-force performance metrics'
]

export function AboutSection() {
  return (
    <section id="about" className="section-padding py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Visual Profile Card */}
          <div className="relative flex justify-center lg:sticky lg:top-24">
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#032D60] via-[#0176D3] to-[#1B96FF] flex items-center justify-center shadow-2xl">
                <div className="text-white text-center px-4">
                  <div className="text-7xl mb-3 animate-bounce">💼</div>
                  <div className="text-2xl font-bold tracking-tight">Dipta Saha</div>
                  <div className="text-blue-200 text-sm font-medium mt-1">Digital Transformation Leader</div>
                </div>
              </div>
              
              {/* Floating badge – Focus area */}
              <div className="absolute -right-6 top-8 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 max-w-[160px]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0">
                    <Target className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-xs leading-tight">Sales Automation</div>
                    <div className="text-gray-500 dark:text-gray-400 text-[10px] mt-0.5">Specialist</div>
                  </div>
                </div>
              </div>

              {/* Floating badge – Domain expertise */}
              <div className="absolute -left-6 bottom-12 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 max-w-[160px]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl flex-shrink-0">
                    <TrendingUp className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-xs leading-tight">DMS Ecosystem</div>
                    <div className="text-gray-500 dark:text-gray-400 text-[10px] mt-0.5">Optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bio & Content Focus */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Bridging Field Sales Operations & Technical Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I am a Digital Transformation Professional specializing in Sales Automation and Distribution Management Systems (DMS). 
              I focus on replacing legacy, manual workflows with agile, data-driven digital solutions. By managing the vital link between 
              operational ground execution and complex tech infrastructure, I ensure system adoption and cross-functional continuous optimization.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Currently, I lead the operational deployment and feature evolution of the <strong className="text-gray-900 dark:text-white font-semibold">Remark DMS Secondary Application</strong>, 
              turning complex commercial business processes into scalable, functional digital corporate assets.
            </p>

            {/* Core Pillars */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-lg">
                <Award size={20} className="text-blue-600" />
                Digital Transformation Pillars
              </h4>
              <div className="space-y-4">
                {corePillars.map((pillar) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                      <div className="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-600 dark:text-blue-400 h-9 w-9 flex items-center justify-center flex-shrink-0">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-gray-900 dark:text-white">{pillar.title}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{pillar.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Strategic Drivers */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-lg">
                <CheckCircle size={20} className="text-blue-600" />
                Strategic Objectives
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {recentMilestones.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
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
