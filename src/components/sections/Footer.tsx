import { Cloud, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Infodiptasaha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/Infodiptasaha', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:infodiptasaha@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <Cloud size={24} className="text-blue-400" />
              Dipta Saha
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Salesforce Automation Developer specializing in building intelligent CRM solutions,
              process automation, and enterprise integrations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-xl bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
              Ready to Start?
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Have a Salesforce project in mind? Let's connect and discuss how we can work together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all hover:shadow-lg"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Dipta Saha. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
