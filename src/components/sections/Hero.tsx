import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0176D3 50%, #1B96FF 100%)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, #1B96FF, transparent)',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute bottom-32 right-16 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, #00A1E0, transparent)',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5 animate-float"
          style={{
            background: 'radial-gradient(circle, white, transparent)',
            animationDelay: '4s',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Floating cloud shape */}
        <div
          className="absolute top-24 right-16 opacity-15 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <svg width="80" height="60" viewBox="0 0 100 75" fill="white">
            <ellipse cx="50" cy="55" rx="45" ry="20" />
            <circle cx="30" cy="45" r="20" />
            <circle cx="55" cy="38" r="26" />
            <circle cx="75" cy="45" r="18" />
          </svg>
        </div>
        <div
          className="absolute bottom-40 left-20 opacity-10 animate-float"
          style={{ animationDelay: '3s' }}
        >
          <svg width="60" height="45" viewBox="0 0 100 75" fill="white">
            <ellipse cx="50" cy="55" rx="45" ry="20" />
            <circle cx="30" cy="45" r="20" />
            <circle cx="55" cy="38" r="26" />
            <circle cx="75" cy="45" r="18" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 text-center text-white">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Salesforce Projects
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight tracking-tight">
          Dipta{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #a8d4ff, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Saha
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-blue-100 tracking-wide">
          Salesforce Automation Developer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base md:text-xl text-blue-100/90 mb-10 leading-relaxed">
          Architecting intelligent Salesforce solutions with{' '}
          <strong className="text-white">Apex</strong>,{' '}
          <strong className="text-white">Flow Builder</strong>, and{' '}
          <strong className="text-white">Lightning Web Components</strong>. I transform complex
          business processes into elegant CRM automation that drives measurable growth and
          system integrations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1 active:translate-y-0"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/Infodiptasaha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/Infodiptasaha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors animate-bounce"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}
