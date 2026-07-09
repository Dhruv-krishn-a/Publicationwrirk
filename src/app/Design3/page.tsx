'use client';

import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  Clock,
  ShieldCheck,
  PenTool,
  Send,
  MessageCircle,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Check,
  FileCheck2,
  Quote,
  Activity,
  Globe
} from 'lucide-react';

const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (!isClient) return <div className="fixed inset-0 z-0 bg-[#02050D]"></div>;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#02050D]">
      {/* Automated Floating Glows */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
      
      {/* Mouse Follow Glow */}
      <div 
        className="absolute w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] mix-blend-screen transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)` }}
      ></div>
    </div>
  );
};

const faqs = [
  { q: 'What is the typical timeframe for publishing a research paper?', a: 'The timeline varies by journal and indexing (Scopus, Web of Science, UGC-CARE). On average, the peer-review process takes between 2 to 6 months. We prioritize journals with proven, consistent review cycles.' },
  { q: 'Do you guarantee publication in specific indexed journals?', a: 'We guarantee that your manuscript will meet the stringent quality, formatting, and scope requirements of high-impact journals, significantly maximizing your acceptance probability. Final editorial decisions remain with the journal.' },
  { q: 'How do you handle manuscript rejections or major revisions?', a: 'Rejections are a part of academia. If rejected, we analyze the reviewers\' feedback, revise the manuscript accordingly, and strategically submit it to the next best-fit journal at no additional service cost.' },
  { q: 'What is the difference between Writing + Publication and Publication Support?', a: 'Writing + Publication involves our experts drafting the manuscript from your raw data or concepts, all the way to publication. Publication Support is for authors who already have a completed draft and need editing, formatting, and submission management.' },
  { q: 'How do you ensure the confidentiality of my unpublished research?', a: 'We operate under strict Non-Disclosure Agreements (NDAs). Your data, findings, and intellectual property are securely handled and never shared with third parties.' },
  { q: 'Are your services ethical according to academic standards?', a: 'Yes. We strictly adhere to COPE (Committee on Publication Ethics) guidelines. We assist with language, structure, and journal matching without compromising academic integrity.' },
  { q: 'Do you help in selecting the right journal for my manuscript?', a: 'Absolutely. We perform a rigorous journal matching process based on your paper\'s scope, desired indexing (e.g., Q1/Q2 Scopus), and target publication timeline.' },
  { q: 'What domains and subject areas do your experts cover?', a: 'We have a network of subject-matter experts across diverse fields including Engineering, Medical Sciences, Management, Humanities, and Information Technology.' },
  { q: 'Is formatting and referencing included in the service?', a: 'Yes, we meticulously format your manuscript and citations (APA, MLA, IEEE, Harvard, etc.) to comply exactly with your target journal\'s author guidelines.' },
  { q: 'How do you check for plagiarism before submission?', a: 'Every manuscript is passed through advanced, institutional-grade Turnitin software. We provide you with a comprehensive similarity report and edit the text to ensure absolute originality.' },
  { q: 'Can you help if I only have a research concept or raw data?', a: 'Yes. Through our Co-Authorship and Writing services, our PhD-level researchers can help you structure your raw data into a compelling, publication-ready manuscript.' },
  { q: 'Do you provide a dedicated point of contact during the process?', a: 'Yes. You will be assigned a dedicated academic consultant who will provide regular milestone updates and assist you throughout the publication journey.' },
  { q: 'What happens if the journal charges an Article Processing Charge (APC)?', a: 'Our service fees do not include journal APCs. We will inform you of any potential open-access fees during the journal selection phase so you can make an informed decision.' },
  { q: 'Do you assist with crafting response letters to reviewers?', a: 'Yes. Addressing reviewer comments is critical. We help draft professional, point-by-point rebuttal letters that effectively address all editorial concerns.' },
  { q: 'How do I start the process with WRIrk?', a: 'Simply fill out our contact form or reach us via WhatsApp. We will schedule a free initial consultation to evaluate your manuscript or research goals.' },
];

const whyPublicationsMatter = [
  { title: 'Career Advancement', desc: 'Secure tenure, promotions, and academic recognition through high-impact factor publications. A single Q1 publication can define your career trajectory.', icon: TrendingUp },
  { title: 'Global Recognition', desc: 'Amplify your academic footprint globally by publishing in Scopus and Web of Science indexed journals, ensuring your work reaches the right peers.', icon: Award },
  { title: 'Grant Acquisition', desc: 'A robust publication record is the most critical prerequisite for securing institutional and government research funding across all major academic bodies.', icon: BookOpen },
];

const services = [
  {
    id: 'writing-pub',
    title: 'Writing + Publication',
    desc: 'Comprehensive support transforming raw data into high-impact manuscripts, managing formatting, and navigating the submission process to targeted databases.',
    icon: PenTool,
    glow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] group-hover:border-cyan-400',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'publication',
    title: 'Publication Support',
    desc: 'Expert editing, strict journal-guideline formatting, and end-to-end submission management for your completed drafts. We handle the bureaucracy.',
    icon: Send,
    glow: 'group-hover:shadow-[0_0_30px_rgba(129,140,248,0.5)] group-hover:border-indigo-400',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'co-authorship',
    title: 'Co-Authorship',
    desc: 'Collaborate directly with our elite researchers. We actively contribute to the research phase, sharing authorship and the workload of high-tier papers.',
    icon: Users,
    glow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] group-hover:border-emerald-400',
    iconColor: 'text-emerald-400',
  },
];

const processSteps = [
  { step: '01', title: 'Consultation & Strategy', desc: 'Aligning on research objectives and identifying target Q1/Q2 indexed journals that match your scope.' },
  { step: '02', title: 'Manuscript Enhancement', desc: 'Rigorous structural editing, technical formatting, and comprehensive zero-plagiarism checks.' },
  { step: '03', title: 'Reviewer Management', desc: 'Handling submission logistics, tracking statuses, and drafting precise, respectful rebuttal letters.' },
  { step: '04', title: 'Final Publication', desc: 'Final proofing, addressing last-minute editorial requests, and celebrating your academic achievement.' },
];

const testimonials = [
  { quote: "WRIrk completely transformed my raw thesis into a polished, Scopus-indexed publication within 4 months. Their team is exceptionally professional.", author: "Dr. A. Sharma", role: "Associate Professor" },
  { quote: "The journal selection and formatting support was invaluable. They saved me countless hours of administrative work so I could focus on my research.", author: "James T.", role: "PhD Candidate" },
  { quote: "Highly ethical and incredibly fast. The point-by-point rebuttal they drafted for my major revision was masterful. Accepted immediately after.", author: "Dr. E. Reynolds", role: "Research Scientist" }
];

export default function Design3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#02050D] text-slate-100 font-sans selection:bg-cyan-500/40 relative">
      <BackgroundEffect />
      
      {/* Floating Action Buttons (FABs) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href="https://wa.me/919548521866" 
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0A0F1C] border border-cyan-500/50 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:bg-cyan-500 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6 text-cyan-400 group-hover:text-[#0A0F1C] transition-colors duration-300 relative z-10" />
          <span className="absolute right-16 bg-[#0A0F1C] text-cyan-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            WhatsApp Us
          </span>
        </a>
        
        <a 
          href="tel:+919548521866"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0A0F1C] border border-indigo-500/50 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] hover:bg-indigo-500 transition-all duration-300"
        >
          <PhoneCall className="h-6 w-6 text-indigo-400 group-hover:text-[#0A0F1C] transition-colors duration-300 relative z-10" />
          <span className="absolute right-16 bg-[#0A0F1C] text-indigo-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Call +91 95485 21866
          </span>
        </a>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#02050D]/90 backdrop-blur-md border-b border-cyan-900/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/40 blur-md rounded-full group-hover:bg-cyan-400/60 transition-colors"></div>
              <img src="/WrirkLogoOld.png" alt="WRIrk Logo" className="relative h-11 w-11 object-contain bg-white rounded-full p-1 border border-cyan-400/50" />
            </div>
            <span className="text-2xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">WRIrk</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-200">
            <a href="#services" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Services</a>
            <a href="#process" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Process</a>
            <a href="#testimonials" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Testimonials</a>
            <a href="#faqs" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">FAQs</a>
          </nav>

          <a href="#contact" className="group relative px-7 py-3 rounded-md overflow-hidden bg-cyan-950/30 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
            <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 group-hover:text-white drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
              Contact Us <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-950/40 text-cyan-400 text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md">
              <Sparkles className="h-4 w-4 drop-shadow-[0_0_5px_rgba(34,211,238,1)]" /> Premium Publication Support
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Research Impact
              </span>
            </h1>
            <p className="text-xl text-slate-100 font-medium max-w-xl leading-relaxed drop-shadow-md">
              Navigate the complex landscape of high-impact publishing. We empower scholars to achieve recognition in Scopus, Web of Science, and UGC-CARE indexed journals seamlessly.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['Scopus Indexed', 'Zero Plagiarism', 'Rigorous Editing'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-white bg-slate-900/80 border border-slate-700 px-5 py-2.5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" /> {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form - Neon Glassmorphism */}
          <div className="lg:col-span-5 relative group perspective-1000">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-md opacity-30 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative bg-[#060D1A]/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-cyan-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transform transition-transform duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Request Evaluation</h3>
              <p className="text-sm font-bold text-cyan-200/80 mb-8">Get a free, confidential manuscript review.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group/field">
                  <input type="text" id="hero-name" className="peer w-full bg-transparent border-b-2 border-slate-700 px-0 py-3 text-white font-bold focus:outline-none focus:border-cyan-400 placeholder-transparent transition-colors" placeholder="Name" />
                  <label htmlFor="hero-name" className="absolute left-0 top-3 font-bold text-slate-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-cyan-400">Full Name</label>
                </div>
                
                <div className="relative group/field pt-2">
                  <input type="email" id="hero-email" className="peer w-full bg-transparent border-b-2 border-slate-700 px-0 py-3 text-white font-bold focus:outline-none focus:border-cyan-400 placeholder-transparent transition-colors" placeholder="Email" />
                  <label htmlFor="hero-email" className="absolute left-0 top-5 font-bold text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-cyan-400">Email Address</label>
                </div>
                
                <div className="relative group/field pt-2">
                  <input type="text" id="hero-domain" className="peer w-full bg-transparent border-b-2 border-slate-700 px-0 py-3 text-white font-bold focus:outline-none focus:border-cyan-400 placeholder-transparent transition-colors" placeholder="Domain" />
                  <label htmlFor="hero-domain" className="absolute left-0 top-5 font-bold text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-cyan-400">Research Domain</label>
                </div>
                
                <button className="w-full relative overflow-hidden bg-white text-[#0A0F1C] hover:text-white rounded-lg py-4 mt-8 font-black tracking-widest uppercase text-xs transition-colors group/btn shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] border border-transparent hover:border-cyan-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">Submit Request <ArrowRight className="h-4 w-4" /></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact / Metrics */}
      <section className="relative z-10 py-12 border-y border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
             <div className="flex items-center gap-4 text-white">
                <Globe className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <div>
                  <div className="text-2xl font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">30+</div>
                  <div className="text-xs text-cyan-200 font-bold uppercase tracking-wider">Countries Served</div>
                </div>
             </div>
             <div className="hidden md:block w-px h-12 bg-white/10"></div>
             <div className="flex items-center gap-4 text-white">
                <FileCheck2 className="h-8 w-8 text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                <div>
                  <div className="text-2xl font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">2,500+</div>
                  <div className="text-xs text-indigo-200 font-bold uppercase tracking-wider">Papers Accepted</div>
                </div>
             </div>
             <div className="hidden md:block w-px h-12 bg-white/10"></div>
             <div className="flex items-center gap-4 text-white">
                <Activity className="h-8 w-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <div>
                  <div className="text-2xl font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Q1/Q2</div>
                  <div className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Journal Focus</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Publication Matters */}
      <section className="relative z-10 py-24" id="why-publish">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Publication <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">Matters</span></h2>
            <p className="text-slate-200 font-medium max-w-2xl mx-auto text-lg">Publishing in recognized, high-impact journals is the foundation of a successful and credible academic career.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPublicationsMatter.map((item, idx) => (
              <div key={idx} className="group bg-[#060D1A] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)] overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-[#030712] border border-cyan-900/50 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <item.icon className="h-7 w-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{item.title}</h3>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="relative z-10 py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              {[
                { icon: ShieldCheck, val: '100%', label: 'Confidentiality', color: 'text-indigo-400', border: 'hover:border-indigo-500/50' },
                { icon: Users, val: '500+', label: 'Scholars Assisted', color: 'text-cyan-400', border: 'hover:border-cyan-500/50' },
                { icon: FileCheck2, val: '98%', label: 'Success Rate', color: 'text-emerald-400', border: 'hover:border-emerald-500/50' },
                { icon: Clock, val: '24/7', label: 'Expert Support', color: 'text-blue-400', border: 'hover:border-blue-500/50' }
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-2xl border border-white/10 bg-[#060D1A] flex flex-col items-center justify-center text-center group ${stat.border} transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${i === 0 || i === 3 ? 'lg:translate-y-8' : ''} hover:-translate-y-2 relative overflow-hidden`}>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-t from-${stat.color.split('-')[1]}-500 to-transparent`}></div>
                  <stat.icon className={`h-10 w-10 mb-4 ${stat.color} drop-shadow-[0_0_10px_currentColor] group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                  <div className="text-4xl font-black text-white mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10">{stat.val}</div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors relative z-10">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">Integrity.</span></h2>
              <p className="text-slate-200 font-medium text-lg mb-10 leading-relaxed">
                We believe in ethical publication. We don't employ shortcuts; we rely on rigorous peer review, domain-specific PhD experts, and transparent processes to elevate your work.
              </p>
              <ul className="space-y-6">
                {[
                  'PhD-holding subject matter experts handle your manuscript',
                  'Legally binding NDAs protect your intellectual property',
                  'Transparent communication with zero hidden fees',
                  'Strict adherence to international COPE guidelines'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group cursor-default">
                    <div className="mt-1 flex-shrink-0 bg-[#030712] border border-indigo-500/30 rounded-full p-2 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                      <Check className="h-4 w-4 text-indigo-400 group-hover:text-[#0A0F1C] transition-colors" />
                    </div>
                    <span className="text-slate-300 font-bold group-hover:text-white transition-colors text-lg pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative z-10 py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Services</span></h2>
            <p className="text-slate-200 font-medium max-w-2xl mx-auto text-lg">Tailored publication strategies designed to meet the rigorous demands of global indexing databases.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div key={srv.id} className={`group relative bg-[#060D1A] border border-white/10 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0A1326] ${srv.glow}`}>
                <div className="relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg`}>
                    <srv.icon className={`h-8 w-8 ${srv.iconColor} drop-shadow-[0_0_10px_currentColor]`} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{srv.title}</h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-10 h-24">{srv.desc}</p>
                  
                  <button className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest border transition-all duration-300 bg-[#030712] border-white/10 group-hover:border-transparent group-hover:bg-white group-hover:text-[#060D1A] flex items-center justify-center gap-2`}>
                    Explore Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 bg-black/20 border-y border-white/5" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Scholar <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Success</span></h2>
             <p className="text-slate-200 font-medium">Hear from researchers who have elevated their academic profiles with WRIrk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((test, i) => (
               <div key={i} className="bg-[#060D1A] p-8 rounded-2xl border border-white/5 relative group hover:border-cyan-500/30 transition-colors hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]">
                 <Quote className="absolute top-6 right-6 h-12 w-12 text-white/5 group-hover:text-cyan-500/10 transition-colors" />
                 <p className="text-slate-200 font-medium leading-relaxed mb-8 relative z-10 text-lg italic">"{test.quote}"</p>
                 <div className="flex items-center gap-4 relative z-10">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold">{test.author}</div>
                      <div className="text-cyan-400 text-xs font-black uppercase tracking-wider">{test.role}</div>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative z-10 py-24" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">The <span className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">Process</span></h2>
            <p className="text-slate-200 font-medium max-w-2xl mx-auto text-lg">A systematic, milestone-driven approach to achieving publication success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-14 left-16 right-16 h-[2px] bg-white/10 z-0 overflow-hidden rounded-full">
               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 w-full animate-[slide_3s_linear_infinite]"></div>
            </div>

            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="bg-[#060D1A] border border-white/10 rounded-2xl p-8 h-full hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-2">
                  <div className="h-16 w-16 rounded-full bg-[#030712] border-2 border-white/20 flex items-center justify-center text-xl font-black text-slate-300 mb-6 group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white transition-all duration-300 mx-auto md:mx-0 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 text-center md:text-left drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{step.title}</h3>
                  <p className="text-slate-300 font-medium text-center md:text-left leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative z-10 py-24 bg-black/30 border-y border-white/5" id="faqs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Questions</span></h2>
            <p className="text-slate-200 font-medium text-lg">Everything you need to know about our publication support services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-[#060D1A] border-2 rounded-xl transition-all duration-300 overflow-hidden ${openFaq === i ? 'border-cyan-500 shadow-[0_0_25px_rgba(14,165,233,0.2)]' : 'border-white/5 hover:border-white/20'}`}
              >
                <button 
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-black text-base md:text-lg pr-8 transition-colors tracking-wide ${openFaq === i ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-white group-hover:text-cyan-200'}`}>{faq.q}</span>
                  <div className={`shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 transition-all duration-300 ${openFaq === i ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 rotate-180 shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'border-white/10 text-slate-400 bg-[#030712] group-hover:border-cyan-500/50 group-hover:text-cyan-400'}`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-200 font-medium text-base leading-relaxed px-8 pb-8 pt-2 border-t border-white/5 mt-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Form */}
      <section className="relative z-10 py-32" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-[#060D1A] border border-cyan-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-cyan-400 transition-colors duration-700">
            {/* Elegant corner glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-colors duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative p-10 md:p-16 text-center backdrop-blur-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Start Your Publication <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Journey</span></h2>
              <p className="text-slate-200 font-medium mb-12 max-w-xl mx-auto text-lg">Partner with rigorous academics to achieve your research goals. Reach out for a comprehensive manuscript evaluation.</p>
              
              <form className="space-y-8 max-w-lg mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group/field">
                  <input type="text" id="contact-name" className="peer w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 text-white font-bold text-lg focus:outline-none focus:border-cyan-400 placeholder-transparent transition-colors" placeholder="Name" />
                  <label htmlFor="contact-name" className="absolute left-0 top-4 font-black tracking-widest uppercase text-slate-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-cyan-400 cursor-text">Full Name</label>
                </div>
                
                <div className="relative group/field pt-2">
                  <input type="email" id="contact-email" className="peer w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 text-white font-bold text-lg focus:outline-none focus:border-cyan-400 placeholder-transparent transition-colors" placeholder="Email" />
                  <label htmlFor="contact-email" className="absolute left-0 top-6 font-black tracking-widest uppercase text-slate-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-cyan-400 cursor-text">Email Address</label>
                </div>

                <div className="relative group/field pt-2">
                  <textarea id="contact-msg" rows={4} className="peer w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 text-white font-bold text-lg focus:outline-none focus:border-cyan-400 placeholder-transparent transition-colors resize-none" placeholder="Message"></textarea>
                  <label htmlFor="contact-msg" className="absolute left-0 top-6 font-black tracking-widest uppercase text-slate-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-cyan-400 cursor-text">Tell us about your research</label>
                </div>
                
                <button className="w-full relative overflow-hidden bg-white text-[#0A0F1C] hover:text-white rounded-xl py-5 mt-10 font-black tracking-widest uppercase text-sm transition-colors group/submit flex items-center justify-center gap-3 border border-transparent hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 transform translate-y-full group-hover/submit:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                  <span className="relative z-10 flex items-center gap-2 drop-shadow-md">Submit Inquiry <Send className="h-4 w-4" /></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="relative z-10 py-10 bg-[#02050D] text-center border-t border-white/5">
        <div className="flex flex-col items-center justify-center gap-5">
           <img src="/WrirkLogoOld.png" alt="WRIrk Logo" className="h-10 w-10 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
           <span className="text-slate-300 font-black uppercase tracking-widest text-sm">WRIrk Academic Services</span>
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">© 2026 WRIrk. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
