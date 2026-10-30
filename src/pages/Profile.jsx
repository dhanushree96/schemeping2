import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Users, 
  Plus, 
  Trash2, 
  Edit2, 
  ChevronRight,
  Shield,
  MapPin,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Card, Button, Input, Badge } from '../components/UI';

const relationshipTypes = ['Spouse', 'Son', 'Daughter', 'Father', 'Mother', 'Brother', 'Sister'];
const categories = ['General', 'OBC', 'SC', 'ST'];
const occupations = ['Farmer', 'Labourer', 'Weaver', 'Govt Employee', 'Private Employee', 'Self Employed', 'Student', 'Unemployed'];

export default function Profile() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Sita Devi', age: 38, gender: 'Female', relationship: 'Spouse', occupation: 'Self Employed', income: '30,000' },
    { id: 2, name: 'Aruna', age: 19, gender: 'Female', relationship: 'Daughter', occupation: 'Student', income: '0' },
    { id: 3, name: 'Rahul', age: 14, gender: 'Male', relationship: 'Son', occupation: 'Student', income: '0' },
  ]);

  const [isAddingMode, setIsAddingMode] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-slate-800">Family Profile</h1>
        <Button 
          variant="secondary" 
          onClick={() => setIsAddingMode(true)}
          className="flex items-center gap-2"
        >
          <Plus size={20} /> Add Family Member
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Head Profile */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <div className="text-center pb-8 border-b border-slate-100">
              <div className="w-24 h-24 rounded-3xl bg-primary mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-xl shadow-primary/20">
                RK
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Ramesh Kumar</h2>
              <p className="text-slate-500 font-medium">Household Head • 42 Years</p>
              <Badge variant="green" className="mt-4">Profile Verified</Badge>
            </div>

            <div className="py-8 space-y-6">
               <div className="flex gap-4">
                 <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400">
                   <Shield size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Aadhaar Number</div>
                   <div className="font-bold text-slate-700 mt-0.5">**** **** 9012</div>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</div>
                   <div className="font-bold text-slate-700 mt-0.5">Rural, Coimbatore, TN</div>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400">
                   <Briefcase size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Occupation</div>
                   <div className="font-bold text-slate-700 mt-0.5">Farmer</div>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400">
                   <GraduationCap size={20} />
                 </div>
                 <div>
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Education</div>
                   <div className="font-bold text-slate-700 mt-0.5">Higher Secondary</div>
                 </div>
               </div>
            </div>
            
            <Button variant="outline" className="w-full font-bold">Edit Profile Details</Button>
          </Card>
        </div>

        {/* Family Members List */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence>
            {isAddingMode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <Card className="border-2 border-emerald-500/20 bg-emerald-50/20">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-slate-800">Add New Member</h3>
                    <button onClick={() => setIsAddingMode(false)} className="text-slate-400 hover:text-red-500">
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input label="Full Name" placeholder="e.g. Sita Devi" />
                    <Input label="Age" type="number" />
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Relationship</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all focus:ring-2 focus:ring-primary/10 focus:border-primary">
                        {relationshipTypes.map(r => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Occupation</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all focus:ring-2 focus:ring-primary/10 focus:border-primary">
                        {occupations.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <Input label="Annual Income" placeholder="₹ 0" />
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Caste Category</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all focus:ring-2 focus:ring-primary/10 focus:border-primary">
                        {categories.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Button variant="secondary" onClick={() => setIsAddingMode(false)}>Save Member & Continue</Button>
                    <Button variant="ghost" onClick={() => setIsAddingMode(false)}>Cancel</Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          <Card className="p-0 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <h3 className="text-xl font-bold text-slate-800">Family Members</h3>
              <Badge variant="blue">{members.length} Members Added</Badge>
            </div>
            <div className="divide-y divide-slate-50">
              {members.map((member) => (
                <div key={member.id} className="p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <User size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg uppercase tracking-tight">{member.name}</h4>
                        <div className="flex items-center gap-3 text-slate-400 text-sm mt-1">
                          <span>{member.relationship}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>{member.age} Yrs</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>{member.occupation}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-primary/10 hover:text-primary">
                        <Edit2 size={18} />
                      </button>
                      <button 
                        className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500"
                        onClick={() => setMembers(members.filter(m => m.id !== member.id))}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8">
             <div className="flex items-start justify-between">
               <div>
                 <h3 className="text-2xl font-bold mb-3">Health Profile Status</h3>
                 <p className="text-blue-100 max-w-md">Your family profile is 92% complete for Ayushman Bharat eligibility analysis.</p>
                 <div className="w-full bg-white/20 h-2.5 rounded-full mt-6">
                   <div className="bg-emerald-400 h-full rounded-full" style={{ width: '92%' }}></div>
                 </div>
               </div>
               <div className="hidden sm:block">
                 <Shield className="w-20 h-20 text-white/20" />
               </div>
             </div>
             <Button variant="secondary" className="mt-8">Complete Health Analysis</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
