import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  MessageCircle, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Users,
  ToggleLeft,
  ToggleRight,
  Send
} from 'lucide-react';
import { Card, Button, Badge, Input } from '../components/UI';

const notifications = [
  { id: 1, type: 'scheme', title: 'New Eligible Scheme Found', message: 'Your daughter Aruna is eligible for National Scholarship Portal (NSP).', time: '2 hours ago', color: 'bg-emerald-500', icon: CheckCircle2 },
  { id: 2, type: 'deadline', title: 'PM Kisan Deadline Approaching', message: 'PM Kisan application closes in 5 days. Apply now to avoid missing the window.', time: '5 hours ago', color: 'bg-orange-500', icon: Clock },
  { id: 3, type: 'update', title: 'Application Status Updated', message: 'Your Widow Pension application has been approved. Benefits will be credited.', time: '1 day ago', color: 'bg-blue-500', icon: FileText },
  { id: 4, type: 'document', title: 'Document Missing', message: 'Upload your Farmer Certificate to apply for PM Vishwakarma scheme.', time: '2 days ago', color: 'bg-red-500', icon: AlertTriangle },
  { id: 5, type: 'scheme', title: 'Senior Citizen Pension', message: 'Your father is eligible for Old Age Pension Scheme. Monthly benefit: ₹1,000.', time: '3 days ago', color: 'bg-emerald-500', icon: CheckCircle2 },
  { id: 6, type: 'eligibility', title: 'Eligibility Updated', message: 'Based on updated family income, 3 new housing schemes are now available.', time: '4 days ago', color: 'bg-blue-500', icon: Users },
];

const alertPrefs = [
  { label: 'New Eligible Scheme Found', desc: 'When AI discovers new matching schemes', enabled: true },
  { label: 'Scheme Deadline Approaching', desc: 'Reminders 7, 3, and 1 day before deadlines', enabled: true },
  { label: 'Eligibility Updated', desc: 'When profile changes affect your eligibility', enabled: true },
  { label: 'Document Missing', desc: 'When a required document is not uploaded', enabled: false },
  { label: 'Application Status Updated', desc: 'Approval, rejection, or review updates', enabled: true },
  { label: 'Family Member Alerts', desc: 'Scheme alerts for each family member', enabled: true },
];

export default function WhatsAppAlerts() {
  const [prefs, setPrefs] = useState(alertPrefs);
  const [isConnected] = useState(true);

  const togglePref = (index) => {
    setPrefs(prev => prev.map((p, i) => i === index ? { ...p, enabled: !p.enabled } : p));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">WhatsApp Alerts</h1>
          <p className="text-slate-500 mt-1">Real-time welfare notifications on your mobile.</p>
        </div>
        <Badge variant={isConnected ? 'green' : 'red'} className="text-sm px-4 py-2">
          <MessageCircle size={14} className="inline mr-2" />
          {isConnected ? 'Connected to WhatsApp' : 'Not Connected'}
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Notification Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800">Notification Timeline</h3>
              <Badge variant="blue">{notifications.length} Alerts</Badge>
            </div>
            <div className="divide-y divide-slate-50">
              {notifications.map((notif, idx) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-xl ${notif.color} flex items-center justify-center text-white`}>
                        <notif.icon size={20} />
                      </div>
                      {idx < notifications.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-100"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800">{notif.title}</h4>
                        <span className="text-xs text-slate-400 font-medium">{notif.time}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{notif.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Settings Panel */}
        <div className="space-y-8">
          <Card className="bg-primary text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center">
                <Smartphone size={28} />
              </div>
              <div>
                <div className="font-bold text-lg">+91 98765 43210</div>
                <div className="text-sm text-emerald-400 font-medium">Active since Oct 2025</div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <div className="text-sm text-slate-300">Messages sent this month</div>
              <div className="text-3xl font-extrabold mt-1">24</div>
            </div>
            <Button variant="secondary" className="w-full">Send Test Message</Button>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Alert Preferences</h3>
            <div className="space-y-5">
              {prefs.map((pref, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-sm text-slate-700">{pref.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{pref.desc}</div>
                  </div>
                  <button onClick={() => togglePref(i)} className="flex-shrink-0 mt-0.5">
                    {pref.enabled ? (
                      <ToggleRight size={28} className="text-emerald-500" />
                    ) : (
                      <ToggleLeft size={28} className="text-slate-300" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
