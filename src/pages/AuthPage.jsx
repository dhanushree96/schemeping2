import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Input } from '../components/UI';
import { ArrowRight, Phone, Shield, User } from 'lucide-react';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    if (!showOtp) {
      setShowOtp(true);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[450px]">
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-primary items-center justify-center text-white text-2xl font-bold mb-4">S</div>
          <h1 className="text-3xl font-bold text-primary">Welcome to SchemeSetu</h1>
          <p className="text-slate-500 mt-2">Login or create an account to get started</p>
        </div>

        <Card className="p-8">
          <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
            <button
              onClick={() => { setActiveTab('login'); setShowOtp(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'login' ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => { setActiveTab('register'); setShowOtp(false); }}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'register' ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            <AnimatePresence mode="wait">
              {!showOtp ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  {activeTab === 'register' && (
                    <>
                      <Input label="Family Head Name" placeholder="Enter full name" icon={<User size={18} />} />
                      <Input label="Aadhaar Number (Demo Only)" placeholder="1234 5678 9012" />
                    </>
                  )}
                  <Input label="Mobile Number" placeholder="Enter your 10-digit number" />
                  {activeTab === 'register' && (
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="State" placeholder="e.g. Tamil Nadu" />
                      <Input label="District" placeholder="e.g. Chennai" />
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Verify Your Number</h3>
                    <p className="text-slate-500 text-sm mt-1">We've sent a code to your mobile number</p>
                  </div>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength="1"
                        className="w-12 h-14 border-2 border-slate-200 rounded-xl text-center text-xl font-bold bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                        defaultValue={i === 1 ? '1' : ''}
                      />
                    ))}
                  </div>
                  <button type="button" className="text-sm font-semibold text-primary hover:underline">Resend OTP</button>
                </motion.div>
              )}
            </AnimatePresence>

            <Button type="submit" variant="primary" className="w-full py-4 text-lg">
              {showOtp ? 'Verify & Continue' : activeTab === 'login' ? 'Login' : 'Register Now'}
              <ArrowRight className="inline ml-2" size={20} />
            </Button>
          </form>
        </Card>

        <p className="text-center text-slate-500 text-sm mt-8">
          By continuing, you agree to our <a href="#" className="text-primary font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-semibold hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
