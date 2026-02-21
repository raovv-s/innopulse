import React, { useState } from 'react';
import { Search, Plus, Rocket, X } from 'lucide-react';

export default function StartupList({ startups, onSelect, onAdd }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const filtered = startups.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    onAdd({
      id: Date.now(),
      name: fd.get('name'),
      sector: fd.get('sector'),
      description: fd.get('desc'),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
      score: 0,
      history: [0,0,0,0,0],
      insight: "Analiz gözlənilir."
    });
    setModal(false);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Startups</h2>
        <button onClick={() => setModal(true)} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold shadow-sm hover:bg-blue-700 transition">
          <Plus size={18}/> Add Startup
        </button>
      </div>

      <div className="relative mb-8 max-w-md">
        <Search className="absolute left-3 top-2.5 text-slate-400" size={18}/>
        <input 
          placeholder="Search for projects..." 
          className="w-full bg-white border border-slate-200 p-2.5 pl-10 rounded-xl outline-none focus:border-blue-500 transition"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(s => (
          <div key={s.id} onClick={() => onSelect(s)} className="bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group">
            <div className="h-44 overflow-hidden">
              <img src={s.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded uppercase tracking-wider">{s.sector}</span>
                <span className="text-xs font-semibold text-blue-600">Score: {s.score}%</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{s.name}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 italic leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
            <button type="button" onClick={() => setModal(false)} className="absolute top-4 right-4"><X/></button>
            <h3 className="text-xl font-bold mb-6">Create New Project</h3>
            <div className="space-y-4">
              <input name="name" placeholder="Startup Name" className="w-full border p-3 rounded-xl outline-none" required />
              <input name="sector" placeholder="Sector" className="w-full border p-3 rounded-xl outline-none" required />
              <textarea name="desc" placeholder="Brief Description" className="w-full border p-3 rounded-xl outline-none" required />
              <button type="submit" className="w-full bg-blue-600 text-white p-3.5 rounded-xl font-bold">Register to Ecosystem</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}