import React from 'react';
import { 
  ArrowLeft, Activity, Github, Calendar, Users, 
  Target, Layers, CheckCircle2, Award, Zap 
} from 'lucide-react';

export default function StartupDetail({ startup, onBack, onGoDashboard }) {
  return (
    <div className="animate-in slide-in-from-right duration-500 max-w-7xl mx-auto space-y-8 pb-20">
      
      {/* Back Button & Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition font-semibold text-sm">
          <ArrowLeft size={18}/> BACK TO ECOSYSTEM
        </button>
        <div className="flex gap-3">
          <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-600">
            <Github size={20}/>
          </button>
          <button onClick={onGoDashboard} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            <Zap size={18}/> RUN LIVE AUDIT
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1 h-80 lg:h-auto">
            <img src={startup.image} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="lg:col-span-2 p-8 lg:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                {startup.sector}
              </span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                {startup.stage}
              </span>
            </div>
            <h1 className="text-5xl font-black text-slate-800 tracking-tighter italic">
              {startup.name}
            </h1>
            <p className="text-slate-500 text-xl font-light leading-relaxed">
              {startup.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={20}/>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Founded</p>
                  <p className="font-bold text-slate-800">{startup.founded}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-blue-600" size={20}/>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Team Size</p>
                  <p className="font-bold text-slate-800">{startup.teamSize}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="text-green-500" size={20}/>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Health Score</p>
                  <p className="font-bold text-slate-800">{startup.score}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Problem & Solution */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-slate-800">
              <Target className="text-blue-600" size={24}/>
              <h3 className="text-xl font-bold">Problem & Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg italic bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600">
              "{startup.problem}"
            </p>
            
            <div className="flex items-center gap-3 text-slate-800 pt-4">
              <CheckCircle2 className="text-green-500" size={24}/>
              <h3 className="text-xl font-bold">Our Solution</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {startup.solution}
            </p>
          </div>

          {/* RoadMap Section */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Layers className="text-blue-600" size={24}/> Project Roadmap
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-slate-100">
              {startup.milestones.map((m, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition duration-300 z-10 shrink-0 md:order-1">
                    <Award size={18}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-slate-50 border border-slate-100 ml-6">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-800">{m.event}</div>
                      <time className="font-mono text-[10px] text-blue-600 uppercase">{m.date}</time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tech Stack & Insights */}
        <div className="space-y-8">
          <div className="bg-slate-900 p-8 rounded-[32px] text-white space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 italic">
              <Layers size={20} className="text-blue-400"/> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {startup.techStack.map(tech => (
                <span key={tech} className="bg-white/10 px-4 py-2 rounded-xl text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-8 rounded-[32px] space-y-4">
            <div className="flex items-center gap-2 text-blue-700 font-bold uppercase text-xs">
              <Zap size={16}/> AI Technical Verdict
            </div>
            <p className="text-blue-900 font-serif italic text-lg leading-relaxed">
              "{startup.insight}"
            </p>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm text-center space-y-4">
             <p className="text-slate-400 text-xs font-bold uppercase">Ready for Analysis?</p>
             <button onClick={onGoDashboard} className="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold hover:bg-blue-600 transition duration-300 shadow-lg shadow-slate-200">
                GOTO DASHBOARD
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}