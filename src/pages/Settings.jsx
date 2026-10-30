import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Moon,
  Sun,
  Globe,
  Bell,
  User,
  Shield,
  Palette,
  Languages,
  Smartphone,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  Save
} from 'lucide-react';
import { Card, Button, Badge, Input } from '../components/UI';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
];

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your preferences and account.</p>
      </div>

      {/* Profile Section */}
      <Card>
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-primary/20">
            RK
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Ramesh Kumar</h3>
            <p className="text-slate-500">+91 98765 43210 • Coimbatore, Tamil Nadu</p>
            <Badge variant="green" className="mt-2">Profile Verified</Badge>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Full Name" defaultValue="Ramesh Kumar" />
          <Input label="Mobile Number" defaultValue="+91 98765 43210" />
          <Input label="Email (Optional)" placeholder="email@example.com" />
          <Input label="District" defaultValue="Coimbatore" />
        </div>
        <Button variant="primary" className="mt-6 flex items-center gap-2">
          <Save size={18} /> Save Changes
        </Button>
      </Card>

      {/* Appearance */}
      <Card>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
            <Palette size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Appearance</h3>
            <p className="text-sm text-slate-400">Customize the look and feel.</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-4">
            {isDarkMode ? <Moon size={22} className="text-blue-500" /> : <Sun size={22} className="text-orange-500" />}
            <div>
              <div className="font-semibold text-slate-700">Dark Mode</div>
              <div className="text-xs text-slate-400">{isDarkMode ? 'Dark theme is active' : 'Light theme is active'}</div>
            </div>
          </div>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <ToggleRight size={32} className="text-emerald-500" /> : <ToggleLeft size={32} className="text-slate-300" />}
          </button>
        </div>
      </Card>

      {/* Language */}
      <Card>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
            <Languages size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Language Preference</h3>
            <p className="text-sm text-slate-400">Choose your preferred language for the interface.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`p-4 rounded-2xl border-2 transition-all text-center ${
                selectedLang === lang.code
                  ? 'border-primary bg-primary/5'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <div className="font-bold text-slate-800">{lang.native}</div>
              <div className="text-xs text-slate-400 mt-1">{lang.name}</div>
            </button>
          ))}
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
            <Bell size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Notifications</h3>
            <p className="text-sm text-slate-400">Control how you receive alerts.</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: 'WhatsApp Notifications', desc: 'Receive scheme alerts via WhatsApp', value: whatsappEnabled, toggle: () => setWhatsappEnabled(!whatsappEnabled) },
            { label: 'Voice Input', desc: 'Enable speech-to-text for forms', value: voiceEnabled, toggle: () => setVoiceEnabled(!voiceEnabled) },
            { label: 'Text-to-Speech', desc: 'Read out scheme details aloud', value: ttsEnabled, toggle: () => setTtsEnabled(!ttsEnabled) },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <div>
                <div className="font-semibold text-slate-700">{item.label}</div>
                <div className="text-xs text-slate-400">{item.desc}</div>
              </div>
              <button onClick={item.toggle}>
                {item.value ? <ToggleRight size={32} className="text-emerald-500" /> : <ToggleLeft size={32} className="text-slate-300" />}
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Security */}
      <Card className="bg-slate-900 text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Security & Privacy</h3>
              <p className="text-sm text-slate-400">Your data is encrypted and stored securely.</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              'Aadhaar data is masked and encrypted (Demo Mode)',
              'All documents stored with AES-256 encryption',
              'Two-factor authentication enabled',
              'Data compliant with IT Act 2000 and DPDPA 2023',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </Card>
    </div>
  );
}
