"use client";

import React, { useState, useEffect } from 'react';
import { 
  Settings, Home, BarChart2, Shield, Users, Briefcase, 
  MessageSquare, Layout, HelpCircle, History, Save, 
  RotateCcw, AlertTriangle, Loader2, Plus, Trash2, Edit3
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['link'],
    ['clean']
  ],
};

type TabType = 'settings' | 'hero' | 'metrics' | 'whyTrustUs' | 'trustedPartner' | 'services' | 'process' | 'faqs' | 'reviews' | 'footer' | 'history';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('settings');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [historyFiles, setHistoryFiles] = useState<{filename: string, description: string}[]>([]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/content', { cache: 'no-store' });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      } else {
        setMessage({ type: 'error', text: 'Failed to load content' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Server error while loading content' });
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await fetch('/api/admin/content?action=history', { cache: 'no-store' });
      const json = await res.json();
      if (json.success) {
        setHistoryFiles(json.versions);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (activeTab === 'history') {
      fetchHistory();
    }
  }, [activeTab]);

  const handleSave = async () => {
    const description = window.prompt('Enter a short description for this version backup (e.g. "Updated Hero text"):');
    if (description === null) return; // User cancelled
    
    setSaving(true);
    setMessage({ type: '', text: '' });
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'save', payload: data, description })
      });
      const json = await res.json();
      if (json.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully (Backup created)' });
      } else {
        setMessage({ type: 'error', text: json.message });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Server error while saving' });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    }
  };

  const handleRestore = async (versionFile: string) => {
    if (!confirm('Are you sure you want to restore this version? Current changes will be overwritten.')) return;
    
    setLoading(true);
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'restore', versionFile })
      });
      const json = await res.json();
      if (json.success) {
        setMessage({ type: 'success', text: 'Version restored successfully!' });
        await fetchContent();
      } else {
        setMessage({ type: 'error', text: json.message });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Server error while restoring' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (versionFile: string) => {
    if (!confirm('Are you sure you want to delete this version? This cannot be undone.')) return;
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', versionFile })
      });
      const result = await res.json();
      if (result.success) {
        setMessage({ type: 'success', text: 'Version deleted successfully!' });
        fetchHistory(); // Refresh history list
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete version.' });
    }
  };

  const updateNestedField = (path: string[], value: string) => {
    setData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const updateArrayField = (path: string[], index: number, key: string, value: string) => {
    setData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      current[index][key] = value;
      return newData;
    });
  };

  const removeArrayItem = (path: string[], index: number) => {
    setData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      current.splice(index, 1);
      return newData;
    });
  };

  const addArrayItem = (path: string[], newItem: any) => {
    setData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];
      }
      current.push(newItem);
      return newData;
    });
  };

  const availableIcons = ["TrendingUp", "Globe", "Award", "BookOpen", "ShieldCheck", "Users", "FileCheck2", "Activity", "ArrowRight", "PenTool", "Send", "Clock", "Quote", "PhoneCall", "CheckCircle", "Star"];

  const renderIconSelect = (value: string, onChange: (val: string) => void) => (
    <div>
      <label className="block text-xs font-bold text-slate-500 mb-1">Icon</label>
      <select 
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
      >
        {availableIcons.map(icon => (
          <option key={icon} value={icon}>{icon}</option>
        ))}
      </select>
    </div>
  );

  const renderInput = (label: string, valueObj: any, path: string[], multiline = false) => {
    if (!valueObj) return null;
    
    // Safety token warning fallback (defaulting to 200 for new dynamic items if baseline is missing)
    const baseline = valueObj.baseline || 200;
    const isOverLimit = valueObj.value && valueObj.value.length > baseline * 1.5;
    
    return (
      <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <label className="block text-sm font-bold text-slate-700 mb-2">{label}</label>
        {multiline ? (
          <textarea
            value={valueObj.value || ''}
            onChange={(e) => updateNestedField([...path, 'value'], e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-cyan-500 min-h-[100px] text-slate-800 ${isOverLimit ? 'border-amber-400 focus:ring-amber-500 bg-amber-50' : 'border-slate-300'}`}
          />
        ) : (
          <input
            type="text"
            value={valueObj.value || ''}
            onChange={(e) => updateNestedField([...path, 'value'], e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-cyan-500 text-slate-800 ${isOverLimit ? 'border-amber-400 focus:ring-amber-500 bg-amber-50' : 'border-slate-300'}`}
          />
        )}
        
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Length: {valueObj.value?.length || 0} {valueObj.baseline ? ` / Baseline: ${valueObj.baseline}` : ''}
          </span>
          {isOverLimit && (
            <span className="text-amber-600 font-semibold flex items-center gap-1">
              <AlertTriangle className="w-4 h-4" /> 
              Warning: Exceeds safe length limit.
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderParagraphArray = (label: string, arrayObj: any[], path: string[]) => {
    if (!arrayObj || !Array.isArray(arrayObj)) return null;

    return (
      <div className="mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-bold text-slate-700">{label}</label>
          <button 
            onClick={() => addArrayItem(path, { value: '', baseline: 250 })}
            className="text-xs bg-cyan-100 hover:bg-cyan-200 text-cyan-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add Paragraph
          </button>
        </div>
        
        {arrayObj.map((p, idx) => {
          const baseline = p.baseline || 250;
          const isOverLimit = p.value && p.value.length > baseline * 1.5;

          return (
            <div key={idx} className="mb-4 relative group">
              <div className="absolute -left-2 top-3 w-1 h-10 bg-slate-200 rounded-full"></div>
              <div className="pl-3 relative">
                <textarea
                  value={p.value || ''}
                  onChange={(e) => updateArrayField(path, idx, 'value', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-cyan-500 min-h-[80px] text-slate-800 ${isOverLimit ? 'border-amber-400 focus:ring-amber-500 bg-amber-50' : 'border-slate-300'}`}
                  placeholder="Enter paragraph text..."
                />
                
                <div className="mt-1 flex items-center justify-between text-xs px-1">
                  <span className="text-slate-500">
                    Length: {p.value?.length || 0}
                  </span>
                  <div className="flex items-center gap-4">
                    {isOverLimit && (
                      <span className="text-amber-600 font-semibold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Exceeds length
                      </span>
                    )}
                    <button 
                      onClick={() => removeArrayItem(path, idx)}
                      className="text-red-500 hover:text-red-700 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-600" />
      </div>
    );
  }

  const tabs = [
    { id: 'settings', label: 'Global Settings', icon: Settings },
    { id: 'hero', label: 'Hero Section', icon: Home },
    { id: 'metrics', label: 'Metrics', icon: BarChart2 },
    { id: 'whyTrustUs', label: 'Why Trust Us', icon: Shield },
    { id: 'trustedPartner', label: 'Trusted Partner', icon: Users },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'process', label: 'Process', icon: Layout },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
    { id: 'footer', label: 'Footer', icon: Edit3 },
    { id: 'history', label: 'Version History', icon: History },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans">
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 h-screen sticky top-0 overflow-y-auto hidden md:flex">
        <div className="p-6">
          <h1 className="text-xl font-black text-white tracking-tight">WRIRK <span className="text-cyan-400">Admin</span></h1>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold">Content Manager</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id ? 'bg-cyan-600 text-white' : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => {
              document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              router.push('/admin/login');
            }}
            className="w-full py-2 text-sm text-slate-400 hover:text-white text-left px-4"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10 shadow-xs">
          <h2 className="text-lg font-bold text-slate-800 capitalize">
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
            {message.text && (
              <span className={`text-sm font-medium px-4 py-1.5 rounded-full ${
                message.type === 'success' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
              }`}>
                {message.text}
              </span>
            )}
            {activeTab !== 'history' && (
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors disabled:opacity-70 shadow-xs"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Changes
              </button>
            )}
          </div>
        </header>

        <div className="p-8 max-w-4xl w-full">
          {data && (
            <div className="animate-[fadeIn_0.2s_ease-out]">
              
              {activeTab === 'settings' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Global Settings</h3>
                  {renderInput('WhatsApp Number', data.globalSettings?.whatsappNumber, ['globalSettings', 'whatsappNumber'])}
                  {renderInput('Contact Email', data.globalSettings?.contactEmail, ['globalSettings', 'contactEmail'])}
                  {renderInput('SEO Title', data.globalSettings?.seoTitle, ['globalSettings', 'seoTitle'])}
                  {renderInput('SEO Description', data.globalSettings?.seoDescription, ['globalSettings', 'seoDescription'], true)}
                </div>
              )}

              {activeTab === 'hero' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Hero Section</h3>
                  {renderInput('Headline', data.hero?.headline, ['hero', 'headline'], true)}
                  {renderParagraphArray('Hero Description Paragraphs', data.hero?.description, ['hero', 'description'])}
                  {renderInput('Integrity Bold Text', data.hero?.integrityBold, ['hero', 'integrityBold'])}
                  {renderParagraphArray('Integrity Description Paragraphs', data.hero?.integrityText, ['hero', 'integrityText'])}
                  {renderInput('Primary Button', data.hero?.button1, ['hero', 'button1'])}
                  {renderInput('Secondary Button', data.hero?.button2, ['hero', 'button2'])}
                </div>
              )}

              {activeTab === 'whyTrustUs' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Why Trust Us</h3>
                  {renderInput('Heading', data.whyTrustUs?.heading, ['whyTrustUs', 'heading'])}
                  {renderInput('Quote', data.whyTrustUs?.quote, ['whyTrustUs', 'quote'], true)}

                  <div className="flex items-center justify-between mt-8 mb-4 border-b pb-2">
                    <h4 className="text-lg font-bold text-slate-800">Feature Cards</h4>
                    <button onClick={() => addArrayItem(['whyTrustUs', 'features'], { title: 'New Feature', description: 'Description here' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Card
                    </button>
                  </div>

                  {data.whyTrustUs?.features?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 mb-4 shadow-xs relative">
                      <button onClick={() => removeArrayItem(['whyTrustUs', 'features'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-4 pr-8">
                        {renderIconSelect(item.icon, (val) => updateArrayField(['whyTrustUs', 'features'], idx, 'icon', val))}
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                          <input type="text" value={item.title || ''} onChange={(e) => updateArrayField(['whyTrustUs', 'features'], idx, 'title', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                          <textarea value={item.description || ''} onChange={(e) => updateArrayField(['whyTrustUs', 'features'], idx, 'description', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden min-h-[80px]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'trustedPartner' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Trusted Partner</h3>
                  {renderInput('Heading', data.trustedPartner?.heading, ['trustedPartner', 'heading'], true)}
                  {renderInput('CTA Heading', data.trustedPartner?.ctaHeading, ['trustedPartner', 'ctaHeading'])}
                  {renderInput('CTA Text 1', data.trustedPartner?.ctaText1, ['trustedPartner', 'ctaText1'])}
                  {renderInput('CTA Text 2', data.trustedPartner?.ctaText2, ['trustedPartner', 'ctaText2'], true)}

                  <div className="flex items-center justify-between mt-8 mb-4 border-b pb-2">
                    <h4 className="text-lg font-bold text-slate-800">Feature Cards</h4>
                    <button onClick={() => addArrayItem(['trustedPartner', 'features'], { title: 'New Trust Feature', description: 'Description here' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Card
                    </button>
                  </div>

                  {data.trustedPartner?.features?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 mb-4 shadow-xs relative">
                      <button onClick={() => removeArrayItem(['trustedPartner', 'features'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-4 pr-8">
                        {renderIconSelect(item.icon, (val) => updateArrayField(['trustedPartner', 'features'], idx, 'icon', val))}
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                          <input type="text" value={item.title || ''} onChange={(e) => updateArrayField(['trustedPartner', 'features'], idx, 'title', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                          <textarea value={item.description || ''} onChange={(e) => updateArrayField(['trustedPartner', 'features'], idx, 'description', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden min-h-[80px]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'metrics' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Metrics</h3>
                    <button onClick={() => addArrayItem(['metrics'], { value: '0+', label: 'New Metric' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Metric
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.metrics?.map((item: any, idx: number) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs relative">
                        <button onClick={() => removeArrayItem(['metrics'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="space-y-3 pr-6">
                          {renderIconSelect(item.icon, (val) => updateArrayField(['metrics'], idx, 'icon', val))}
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Value (e.g. 12+)</label>
                            <input type="text" value={item.value || ''} onChange={(e) => updateArrayField(['metrics'], idx, 'value', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden font-bold" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Label</label>
                            <input type="text" value={item.label || ''} onChange={(e) => updateArrayField(['metrics'], idx, 'label', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Services</h3>
                  {renderInput('Heading', data.services?.heading, ['services', 'heading'])}
                  {renderParagraphArray('Description Paragraphs', data.services?.description, ['services', 'description'])}
                  
                  <div className="flex items-center justify-between mt-8 mb-4 border-b pb-2">
                    <h4 className="text-lg font-bold text-slate-800">Service Cards</h4>
                    <button onClick={() => addArrayItem(['services', 'cards'], { id: 'new-service', title: 'New Service', desc: 'Description here' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Service
                    </button>
                  </div>

                  {data.services?.cards?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 mb-4 shadow-xs relative">
                      <button onClick={() => removeArrayItem(['services', 'cards'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-4 pr-8">
                        {renderIconSelect(item.icon, (val) => updateArrayField(['services', 'cards'], idx, 'icon', val))}
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Service ID (no spaces)</label>
                          <input type="text" value={item.id || ''} onChange={(e) => updateArrayField(['services', 'cards'], idx, 'id', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                          <input type="text" value={item.title || ''} onChange={(e) => updateArrayField(['services', 'cards'], idx, 'title', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                          <textarea value={item.desc || ''} onChange={(e) => updateArrayField(['services', 'cards'], idx, 'desc', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden min-h-[80px]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'process' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Process</h3>
                  {renderInput('Heading', data.process?.heading, ['process', 'heading'])}
                  {renderParagraphArray('Description Paragraphs', data.process?.description, ['process', 'description'])}
                  
                  <div className="flex items-center justify-between mt-8 mb-4 border-b pb-2">
                    <h4 className="text-lg font-bold text-slate-800">Process Steps</h4>
                    <button onClick={() => addArrayItem(['process', 'steps'], { step: String((data.process?.steps?.length || 0) + 1), title: 'New Step', desc: 'Description here' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Step
                    </button>
                  </div>

                  {data.process?.steps?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 mb-4 shadow-xs relative">
                      <button onClick={() => removeArrayItem(['process', 'steps'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-4 pr-8">
                        <div className="flex gap-4">
                          <div className="w-1/4">
                            <label className="block text-xs font-bold text-slate-500 mb-1">Step #</label>
                            <input type="text" value={item.step || ''} onChange={(e) => updateArrayField(['process', 'steps'], idx, 'step', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                          </div>
                          <div className="w-3/4">
                            <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                            <input type="text" value={item.title || ''} onChange={(e) => updateArrayField(['process', 'steps'], idx, 'title', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                          <textarea value={item.desc || ''} onChange={(e) => updateArrayField(['process', 'steps'], idx, 'desc', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden min-h-[80px]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'faqs' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">FAQs</h3>
                  {renderInput('Heading', data.faqs?.heading, ['faqs', 'heading'])}
                  {renderParagraphArray('Description Paragraphs', data.faqs?.description, ['faqs', 'description'])}
                  
                  <div className="flex items-center justify-between mt-8 mb-4 border-b pb-2">
                    <h4 className="text-lg font-bold text-slate-800">FAQ Items</h4>
                    <button onClick={() => addArrayItem(['faqs', 'items'], { q: 'New Question?', a: 'Answer here.' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add FAQ
                    </button>
                  </div>

                  {data.faqs?.items?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 mb-4 shadow-xs relative">
                      <button onClick={() => removeArrayItem(['faqs', 'items'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="space-y-4 pr-8">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Question</label>
                          <input type="text" value={item.q || ''} onChange={(e) => updateArrayField(['faqs', 'items'], idx, 'q', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden font-medium text-slate-800" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Answer</label>
                          <textarea value={item.a || ''} onChange={(e) => updateArrayField(['faqs', 'items'], idx, 'a', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden min-h-[100px]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Reviews</h3>
                    <button onClick={() => addArrayItem(['reviews'], { author: 'New Author', reviewText: 'Review text here', link: '#' })} className="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-md font-bold flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add Review
                    </button>
                  </div>

                  <div className="space-y-4">
                    {data.reviews?.map((item: any, idx: number) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-6 relative">
                        <button onClick={() => removeArrayItem(['reviews'], idx)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors z-10">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="md:w-1/3 space-y-4 pt-2">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Author Name</label>
                            <input type="text" value={item.author || ''} onChange={(e) => updateArrayField(['reviews'], idx, 'author', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Review Link</label>
                            <input type="text" value={item.link || ''} onChange={(e) => updateArrayField(['reviews'], idx, 'link', e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden" />
                          </div>
                        </div>
                        <div className="md:w-2/3 pt-2">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Review Text</label>
                          <ReactQuill theme="snow" modules={quillModules} value={item.reviewText || ''} onChange={(val) => updateArrayField(['reviews'], idx, 'reviewText', val)} className="bg-white text-black mb-12" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'footer' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Footer</h3>
                  {renderParagraphArray('Footer Description Paragraphs', data.footer?.description, ['footer', 'description'])}
                  
                  <div className="mt-8 border-t pt-6">
                    <h4 className="text-lg font-bold mb-4 text-slate-700">Social Media Links</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['whatsapp', 'facebook', 'instagram', 'linkedin', 'youtube'].map(social => (
                        <div key={social} className="bg-slate-50 p-4 rounded-lg border">
                          <label className="block text-sm font-bold text-slate-700 mb-2 capitalize">{social}</label>
                          <input 
                            type="text" 
                            placeholder={`Enter ${social} URL`}
                            value={data.footer?.socials?.[social] || ''} 
                            onChange={(e) => {
                              const newData = { ...data };
                              if (!newData.footer.socials) newData.footer.socials = {};
                              newData.footer.socials[social] = e.target.value;
                              setData(newData);
                            }} 
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-hidden text-slate-800" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div>
                  <h3 className="text-xl font-bold mb-6 text-slate-800">Version History</h3>
                  <p className="text-sm text-slate-500 mb-6">Select a previous backup to restore. Your current state will be backed up before restoration.</p>
                  
                  {historyFiles.length === 0 ? (
                    <p className="text-slate-500 italic">No backups found.</p>
                  ) : (
                    <div className="space-y-3">
                      {historyFiles.map((version: any) => {
                        const isString = typeof version === 'string';
                        const file = isString ? version : version.filename;
                        const desc = isString ? 'Previous Backup' : version.description;
                        
                        if (!file) return null;

                        let timestamp = Date.now();
                        if (!isString && version.timestamp) {
                           timestamp = version.timestamp;
                        } else {
                           const parsed = parseInt(file.replace(/\D/g, ''));
                           if (!isNaN(parsed)) timestamp = parsed;
                        }

                        const dateStr = new Date(timestamp).toLocaleString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric',
                          hour: '2-digit', minute: '2-digit', second: '2-digit'
                        });

                        return (
                          <div key={file} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between hover:border-cyan-200 transition-colors">
                            <div>
                              <p className="font-bold text-slate-700 flex items-center gap-2">
                                {desc}
                                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-400 font-mono">{file}</span>
                              </p>
                              <p className="text-xs text-slate-500 mt-1 font-medium">Saved on: {dateStr}</p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleRestore(file)}
                                className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold rounded-lg text-sm transition-colors flex items-center gap-2 shadow-xs"
                              >
                                <RotateCcw className="w-4 h-4" />
                                Restore
                              </button>
                              <button
                                onClick={() => handleDelete(file)}
                                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 font-semibold rounded-lg text-sm transition-colors flex items-center gap-2 shadow-xs"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}
        </div>
      </main>
    </div>
  );
}
