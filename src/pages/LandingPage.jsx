import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Bell, 
  MapPin, 
  ShieldCheck, 
  FileText,
  ChevronRight,
  Shield,
  Zap
} from 'lucide-react';
import { Button, Card } from '../components/UI';

const features = [
  {
    title: 'Household Welfare Profiling',
    description: 'Create individual and family profiles to find multi-level benefits.',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    title: 'AI Scheme Recommendation',
    description: 'Our engine finds schemes matching your exact demographics.',
    icon: Zap,
    color: 'bg-yellow-500'
  },
  {
    title: 'WhatsApp Notifications',
    description: 'Get real-time alerts for new schemes and deadlines on your phone.',
    icon: Bell,
    color: 'bg-green-500'
  },
  {
    title: 'Local Service Locator',
    description: 'Find the nearest Taluk, CSC, or Agriculture office on the map.',
    icon: MapPin,
    color: 'bg-red-500'
  },
  {
    title: 'Nodal Officer Guidance',
    description: 'Direct contact details for officers in charge of specific schemes.',
    icon: ShieldCheck,
    color: 'bg-purple-500'
  },
  {
    title: 'Smart Document Assistant',
    description: 'Know exactly what documents you need and manage them easily.',
    icon: FileText,
    color: 'bg-cyan-500'
  }
];

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-xl text-white">S</div>
          <span className="font-bold text-2xl tracking-tight text-primary">SchemeSetu</span>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/auth" className="font-medium text-slate-600 hover:text-primary transition-colors">Login</Link>
          <Link to="/auth">
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm mb-6 border border-emerald-100">
              AI-Powered Welfare Discovery
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-primary tracking-tight mb-8">
              Find Every Government Scheme <br/>
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Your Family Deserves</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
              The first AI platform that matches individuals and households with eligible 
              Central and State Government welfare schemes automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/auth">
                <Button variant="primary" className="w-full sm:w-auto text-lg py-4 px-8">
                  Check Your Eligibility <ChevronRight className="inline ml-2" size={20} />
                </Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto text-lg py-4 px-8">
                Learn More
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white"
            >
              <img src="/src/assets/hero.png" alt="SchemeSetu AI" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Schemes Available', value: '5,000+' },
            { label: 'Families Benefited', value: '1M+' },
            { label: 'AI Accuracy', value: '95%' },
            { label: 'States Covered', value: '28' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-primary mb-4">Powerful Features for Every Citizen</h2>
          <p className="text-slate-500">Everything you need to discover and apply for government welfare.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center text-white mb-6`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-slate-500">Four simple steps to unlock your family's welfare benefits.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Create Family Profile', desc: 'Enter details for yourself and your family members.' },
              { step: '02', title: 'AI Eligibility Analysis', desc: 'Our AI scans 5,000+ schemes against your profile.' },
              { step: '03', title: 'View Matched Schemes', desc: 'See schemes ranked by eligibility score with reasons.' },
              { step: '04', title: 'Apply Successfully', desc: 'Upload documents, get guidance, and track progress.' },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center relative"
              >
                <div className="text-6xl font-extrabold text-slate-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-12 text-slate-200">
                    <ChevronRight size={28} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-primary rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to secure your family's future?</h2>
            <p className="text-slate-400 text-lg mb-10">Join thousands of households identifying their eligible benefits in minutes.</p>
            <Link to="/auth">
              <Button variant="secondary" className="text-lg py-4 px-10">Get Started Now</Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-sm">S</div>
            <span className="font-bold text-lg text-primary">SchemeSetu</span>
          </div>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-primary">About</a>
            <a href="#" className="hover:text-primary">Contact</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
          <div className="text-slate-400 text-sm">
            © 2026 SchemeSetu. AI Government Scheme Assistant.
          </div>
        </div>
      </footer>
    </div>
  );
}
