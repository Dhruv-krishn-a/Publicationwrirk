'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  TrendingUp,
  Search,
  Users,
  Check,
  MessageCircle,
  Phone,
  Sparkles,
  Clock,
  ClipboardList,
  GraduationCap,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Bookmark,
  Building,
  Briefcase,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Researchers Assisted', desc: 'Global university network' },
  { value: '15+', label: 'Disciplines Mentored', desc: 'Custom domain alignments' },
  { value: '98%', label: 'Client Satisfaction', desc: 'High review ratings' },
  { value: '24h', label: 'Response Window', desc: 'Fast initial evaluation' },
];

const whyPublicationsMatter = [
  {
    role: 'PhD Scholars',
    focus: 'Graduate on schedule and secure postdoc opportunities.',
    details: 'Most universities require at least 1-2 peer-reviewed publications before thesis defense. Publications demonstrate your research validity to external examiners.'
  },
  {
    role: 'Faculty Members',
    focus: 'Build tenure portfolios and secure research grants.',
    details: 'Academic promotions are heavily tied to publication frequency and citation metrics. Publications help secure state and national funding.'
  },
  {
    role: 'Master\'s Students',
    focus: 'Strengthen applications for doctoral programs.',
    details: 'Admissions committees look for candidates who have already demonstrated research and writing competence in indexed journals.'
  },
  {
    role: 'Professionals & Consultants',
    focus: 'Build domain authority in industry sectors.',
    details: 'Peer-reviewed articles validate your technical expertise, helping secure corporate advisory leads and R&D consultancy roles.'
  }
];

const profileSteps = [
  { id: 1, title: 'Choose a Research Niche', desc: 'Target a narrow, deep gap in literature rather than trying to solve a broad problem.' },
  { id: 2, title: 'Publish in Scopus/WoS Journals', desc: 'Focus strictly on indexed, peer-reviewed journals to accumulate recognized academic weight.' },
  { id: 3, title: 'Maintain Publishing Consistency', desc: 'Build a steady pipeline of 1-2 publications annually to show continuous activity.' },
  { id: 4, title: 'Optimize abstract & Keywords', desc: 'Ensure your work is searchable and indexing-ready so other researchers can find and cite it.' },
  { id: 5, title: 'Update Author Profiles', desc: 'Maintain clean, consolidated profiles on ORCID, Google Scholar, and ResearchGate.' },
  { id: 6, title: 'Track Citations & Impact', desc: 'Analyze which articles gather citations and adjust your research strategy accordingly.' }
];

const services = [
  {
    icon: Search,
    title: 'Journal Selection',
    desc: 'Verify scopes, impact factors, indexing (Scopus/WoS), and review cycles to match your manuscript with the perfect outlet.',
    benefits: ['Scopus & WoS Check', 'Desk-Rejection Prevention', 'Timeline Optimization']
  },
  {
    icon: ClipboardList,
    title: 'Manuscript Editing',
    desc: 'Structure and edit abstract, argument flow, literature gap alignment, and formatting without altering your core research voice.',
    benefits: ['Flow & Clarity Check', 'Academic Formatting', 'Clarity Optimization']
  },
  {
    icon: TrendingUp,
    title: 'Publication Strategy',
    desc: 'Develop a custom 12-month publication pipeline mapped to your faculty promotion, tenure, or graduate school admissions requirements.',
    benefits: ['Tenure Track Planning', 'H-Index Goals', 'Collaboration Roadmap']
  },
  {
    icon: Users,
    title: 'Reviewer Feedback Mentor',
    desc: 'Interpret critical reviewer reports, structure professional responses, and prepare minor/major revision submissions systematically.',
    benefits: ['Response Structuring', 'Rebuttal Review', 'Revision Assistance']
  }
];

const whoWeHelp = [
  { title: 'PhD Scholars', desc: 'Overcoming publication delays to submit the doctoral thesis on schedule.', icon: GraduationCap },
  { title: 'Faculty & Professors', desc: 'Accumulating API index metrics and expanding citation scores for promotions.', icon: Award },
  { title: 'Post-Grad Students', desc: 'Publishing master\'s level papers to guarantee PhD admissions abroad.', icon: BookOpen },
  { title: 'Research Laboratories', desc: 'Structuring publication roadmaps and ensuring ethical submission guidelines.', icon: Building }
];

const beforeAfterCases = [
  {
    name: 'Dr. Priya S. (Business & Management)',
    before: { status: 'Desk Rejected 3 Times', reason: 'Misaligned journal scope, vague abstract contribution' },
    after: { status: 'Accepted (Scopus Q2 Journal)', output: '4-month peer review, clear academic visibility' },
    note: 'WRIrk refined the abstract focus and matched the paper to a specialized management review outlet.'
  },
  {
    name: 'Research Scholar Amit K. (CS & Engineering)',
    before: { status: 'Stuck in Major Revision', reason: 'Unstructured reviewer response, aggressive defense' },
    after: { status: 'Accepted (WoS SCIE Indexed)', output: 'Polished response letter, minor revisions only' },
    note: 'WRIrk structured a point-by-point response framework that satisfied all editorial comments.'
  }
];

const whyChooseUs = [
  { title: 'Academic Focus Only', desc: 'We align manuscripts strictly with international Scopus and Web of Science (WoS) guidelines.' },
  { title: 'Practical Advising', desc: 'No vague promises. We give direct, actionable advice on how to improve your paper\'s contribution.' },
  { title: 'Ethical Mentorship', desc: 'We strictly adhere to COPE (Committee on Publication Ethics) guidelines. Authors maintain 100% ownership.' },
  { title: 'Fast Callback & Check', desc: 'Our domain experts assess your abstract and outline within 24 hours to accelerate your process.' }
];

const blogArticles = [
  {
    title: 'Avoiding Predatory Journals: An Academic Safety Guide',
    desc: 'Red flags to look for when evaluating open-access journals, including misleading indexing claims and fast turnaround guarantees.',
    readTime: '6 min read',
    topic: 'Research Safety'
  },
  {
    title: 'Tenure Track Strategy: How to Build Your H-Index',
    desc: 'Practical strategies for faculty members to optimize keywords, cite relevant literature, and increase citation reach.',
    readTime: '7 min read',
    topic: 'Career Growth'
  },
  {
    title: 'How to Respond to Aggressive Reviewer Comments',
    desc: 'A template and guide on writing polite, structured response letters that address critical peer reviews without starting an argument.',
    readTime: '5 min read',
    topic: 'Peer Review'
  }
];

const faqs = [
  { q: "How do I know which journal is right for my paper?", a: "We audit your manuscript's reference list, core methodology, and theoretical scope, then screen databases like Scopus and Web of Science to ensure alignment with active editors." },
  { q: "Can you help me if I am publishing for the first time?", a: "Yes. We guide early-career scholars and PhD candidates through the entire academic submission flow, resolving any uncertainty about peer review." },
  { q: "Do you support PhD and faculty research profiles?", a: "Absolutely. We build publication roadmaps targeting H-index growth, ORCID/Scholar setup, and university metrics." },
  { q: "What should I prepare before asking for guidance?", a: "Your draft title, an abstract (or summary), and your timeline are enough to start a free advisory session." }
];

export default function Design2() {
  // Calculator State
  const [calcAnswers, setCalcAnswers] = useState({
    indexed: '',
    promise: '',
    fees: ''
  });
  const [calcResult, setCalcResult] = useState<null | { level: 'SAFE' | 'WARNING' | 'DANGER', msg: string }>(null);

  const runCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcAnswers.indexed || !calcAnswers.promise || !calcAnswers.fees) {
      alert("Please answer all three questions.");
      return;
    }

    if (calcAnswers.promise === 'YES' || calcAnswers.indexed === 'NO') {
      setCalcResult({
        level: 'DANGER',
        msg: '🚨 CRITICAL RISK: There is a very high probability that this journal is predatory. Fast-tracked publication promises (under 2 weeks) combined with lacking Scopus/WoS indexing are primary red flags.'
      });
    } else if (calcAnswers.indexed === 'UNSURE' || calcAnswers.fees === 'YES') {
      setCalcResult({
        level: 'WARNING',
        msg: '⚠️ CAUTION REQUIRED: Some reputable open-access journals charge publishing fees, but indexing and editorial transparency must be carefully audited to ensure safety.'
      });
    } else {
      setCalcResult({
        level: 'SAFE',
        msg: '✅ CREDIBLE PROFILE: Based on these signals, the journal appears aligned with standard academic peer-review norms. Always check the official Scopus source list to confirm.'
      });
    }
  };

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* Dynamic light gradient background elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-50/50 via-slate-50 to-transparent pointer-events-none" />
      <div className="absolute top-48 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[800px] right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          target="_blank" 
          rel="noreferrer"
          className="p-4 bg-emerald-600 text-white rounded-full shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center"
          title="WhatsApp Advisor"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a 
          href="tel:+91XXXXXXXXXX" 
          className="p-4 bg-white text-indigo-600 border border-slate-200 rounded-full shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center"
          title="Call Now"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Utility Strip */}
      <div className="w-full bg-[#0f172a] text-slate-300 text-[10px] tracking-widest uppercase py-2.5 px-6 flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-4">
          <span>📧 advisory@wrirk.com</span>
          <span>📞 Request Free Callback</span>
        </div>
        <div className="hidden sm:block">
          <span>Ethical Academic Publication Support & Journal Matching</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-4.5 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/WrirkLogoOld.png"
              alt="Wrirk logo"
              className="h-9 w-9 rounded-full object-contain"
            />
            <div>
              <span className="text-sm font-black tracking-widest text-slate-900 uppercase block">WRIrk</span>
              <span className="text-[9px] tracking-wider uppercase text-slate-500 block">Advisory & Publication</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a href="#why-publish" className="hover:text-indigo-600 transition">Why Publish</a>
            <a href="#services" className="hover:text-indigo-600 transition">Services</a>
            <a href="#auditor" className="hover:text-indigo-600 transition">Safety Checker</a>
            <a href="#who-we-help" className="hover:text-indigo-600 transition">Who We Help</a>
            <a href="#faqs" className="hover:text-indigo-600 transition">Advisory FAQs</a>
          </nav>

          <a
            href="#consult"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-indigo-100"
          >
            <span>Book Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1 text-xs text-indigo-700 font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Empowering Global Scholars
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Publish in High-Impact <br />
              <span className="text-indigo-600">
                Indexed Journals.
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              WRIrk supports PhD scholars, students, and faculty in selecting scopes, perfecting manuscript structure, handling reviewer edits, and building credibility.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm text-center">
                  <span className="text-xl font-extrabold text-indigo-600 block">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-1 block">{stat.label}</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{stat.desc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#auditor"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0f172a] hover:bg-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition shadow-lg"
              >
                Scan Journal Credibility
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:border-slate-300 transition"
              >
                Explore Support Plans
              </a>
            </div>
          </div>

          {/* Right Lead Capture Box */}
          <div className="lg:col-span-5" id="consult">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-amber-500 text-[#0f172a] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Free Evaluation
              </div>
              <h3 className="text-lg font-black text-slate-900">Request Publication Check</h3>
              <p className="text-xs text-slate-500 mt-1">Get an expert assessment of your manuscript\'s desk-readiness.</p>

              <form className="space-y-4 mt-6" onSubmit={(e) => { e.preventDefault(); alert("Advisory request sent. A WRIrk consultant will email you shortly."); }}>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1.5">Academic Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Prof. Sandeep" 
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1.5">Contact Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="sandeep@university.edu" 
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1.5">Manuscript Stage</label>
                  <select 
                    required 
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-xs text-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  >
                    <option value="">Select current stage</option>
                    <option value="Idea">Abstract & Concept Draft</option>
                    <option value="Complete">Completed Manuscript</option>
                    <option value="Revised">Revision/Rebuttal Phase</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-indigo-100 transition"
                >
                  Request Advisor Call
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Why Publications Matter Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="why-publish">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Realize Your Impact</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Why Publications Matter</h2>
          <p className="text-sm text-slate-600 mt-2">
            Publishing in indexed journals builds academic weight, tenure points, and citation reach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPublicationsMatter.map((role, rIdx) => (
            <div key={rIdx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-black uppercase text-indigo-600 block mb-2">{role.role}</span>
              <h3 className="text-sm font-bold text-slate-800 leading-snug">{role.focus}</h3>
              <p className="text-xs text-slate-500 mt-3.5 leading-relaxed">{role.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Build Research Profile */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Research Excellence</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">How to Build Your Research Profile</h2>
            <p className="text-sm text-slate-600 mt-2">
              A comprehensive checklist of publication and profile-building strategies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileSteps.map((step) => (
              <div key={step.id} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="services">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Services ecosystem</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Comprehensive Advisory Solutions</h2>
            <p className="text-sm text-slate-600 mt-2">
              We assist you in building academic visibility while maintaining complete research ownership and ethical guidelines.
            </p>
          </div>
          <a 
            href="#consult"
            className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition flex items-center gap-1 shrink-0"
          >
            Request custom roadmap <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div key={idx} className="bg-white border border-slate-150 rounded-2xl p-6.5 shadow-sm transition hover:shadow-md hover:border-slate-200">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{srv.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4.5">
                      {srv.benefits.map((b, bIdx) => (
                        <span key={bIdx} className="text-[9px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 lg:py-28" id="who-we-help">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Target Audiences</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Who We Support</h2>
            <p className="text-sm text-slate-600 mt-2">
              Whether you are preparing a doctoral manuscript, planning API goals, or converting a thesis.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeHelp.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm text-center flex flex-col items-center">
                  <div className="h-10 w-10 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose WRIrk Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Our Philosophy</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Why Choose WRIrk Advisory</h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              We focus strictly on ethical guidelines and professional reviews, supporting authors in reaching high credibility indexing.
            </p>
            <div className="mt-6 bg-slate-50 border border-slate-100 rounded-xl p-4.5">
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "We provide research-first mentorship that protects early scholars from desk rejections and un-indexed predatory outlets."
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((choose, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex gap-2 items-center text-indigo-600">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-800">{choose.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{choose.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Auditor Widget */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28 bg-[#0f172a] rounded-3xl text-white my-10 shadow-xl" id="auditor">
        <div className="grid lg:grid-cols-12 gap-12 items-center px-6 md:px-10">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Research Security</span>
            <h2 className="text-3xl font-black text-white mt-2">Predatory Journal Safety Checker</h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              Predatory journals exploit researchers by guaranteeing publication without rigorous peer reviews. Check if your target outlet shows common red flags.
            </p>
            
            <div className="bg-amber-950/20 border border-amber-800/30 rounded-xl p-4.5 mt-6 flex gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200 leading-relaxed">
                <strong>Why this matters:</strong> Publishing in un-indexed, predatory outlets can permanently damage your credibility and make your papers ineligible for tenure score.
              </p>
            </div>
          </div>

          {/* Right Checker Widget */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white min-h-[380px] flex flex-col justify-between">
              
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-wider text-slate-300">Journal Risk Calculator</h3>
                <p className="text-xs text-slate-400 mt-1">Answer these signals to check for potential red flags:</p>
              </div>

              <form onSubmit={runCalculator} className="space-y-4 mt-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-2">1. Is the journal indexed in Scopus / Web of Science (WoS)?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['YES', 'NO', 'UNSURE'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setCalcAnswers({ ...calcAnswers, indexed: opt })}
                        className={`py-2 text-xs font-bold tracking-wider rounded-lg transition ${
                          calcAnswers.indexed === opt 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-2">2. Does it guarantee review & acceptance in under 2 weeks?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['YES', 'NO'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setCalcAnswers({ ...calcAnswers, promise: opt })}
                        className={`py-2 text-xs font-bold tracking-wider rounded-lg transition ${
                          calcAnswers.promise === opt 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-2">3. Does it require processing fees before any official peer review?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['YES', 'NO'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setCalcAnswers({ ...calcAnswers, fees: opt })}
                        className={`py-2 text-xs font-bold tracking-wider rounded-lg transition ${
                          calcAnswers.fees === opt 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition flex items-center gap-1.5"
                  >
                    Check Credibility Status
                  </button>
                  {calcResult && (
                    <button
                      type="button"
                      onClick={() => { setCalcAnswers({ indexed: '', promise: '', fees: '' }); setCalcResult(null); }}
                      className="text-slate-400 hover:text-white transition text-xs font-semibold flex items-center gap-1"
                    >
                      <RefreshCw className="h-4 w-4" /> Reset
                    </button>
                  )}
                </div>
              </form>

              {calcResult && (
                <div className={`mt-6 p-4 rounded-xl border text-xs leading-relaxed ${
                  calcResult.level === 'DANGER' 
                    ? 'bg-rose-950/20 border-rose-800/50 text-rose-300' 
                    : calcResult.level === 'WARNING' 
                      ? 'bg-amber-950/20 border-amber-800/50 text-amber-300' 
                      : 'bg-emerald-950/20 border-emerald-800/50 text-emerald-300'
                }`}>
                  {calcResult.msg}
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Before / After Cases */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="cases">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold">Proof of support</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Before & After Outcomes</h2>
          <p className="text-sm text-slate-600 mt-2">
            Real outcomes showing how structured pre-submission advisory shifts rejection signals to accepted research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {beforeAfterCases.map((cs, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6.5 shadow-sm">
              <h3 className="text-sm font-extrabold text-slate-800 border-b border-slate-100 pb-3 uppercase tracking-wider">
                {cs.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Original Status:</span>
                  <span className="text-xs font-bold text-rose-600 mt-1 block">{cs.before.status}</span>
                  <span className="text-[10px] text-slate-500 mt-1.5 block leading-relaxed">{cs.before.reason}</span>
                </div>
                <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                  <span className="text-[9px] font-black uppercase tracking-widest text-indigo-500 block">Result with WRIrk:</span>
                  <span className="text-xs font-bold text-indigo-700 mt-1 block">{cs.after.status}</span>
                  <span className="text-[10px] text-slate-600 mt-1.5 block leading-relaxed">{cs.after.output}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic mt-4 leading-relaxed bg-slate-50 border border-slate-100 p-3 rounded-lg">
                💡 {cs.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Resource / Blog Preview Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold font-semibold">Academic Library</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Latest Publication Guides</h2>
            </div>
            <a 
              href="#consult" 
              className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:underline flex items-center gap-1.5"
            >
              Access Library <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((art, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {art.topic}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory FAQs */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="faqs">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold font-semibold">Clear Guidance</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left p-5 hover:bg-slate-50/80 transition"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-indigo-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-500 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-150 bg-gradient-to-b from-indigo-900 to-indigo-950 p-8 sm:p-12 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />
          <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-black block">Start Publishing Smarter</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 leading-none text-white">
            Ready to Build Your <br className="hidden sm:inline" />Research Profile?
          </h2>
          <p className="mt-6 text-sm md:text-base text-indigo-200 max-w-2xl mx-auto leading-relaxed">
            Get practical academic guidance that helps you select aligned journals, refine manuscripts, and advance your research milestones.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-indigo-950 hover:bg-slate-50 transition"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-700 bg-indigo-900/50 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-indigo-500 hover:text-indigo-200 transition"
            >
              WhatsApp Advisor
            </a>
          </div>
          <div className="text-[9px] text-indigo-400 uppercase tracking-widest mt-6">
            No pressure. Just clear, academic-focused guidance.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-slate-450 text-xs py-14 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="text-white font-bold uppercase tracking-widest text-sm block mb-4">WRIrk Support</span>
            <p className="leading-relaxed text-slate-400">
              Ethical publication check, manuscript refinement, and author roadmaps for early-career scholars and faculty.
            </p>
          </div>
          <div>
            <span className="text-white font-bold uppercase tracking-widest text-sm block mb-4">Verification Tools</span>
            <ul className="space-y-2">
              <li><a href="#auditor" className="hover:text-white transition text-slate-400">Predatory Journal Calculator</a></li>
              <li><a href="#services" className="hover:text-white transition text-slate-400">Scope Matching Check</a></li>
              <li><a href="#roadmap" className="hover:text-white transition text-slate-400">Tenure Track Milestones</a></li>
            </ul>
          </div>
          <div>
            <span className="text-white font-bold uppercase tracking-widest text-sm block mb-4">Contact Details</span>
            <p className="leading-relaxed text-slate-400">
              📧 support@wrirk.com <br />
              🏢 Research Advisory Center <br />
              🕒 Mon - Sat: 9:00 - 18:00
            </p>
          </div>
          <div>
            <span className="text-white font-bold uppercase tracking-widest text-sm block mb-4">Privacy & Terms</span>
            <p className="leading-relaxed text-slate-400">
              © 2026 WRIrk. All rights reserved. <br />
              All manuscript submissions are treated with 100% intellectual safety and confidentiality.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
