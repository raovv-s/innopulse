import React from 'react';

export default function StartupTable({ startups }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400 text-[10px] uppercase font-bold tracking-widest border-b border-slate-100">
            <th className="pb-4">Startup Node</th>
            <th className="pb-4">Sector</th>
            <th className="pb-4">Technical Score</th>
            <th className="pb-4 text-right">Repository</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {startups.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50 transition group">
              <td className="py-4 font-bold text-slate-800">{s.name}</td>
              <td className="py-4 text-sm text-slate-500">{s.sector}</td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: `${s.score}%` }}></div>
                  </div>
                  <span className="text-xs font-mono">{s.score}%</span>
                </div>
              </td>
              <td className="py-4 text-right text-xs font-mono text-slate-400">{s.repo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}