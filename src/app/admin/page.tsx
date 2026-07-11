import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#02050D] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/20 p-2 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-2xl font-black">Admin Dashboard</h1>
              <p className="text-sm text-slate-400">WRIRK Content Management System</p>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium rounded-lg border border-red-500/20 transition-colors">
            Sign Out
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0A1326] border border-white/5 rounded-xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-cyan-400 mb-2">Phase 4 Pending</h2>
            <p className="text-slate-400 text-sm">
              The full JSON editor and Token Length warning system will be implemented here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
