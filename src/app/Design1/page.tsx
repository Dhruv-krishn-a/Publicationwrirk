'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
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
  Building,
  Briefcase,
  HelpCircle,
  ShieldCheck,
  Zap,
  Bookmark,
  ExternalLink,
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Researchers Guided', desc: 'Across global universities' },
  { value: '15+', label: 'Academic Domains', desc: 'Custom tailored support' },
  { value: '98%', label: 'Journal Fit Accuracy', desc: 'Based on scope & metrics' },
  { value: '24h', label: 'Response Time', desc: 'Fast initial evaluation' },
];

const whyPublicationsMatter = [
  {
    role: 'PhD Scholars',
    tagline: 'Defend with confidence, publish before deadlines.',
    points: [
      'Meets university thesis defense requirements.',
      'Establishes your name in your research community.',
      'Improves chances for postdoc fellowships and grants.'
    ]
  },
  {
    role: 'Faculty & Academics',
    tagline: 'Secure promotions, tenure, and institutional impact.',
    points: [
      'Fulfills API (Academic Performance Indicator) scores.',
      'Positions you for research grants and project funding.',
      'Increases citations and Google Scholar H-index.'
    ]
  },
  {
    role: 'Students (Master\'s)',
    tagline: 'Unlock international admissions and scholarships.',
    points: [
      'Significantly strengthens applications for PhD programs.',
      'Builds credibility in global academic admissions.',
      'Shows research aptitude to prospective advisors.'
    ]
  },
  {
    role: 'Professionals',
    tagline: 'Establish domain authority and consulting leads.',
    points: [
      'Validates industry expertise via peer-reviewed literature.',
      'Opens doors for global keynote speaking & consulting.',
      'Enables transition into academic or corporate R&D roles.'
    ]
  }
];

const checklistItems = [
  { id: 'niche', label: 'Clearly defined research niche & contribution' },
  { id: 'orcid', label: 'Updated ORCID & Google Scholar profile' },
  { id: 'strategy', label: 'A 6-12 month active publication roadmap' },
  { id: 'scope', label: 'Verified journal scope & indexing (Scopus/WoS)' },
  { id: 'quality', label: 'Title, abstract & keywords optimized for search' },
  { id: 'expert', label: 'Peer/expert review completed before submission' },
  { id: 'citations', label: 'Citation-tracking and academic networking setup' },
];

const journalFactors = [
  { title: 'Journal Scope', desc: 'Ensuring your paper\'s theme aligns 100% with the editorial board\'s current focus.' },
  { title: 'Indexing & Metrics', desc: 'Verifying Scopus, Web of Science, PubMed, or UGC-CARE status to build real profile value.' },
  { title: 'Review Timeline', desc: 'Understanding typical peer-review turnarounds so your publication isn\'t delayed for years.' },
  { title: 'Ethical Standards', desc: 'Screening out predatory journals that exploit scholars and hurt academic credibility.' },
];

const services = [
  {
    icon: Search,
    title: 'Journal Selection Support',
    desc: 'Match your paper with the most suitable indexed journals based on scope, speed, and target metrics.',
    tag: 'Highly Recommended'
  },
  {
    icon: ClipboardList,
    title: 'Manuscript Improvement',
    desc: 'Refine manuscript structure, argument flow, formatting, and overall readiness without losing your voice.',
    tag: 'Quality Boost'
  },
  {
    icon: TrendingUp,
    title: 'Publication Strategy',
    desc: 'Formulate a realistic roadmap tailored to your career milestones, tenure, or admission goals.',
    tag: 'Career Growth'
  },
  {
    icon: Users,
    title: 'Research Profile Building',
    desc: 'Optimize Google Scholar, ORCID, and academic profiles to increase your visibility and citation metrics.',
    tag: 'Visibility'
  },
  {
    icon: MessageCircle,
    title: 'Reviewer Response Guidance',
    desc: 'Interpreting peer-reviewer comments and structuring a professional, point-by-point revision plan.',
    tag: 'Revision Phase'
  },
  {
    icon: Clock,
    title: 'Publication Planning',
    desc: 'Develop a strategic publication pipeline to ensure constant and high-quality research output.',
    tag: 'Long-term'
  },
];

const whoWeHelp = [
  { title: 'PhD Scholars', desc: 'Align your thesis chapters to journal formats to ensure graduation on time.', icon: GraduationCap },
  { title: 'Master\'s Students', desc: 'Build an impressive publication record to stand out in PhD applications abroad.', icon: BookOpen },
  { title: 'Faculty Members', desc: 'Secure tenure, complete API milestones, and expand citation H-indexes.', icon: Award },
  { title: 'Independent Scholars', desc: 'Publish high-quality research and establish domain authority without institutional backing.', icon: Briefcase },
  { title: 'Research Labs', desc: 'Implement department-wide roadmaps for peer-reviewed journal output.', icon: Building }
];

const whyChooseUs = [
  { title: 'Research-Focused Support', desc: 'We maintain rigorous standards suited for Scopus, Web of Science, and PubMed requirements.' },
  { title: 'Ethical & Transparent', desc: 'We do not write papers for you. We provide expert advisory, mentoring, and refinement.' },
  { title: 'Tailored Recommendations', desc: 'We analyze your specific keywords, references, and timeline to recommend the best fit.' },
  { title: 'Career-Oriented Approach', desc: 'We align your publications with tenure, fellowships, and academic visibility goals.' },
];

const blogArticles = [
  {
    title: 'How to Build Your Research Profile Step-by-Step',
    category: 'Profile Growth',
    desc: 'Learn how to optimize your ORCID, Google Scholar, and ResearchGate profiles to double your citation visibility.',
    readTime: '5 min read'
  },
  {
    title: 'Why Publications Matter for PhD and Academic Careers',
    category: 'Career Strategy',
    desc: 'A breakdown of how journal indexing affects API scores, tenure tracks, and fellowship applications.',
    readTime: '6 min read'
  },
  {
    title: 'Choosing the Right Journal: Avoiding predatory Traps',
    category: 'Journal Finding',
    desc: 'Key questions to ask before submitting to avoid journals that exploit researchers and hurt credibility.',
    readTime: '8 min read'
  }
];

const steps = [
  { number: '01', title: 'Submit Details', desc: 'Share your title, abstract, or research goals via our simple dashboard.' },
  { number: '02', title: 'Initial Evaluation', desc: 'Our advisory team reviews your input for domain alignment and publication readiness.' },
  { number: '03', title: 'Match & Strategy', desc: 'Receive tailored journal options and a clear strategy to improve your chances.' },
  { number: '04', title: 'Refine & Submit', desc: 'Structure your manuscript, refine submission materials, and submit with confidence.' },
];

const testimonials = [
  {
    quote: "WRIrk’s journal selection support saved me months of trial and error. My paper was accepted in a Scopus-indexed journal within my target timeframe.",
    author: "Dr. Sandeep Vardhan",
    role: "Associate Professor, Management Studies",
    badge: "API Milestone Achieved"
  },
  {
    quote: "As a PhD scholar, handling reviewer feedback felt completely overwhelming. The revision guidance helped me structure a calm, logical response that got my paper accepted.",
    author: "Meera K. Nair",
    role: "Research Scholar, Social Sciences",
    badge: "Published after Major Revision"
  },
  {
    quote: "Converting my Master's thesis into a journal paper was difficult. WRIrk helped me find a strong research niche and publish in a journal that helped secure my PhD admission abroad.",
    author: "Aravind Swamy",
    role: "PhD Candidate, Tech University",
    badge: "PhD Admission Secured"
  }
];

const careerTips = [
  { title: "Define a narrow, deep research scope", text: "Broad topics often lead to shallow arguments. Narrow your focus to a specific, solvable gap to stand out in peer reviews." },
  { title: "Read the target journal's recent issues", text: "Spend an hour reading the last 3-5 papers in your target journal. Aligning your formatting and vocabulary style can prevent desk rejection." },
  { title: "Optimize abstract and keywords first", text: "Editors read abstracts to find reviewers. Use precise keywords and a structured abstract (Introduction, Methods, Results, Conclusion) to capture attention." },
  { title: "Seek pre-submission reviews", text: "Don't submit your first draft. Share your work with peers or advisors to clean up logical gaps before the official journal reviewers see it." },
];

const faqs = [
  {
    q: "How do I know which journal is right for my paper?",
    a: "We analyze your paper's core methodology, reference list, target audience, and current timeline constraints, matching them against indexed databases (Scopus, Web of Science, etc.) to ensure a perfect fit."
  },
  {
    q: "Can you help me if I am publishing for the first time?",
    a: "Yes! We specialize in mentoring early-career researchers and PhD scholars. We walk you through every step of the submission process, explaining peer review norms clearly."
  },
  {
    q: "Do you support PhD and faculty research profiles?",
    a: "Absolutely. We help faculty improve their API scores and H-index, and guide PhD scholars in establishing clear academic visibility early on ORCID, Google Scholar, and ResearchGate."
  },
  {
    q: "What should I prepare before asking for guidance?",
    a: "A draft title, a brief abstract (150-250 words), and your target timeline are all you need to start a free initial consultation."
  },
  {
    q: "How can I improve my chances of acceptance?",
    a: "By ensuring your paper strictly fits the journal's scope, addressing reviewer feedback systematically, writing a highly clear and searchable abstract, and avoiding predatory publishers."
  },
  {
    q: "Do you help with reviewer comments?",
    a: "Yes. We help you translate reviewer feedback into actionable paper updates and guide you in drafting a professional, respectful response letter."
  }
];

export default function Design1() {
  // Tabs for "Why Publications Matter"
  const [activeRoleTab, setActiveRoleTab] = useState(0);

  // Profile Checklist State
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const toggleChecklist = (id: string) => {
    if (completedItems.includes(id)) {
      setCompletedItems(completedItems.filter(item => item !== id));
    } else {
      setCompletedItems([...completedItems, id]);
    }
  };
  const profileProgress = Math.round((completedItems.length / checklistItems.length) * 100);
  const getProgressLabel = (progress: number) => {
    if (progress === 0) return 'Not Started';
    if (progress < 40) return 'Beginner Level';
    if (progress < 70) return 'Growing Profile';
    if (progress < 100) return 'Strong Profile';
    return 'Established Authority';
  };

  // Journal Fit Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    subject: '',
    goal: '',
    title: ''
  });
  const [quizResult, setQuizResult] = useState('');

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizData.subject || !quizData.goal) {
      alert("Please select your subject area and primary goal.");
      return;
    }
    let rec = "";
    if (quizData.goal === 'Fast Publication') {
      rec = `For ${quizData.subject} research looking for rapid turnaround, we recommend targeting Scopus Q3/Q4 journals with structured rapid review options or open-access models. Avoid generalist journals.`;
    } else if (quizData.goal === 'High Impact') {
      rec = `To maximize impact in ${quizData.subject}, target core Web of Science (WoS) SCIE/SSCI journals with high CiteScores. These require highly rigorous methodologies and pre-submission expert reviews.`;
    } else if (quizData.goal === 'Low Budget') {
      rec = `For low-budget publishing in ${quizData.subject}, focus on subscription-based society journals or hybrid models that offer free publishing with standard print cycles.`;
    } else {
      rec = `Focus on specialized journals indexed in Scopus/WoS. Ensure your abstract uses precise keywords to avoid immediate editor desk-rejection.`;
    }
    setQuizResult(rec);
    setQuizStep(4);
  };

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ search state
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(
    faq => faq.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
           faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 font-sans selection:bg-emerald-500 selection:text-[#070b13]">
      
      {/* Decorative Grid Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111726_1px,transparent_1px),linear-gradient(to_bottom,#111726_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Action Bars */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          target="_blank" 
          rel="noreferrer"
          className="p-4 bg-emerald-500 text-[#070b13] rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center font-bold"
          title="WhatsApp Advisor"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a 
          href="tel:+91XXXXXXXXXX" 
          className="p-4 bg-[#111726] text-emerald-400 border border-emerald-500/30 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="Call Now"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Top Utility Bar */}
      <div className="w-full bg-[#0b101d] border-b border-slate-800 text-[11px] tracking-wider text-slate-400 uppercase py-2.5 px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex gap-4 flex-wrap justify-center">
          <span>📧 support@wrirk.com</span>
          <span>💬 WhatsApp Chat Active</span>
          <span>🕒 Mon - Sat: 9 AM - 6 PM</span>
        </div>
        <div>
          <span>Publication Guidance for Researchers, Scholars, & Students</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#070b13]/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/WrirkLogoOld.png"
              alt="Wrirk logo"
              className="h-10 w-10 rounded-full object-contain shadow-sm bg-white/5"
            />
            <div>
              <span className="text-base font-bold tracking-widest text-slate-100 uppercase block">WRIrk</span>
              <span className="text-[10px] tracking-widest uppercase text-emerald-400/80 block">Publication Support</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-slate-300">
            <a href="#why-publish" className="hover:text-emerald-400 transition">Why Publish</a>
            <a href="#profile-builder" className="hover:text-emerald-400 transition">Profile Audit</a>
            <a href="#journal-finder" className="hover:text-emerald-400 transition">Journal Finder</a>
            <a href="#services" className="hover:text-emerald-400 transition">Services</a>
            <a href="#who-we-help" className="hover:text-emerald-400 transition">Who We Help</a>
            <a href="#faqs" className="hover:text-emerald-400 transition">FAQs</a>
          </nav>

          <a
            href="#consultation"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#070b13] transition-all hover:bg-emerald-400"
          >
            <span>Free Consultation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <span className="inline-flex self-center lg:self-start items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs tracking-wider uppercase text-emerald-400 font-semibold mb-6 animate-pulse">
              <Sparkles className="h-3.5 w-3.5" />
              Empowering Academic Research
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-50">
              Publish Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Grow Faster.
              </span><br />
              Build a Research Career.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto lg:mx-0">
              We help researchers choose the right indexed journals, strengthen manuscript logic, avoid desk rejection, and build a highly visible, credible academic profile.
            </p>

            {/* Quick Stats Strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800 pt-8 text-left">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#0e1424]/40 border border-slate-800/80 rounded-2xl p-4 shadow-inner">
                  <span className="text-2xl font-bold text-emerald-400 block">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mt-1">{stat.label}</span>
                  <span className="text-[9px] text-slate-500 block mt-0.5">{stat.desc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#journal-finder"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500 hover:text-[#070b13] transition"
              >
                Check Journal Fit
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-300 hover:border-slate-700 transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero Right - Interactive Consultation Card */}
          <div className="lg:col-span-5 relative" id="consultation">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0e1424] p-6 sm:p-8 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100">Get Free Academic Guidance</h3>
                <p className="text-xs text-slate-400 mt-1">Get custom recommendations from a senior publication expert.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our academic advisor will connect with you within 24 hours."); }}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Dr. / Mr. / Ms. Name"
                    className="w-full rounded-xl border border-slate-800 bg-[#070b13] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@university.edu"
                    className="w-full rounded-xl border border-slate-800 bg-[#070b13] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Research Domain</label>
                  <select 
                    required 
                    className="w-full rounded-xl border border-slate-800 bg-[#070b13] px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-emerald-500 transition"
                  >
                    <option value="">Select Research Area</option>
                    <option value="Management">Management & Business</option>
                    <option value="Social Sciences">Social Sciences & Humanities</option>
                    <option value="Computer Science">Computer Science & Engineering</option>
                    <option value="Healthcare">Healthcare & Medicine</option>
                    <option value="Other">Other Disciplines</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-500 py-3.5 text-xs font-bold uppercase tracking-widest text-[#070b13] shadow-lg hover:bg-emerald-400 transition"
                >
                  Book Free Consultation
                </button>
                <div className="text-[10px] text-center text-slate-500 uppercase tracking-widest mt-2">
                  🛡️ Ethical & 100% Confidential Process
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-slate-900 bg-[#0b101c]/40 py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Guiding Academic Success</span>
              <h2 className="text-lg font-bold text-slate-200 mt-1">Ethical Publication Advisory Built on Research Integrity</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center w-full md:w-auto text-slate-400 text-sm font-semibold tracking-wider text-center">
              <div className="flex items-center justify-center gap-2 bg-[#111726]/60 border border-slate-800 rounded-xl px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Indexed Only</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#111726]/60 border border-slate-800 rounded-xl px-4 py-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span>Desk-Fit Check</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#111726]/60 border border-slate-800 rounded-xl px-4 py-2">
                <GraduationCap className="h-4 w-4 text-emerald-400" />
                <span>PhD Standard</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#111726]/60 border border-slate-800 rounded-xl px-4 py-2">
                <Award className="h-4 w-4 text-emerald-400" />
                <span>Expert Panel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Publications Matter - Interactive Tabs */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="why-publish">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Left */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Realize Your Impact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mt-3 leading-tight">
              Why Publications <br />Matter For Your Career
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Publishing is more than completing an academic requirement. It is the single most powerful way to build credibility, secure funding, and advance your profile.
            </p>
            <div className="mt-8">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition"
              >
                <span>Understand Your Path</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Interactive Role Switcher Right */}
          <div className="lg:col-span-7 bg-[#0b101c]/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-6">
              {whyPublicationsMatter.map((roleData, idx) => (
                <button
                  key={roleData.role}
                  onClick={() => setActiveRoleTab(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                    activeRoleTab === idx 
                      ? 'bg-emerald-500 text-[#070b13]' 
                      : 'bg-[#111726] text-slate-300 hover:bg-[#161d30]'
                  }`}
                >
                  {roleData.role}
                </button>
              ))}
            </div>

            <div className="min-h-[160px] flex flex-col justify-between">
              <div>
                <span className="text-emerald-400 font-semibold text-sm italic block mb-3">
                  "{whyPublicationsMatter[activeRoleTab].tagline}"
                </span>
                <ul className="space-y-3.5">
                  {whyPublicationsMatter[activeRoleTab].points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How to Build Your Research Profile - Interactive Checklist */}
      <section className="bg-[#0b101c]/30 border-y border-slate-900/60 py-20 lg:py-28" id="profile-builder">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Checklist Selector Left */}
          <div className="lg:col-span-7 bg-[#0e1424] border border-slate-800 rounded-3xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-100">Research Profile Audit Checklist</h3>
              <p className="text-xs text-slate-400 mt-1">Select the tasks you have successfully completed in your research pipeline:</p>
            </div>

            <div className="space-y-3">
              {checklistItems.map((item) => {
                const isChecked = completedItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`w-full flex items-center justify-between text-left px-4 py-3.5 rounded-xl border transition ${
                      isChecked 
                        ? 'border-emerald-500/40 bg-emerald-500/5 text-slate-200' 
                        : 'border-slate-800 bg-[#070b13] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className={`h-5 w-5 rounded-md flex items-center justify-center border transition ${
                      isChecked 
                        ? 'bg-emerald-500 border-emerald-500 text-[#070b13]' 
                        : 'border-slate-700 bg-slate-900'
                    }`}>
                      {isChecked && <Check className="h-4.5 w-4.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Progress Display Right */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Interactive Tool</span>
            <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">
              Evaluate Your Research Strength
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Use our live profile tool to see where your publication pipeline stands. Click on the checklist items on the left to measure your current profile level.
            </p>

            <div className="mt-8 bg-[#0e1424] border border-slate-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-slate-400">Current Level:</span>
                <span className="text-sm font-bold text-emerald-400">{getProgressLabel(profileProgress)}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-3 mb-4 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${profileProgress}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-slate-400">
                <span>Completed: {completedItems.length}/{checklistItems.length} tasks</span>
                <span>{profileProgress}%</span>
              </div>

              {profileProgress < 100 ? (
                <p className="text-xs text-slate-300 mt-4 leading-relaxed border-t border-slate-800/80 pt-4">
                  💡 <strong>Recommendation:</strong> WRIrk can help you resolve missing items to fast-track your academic and publication roadmap.
                </p>
              ) : (
                <p className="text-xs text-emerald-400 mt-4 leading-relaxed border-t border-slate-800/80 pt-4">
                  🏆 <strong>Outstanding!</strong> You have a highly optimized research setup. Contact us to strategize for top-tier indexing.
                </p>
              )}
            </div>

            <div className="mt-6">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-xl bg-[#111726] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 px-5 py-3 text-xs font-bold uppercase tracking-wider transition"
              >
                <span>Request Custom Roadmap</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Choosing the Right Journal - Interactive Wizard */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="journal-finder">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold font-semibold">Match Wisely</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mt-3 leading-tight">
              Choosing the <br />Right Journal
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Submitting to the wrong journal wastes months and risks rejection. An aligned scope and trusted indexing are essential for your career profile.
            </p>

            <div className="mt-8 space-y-4">
              {journalFactors.map((factor, fIdx) => (
                <div key={fIdx} className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0 mt-0.5">
                    {fIdx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{factor.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Wizard Right */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0e1424] p-6 sm:p-8 shadow-xl min-h-[380px] flex flex-col justify-between">
              
              {/* Wizard Steps indicator */}
              <div className="flex justify-between items-center mb-6 border-b border-slate-800/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Journal Fit Tool</span>
                <span className="text-xs font-semibold text-emerald-400">Step {quizStep} of 3</span>
              </div>

              <form onSubmit={handleQuizSubmit} className="flex-grow flex flex-col justify-between">
                
                {/* Step 1: Subject Area */}
                {quizStep === 1 && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300 font-medium">Select your primary research area:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Management & Business', 'Social Sciences', 'Healthcare & Medical', 'CS & Engineering'].map((area) => (
                        <button
                          type="button"
                          key={area}
                          onClick={() => setQuizData({ ...quizData, subject: area })}
                          className={`px-4 py-3 rounded-xl border text-xs font-bold tracking-wider uppercase transition ${
                            quizData.subject === area 
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                              : 'border-slate-800 bg-[#070b13] text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Primary Goal */}
                {quizStep === 2 && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300 font-medium">What is your primary publication goal?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Fast Publication', 'High Impact', 'Low Budget', 'Specific Indexing'].map((goal) => (
                        <button
                          type="button"
                          key={goal}
                          onClick={() => setQuizData({ ...quizData, goal: goal })}
                          className={`px-4 py-3 rounded-xl border text-xs font-bold tracking-wider uppercase transition ${
                            quizData.goal === goal 
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                              : 'border-slate-800 bg-[#070b13] text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Paper Details */}
                {quizStep === 3 && (
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300 font-medium">Enter your working paper title (optional):</p>
                    <input 
                      type="text"
                      placeholder="e.g. A Study on AI Ethics in Modern Higher Education"
                      value={quizData.title}
                      onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-[#070b13] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition"
                    />
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed uppercase tracking-wider">
                      💡 We use this to evaluate keyword density and thematic focus.
                    </div>
                  </div>
                )}

                {/* Step 4: Result */}
                {quizStep === 4 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">Our Recommendation</span>
                      <p className="text-sm text-slate-200 leading-relaxed">{quizResult}</p>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      To get a specific shortlist of 3 matched journals along with their acceptance rates and average review timelines, submit your details for a free consult.
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/80">
                  {quizStep > 1 && quizStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setQuizStep(quizStep - 1)}
                      className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-100 flex items-center gap-1"
                    >
                      <ChevronLeft className="h-4 w-4" /> Back
                    </button>
                  ) : <div />}

                  {quizStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (quizStep === 1 && !quizData.subject) {
                          alert("Please select a subject area.");
                          return;
                        }
                        if (quizStep === 2 && !quizData.goal) {
                          alert("Please select a publication goal.");
                          return;
                        }
                        setQuizStep(quizStep + 1);
                      }}
                      className="rounded-xl bg-[#111726] border border-slate-800 text-slate-300 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-400 transition flex items-center gap-1"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : quizStep === 3 ? (
                    <button
                      type="submit"
                      className="rounded-xl bg-emerald-500 text-[#070b13] px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-400 transition"
                    >
                      Submit & Analyze
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setQuizStep(1);
                        setQuizData({ subject: '', goal: '', title: '' });
                        setQuizResult('');
                      }}
                      className="rounded-xl border border-slate-800 bg-[#070b13] text-slate-400 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:text-slate-200 transition"
                    >
                      Restart Tool
                    </button>
                  )}
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* Services Section - Dynamic Hover Layout */}
      <section className="bg-[#0b101c]/30 border-y border-slate-900/60 py-20 lg:py-28" id="services">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Services Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mt-3 leading-tight">
              Comprehensive Publication Support
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              We help researchers publish with clarity and strategy. Every stage of our support is designed to build your long-term research career.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, sIdx) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={sIdx}
                  className="group relative rounded-3xl border border-slate-800/80 bg-[#0e1424]/60 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:bg-[#0e1424]"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-colors group-hover:bg-emerald-500 group-hover:text-[#070b13]">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold bg-[#111726] border border-slate-800 rounded-full px-3 py-1">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-emerald-400">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>

                  <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-emerald-400 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Who We Help Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="who-we-help">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Tailored Assistance</span>
            <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">Who We Partner With</h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              No matter your academic status or discipline, we provide structured mentoring and manuscript audits that conform to code guidelines.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {whoWeHelp.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-[#0e1424]/60 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/20 transition">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-100">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose WRIrk Section */}
      <section className="bg-[#0b101c]/30 border-y border-slate-900/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Our Principles</span>
            <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">
              Why Choose WRIrk Publication Support
            </h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              We do not just help you submit. We help you publish with clarity, confidence, and long-term academic growth in mind.
            </p>
            <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <p className="text-xs text-emerald-400 leading-relaxed font-semibold italic">
                "Our mission is to support ethical peer review and protect scholars from predatory traps that degrade academic profiles."
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-100">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / How It Works */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="how-it-works">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Structured Approach</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mt-3 leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            A simple 4-step workflow to match, refine, and submit your research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xl font-black mb-6 transition group-hover:bg-emerald-500 group-hover:text-[#070b13]">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-slate-100">{step.title}</h3>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed max-w-xs">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] h-[1px] bg-slate-800 z-0 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Research Career Tips */}
      <section className="bg-[#0b101c]/30 border-y border-slate-900/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Scholar Insights</span>
            <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">Research Career Tips</h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Practical publication strategies designed to optimize your peer-review success rate and citation influence.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-slate-400 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">
              💡 Tip of the Day
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerTips.map((tip, tIdx) => (
            <div key={tIdx} className="bg-[#0e1424] border border-slate-800 rounded-2xl p-6 transition hover:border-emerald-500/20">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">Tip #0{tIdx + 1}</div>
              <h3 className="text-sm font-bold text-slate-100 leading-snug">{tip.title}</h3>
              <p className="text-xs text-slate-400 mt-3.5 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 text-center lg:text-left">
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold font-semibold">Proof of Support</span>
            <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">What Researchers Say</h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              Hear from PhD candidates, faculty, and scholars who have successfully navigated peer review with WRIrk.
            </p>
            
            <div className="flex gap-2 justify-center lg:justify-start mt-6">
              <button
                onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="h-10 w-10 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="h-10 w-10 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#0e1424] border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden min-h-[250px] flex flex-col justify-between">
            <div className="text-emerald-400 text-6xl font-serif leading-none absolute -top-2 left-6 opacity-20 pointer-events-none">“</div>
            
            <div className="relative z-10">
              <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-6">
                {testimonials[activeTestimonial].badge}
              </span>
              <p className="text-base sm:text-lg leading-relaxed text-slate-200 italic">
                {testimonials[activeTestimonial].quote}
              </p>
            </div>

            <div className="border-t border-slate-800/80 pt-6 mt-8 flex justify-between items-center flex-wrap gap-4">
              <div>
                <span className="font-bold text-slate-100 block text-sm">{testimonials[activeTestimonial].author}</span>
                <span className="text-xs text-slate-400 block mt-0.5">{testimonials[activeTestimonial].role}</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">⭐⭐⭐⭐⭐ 5.0 Rating</span>
            </div>
          </div>

        </div>
      </section>

      {/* Resource / Blog Preview Section */}
      <section className="bg-[#0b101c]/30 border-y border-slate-900/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Research Library</span>
              <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">Latest Academic Resources</h2>
            </div>
            <a 
              href="#consultation" 
              className="text-xs font-bold uppercase tracking-widest text-emerald-400 hover:underline flex items-center gap-1.5"
            >
              Access Library <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((art, idx) => (
              <div key={idx} className="bg-[#0e1424] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between transition hover:border-emerald-500/20 group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <div className="border-t border-slate-800/60 pt-4 mt-6 flex justify-between items-center text-xs font-semibold text-slate-500 group-hover:text-emerald-400 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28" id="faqs">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-slate-800 pb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400 font-bold">Get Answers</span>
            <h2 className="text-3xl font-extrabold text-slate-50 mt-3 leading-tight">Frequently Asked Questions</h2>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search FAQs..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#070b13] pl-9 pr-4 py-3 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-slate-800 rounded-xl bg-[#0e1424] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left p-5 transition hover:bg-[#12192b]"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-3">
                      <CircleHelp className="h-5 w-5 text-emerald-400 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-slate-800/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-500 uppercase tracking-widest text-xs">
              No FAQs matched your search. Try another query.
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-[#0e1424] to-[#070b13] p-8 sm:p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-emerald-400 font-bold font-semibold">Start Publishing Smarter</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-50 mt-4 leading-none">
            Ready to Build Your <br className="hidden sm:inline" />Research Profile?
          </h2>
          <p className="mt-6 text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get practical academic guidance that helps you select aligned journals, refine manuscripts, and advance your research milestones.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#070b13] hover:bg-emerald-400 transition"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-[#111726]/80 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:border-slate-700 hover:text-emerald-400 transition"
            >
              WhatsApp Advisor
            </a>
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-6">
            No pressure. Just clear, academic-focused guidance.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040810] border-t border-slate-900 py-12 text-slate-500 text-xs">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="text-slate-300 font-bold uppercase tracking-widest text-sm block mb-4">WRIrk Support</span>
            <p className="leading-relaxed text-slate-400">
              Helping scholars, faculty, and students choose suitable journals, strengthen manuscripts, and build a lasting academic footprint.
            </p>
          </div>
          <div>
            <span className="text-slate-300 font-bold uppercase tracking-widest text-sm block mb-4">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#why-publish" className="hover:text-emerald-400 transition">Why Publications Matter</a></li>
              <li><a href="#profile-builder" className="hover:text-emerald-400 transition">Profile Audit Checklist</a></li>
              <li><a href="#journal-finder" className="hover:text-emerald-400 transition">Journal Fit quiz</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">Services Ecosystem</a></li>
            </ul>
          </div>
          <div>
            <span className="text-slate-300 font-bold uppercase tracking-widest text-sm block mb-4">Contact Info</span>
            <ul className="space-y-2 text-slate-400">
              <li>📧 info@wrirk.com</li>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>🏢 WRIrk Academic Advisory</li>
              <li>📍 Research Hub Office</li>
            </ul>
          </div>
          <div>
            <span className="text-slate-300 font-bold uppercase tracking-widest text-sm block mb-4">Privacy & Terms</span>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-slate-300 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-300 transition">Terms & Conditions</a></li>
              <li className="pt-2 text-[10px] text-slate-600 uppercase tracking-widest">© 2026 WRIrk. All Rights Reserved.</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
