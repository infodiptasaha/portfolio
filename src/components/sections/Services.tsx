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
    title: 'Salesforce Automation',
    description:
      'Build intelligent, scalable automation using Flow Builder, Process Builder, and Apex triggers that eliminate manual work and drive efficiency.',
    features: ['Flow Builder', 'Approval Processes', 'Scheduled Jobs', 'Trigger Automation'],
    icon: '⚡',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    title: 'CRM Implementation',
    description:
      'End-to-end Salesforce org setup and configuration tailored to your business model, from data modeling to user adoption strategies.',
    features: ['Org Setup', 'Data Migration', 'User Training', 'Change Management'],
    icon: '☁️',
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    title: 'Workflow Optimization',
    description:
      'Analyze and redesign existing business processes to maximize Salesforce ROI through streamlined workflows and best practices.',
    features: ['Process Analysis', 'SLA Automation', 'Escalation Rules', 'Performance Tuning'],
    icon: '🔄',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Salesforce Integrations',
    description:
      'Seamlessly connect Salesforce with ERP systems, marketing platforms, and third-party APIs using REST/SOAP, MuleSoft, and platform events.',
    features: ['REST/SOAP APIs', 'MuleSoft', 'Platform Events', 'Webhooks'],
    icon: '🔗',
    gradient: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Custom Apex Development',
    description:
      'Develop robust, test-driven Apex code to implement complex business logic, batch processing, and custom functionality beyond standard config.',
    features: ['Apex Classes', 'Triggers', 'Batch Jobs', 'Unit Testing'],
    icon: '{ }',
    gradient: 'from-green-500 to-green-700',
  },
  {
    title: 'LWC Development',
    description:
      'Create modern, responsive Lightning Web Components that deliver rich user experiences and extend Salesforce UI capabilities.',
    features: ['Custom Components', 'UI Design', 'Community Pages', 'Mobile-First'],
    icon: '🌩️',
    gradient: 'from-orange-500 to-orange-700',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Comprehensive Salesforce services designed to transform your CRM into a competitive
            advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-3xl p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Background accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity -translate-y-1/2 translate-x-1/2`}
              />

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white text-2xl mb-6 shadow-lg`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-3 transition-all"
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
