import React from 'react';
import { LayoutGrid, PieChart, Users, LogOut, Settings, Rocket } from 'lucide-react';

export default function Sidebar({ setView, onLogout }) {
  const menuItems = [
    { name: 'Startups', icon: <Rocket size={20}/>, view: 'list' },
    { name: 'Analytics', icon: <PieChart size={20}/>, view: 'dashboard' },
    { name: 'Team', icon: <Users size={20}/>, view: 'list' },
  ];

  return (
    <aside className="w-64 bg-[#0f172a] text-slate-300 flex flex-col hidden lg:flex shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Rocket className="text-white" size={20}/>
        </div>
        <span className="text-xl font-bold text-white tracking-tighter uppercase italic">InnoPulse</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <div 
            key={item.name}
            onClick={() => setView(item.view)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-white transition cursor-pointer font-medium"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div onClick={onLogout} className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-900/20 hover:text-red-400 transition cursor-pointer font-medium">
          <LogOut size={20}/>
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}