import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  TrendingUp, 
  FileText,
  CheckCircle2,
  AlertCircle,
  Bell
} from 'lucide-react';
import { Card, Button, Input, Badge } from '../components/UI';
import { schemes } from '../data/mockData';
import { Link } from 'react-router-dom';

const categories = ['All', 'Agriculture', 'Health', 'Education', 'Women Welfare', 'Employment', 'Housing', 'Senior Citizen'];

export default function Schemes() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = activeCategory === 'All' || scheme.category === activeCategory;
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          scheme.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-primary text-white rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
        <div className="relative z-10">
          <Badge variant="green" className="bg-emerald-500/20 text-emerald-400 border-none mb-6">AI Discovery Active</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Found 12 Schemes Matching <br/>Your Household</h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Based on your profile as a Farmer in Tamil Nadu with 3 family members, 
            these benefits are most relevant to you.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
             type="text"
             placeholder="Search schemes, departments..."
             className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
          {categories.map(cat => (
            <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                 activeCategory === cat 
                   ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                   : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
               }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Scheme Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredSchemes.map((scheme) => (
            <motion.div
              key={scheme.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col group hover:border-primary/20">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-800 leading-tight">{scheme.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{scheme.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-16 h-16 rounded-full border-[6px] border-emerald-500/10 flex items-center justify-center relative">
                      <span className="font-extrabold text-emerald-600 text-sm">{scheme.matchScore}%</span>
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="6" strokeDasharray="163" strokeDashoffset={163*(1 - scheme.matchScore/100)} className="text-emerald-500" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                   <div className="flex flex-wrap gap-2">
                     <Badge variant="blue">{scheme.category}</Badge>
                     <Badge variant="green">Eligible</Badge>
                     {scheme.deadline === 'Ongoing' ? (
                       <Badge variant="orange">Always Open</Badge>
                     ) : (
                       <Badge variant="red">Ends Soon</Badge>
                     )}
                   </div>
                   
                   <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/50">
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Reason for Match</div>
                     <div className="space-y-2">
                       <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-emerald-500" />
                         <span>Identified as Farmer</span>
                       </div>
                       <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-emerald-500" />
                         <span>Annual income below ₹2,00,000</span>
                       </div>
                       <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                         <CheckCircle2 size={16} className="text-emerald-500" />
                         <span>Rural Resident in TN</span>
                       </div>
                     </div>
                   </div>

                   <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                     {scheme.description}
                   </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <Link to={`/scheme/${scheme.id}`} className="flex-1">
                    <Button variant="primary" className="w-full py-4 text-sm uppercase tracking-widest">View Details</Button>
                  </Link>
                  <Button variant="outline" className="px-4 py-4">
                    <Bell size={20} className="text-primary" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
