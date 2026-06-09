import { Award, Target, TrendingUp, CheckCircle, Smartphone, Database, ShieldCheck, BarChart3, Users } from 'lucide-react'

// --- Data Stays Identical ---
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
  // Converted Google Drive sharing link to a direct rendering image source URL
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1951f0TDk9QzxVeQlD74V03TtrTG5s6Z3"

  return (
    <section id="about" className="section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Visual Profile Card (Fixed overlapping bugs) */}
          <div className="relative flex justify-center lg:sticky lg:top-24 w-full">
            {/* Added extra horizontal padding (px-6/md:px-12) so floating badges don't clip text boundaries */}
            <div className="relative w-full max-w-[360px] h-[380px] md:h-[400px] px-6 sm:px-0">
              
              {/* Card Body with Softened Gradient & Drop Shadow */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#032d60] via-[#1a56db] to-[#1b96ff] flex flex-col items-center justify-center text-center p-6 shadow-[0_20px_50px_-12px_rgba(3,45,96,0.35)] relative z-10">
                
                {/* Profile Image with float animation */}
                <div className="w-28 h-28 md:w-32 md:h-32 mb-6 rounded-full border-4 border-white/20 overflow-hidden shadow-inner bg-blue-950/40 flex-shrink-0 animate-float">
                  <img 
                    src={profileImageUrl} 
                    alt="Dipta Saha Profile Picture" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback emoji if Google Drive blocks request headers
                      e.currentTarget.style.display = 'none';
                      if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = '👨‍💻';
                    }}
                  />
                </div>
                
                {/* Name Layout Layer */}
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2 drop-shadow-sm">
                  Dipta Saha
                </h3>
                
                {/* Subtitle - Separated nicely with clean structural font values */}
                <p className="text-xs md:text-sm font-bold tracking-widest text-blue-100 uppercase leading-snug max-w-[240px]">
                  Digital Transformation Leader
                </p>
              </div>
              
              {/* Floating badge – Sales Automation Specialist */}
              <div className="absolute -right-4 top-10 sm:-right-8 bg-white dark:bg-gray-800 rounded-2xl p-3 md:p-4 shadow-xl border border-gray-100 dark:border-gray-700 max-w-[150px] md:max-w-[160px] z-20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex-shrink-0">
                    <Target className="text-blue-600 dark:text-blue-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs leading-tight">Sales Automation</h4>
                    <span className="text-gray-500 dark:text-gray-400 text-[10px] block mt-0.5">Specialist</span>
                  </div>
                </div>
              </div>

              {/* Floating badge – DMS Ecosystem Optimization */}
              <div className="absolute -left-4 bottom-10 sm:-left-8 bg-white dark:bg-gray-800 rounded-2xl p-3 md:p-4 shadow-xl border border-gray-100 dark:border-gray-700 max-w-[150px] md:max-w-[160px] z-20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl flex-shrink-0">
                    <TrendingUp className="text-green-600 dark:text-green-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs leading-tight">DMS Ecosystem</h4>
                    <span className="text-gray-500 dark:text-gray-400 text-[10px] block mt-0.5">Optimization</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Bio & Content Focus */}
          <div className="transition-opacity duration-300">
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
                <Award size={20} className="text-blue-600 dark:text-blue-500" />
                Digital Transformation Pillars
              </h4>
              <div className="space-y-4">
                {corePillars.map((pillar) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
                      <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-lg text-blue-600 dark:text-blue-400 h-9 w-9 flex items-center justify-center flex-shrink-0">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-gray-900 dark:text-white">{pillar.title}</h5>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Strategic Drivers */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-lg">
                <CheckCircle size={20} className="text-blue-600 dark:text-blue-500" />
                Strategic Objectives
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {recentMilestones.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-blue-600 dark:text-blue-500 font-bold mt-0.5 flex-shrink-0">→</span>
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
