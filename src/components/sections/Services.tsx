import { ArrowRight } from 'lucide-react'

interface Service {
  title: string
  description: string
  features: string[]
  icon: string
  gradient: string
}

const services: Service[] = [
  {
    title: 'Sales Automation (SFA)',
    description:
      'Designing and deploying smart field sales automation engines to optimize execution frameworks and replace slow manual ground methods.',
    features: ['SFA Tooling', 'Field Compliance', 'Secondary App Sync', 'Activity Tracking'],
    icon: '⚡',
    gradient: 'from-[#032d60] to-[#1a56db]',
  },
  {
    title: 'DMS Product Architecture',
    description:
      'Structuring end-to-end Distribution Management Systems to link software developers seamlessly with field operations for perfect supply chain tracking.',
    features: ['Module Design', 'UAT & Deployment', 'Ecosystem Integration', 'Feature Evolution'],
    icon: '📱',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Process Digitization',
    description:
      'Transforming outdated operational workflows into scalable corporate digital modules to achieve absolute operational transparency.',
    features: ['Claim Processing', 'Reverse Logistics', 'Market Returns', 'Workflow Auditing'],
    icon: '🔄',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Financial Risk Controls',
    description:
      'Engineering structural credit and data safeguards across channels to manage outstanding metrics and secure distributor pipelines.',
    features: ['Credit Limit Control', 'Approval Routing', 'Risk Optimization', 'Balance Monitoring'],
    icon: '🛡️',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Infrastructure & Data Management',
    description:
      'Designing robust database setups, dynamic territory route configurations, and outlet mappings to secure 100% marketplace coverage.',
    features: ['Master Data Management', 'Route Mapping', 'DB Architecture', 'Warehouse Sync'],
    icon: '🌐',
    gradient: 'from-orange-500 to-orange-700',
  },
  {
    title: 'Change Management & Enablement',
    description:
      'Driving high-velocity ecosystem adoption across corporate hierarchies through technical onboarding frameworks and field monitoring.',
    features: ['User Onboarding', 'Hierarchy Training', 'User Access Control', 'QA Field Visits'],
    icon: '👥',
    gradient: 'from-teal-500 to-teal-700',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            My <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Comprehensive Sales Automation and Distribution Management services engineered to transform field operations into real business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
            >
              {/* Background accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2`}
              />

              <div>
                {/* Service Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white text-2xl mb-6 shadow-lg select-none group-hover:scale-105 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="px-2 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 rounded-md text-[11px] text-gray-700 dark:text-gray-300 font-semibold"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Call Button */}
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-bold hover:gap-2.5 transition-all w-fit group-hover:underline"
              >
                Get Started <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
