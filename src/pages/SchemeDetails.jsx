import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  FileCheck, 
  Calendar, 
  ShieldCheck, 
  Download, 
  Upload,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { Card, Button, Badge } from '../components/UI';
import { schemes } from '../data/mockData';

export default function SchemeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scheme = schemes.find(s => s.id === id) || schemes[0];

  const handleApply = () => setShowApplyModal(true);

  const handleUpload = (doc) => {
    setUploadProgress(prev => ({ ...prev, [doc]: 0 }));
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setUploadProgress(prev => ({ ...prev, [doc]: progress }));
      if (progress >= 100) clearInterval(interval);
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowApplyModal(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-colors">
        <ArrowLeft size={20} /> Back to Search
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="blue">{scheme.category}</Badge>
                <Badge variant="green">{scheme.department}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-6">{scheme.name}</h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-8">
                {scheme.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 py-8 border-y border-slate-100">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Application Deadline</div>
                    <div className="text-lg font-bold text-slate-800 mt-1">{scheme.deadline}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Eligibility Score</div>
                    <div className="text-lg font-bold text-emerald-600 mt-1">{scheme.matchScore}% - Highly Likely</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                 <h3 className="text-2xl font-bold text-slate-800">Benefits Provided</h3>
                 <div className="flex gap-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <Info className="text-emerald-500 mt-1" size={24} />
                    <p className="text-emerald-800 font-medium leading-relaxed">{scheme.benefits}</p>
                 </div>
              </div>

              <div className="mt-12 space-y-6">
                 <h3 className="text-2xl font-bold text-slate-800">Why You Qualify</h3>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Matching Occupation: Farmer',
                      'Income Group: Below 2 Lakhs',
                      'Residency: Rural Tamil Nadu',
                      'All Identity Proofs Valid'
                    ].map(reason => (
                      <div key={reason} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white">
                        <CheckCircle2 size={20} className="text-emerald-500" />
                        <span className="font-semibold text-slate-700">{reason}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Eligibility Conditions</h3>
            <div className="space-y-6">
              {[
                { title: 'Citizenship', desc: 'Must be an Indian Citizen.', status: true },
                { title: 'Occupation', desc: 'Should be a small/marginal farmer with land records.', status: true },
                { title: 'Direct Benefit', desc: 'Must have a bank account linked with Aadhaar.', status: true },
                { title: 'Tax Payer', desc: 'Should not be an income tax payer.', status: true }
              ].map((cond, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className={`mt-1 ${cond.status ? 'text-emerald-500' : 'text-slate-300'}`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{cond.title}</h4>
                    <p className="text-slate-500 text-sm">{cond.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <Card className={`${showApplyModal ? 'ring-4 ring-primary/20 bg-slate-50' : ''}`}>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Ready to Apply?</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">1</div>
                 <span className="font-medium text-slate-700">Verify Eligibility</span>
                 <CheckCircle2 size={20} className="text-emerald-500 ml-auto" />
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">2</div>
                 <span className="font-medium text-slate-700">Upload Documents</span>
                 <div className="text-xs font-bold text-slate-400 ml-auto">{Object.keys(uploadProgress).length}/{scheme.documents.length}</div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">3</div>
                 <span className="font-medium text-slate-400">Nodal Verification</span>
              </div>
            </div>
            <Button variant="primary" className="w-full py-4 uppercase tracking-widest text-sm" onClick={handleApply}>
              Start Application
            </Button>
            <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-2 font-bold py-4">
              <Download size={20} /> Download Guide PDF
            </Button>
          </Card>

          <Card className="bg-slate-900 text-white">
            <h3 className="text-lg font-bold mb-6">Important Notes</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                 <AlertCircle size={18} className="text-orange-400 flex-shrink-0" />
                 <p className="text-sm text-slate-400">Keep your land survey number ready before filling the form.</p>
              </div>
              <div className="flex gap-3">
                 <AlertCircle size={18} className="text-orange-400 flex-shrink-0" />
                 <p className="text-sm text-slate-400">OTP will be sent to the Aadhaar-linked mobile number.</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold text-slate-800">Nodal Officer</h3>
               <Badge variant="blue">Active</Badge>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-800">Dr. Rajesh Kumar</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Agri Dept. Nodal</div>
              </div>
            </div>
            <Button variant="ghost" className="w-full text-primary font-bold border-t border-slate-50 pt-4 rounded-none">
              Contact Officer
            </Button>
          </Card>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setShowApplyModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] w-full max-w-2xl p-8 lg:p-12 relative z-10 shadow-2xl"
            >
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">Complete Your Application</h2>
                    <p className="text-slate-500 mt-2">Upload the following documents to proceed with {scheme.name}</p>
                  </div>
                  
                  <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 mb-8">
                    {scheme.documents.map((doc) => (
                      <div key={doc} className="p-4 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-between">
                         <div>
                            <div className="font-bold text-slate-700">{doc}</div>
                            <div className="text-xs text-slate-400 mt-0.5">PDF, PNG or JPG (Max 5MB)</div>
                            {uploadProgress[doc] > 0 && (
                              <div className="w-32 bg-slate-200 h-1.5 rounded-full mt-2">
                                <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${uploadProgress[doc]}%` }}></div>
                              </div>
                            )}
                         </div>
                         {uploadProgress[doc] === 100 ? (
                           <CheckCircle2 size={24} className="text-emerald-500" />
                         ) : (
                           <button onClick={() => handleUpload(doc)} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                             <Upload size={18} />
                           </button>
                         )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                    <Button 
                      variant="primary" 
                      className="flex-1 py-4 text-sm font-bold uppercase tracking-widest disabled:opacity-50"
                      disabled={Object.values(uploadProgress).filter(p => p === 100).length < scheme.documents.length}
                      onClick={handleSubmit}
                    >
                      Submit Application
                    </Button>
                    <Button variant="ghost" className="py-4 px-8" onClick={() => setShowApplyModal(false)}>Cancel</Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                   <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-8">
                     <FileCheck size={48} />
                   </div>
                   <h2 className="text-4xl font-extrabold text-slate-800 mb-4">Application Submitted!</h2>
                   <p className="text-xl text-slate-500">Your application for {scheme.name} has been sent for verification.</p>
                   <p className="text-slate-400 mt-8 font-medium">Redirecting to Dashboard...</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
