import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileCheck, 
  Calendar, 
  Wallet,
  ArrowUpRight,
  TrendingUp,
  Clock,
  ChevronRight,
  Bell
} from 'lucide-react';
import { Card, Badge, Button } from '../components/UI';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Family Members', value: '4', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Eligible Schemes', value: '12', icon: FileCheck, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { label: 'Deadlines (June)', value: '3', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-100' },
  { label: 'Benefits Avail.', value: '₹14,500', icon: Wallet, color: 'text-purple-600', bg: 'bg-purple-100' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">Hello, Ramesh Kumar 👋</h1>
          <p className="text-slate-500 mt-1 text-lg">Your household is currently eligible for 12 schemes.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <div className="text-sm font-bold text-slate-700">Profile Completion</div>
            <div className="text-xs text-slate-400">85% Complete</div>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative">
            <span className="font-bold text-emerald-600">85%</span>
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="32" cy="32" r="28" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="175" strokeDashoffset="26" className="text-emerald-500" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <TrendingUp size={14} />
              <span>+12.5% from last month</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-slate-50 rounded-full group-hover:scale-110 transition-transform"></div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800">Recommended for Your Family</h3>
              <Link to="/schemes">
                <Button variant="ghost" className="text-sm font-bold text-primary">View All</Button>
              </Link>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { 
                  name: 'PM Kisan Samman Nidhi', 
                  department: 'Agriculture', 
                  match: '95%', 
                  benefit: '₹6,000/yr',
                  reason: 'Eligible for: Ramesh (Head)'
                },
                { 
                  name: 'Ayushman Bharat', 
                  department: 'Health', 
                  match: '88%', 
                  benefit: '₹5L Cover',
                  reason: 'Eligible for: Entire Family'
                },
                { 
                  name: 'National Scholarship', 
                  department: 'Education', 
                  match: '92%', 
                  benefit: 'Tuition Fee',
                  reason: 'Eligible for: Aruna (Daughter)'
                }
              ].map((scheme, i) => (
                <div key={i} className="p-6 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <FileCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">{scheme.name}</h4>
                        <p className="text-slate-400 text-sm mt-0.5">{scheme.department} • {scheme.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={i === 0 ? 'green' : 'blue'}>{scheme.match} Match</Badge>
                      <div className="text-sm font-bold text-slate-700 mt-2">{scheme.benefit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-lg font-bold text-slate-800 mb-6">Application Status</h3>
              <div className="space-y-6">
                {[
                  { name: 'Widow Pension', status: 'Approved', color: 'bg-emerald-500' },
                  { name: 'Ujjwala Yojana', status: 'Pending', color: 'bg-orange-500' },
                  { name: 'Mudra Loan', status: 'Under Review', color: 'bg-blue-500' }
                ].map((app) => (
                  <div key={app.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${app.color}`}></div>
                      <span className="font-medium text-slate-700">{app.name}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{app.status}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-8 text-sm">Track All Applications</Button>
            </Card>

            <Card className="bg-primary text-white">
              <h3 className="text-lg font-bold mb-4">WhatsApp Alerts</h3>
              <p className="text-slate-400 text-sm mb-6">Get 12 new eligible scheme alerts directly on your WhatsApp number.</p>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                <div className="flex items-center gap-3 mb-2 text-emerald-400 font-bold text-sm">
                  <Badge variant="green" className="bg-emerald-500/20 text-emerald-400 border-none">Active</Badge>
                  <span>98765 43210</span>
                </div>
                <p className="text-xs text-slate-400">Connected since Oct 2025</p>
              </div>
              <Button variant="secondary" className="w-full text-sm">Configure Alerts</Button>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-800">Recent Alerts</h3>
              <Bell size={18} className="text-slate-400" />
            </div>
            <div className="space-y-6">
              {[
                { title: 'New Scholarship Found', time: '2h ago', icon: Clock },
                { title: 'PM Kisan Deadline', time: '5h ago', icon: Calendar },
                { title: 'Doc Renew Required', time: '1d ago', icon: FileCheck }
              ].map((alert, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <alert.icon size={16} className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">{alert.title}</div>
                    <div className="text-xs text-slate-400">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-sm">View Timeline</Button>
          </Card>

          <Card className="bg-slate-900 border-slate-800 relative overflow-hidden group">
             <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Document Assistant</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                4 out of 5 mandatory documents ready. Renew your Income Certificate to apply for 3 more schemes.
              </p>
              <Button variant="secondary" className="w-full text-sm">Generate Checklist</Button>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Service Centers</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer">
                <div className="font-bold text-slate-800 text-sm">VAO Office - Ward 12</div>
                <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
                  <span>1.2km away</span>
                  <span className="text-emerald-500 font-bold">Open</span>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer">
                <div className="font-bold text-slate-800 text-sm">Taluk Office - City Center</div>
                <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
                  <span>2.5km away</span>
                  <span className="text-emerald-500 font-bold">Open</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 text-sm">View Map</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
