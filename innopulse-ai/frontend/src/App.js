import React, { useState } from 'react';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import StartupList from './pages/StartupList';
import StartupDetail from './pages/StartupDetail';
import DashboardView from './pages/DashboardView';
import { INITIAL_STARTUPS } from './api/mockData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('list'); // 'list', 'detail', 'dashboard'
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [startups, setStartups] = useState(INITIAL_STARTUPS);

  if (!isLoggedIn) return <Auth onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="flex min-h-screen bg-[#f5f7fa] text-[#313b3e]">
      {/* Vertikal Menyu */}
      <Sidebar setView={setView} onLogout={() => setIsLoggedIn(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <TopNav setView={setView} />
        
        <main className="p-6 lg:p-10 flex-1 overflow-y-auto">
          {view === 'list' && (
            <StartupList 
              startups={startups} 
              onSelect={(s) => { setSelectedStartup(s); setView('detail'); }} 
              onAdd={(newS) => setStartups([newS, ...startups])}
            />
          )}
          
          {view === 'detail' && (
            <StartupDetail 
              startup={selectedStartup} 
              onBack={() => setView('list')} 
              onGoDashboard={() => setView('dashboard')} 
            />
          )}

          {view === 'dashboard' && (
            <DashboardView 
              startups={startups}
              selectedStartup={selectedStartup}
              onSelect={setSelectedStartup}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;