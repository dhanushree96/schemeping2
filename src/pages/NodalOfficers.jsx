import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Search, 
  User,
  Building2,
  ExternalLink
} from 'lucide-react';
import { Card, Button, Badge, Input } from '../components/UI';

const officersList = [
  { id: 1, name: 'Dr. Rajesh Kumar', designation: 'Nodal Officer (Agriculture)', department: 'Agriculture', phone: '+91 9988776655', office: 'District Agriculture Office, Avinashi Road', schemes: ['PM Kisan', 'PM Vishwakarma', 'State Farmer Welfare'] },
  { id: 2, name: 'Ms. Priya Sharma', designation: 'Social Welfare Officer', department: 'Social Welfare', phone: '+91 8877665544', office: 'Collectorate Complex, Block A', schemes: ['Widow Pension', 'Old Age Pension', 'Disability Pension'] },
  { id: 3, name: 'Mr. Suresh Babu', designation: 'Education Officer', department: 'Education', phone: '+91 7766554433', office: 'District Education Office, Town Hall Road', schemes: ['National Scholarship Portal', 'PMRF', 'State Merit Scholarship'] },
  { id: 4, name: 'Dr. Lakshmi Narayanan', designation: 'Chief Medical Officer', department: 'Health', phone: '+91 6655443322', office: 'District Health Centre, Civil Lines', schemes: ['Ayushman Bharat', 'State Health Insurance'] },
  { id: 5, name: 'Mr. Venkatesh Raman', designation: 'Revenue Inspector', department: 'Revenue', phone: '+91 5544332211', office: 'Revenue Department, Sub Collector Office', schemes: ['PMAY', 'Ujjwala Yojana'] },
  { id: 6, name: 'Ms. Kavitha Devi', designation: 'Employment Officer', department: 'Employment', phone: '+91 4433221100', office: 'District Employment Exchange, RS Puram', schemes: ['Mudra Loan', 'Skill India', 'NREGS'] },
];

export default function NodalOfficers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', ...new Set(officersList.map(o => o.department))];

  const filtered = officersList.filter(o => {
    const matchesDept = selectedDept === 'All' || o.department === selectedDept;
    const matchesSearch = o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.schemes.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800">Nodal Officer Guidance</h1>
        <p className="text-slate-500 mt-1">Direct contact details for scheme-specific officers.</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by officer name or scheme..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedDept === dept
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Officer Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((officer, idx) => (
          <motion.div
            key={officer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <Card className="h-full group hover:border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  {officer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{officer.name}</h4>
                  <p className="text-sm text-slate-400">{officer.designation}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Building2 size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{officer.office}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-slate-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{officer.phone}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Related Schemes</div>
                <div className="flex flex-wrap gap-2">
                  {officer.schemes.map(scheme => (
                    <Badge key={scheme} variant="blue" className="text-[10px]">{scheme}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <a href={`tel:${officer.phone}`} className="flex-1">
                  <Button variant="primary" className="w-full text-xs py-3">
                    <Phone size={14} className="inline mr-1.5" />Contact
                  </Button>
                </a>
                <Button variant="outline" className="flex-1 text-xs py-3">
                  <MapPin size={14} className="inline mr-1.5" />Office Location
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
