import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Clock,
  Download,
  Eye,
  Trash2,
  FolderOpen,
  Shield
} from 'lucide-react';
import { Card, Button, Badge } from '../components/UI';

const documents = [
  { id: 1, name: 'Aadhaar Card', status: 'available', uploaded: '2025-09-15', expires: null, file: 'aadhaar_card.pdf', size: '1.2 MB', schemes: 5 },
  { id: 2, name: 'Income Certificate', status: 'expired', uploaded: '2024-12-01', expires: '2025-12-01', file: 'income_cert.pdf', size: '0.8 MB', schemes: 4 },
  { id: 3, name: 'Community Certificate', status: 'available', uploaded: '2025-06-20', expires: '2027-06-20', file: 'community_cert.pdf', size: '0.5 MB', schemes: 3 },
  { id: 4, name: 'Ration Card', status: 'available', uploaded: '2025-01-10', expires: null, file: 'ration_card.pdf', size: '1.5 MB', schemes: 3 },
  { id: 5, name: 'Farmer Certificate', status: 'missing', uploaded: null, expires: null, file: null, size: null, schemes: 2 },
  { id: 6, name: 'Bank Passbook', status: 'available', uploaded: '2025-08-01', expires: null, file: 'bank_passbook.pdf', size: '0.9 MB', schemes: 4 },
  { id: 7, name: 'Disability Certificate', status: 'missing', uploaded: null, expires: null, file: null, size: null, schemes: 1 },
  { id: 8, name: 'Educational Certificate', status: 'needs_renewal', uploaded: '2024-03-15', expires: '2025-03-15', file: 'edu_cert.pdf', size: '0.6 MB', schemes: 2 },
];

const statusConfig = {
  available: { label: 'Available', color: 'green', icon: CheckCircle2 },
  missing: { label: 'Missing', color: 'red', icon: AlertCircle },
  expired: { label: 'Expired', color: 'orange', icon: AlertTriangle },
  needs_renewal: { label: 'Needs Renewal', color: 'orange', icon: Clock },
};

export default function Documents() {
  const [filter, setFilter] = useState('all');

  const ready = documents.filter(d => d.status === 'available').length;
  const total = documents.length;
  const filters = ['all', 'available', 'missing', 'expired', 'needs_renewal'];

  const filtered = filter === 'all' ? documents : documents.filter(d => d.status === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">Smart Document Assistant</h1>
          <p className="text-slate-500 mt-1">Manage all documents required for your scheme applications.</p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <Download size={18} /> Generate Checklist PDF
        </Button>
      </div>

      {/* Progress Banner */}
      <Card className="bg-gradient-to-r from-primary to-slate-800 text-white p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Documents Ready: {ready} / {total}</h3>
            <p className="text-slate-400 max-w-md">Upload missing documents to unlock more scheme applications.</p>
            <div className="w-full max-w-md bg-white/10 h-3 rounded-full mt-4">
              <div className="bg-emerald-400 h-full rounded-full transition-all" style={{ width: `${(ready / total) * 100}%` }}></div>
            </div>
          </div>
          <div className="flex items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-extrabold text-emerald-400">{ready}</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Ready</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-red-400">{documents.filter(d => d.status === 'missing').length}</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Missing</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-orange-400">{documents.filter(d => d.status === 'expired' || d.status === 'needs_renewal').length}</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Expiring</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </Card>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm capitalize whitespace-nowrap transition-all ${
              filter === f
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            {f === 'all' ? 'All Documents' : f.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Document Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((doc, idx) => {
          const config = statusConfig[doc.status];
          const StatusIcon = config.icon;
          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
            >
              <Card className="group hover:border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{doc.name}</h4>
                      {doc.uploaded && (
                        <p className="text-xs text-slate-400 mt-0.5">Uploaded: {doc.uploaded} • {doc.size}</p>
                      )}
                    </div>
                  </div>
                  <Badge variant={config.color}>
                    <StatusIcon size={12} className="inline mr-1" />{config.label}
                  </Badge>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500">
                    Required for {doc.schemes} scheme{doc.schemes > 1 ? 's' : ''}
                  </span>
                  {doc.expires && (
                    <span className="text-xs text-orange-500 font-bold">Expires: {doc.expires}</span>
                  )}
                </div>

                <div className="flex gap-3">
                  {doc.status === 'missing' ? (
                    <Button variant="secondary" className="flex-1 text-xs py-3">
                      <Upload size={14} className="inline mr-1.5" />Upload Now
                    </Button>
                  ) : doc.status === 'expired' || doc.status === 'needs_renewal' ? (
                    <>
                      <Button variant="primary" className="flex-1 text-xs py-3">
                        <Upload size={14} className="inline mr-1.5" />Re-upload
                      </Button>
                      <Button variant="outline" className="text-xs py-3 px-4">
                        <Eye size={14} />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="flex-1 text-xs py-3">
                        <Eye size={14} className="inline mr-1.5" />View
                      </Button>
                      <Button variant="outline" className="text-xs py-3 px-4">
                        <Download size={14} />
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Scheme-based Suggestion */}
      <Card className="bg-slate-900 text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-6">
            <Shield size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Document Suggestions Based on Schemes</h3>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { scheme: 'PM Kisan', doc: 'Farmer Certificate', status: 'Missing' },
              { scheme: 'National Scholarship', doc: 'Educational Certificate', status: 'Needs Renewal' },
              { scheme: 'Disability Pension', doc: 'Disability Certificate', status: 'Missing' },
            ].map((item) => (
              <div key={item.scheme} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="font-bold text-sm text-white mb-1">{item.scheme}</div>
                <div className="text-xs text-slate-400 mb-3">Requires: {item.doc}</div>
                <Badge variant="red" className="text-[10px]">{item.status}</Badge>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2"></div>
      </Card>
    </div>
  );
}
