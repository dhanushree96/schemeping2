import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Card, Badge, Button } from '../components/UI';
import { TrendingUp, ArrowUpRight, Shield, Download } from 'lucide-react';

const schemeData = [
  { name: 'Agriculture', value: 4 },
  { name: 'Health', value: 3 },
  { name: 'Education', value: 2 },
  { name: 'Women', value: 2 },
  { name: 'Housing', value: 1 },
];

const benefitHistory = [
  { month: 'Jan', amount: 2000 },
  { month: 'Feb', amount: 2000 },
  { month: 'Mar', amount: 5000 },
  { month: 'Apr', amount: 3500 },
  { month: 'May', amount: 4500 },
  { month: 'Jun', amount: 6000 },
];

const COLORS = ['#0F172A', '#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Analytics Overview</h1>
          <p className="text-slate-500 mt-1">Detailed breakdown of your household welfare benefits.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={18} /> Export Report
        </Button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Benefits Value', value: '₹42,500', trend: '+12%', color: 'text-emerald-500' },
          { label: 'Active Schemes', value: '5', trend: 'Stable', color: 'text-blue-500' },
          { label: 'Application Success', value: '98%', trend: '+2%', color: 'text-purple-500' },
          { label: 'Potential Savings', value: '₹1.2L', trend: '+25%', color: 'text-orange-500' },
        ].map((kpi) => (
          <Card key={kpi.label} className="p-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{kpi.label}</h4>
            <div className="flex items-end justify-between mt-3">
               <span className="text-3xl font-extrabold text-slate-800">{kpi.value}</span>
               <Badge variant={kpi.color.includes('emerald') ? 'green' : 'blue'} className="text-[10px]">{kpi.trend}</Badge>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Benefit Growth */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Benefit Acquisition</h3>
              <p className="text-sm text-slate-400">Monthly breakdown of received funds.</p>
            </div>
            <select className="bg-slate-50 border-none outline-none text-sm font-bold text-slate-500 rounded-lg px-2 py-1">
              <option>Last 6 Months</option>
              <option>Year 2025</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={benefitHistory}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Scheme Distribution */}
        <Card className="p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-8">Scheme Distribution</h3>
          <div className="h-[300px] w-full flex flex-col md:flex-row items-center gap-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={schemeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {schemeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={8} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4 w-full max-w-[200px]">
               {schemeData.map((item, i) => (
                 <div key={item.name} className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                     <span className="text-sm font-bold text-slate-600">{item.name}</span>
                   </div>
                   <span className="text-xs font-bold text-slate-400">{item.value * 10}%</span>
                 </div>
               ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Matching Success Rate */}
      <Card className="p-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-extrabold mb-4">AI Efficiency</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Our AI discovery engine has successfully matched your household with 95% accuracy compared to manual identification.
            </p>
            <Button variant="secondary">Run New Analysis</Button>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
             {[
               { label: 'Time Saved', val: '40 hrs+', icon: Shield },
               { label: 'New Schemes', val: '12 Found', icon: Shield },
               { label: 'Missed Benefits', val: '0 Reported', icon: Shield }
             ].map((item, i) => (
               <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
                  <div className="text-primary-foreground/50 mb-3 flex justify-center">
                    <item.icon size={24} className="text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{item.val}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
               </div>
             ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2"></div>
      </Card>
    </div>
  );
}
