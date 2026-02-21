import React, { useState } from 'react';
import HealthChart from '../components/HealthChart';
import StartupTable from '../components/StartupTable';
import { Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export default function DashboardView({ startups, selectedStartup, onSelect }) {
  const [analyzing, setAnalyzing] = useState(false);
  const current = selectedStartup || startups[0];

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tighter">TECHNICAL AUDIT: <span className="text-blue-600">{current.name}</span></h2>
          <p className="text-slate-500 font-mono text-sm mt-1 uppercase">Advanced AI Analysis Dashboard</p>
        </div>
        <button 
          onClick={handleAnalyze} 
          className={`bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg ${analyzing ? 'animate-pulse' : ''}`}
        >
          {analyzing ? 'AI ANALYZING CODE...' : 'RUN LIVE AUDIT'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Technical Score</span>
          <p className="text-4xl font-black mt-2 text-blue-600">{current.score}%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Health Status</span>
          <p className={`text-4xl font-black mt-2 ${current.score > 70 ? 'text-green-500' : 'text-yellow-500'}`}>
            {current.score > 70 ? 'HEALTHY' : 'NEEDS REVIEW'}
          </p>
        </div>
        <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl shadow-blue-100">
          <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">AI Insight</span>
          <p className="text-lg font-medium mt-2 italic leading-tight">"{current.insight}"</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <HealthChart history={current.history} />
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-sm">Switch Project Node</div>
          <div className="p-2">
            {startups.map(s => (
              <div 
                key={s.id} 
                onClick={() => onSelect(s)}
                className={`p-3 rounded-xl cursor-pointer transition mb-1 ${current.id === s.id ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-slate-50'}`}
              >
                {s.name} ({s.score}%)
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200">
        <h4 className="font-bold mb-4">Ecosystem Overview</h4>
        <StartupTable startups={startups} />
      </div>
    </div>
  );
}