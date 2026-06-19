import { Shield, Github, Twitter } from 'lucide-react'

const footerLinks = {
  pillars: [
    { label: 'Morning Architecture', href: '/guides/morning-routine' },
    { label: 'Physical Discipline', href: '/guides/physical-discipline' },
    { label: 'Mental Models', href: '/guides/mental-models' },
    { label: 'Career Weaponization', href: '/guides/career-weaponization' },
  ],
  resources: [
    { label: 'All Guides', href: '/articles' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Shield className="w-6 h-6 text-gold-400" />
              <span className="gold-gradient">STRUCTURED MAN</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Building unbreakable discipline, one system at a time. 
              For men who refuse to settle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Pillars</h4>
            <ul className="space-y-2">
              {footerLinks.pillars.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Structured Man. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/structuredman" className="text-slate-500 hover:text-gold-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/myocjade511/structuredman" className="text-slate-500 hover:text-gold-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
