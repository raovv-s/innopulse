import Sidebar from './components/Sidebar';
import StartupTable from './components/StartupTable';
import HealthChart from './components/HealthChart';
import { LayoutDashboard, Users, Zap, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar - Sol Menyu */}
      <aside className="w-64 border-r border-slate-800 p-6 space-y-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent italic">InnoPulse AI</h1>
        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-blue-400 bg-blue-500/10 p-3 rounded-lg"><LayoutDashboard size={20}/> Dashboard</div>
          <div className="flex items-center gap-3 text-slate-400 p-3 hover:bg-slate-800 rounded-lg cursor-pointer"><Users size={20}/> Startaplar</div>
          <div className="flex items-center gap-3 text-slate-400 p-3 hover:bg-slate-800 rounded-lg cursor-pointer"><Zap size={20}/> AI Insights</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Texnopark İdarəetmə Paneli</h2>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition">
            + Yeni Startap Əlavə Et
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex justify-between items-center">
            <div><p className="text-slate-400 text-sm">Ümumi Startap</p><p className="text-2xl font-bold">24</p></div>
            <Users className="text-blue-500" size={32}/>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex justify-between items-center">
            <div><p className="text-slate-400 text-sm">Orta Sağlıq Balı</p><p className="text-2xl font-bold text-green-400">72%</p></div>
            <TrendingUp className="text-green-500" size={32}/>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex justify-between items-center">
            <div><p className="text-slate-400 text-sm">Riskli Startaplar</p><p className="text-2xl font-bold text-red-400">3</p></div>
            <AlertTriangle className="text-red-500" size={32}/>
          </div>
        </div>

        {/* Chart & Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <HealthChart />
          <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-blue-400 font-bold mb-2">🤖 AI Önerisi:</h3>
            <p className="text-slate-300 italic">"EcoTrack startapının kod bazasında son 2 həftədə texniki borclanma (technical debt) 30% artıb. Təcili mentor görüşü təyin edilməlidir."</p>
          </div>
        </div>

        <StartupTable />
      </main>
    </div>
  );
}