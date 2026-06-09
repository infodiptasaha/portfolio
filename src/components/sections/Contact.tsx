import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// Replace YOUR_FORM_ID with your Formspree form ID after signing up at formspree.io
// e.g. https://formspree.io/f/xyzabcde
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email'
    if (!form.subject.trim()) newErrors.subject = 'Subject is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setStatusMessage("Message sent! I'll respond within 24 hours.")
        setForm({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Failed to send. Please try again or reach out via LinkedIn.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const fieldBase =
    'w-full px-4 py-3 rounded-xl border text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all text-sm'
  const fieldOk =
    'border-gray-200 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500'
  const fieldErr = 'border-red-400 dark:border-red-600 focus:ring-red-400'
  const fc = (f: keyof FormData) => `${fieldBase} ${errors[f] ? fieldErr : fieldOk}`

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'infodiptasaha@gmail.com', href: 'mailto:infodiptasaha@gmail.com' },
    { icon: Phone, label: 'Phone', value: 'Available on Request', href: '#' },
    { icon: MapPin, label: 'Location', value: 'Kuril Bishawa Road - Dhaka', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/Infodiptasaha', href: 'https://linkedin.com/in/Infodiptasaha' },
    { icon: Github, label: 'GitHub', value: 'github.com/Infodiptasaha', href: 'https://github.com/Infodiptasaha' },
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Have a Salesforce challenge? Let's talk about how automation can transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Available for freelance projects, consulting engagements, and full-time opportunities.
              Typical response time is within 24 hours on business days.
            </p>

            <div className="space-y-3 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden h-48 sf-gradient flex items-center justify-center border border-blue-100 dark:border-blue-900">
              <div className="text-center text-white">
                <MapPin size={32} className="mx-auto mb-2 opacity-80" />
                <div className="font-bold">Kuril Bishawa Road - Dhaka</div>
                <div className="text-blue-200 text-sm">Available for remote work worldwide</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    className={fc('name')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={fc('email')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={fc('subject')}
                >
                  <option value="">Select a topic...</option>
                  <option>Salesforce Automation Project</option>
                  <option>CRM Implementation</option>
                  <option>Apex Development</option>
                  <option>LWC Development</option>
                  <option>Integration Project</option>
                  <option>Consultation / Strategy</option>
                  <option>Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                  value={form.message}
                  onChange={handleChange}
                  className={fc('message')}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl mb-4">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                  <p className="text-green-700 dark:text-green-400 text-sm">{statusMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-4">
                  <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
                  <p className="text-red-700 dark:text-red-400 text-sm">{statusMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
