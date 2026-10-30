import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Bell, 
  MapPin, 
  ShieldCheck, 
  FolderLock, 
  BarChart3, 
  Settings, 
  Menu,
  X,
  LogOut,
  Moon,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AIAssistant from './AIAssistant';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Family Profile', icon: Users, path: '/profile' },
  { name: 'Recommended Schemes', icon: FileText, path: '/schemes' },
  { name: 'WhatsApp Alerts', icon: Bell, path: '/alerts' },
  { name: 'Nearby Offices', icon: MapPin, path: '/offices' },
  { name: 'Nodal Officers', icon: ShieldCheck, path: '/officers' },
  { name: 'Documents', icon: FolderLock, path: '/documents' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-full bg-primary text-white z-50 overflow-hidden flex flex-col"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-bold text-lg">S</div>
                <span className="font-bold text-xl tracking-tight">SchemeSetu</span>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={toggleSidebar} className="p-1 hover:bg-slate-700 rounded-lg">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 mt-6 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-4 px-3 py-3 rounded-xl transition-all
                ${isActive ? 'bg-secondary text-white' : 'hover:bg-slate-800 text-slate-400'}
              `}
            >
              <item.icon size={22} />
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <button 
            onClick={toggleDarkMode}
            className="w-full flex items-center gap-4 px-3 py-3 rounded-xl text-slate-400 hover:bg-slate-800 transition-all"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            {isSidebarOpen && <span className="font-medium">Theme Mode</span>}
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl text-red-400 hover:bg-red-900/20 transition-all">
            <LogOut size={22} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main 
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[280px]' : 'ml-[80px]'} p-8`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <AIAssistant />
    </div>
  );
}
