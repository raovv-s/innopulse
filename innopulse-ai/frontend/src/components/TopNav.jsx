import React from 'react';
import { TrendingUp, AlertCircle, Trophy, Activity } from 'lucide-react';

export default function TopNav({ startups }) {
  // Bütün startapların orta balını hesablayırıq
  const avgHealth = 74; // Bu statikdir, amma backend gələndə dinamik olacaq

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 overflow-hidden font-sans">
      
      {/* SOL TƏRƏF: Ecosystem Performance Ticker (Canlı Lent) */}
      <div className="flex-1 flex items-center overflow-hidden">
        <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter z-10 shadow-lg italic">
          <Activity size={12} className="text-blue-400 animate-pulse" />
          Live Ticker
        </div>
        
        {/* Qaçan Yazı (Marquee Effect) */}
        <div className="flex gap-10 animate-marquee whitespace-nowrap px-10">
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    Finomica <span className="text-green-500">+14%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    EcoPulse IoT <span className="text-red-500">-12%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    EduVibe AI <span className="text-green-500">+7%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    MediSync <span className="text-blue-500">STABLE</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    AgroVision AI <span className="text-green-500">+9%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    CypherGuard <span className="text-green-500">+18%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    UrbanMap AI <span className="text-red-500">-4%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    LogiSmart <span className="text-green-500">+11%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    SmartShelf <span className="text-red-500">-20%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    LegalBot <span className="text-green-500">+15%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    GeneLink <span className="text-blue-500">STABLE</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    SolarEdge AI <span className="text-green-500">+22%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    FoodCycle <span className="text-red-500">-8%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    DeepScan AI <span className="text-red-500">-15%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    TalentMatch <span className="text-green-500">+10%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    SkyDrone Logistics <span className="text-green-500">+13%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    PaySwift <span className="text-blue-500">STABLE</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    AquaPure IoT <span className="text-green-500">+5%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    VoyageAI <span className="text-red-500">-30%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    GoalSense <span className="text-green-500">+6%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    MetaSphere <span className="text-green-500">+25%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    SecureVote <span className="text-blue-500">STABLE</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    OceanTrack <span className="text-green-500">+4%</span>
  </span>
  <span className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase italic">
    CleanSlate Robotics <span className="text-red-500">-10%</span>
  </span>
</div>
      </div>

      {/* SAĞ TƏRƏF: Macro Health Gauge & Risk Alerts */}
      <div className="flex items-center gap-6 shrink-0">
        
        {/* Technopark Health Score */}
        <div className="flex items-center gap-3 border-l border-slate-100 pl-6">
          <div className="flex flex-col items-end leading-none">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Technopark Health</span>
            <span className="text-lg font-black text-blue-600 italic mt-1 tracking-tighter">{avgHealth}%</span>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-slate-50 flex items-center justify-center relative shadow-inner">
             <div 
               className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow" 
               style={{ clipPath: `polygon(0 0, 100% 0, 100% ${avgHealth}%, 0 ${avgHealth}%)` }}
             ></div>
             <Trophy size={16} className="text-blue-600" />
          </div>
        </div>

        {/* Risk Radar Button */}
        <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-2xl border border-red-100 hover:bg-red-600 hover:text-white transition-all duration-300 group">
          <AlertCircle size={16} className="group-hover:animate-bounce" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] font-black uppercase">Critical Risks</span>
            <span className="text-xs font-bold">03 Startups</span>
          </div>
        </button>

        <div className="h-8 w-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition cursor-pointer">
            <TrendingUp size={16}/>
        </div>
      </div>

      {/* Lentin qaçması üçün CSS (Səhifəyə daxil edilə bilər) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }
      `}</style>
    </header>
  );
}