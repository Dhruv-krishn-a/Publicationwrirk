"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Redirect directly to admin dashboard
        router.push('/admin');
        router.refresh(); // Force a hard refresh to apply middleware state
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#02050D] flex items-center justify-center p-4 selection:bg-cyan-500/30">
      
      {/* Background aesthetics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-cyan-900/10 to-transparent"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Secure Access</h1>
          <p className="text-slate-400 mt-2 font-medium">WRIRK Content Management System</p>
        </div>

        <div className="bg-[#0A1326]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl">
          
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5 animate-[fadeIn_0.3s_ease-out]">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Admin ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#030712] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-hidden focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600"
                  placeholder="Enter ID"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#030712] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-hidden focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl py-3.5 px-4 font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(34,211,238,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Authenticate'} 
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
