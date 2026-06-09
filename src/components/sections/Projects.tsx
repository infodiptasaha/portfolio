import { ArrowRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  results: string[]
  gradient: string
  icon: string
}

const projects: Project[] = [
  {
    title: 'Remark DMS Secondary Application',
    description:
      'End-to-end management of operational deployment and continuous module development to transition complex commercial sales workflows into agile field actions.',
    technologies: ['DMS Ecosystem', 'SFA Tooling', 'Mobile Apps', 'Field Testing'],
    results: ['Eliminated ground bottlenecks', '100% cloud distribution sync', 'Real-time field transparency'],
    gradient: 'from-[#032d60] to-[#1a56db]',
    icon: '📱',
  },
  {
    title: 'Claim Management Module Digitization',
    description:
      'Digitized and optimized the core claim processing cycles, removing slow manual reconciliation risks to streamline corporate financial settlements.',
    technologies: ['Process Automation', 'Financial Auditing', 'Module Design'],
    results: ['Manual errors removed', 'Faster distributor settlement', 'Full financial accountability'],
    gradient: 'from-purple-600 to-purple-800',
    icon: '🔄',
  },
  {
    title: 'Credit Management & Approval Workflow',
    description:
      'Engineered an automated credit monitoring and verification system to evaluate outstanding balances and dynamically manage risk limits across the distribution channels.',
    technologies: ['Risk Controls', 'Approval Routing', 'Data Structuring'],
    results: ['Minimized bad debt risks', 'Automated limit updates', 'Optimized approval time'],
    gradient: 'from-emerald-600 to-emerald-800',
    icon: '🛡️',
  },
  {
    title: 'Infrastructure & Database Route Mapping',
    description:
      'Spearheaded the redesign and dynamic routing of master data setups, mapping territory configurations and outlets for maximized market coverage.',
    technologies: ['Master Data Management', 'Route Mapping', 'Inventory Sync'],
    results: ['Seamless sales coverage', '100% outlet trace accuracy', 'Structured warehouse matching'],
    gradient: 'from-orange-600 to-orange-800',
    icon: '🌐',
  },
  {
    title: 'Ecosystem Change Management & Training',
    description:
      'Led massive onboarding initiatives across multiple corporate hierarchies (RSD, ASD, TM, SO, and Distributors) ensuring 100% alignment and application compliance.',
    technologies: ['Change Management', 'User Adoption', 'Field Quality Assurance'],
    results: ['98%+ user system adoption', 'High platform compliance', 'Frictionless tech onboarding'],
    gradient: 'from-teal-600 to-teal-800',
    icon: '👥',
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Real-world enterprise solutions delivering measurable impact across the Remark Sales Automation infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Visual header */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300 select-none">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 text-white/40 text-xs font-mono">
                  #{String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content Wrapper to push button to the bottom evenly */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-extrabold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies / Tools Used */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-[11px] font-medium border border-blue-100/60 dark:border-blue-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Operational Results / Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Button */}
                <button className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold hover:gap-2.5 transition-all w-fit mt-auto group-hover:underline">
                  View Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
