import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Navigation, 
  ExternalLink, 
  Search,
  Building2,
  Landmark,
  Clock
} from 'lucide-react';
import { Card, Button, Badge, Input } from '../components/UI';

const officeTypes = ['All', 'District Collector Office', 'Taluk Office', 'CSC Center', 'Agriculture Office', 'Social Welfare Office', 'Revenue Department'];

const offices = [
  { id: 1, name: 'District Collector Office', type: 'District Collector Office', address: 'Civil Lines, Near Govt Hospital, District HQ, Coimbatore', contact: '+91 0422 2301200', distance: '2.5 km', hours: '9:30 AM - 5:30 PM', status: 'Open', lat: 11.0168, lng: 76.9558 },
  { id: 2, name: 'Taluk Revenue Office - Coimbatore South', type: 'Taluk Office', address: 'Main Road, RS Puram, Coimbatore 641002', contact: '+91 0422 2541000', distance: '1.2 km', hours: '10:00 AM - 5:00 PM', status: 'Open', lat: 11.0050, lng: 76.9480 },
  { id: 3, name: 'Common Service Center (CSC)', type: 'CSC Center', address: 'Market Square, Ward 5, Ganapathy, Coimbatore', contact: '+91 9876543210', distance: '0.5 km', hours: '9:00 AM - 7:00 PM', status: 'Open', lat: 11.0280, lng: 76.9600 },
  { id: 4, name: 'District Agriculture Office', type: 'Agriculture Office', address: 'Agriculture Complex, Avinashi Road, Coimbatore', contact: '+91 0422 2445500', distance: '3.8 km', hours: '10:00 AM - 5:00 PM', status: 'Open', lat: 11.0250, lng: 76.9800 },
  { id: 5, name: 'Social Welfare Department Office', type: 'Social Welfare Office', address: 'Collectorate Complex, Coimbatore 641018', contact: '+91 0422 2300300', distance: '2.7 km', hours: '10:00 AM - 5:00 PM', status: 'Closed', lat: 11.0170, lng: 76.9550 },
  { id: 6, name: 'Revenue Department - Sub Registrar', type: 'Revenue Department', address: 'Town Hall Road, Coimbatore 641001', contact: '+91 0422 2390100', distance: '1.8 km', hours: '10:00 AM - 4:30 PM', status: 'Open', lat: 11.0010, lng: 76.9620 },
];

export default function NearbyOffices() {
  const [activeType, setActiveType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = offices.filter(o => {
    const matchesType = activeType === 'All' || o.type === activeType;
    const matchesSearch = o.name.toLowerCase().includes(searchQuery.toLowerCase()) || o.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800">Nearby Government Offices</h1>
        <p className="text-slate-500 mt-1">Find service centers relevant to your eligible schemes.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Map placeholder */}
          <Card className="p-0 overflow-hidden h-[400px] relative bg-slate-100">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-100 flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
                <MapPin size={48} className="text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-700 mb-1">Interactive Map View</h3>
                <p className="text-slate-500 text-sm max-w-sm">Connect your Google Maps API key in Settings to enable full map integration.</p>
              </div>
              {/* Simulated map pins */}
              <div className="absolute top-[30%] left-[25%] w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="absolute top-[45%] left-[60%] w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="absolute top-[60%] left-[40%] w-8 h-8 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              </div>
            </div>
          </Card>

          {/* Filter chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {officeTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  activeType === type
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Office Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map((office, idx) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full group hover:border-primary/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <Landmark size={24} />
                    </div>
                    <Badge variant={office.status === 'Open' ? 'green' : 'red'}>
                      {office.status}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">{office.name}</h4>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{office.address}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                    <span className="flex items-center gap-1 font-bold"><MapPin size={12} />{office.distance}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{office.hours}</span>
                  </div>
                  <div className="flex gap-3">
                    <a href={`tel:${office.contact}`} className="flex-1">
                      <Button variant="primary" className="w-full text-xs py-3">
                        <Phone size={14} className="inline mr-1" /> Call Now
                      </Button>
                    </a>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full text-xs py-3">
                        <Navigation size={14} className="inline mr-1" /> Directions
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Search Sidebar */}
        <div className="space-y-8">
          <Card>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Search Offices</h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by name or area..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </Card>

          <Card className="bg-primary text-white">
            <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Offices Near You</span>
                <span className="font-extrabold text-2xl">{offices.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Currently Open</span>
                <span className="font-extrabold text-2xl text-emerald-400">{offices.filter(o => o.status === 'Open').length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Nearest Office</span>
                <span className="font-bold text-sm text-emerald-400">0.5 km</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Need Help?</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Not sure which office to visit? Our AI can recommend the right office based on the scheme you want to apply for.
            </p>
            <Button variant="secondary" className="w-full">Ask AI Assistant</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
