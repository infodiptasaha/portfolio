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
    title: 'Lead Automation System',
    description:
      'End-to-end lead lifecycle automation with intelligent routing, scoring, and nurturing workflows built using Salesforce Flow and Apex triggers.',
    technologies: ['Apex', 'Flow Builder', 'Einstein AI', 'Email Studio'],
    results: ['75% faster lead response', '40% conversion increase', '10K+ leads/month automated'],
    gradient: 'from-blue-600 to-blue-800',
    icon: '🎯',
  },
  {
    title: 'Case Management Workflow Automation',
    description:
      'Intelligent case escalation, SLA tracking, and resolution workflows reducing average handle time and improving CSAT scores significantly.',
    technologies: ['Service Cloud', 'Apex', 'Omni-Channel', 'Knowledge Base'],
    results: ['60% faster resolution', '95% SLA compliance', 'CSAT improved to 4.8/5'],
    gradient: 'from-purple-600 to-purple-800',
    icon: '🎧',
  },
  {
    title: 'Salesforce-ERP Integration',
    description:
      'Bidirectional real-time integration between Salesforce and SAP ERP using REST APIs and middleware, synchronizing orders, inventory, and customer data.',
    technologies: ['REST API', 'MuleSoft', 'SOQL', 'Platform Events'],
    results: ['100% data accuracy', 'Real-time sync <2s', '$500K data errors eliminated'],
    gradient: 'from-green-600 to-green-800',
    icon: '🔗',
  },
  {
    title: 'Customer Onboarding Automation',
    description:
      'Fully automated customer onboarding journey reducing manual steps from 40 to 3, with dynamic DocuSign integration and provisioning workflows.',
    technologies: ['Flow Builder', 'DocuSign', 'LWC', 'Experience Cloud'],
    results: ['85% faster onboarding', '40→3 manual steps', '100% compliance rate'],
    gradient: 'from-orange-600 to-orange-800',
    icon: '🚀',
  },
  {
    title: 'Sales Pipeline Optimization',
    description:
      'AI-powered opportunity scoring, automated follow-up sequences, and predictive analytics dashboard helping sales teams focus on high-value deals.',
    technologies: ['Einstein Analytics', 'Apex', 'LWC', 'Reports & Dashboards'],
    results: ['30% win rate increase', '25% more pipeline visibility', '$2M additional revenue'],
    gradient: 'from-teal-600 to-teal-800',
    icon: '📈',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Real-world Salesforce solutions that delivered measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Visual header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="text-7xl relative z-10">{project.icon}</div>
                <div className="absolute top-4 right-4 text-white/60 text-xs font-mono">
                  #{String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-black text-xl text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-1 mb-5">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-3 transition-all">
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
