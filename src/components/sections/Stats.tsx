import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  label: string
  suffix: string
  icon: string
}

const stats: Stat[] = [
  { value: 50, label: 'Projects Completed', suffix: '+', icon: '🚀' },
  { value: 200, label: 'Automations Built', suffix: '+', icon: '⚡' },
  { value: 8, label: 'Certifications Earned', suffix: '', icon: '🏆' },
  { value: 6, label: 'Years of Experience', suffix: '+', icon: '📅' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const duration = 2000
          const increment = value / (duration / 16)
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section
      className="py-16 px-4"
      style={{ background: 'linear-gradient(135deg, #032D60, #0176D3)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black mb-2 tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
