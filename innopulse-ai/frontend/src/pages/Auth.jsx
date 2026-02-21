import React, { useState } from 'react';
import { Lock, Mail, User, ArrowRight } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[24px] shadow-sm border border-slate-200">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            <span className="text-white font-black text-xl italic">iP</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>
          <p className="text-slate-500 text-sm mt-1">InnoPulse Startup Ecosystem</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
              <input type="text" placeholder="Full Name" className="w-full border border-slate-200 p-3 pl-10 rounded-xl outline-none focus:border-blue-500" required />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input type="email" placeholder="Email Address" className="w-full border border-slate-200 p-3 pl-10 rounded-xl outline-none focus:border-blue-500" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
            <input type="password" placeholder="Password" className="w-full border border-slate-200 p-3 pl-10 rounded-xl outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3.5 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
            {isLogin ? 'Sign In' : 'Sign Up'} <ArrowRight size={18}/>
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 font-semibold hover:underline">
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}