'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  PhoneCall,
  ArrowRight,
  Sparkles,
  Check,
  FileCheck2,
  Quote,
  Activity,
  Globe
} from 'lucide-react';

import dynamic from 'next/dynamic';
import SharedForm from '@/components/SharedForm';

const BackgroundEffect = dynamic(() => import('@/components/BackgroundEffect'), { ssr: false });
const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'), { ssr: false });
const PopupForm = dynamic(() => import('@/components/PopupForm'), { ssr: false });

// Custom Hook for Scroll Progress (Mobile Process Line)
const useScrollProgress = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the element
      const start = rect.top - windowHeight / 2;
      const total = rect.height;
      let percent = (start * -1) / total;
      
      if (percent < 0) percent = 0;
      if (percent > 1) percent = 1;
      setProgress(percent * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};

// --- DATA ARRAYS ---
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
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:border-cyan-400',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'publication',
    title: 'Publication Support',
    desc: 'Expert editing, strict journal-guideline formatting, and end-to-end submission management for your completed drafts. We handle the bureaucracy.',
    icon: Send,
    glow: 'hover:shadow-[0_0_30px_rgba(129,140,248,0.4)] active:shadow-[0_0_15px_rgba(129,140,248,0.6)] hover:border-indigo-400',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'co-authorship',
    title: 'Co-Authorship',
    desc: 'Collaborate directly with our elite researchers. We actively contribute to the research phase, sharing authorship and the workload of high-tier papers.',
    icon: Users,
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] active:shadow-[0_0_15px_rgba(52,211,153,0.6)] hover:border-emerald-400',
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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  const processRef = useRef<HTMLDivElement>(null);
  const processProgress = useScrollProgress(processRef);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    let observer: IntersectionObserver;
    
    // Defer the observer setup slightly to prevent blocking initial hydration
    const timeoutId = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);

  const revealClass = "reveal opacity-0 translate-y-12 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]";
  
  // Staggered text logic
  const heroTitle = ["Accelerate", "Your", "Research", "Impact"];

  return (
    <div className="min-h-screen bg-[#02050D] text-slate-100 font-sans selection:bg-cyan-500/40 relative overflow-x-hidden">
      {/* Hide Scrollbar for carousels */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
      
      <BackgroundEffect />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col gap-4 reveal opacity-0 scale-95 transition-all duration-700 delay-500">
        <a 
          href="https://wa.me/919548521866" 
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0A0F1C]/90 backdrop-blur-md border border-emerald-500/50 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:bg-emerald-500 active:scale-90 active:bg-emerald-600 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-emerald-400 group-hover:text-white drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] group-hover:drop-shadow-none transition-all duration-300 relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="hidden md:block absolute right-16 bg-[#0A0F1C] text-emerald-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            WhatsApp Us
          </span>
        </a>
        
        <a 
          href="tel:+919548521866"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#0A0F1C]/90 backdrop-blur-md border border-indigo-500/50 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] hover:bg-indigo-500 active:scale-90 active:bg-indigo-600 transition-all duration-300"
        >
          <PhoneCall className="h-6 w-6 text-indigo-400 group-hover:text-[#0A0F1C] transition-colors duration-300 relative z-10" />
          <span className="hidden md:block absolute right-16 bg-[#0A0F1C] text-indigo-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Call +91 95485 21866
          </span>
        </a>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#02050D]/90 backdrop-blur-xl border-b border-cyan-900/50 py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-5 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer active:scale-95 transition-transform duration-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/WrirkLogoOld.png" alt="WRIrk Logo" className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)] transition-all duration-300" />
            <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">WRIrk</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-200">
            {['Services', 'Process', 'Testimonials', 'FAQs'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 active:scale-95 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-200">{item}</a>
            ))}
          </nav>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-xl md:rounded-md blur opacity-60 animate-pulse group-hover:opacity-100 transition duration-500"></div>
            <a href="#contact" className="relative flex px-5 py-2.5 md:px-7 md:py-3 rounded-xl md:rounded-md overflow-hidden bg-[#0A0F1C] border border-cyan-500/50 hover:border-cyan-400 active:scale-95 transition-all duration-300">
              <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <div className="absolute inset-0 translate-x-[-150%] animate-[shimmer_4s_infinite_ease-in-out] bg-linear-to-r from-transparent via-cyan-400/20 to-transparent skew-x-[-15deg] z-0"></div>
              <span className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-cyan-400 group-hover:text-white drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                Contact <span className="hidden md:inline">Us</span> <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-24 lg:pt-52 lg:pb-32 px-5 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className={`lg:col-span-7 space-y-8 relative ${revealClass}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-950/40 text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md active:scale-95 transition-transform duration-200">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 drop-shadow-[0_0_5px_rgba(34,211,238,1)]" /> Premium Publication Support
            </div>
            
            {/* Staggered Text Reveal */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] tracking-tight flex flex-wrap gap-x-4 gap-y-2">
              {heroTitle.map((word, i) => (
                <span 
                  key={i} 
                  className={`inline-block animate-[fadeSlideUp_0.8s_ease-out_forwards] opacity-0 ${i > 2 ? 'text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]' : ''}`} 
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 font-medium max-w-xl leading-relaxed drop-shadow-md animate-[fadeSlideUp_1s_ease-out_forwards] opacity-0 delay-500">
              Navigate the complex landscape of high-impact publishing. We empower scholars to achieve recognition in Scopus, Web of Science, and UGC-CARE indexed journals seamlessly.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              {['Scopus Indexed', 'Zero Plagiarism', 'Rigorous Editing'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-slate-900/80 border border-slate-700 px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] active:scale-95 transition-transform duration-200 animate-[fadeSlideUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: `${700 + (i * 100)}ms` }}>
                  <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" /> {tag}
                </div>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-5 relative group perspective-1000 ${revealClass} delay-200`}>
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-md opacity-50 animate-pulse md:group-hover:opacity-80 transition-opacity duration-700"></div>
            
            <div className="relative bg-[#060D1A]/90 backdrop-blur-xl p-7 md:p-10 rounded-2xl border border-cyan-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 md:hover:-translate-y-1 transform-gpu">
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Request Evaluation</h3>
              <p className="text-xs md:text-sm font-bold text-cyan-200/80 mb-8">Get a free, confidential manuscript review.</p>
              
              <SharedForm formId="hero" buttonText="Submit Request" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact / Metrics - Animated Counters */}
      <section className={`relative z-10 py-10 md:py-12 border-y border-white/10 bg-black/40 backdrop-blur-md ${revealClass}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-4 text-center md:text-left">
             <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-white active:scale-95 transition-transform duration-200">
                <Globe className="h-8 w-8 md:h-10 md:w-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <div>
                  <div className="text-3xl md:text-2xl font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] flex">
                    <AnimatedCounter end={30} suffix="+" />
                  </div>
                  <div className="text-[10px] md:text-xs text-cyan-200 font-bold uppercase tracking-wider">Countries Served</div>
                </div>
             </div>
             <div className="hidden md:block w-px h-12 bg-white/10"></div>
             <div className="w-full h-px bg-white/10 md:hidden"></div>
             <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-white active:scale-95 transition-transform duration-200">
                <FileCheck2 className="h-8 w-8 md:h-10 md:w-10 text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                <div>
                  <div className="text-3xl md:text-2xl font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] flex">
                    <AnimatedCounter end={2500} suffix="+" duration={2500} />
                  </div>
                  <div className="text-[10px] md:text-xs text-indigo-200 font-bold uppercase tracking-wider">Papers Accepted</div>
                </div>
             </div>
             <div className="hidden md:block w-px h-12 bg-white/10"></div>
             <div className="w-full h-px bg-white/10 md:hidden"></div>
             <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-white active:scale-95 transition-transform duration-200">
                <Activity className="h-8 w-8 md:h-10 md:w-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <div>
                  <div className="text-3xl md:text-2xl font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Q1/Q2</div>
                  <div className="text-[10px] md:text-xs text-emerald-200 font-bold uppercase tracking-wider">Journal Focus</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Publication Matters */}
      <section className="relative z-10 py-20 md:py-24" id="why-publish">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-12 md:mb-16 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Publication <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">Matters</span></h2>
            <p className="text-slate-200 font-medium max-w-2xl mx-auto text-base md:text-lg">Publishing in recognized, high-impact journals is the foundation of a successful and credible academic career.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyPublicationsMatter.map((item, idx) => (
              <div key={idx} className={`group bg-[#060D1A] p-7 md:p-8 rounded-2xl border border-white/5 transition-all duration-500 active:scale-[0.98] md:hover:-translate-y-2 md:hover:rotate-1 md:hover:scale-105 md:hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] md:hover:border-cyan-500/50 overflow-hidden relative ${revealClass}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-colors duration-500 pointer-events-none"></div>
                
                {/* Mobile Parallax Icon Background */}
                <div className="absolute -right-8 -bottom-8 opacity-5 text-cyan-400 pointer-events-none transition-transform duration-1000 group-hover:-translate-y-4 group-hover:-translate-x-4">
                   <item.icon className="h-40 w-40" />
                </div>

                <div className="relative z-10">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#030712] border border-cyan-900/50 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white mb-2 md:mb-3 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{item.title}</h3>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="relative z-10 py-20 md:py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6 relative">
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              {[
                { icon: ShieldCheck, val: '100%', label: 'Confidentiality', color: 'text-indigo-400', border: 'hover:border-indigo-500/50', delay: '0ms' },
                { icon: Users, val: '500+', label: 'Scholars Assisted', color: 'text-cyan-400', border: 'hover:border-cyan-500/50', delay: '100ms' },
                { icon: FileCheck2, val: '98%', label: 'Success Rate', color: 'text-emerald-400', border: 'hover:border-emerald-500/50', delay: '200ms' },
                { icon: Clock, val: '24/7', label: 'Expert Support', color: 'text-blue-400', border: 'hover:border-blue-500/50', delay: '300ms' }
              ].map((stat, i) => (
                <div key={i} className={`p-6 md:p-8 rounded-2xl border border-white/10 bg-[#060D1A] flex flex-col items-center justify-center text-center group md:${stat.border} transition-all duration-500 active:scale-[0.96] md:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${i === 0 || i === 3 ? 'lg:translate-y-8' : ''} md:hover:-translate-y-2 relative overflow-hidden ${revealClass}`} style={{ transitionDelay: stat.delay }}>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-t from-${stat.color.split('-')[1]}-500 to-transparent pointer-events-none`}></div>
                  <stat.icon className={`h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 ${stat.color} drop-shadow-[0_0_10px_currentColor] group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 md:mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10">{stat.val}</div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors relative z-10">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className={`order-1 lg:order-2 ${revealClass}`}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 text-center lg:text-left">Uncompromising <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">Integrity.</span></h2>
              <p className="text-slate-200 font-medium text-base md:text-lg mb-8 md:mb-10 leading-relaxed text-center lg:text-left">
                We believe in ethical publication. We don&apos;t employ shortcuts; we rely on rigorous peer review, domain-specific PhD experts, and transparent processes to elevate your work.
              </p>
              <ul className="space-y-4 md:space-y-6">
                {[
                  'PhD-holding subject matter experts handle your manuscript',
                  'Legally binding NDAs protect your intellectual property',
                  'Transparent communication with zero hidden fees',
                  'Strict adherence to international COPE guidelines'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 group cursor-default active:scale-[0.98] transition-transform duration-200 p-2 md:p-0 rounded-lg md:hover:bg-transparent hover:bg-white/5">
                    <div className="mt-1 shrink-0 bg-[#030712] border border-indigo-500/30 rounded-full p-1.5 md:p-2 md:group-hover:bg-indigo-500 md:group-hover:border-indigo-400 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.2)] md:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] relative overflow-hidden">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-indigo-400 md:group-hover:text-[#0A0F1C] transition-colors relative z-10" />
                    </div>
                    <span className="text-slate-300 font-bold md:group-hover:text-white transition-colors text-sm md:text-lg pt-0.5 md:pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative z-10 py-20 md:py-24 overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-10 md:mb-20 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Services</span></h2>
            <p className="text-slate-200 font-medium max-w-2xl mx-auto text-base md:text-lg">Tailored publication strategies designed to meet the rigorous demands of global indexing databases.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((srv, idx) => (
              <div key={srv.id} className={`group relative bg-[#060D1A] border border-white/10 rounded-2xl p-7 md:p-10 transition-all duration-500 active:scale-[0.97] md:hover:-translate-y-2 md:hover:bg-[#0A1326] ${srv.glow} ${revealClass}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="relative z-10">
                  <div className={`h-14 w-14 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/5 opacity-0 active:opacity-100 transition-opacity"></div>
                    <srv.icon className={`h-6 w-6 md:h-8 md:w-8 ${srv.iconColor} drop-shadow-[0_0_10px_currentColor]`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{srv.title}</h3>
                  <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 md:py-24 bg-black/20 border-y border-white/5 overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-12 md:mb-16 ${revealClass}`}>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Scholar <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Success</span></h2>
             <p className="text-slate-200 font-medium text-base md:text-lg">Hear from researchers who have elevated their academic profiles with WRIrk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             {testimonials.map((test, i) => (
               <div key={i} className={`bg-[#060D1A] p-7 md:p-8 rounded-2xl border border-white/5 relative group md:hover:border-cyan-500/30 transition-all duration-300 active:scale-[0.98] md:hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] ${revealClass}`} style={{ transitionDelay: `${i * 150}ms` }}>
                 <Quote className="absolute top-5 right-5 h-8 w-8 md:h-12 md:w-12 text-white/5 md:group-hover:text-cyan-500/10 transition-colors" />
                 <p className="text-slate-200 font-medium leading-relaxed mb-6 md:mb-8 relative z-10 text-sm md:text-lg italic">&quot;{test.quote}&quot;</p>
                 <div className="flex items-center gap-4 relative z-10">
                    {/* Breathing Avatar Pulse */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-40 animate-[pulse_3s_ease-in-out_infinite]"></div>
                      <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full bg-linear-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-base md:text-lg shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                        {test.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm md:text-base">{test.author}</div>
                      <div className="text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-wider">{test.role}</div>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Our Process - Scroll Linked Line */}
      <section className="relative z-10 py-20 md:py-24" id="process" ref={processRef}>
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-16 md:mb-20 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">The <span className="text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">Process</span></h2>
            <p className="text-slate-200 font-medium max-w-2xl mx-auto text-base md:text-lg">A systematic, milestone-driven approach to achieving publication success.</p>
          </div>

          <div className="relative pl-10 md:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-14 left-16 right-16 h-0.5 bg-white/10 z-0 overflow-hidden rounded-full">
               <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-indigo-500 to-cyan-500 w-full animate-[slide_3s_linear_infinite]"></div>
            </div>

            {/* Mobile Vertical Scroll Line */}
            <div className="absolute left-6.5 top-4 bottom-8 w-0.5 bg-white/10 z-0 md:hidden rounded-full overflow-hidden">
              <div 
                className="w-full bg-gradient-to-b from-cyan-400 to-indigo-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(34,211,238,1)]" 
                style={{ height: `${processProgress}%` }}
              ></div>
            </div>

            {processSteps.map((step, idx) => {
              // Mobile activation state based on scroll progress
              const isActiveOnMobile = processProgress > (idx * 25);
              return (
                <div key={idx} className={`relative z-10 group ${revealClass}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div className={`bg-[#060D1A] border ${isActiveOnMobile ? 'border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]' : 'border-white/10'} rounded-2xl p-6 md:p-8 h-full md:hover:border-indigo-500/50 transition-all duration-500 active:scale-[0.96] md:hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] md:hover:-translate-y-2 relative`}>
                    
                    {/* Node indicator */}
                    <div className={`absolute -left-12 top-10 md:relative md:left-0 md:top-0 h-10 w-10 md:h-16 md:w-16 rounded-full bg-[#030712] border-2 ${isActiveOnMobile ? 'border-indigo-400 text-white bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]' : 'border-white/20 text-slate-300'} flex items-center justify-center text-sm md:text-xl font-black mb-5 md:mb-6 md:group-hover:bg-indigo-500 md:group-hover:border-indigo-400 md:group-hover:text-white transition-all duration-300 mx-auto md:mx-0 md:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]`}>
                      {step.step}
                    </div>
                    
                    <h3 className={`text-lg md:text-xl font-black mb-2 md:mb-3 text-left drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] transition-colors duration-300 ${isActiveOnMobile ? 'text-indigo-100' : 'text-white'}`}>{step.title}</h3>
                    <p className="text-slate-300 font-medium text-left leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs - Enhanced Active Morphing */}
      <section className="relative z-10 py-20 md:py-24 bg-black/30 border-y border-white/5" id="faqs">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <div className={`text-center mb-12 md:mb-16 ${revealClass}`}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Questions</span></h2>
            <p className="text-slate-200 font-medium text-base md:text-lg">Everything you need to know about our publication support services.</p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border-2 rounded-xl transition-all duration-500 overflow-hidden ${openFaq === i ? 'bg-[#0A1326]/90 backdrop-blur-lg border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] scale-[1.01]' : 'bg-[#060D1A] border-white/5 md:hover:border-white/20'}`}
                style={{ transitionDelay: `${(i % 5) * 50}ms` }}
              >
                <button 
                  className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none group active:scale-[0.99] transition-transform"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-black text-sm md:text-lg pr-4 md:pr-8 transition-colors duration-300 tracking-wide ${openFaq === i ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]' : 'text-white md:group-hover:text-cyan-200'}`}>{faq.q}</span>
                  <div className={`shrink-0 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full border-2 transition-all duration-500 ${openFaq === i ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 rotate-180 shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'border-white/10 text-slate-400 bg-[#030712] md:group-hover:border-cyan-500/50 md:group-hover:text-cyan-400'}`}>
                    <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${openFaq === i ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className={`transition-transform duration-500 ${openFaq === i ? 'translate-y-0' : '-translate-y-4'}`}>
                    <p className="text-slate-200 font-medium text-sm md:text-base leading-relaxed px-5 md:px-8 pb-6 md:pb-8 pt-1 md:pt-2 border-t border-white/5 mt-2">
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
      <section className="relative z-10 py-24 md:py-32" id="contact">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <div className={`relative rounded-4xl md:rounded-3xl overflow-hidden bg-[#060D1A] border border-cyan-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group md:hover:border-cyan-400 transition-colors duration-700 ${revealClass}`}>
            
            <div className="absolute top-0 right-0 w-75 md:w-125 h-75 md:h-125 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px] md:group-hover:bg-cyan-500/20 transition-colors duration-1000 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative p-6 py-12 md:p-16 text-center backdrop-blur-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Start Your Publication <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Journey</span></h2>
              <p className="text-slate-200 font-medium mb-10 md:mb-12 max-w-xl mx-auto text-sm md:text-lg">Partner with rigorous academics to achieve your research goals. Reach out for a comprehensive manuscript evaluation.</p>
              
              <div className="max-w-lg mx-auto text-left">
                <SharedForm formId="contact" buttonText="Submit Inquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-10 bg-[#02050D] text-center border-t border-white/5">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-5">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src="/WrirkLogoOld.png" alt="WRIrk Logo" className="h-12 w-12 md:h-16 md:w-16 object-contain opacity-80 hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)] active:scale-90" />
           <span className="text-slate-300 font-black uppercase tracking-widest text-xs md:text-sm">WRIrk Academic Services</span>
           <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest">© 2026 WRIrk. All Rights Reserved.</p>
        </div>
      </footer>
      
      <PopupForm />
    </div>
  );
}
