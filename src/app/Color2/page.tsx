'use client';

import React, { useState, type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Globe2,
  Layers3,
  LayoutList,
  MessageCircleMore,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  SquareArrowOutUpRight,
  Star,
  Users,
  Wand2,
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Researchers supported' },
  { value: '15+', label: 'Research domains' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '24h', label: 'Typical response time' },
];

const painPoints = [
  {
    title: 'Paper is good, but the journal fit is wrong',
    text: 'Wrirk helps identify better journal matches based on scope, indexing, review time, and publication strategy.',
  },
  {
    title: 'Reviewer comments feel overwhelming',
    text: 'We help interpret feedback and organize a structured response so revision becomes manageable.',
  },
  {
    title: 'Thesis needs to become a publishable article',
    text: 'Wrirk converts long-form academic work into concise, journal-ready manuscript structure.',
  },
  {
    title: 'The manuscript needs stronger presentation',
    text: 'We refine flow, clarity, originality presentation, and publication readiness without changing your authorship.',
  },
];

const reasons = [
  'Ethical guidance only',
  'Human expert review',
  'Publication strategy first',
  'Domain-aware support',
  'Confidential handling',
  'Fast consultation response',
];

const profileSteps = [
  {
    title: 'Identify your niche',
    text: 'Clarify the research gap, audience, and contribution so your work has a sharp academic identity.',
  },
  {
    title: 'Study the literature',
    text: 'Map prior work, citations, and competing methods to position your paper with confidence.',
  },
  {
    title: 'Develop original work',
    text: 'Strengthen the methodology, argument, and evidence so the manuscript reads as publication-ready.',
  },
  {
    title: 'Publish strategically',
    text: 'Match the paper to the right journal scope, review style, and visibility goals.',
  },
  {
    title: 'Grow citations and visibility',
    text: 'Build a stronger academic profile through consistent publication and smarter dissemination.',
  },
];

const journalFactors = [
  'Scope match',
  'Indexing',
  'Review time',
  'Acceptance fit',
  'Impact and reputation',
  'Open access vs subscription',
  'Ethical screening',
];

const tips = [
  {
    tag: 'Editorial',
    title: 'Choosing a topic that can actually publish',
    text: 'Start with a gap that is relevant, narrow enough to finish, and strong enough to stand out in review.',
  },
  {
    tag: 'Research note',
    title: 'How to make a literature review feel sharp',
    text: 'Use the literature to reveal contrast, not just summary. That is where a strong narrative begins.',
  },
  {
    tag: 'Publication guide',
    title: 'Reviewer responses without panic',
    text: 'Answer each comment with structure, clarity, and evidence. Revision is part of the publication journey.',
  },
  {
    tag: 'Profile growth',
    title: 'Build visibility beyond one paper',
    text: 'A strong publication strategy helps citations, collaboration, and academic recognition over time.',
  },
];

const services = [
  'Research publication consultation',
  'Journal selection support',
  'Manuscript editing',
  'Submission support',
  'Reviewer comment assistance',
  'Thesis to paper conversion',
  'Originality improvement',
  'Academic profile guidance',
];

const serviceBlocks = [
  {
    title: 'Start with clarity',
    desc: 'Get a publication assessment, identify the right support, and understand the best next step.',
    items: ['Free consultation', 'Research assessment', 'Service recommendation'],
  },
  {
    title: 'Refine the manuscript',
    desc: 'Improve structure, logic, readability, and research presentation while preserving authorship.',
    items: ['Manuscript editing', 'Thesis conversion', 'Originality improvement'],
  },
  {
    title: 'Move toward publication',
    desc: 'Choose the right journal, prepare submission materials, and handle reviewer feedback strategically.',
    items: ['Journal matching', 'Submission support', 'Reviewer response support'],
  },
];

const process = [
  'Consultation',
  'Research evaluation',
  'Journal matching',
  'Manuscript preparation',
  'Editing',
  'Submission',
  'Reviewer handling',
  'Publication support',
];

const testimonials = [
  {
    quote:
      'Wrirk made the publication path feel clear. The journal matching and reviewer guidance saved us weeks.',
    name: 'Dr. Priya Sharma',
    meta: 'Management Research • Published after revision',
  },
  {
    quote:
      'The manuscript felt much stronger after their editorial support. It was still my work, just sharper and more strategic.',
    name: 'Rajesh Kumar',
    meta: 'Healthcare Research • Journal readiness support',
  },
  {
    quote:
      'They helped us move from thesis format to a publishable article with confidence and structure.',
    name: 'Dr. Anita Desai',
    meta: 'Social Science Scholar • Thesis-to-paper conversion',
  },
];

const faqs = [
  {
    q: 'What does Wrirk do?',
    a: 'Wrirk helps researchers publish smarter through journal selection, manuscript support, editorial refinement, and publication guidance.',
  },
  {
    q: 'Do you write the research for me?',
    a: 'No. The service is designed as ethical academic support. The researcher remains the author and Wrirk provides guidance, structure, and publication help.',
  },
  {
    q: 'Can you help with reviewer comments?',
    a: 'Yes. Wrirk can help interpret reviewer feedback and shape a clear, professional response strategy.',
  },
  {
    q: 'Do you support different domains?',
    a: 'Yes. The service is designed for multiple academic domains including management, social science, healthcare, engineering, and more.',
  },
  {
    q: 'Is this suitable for PhD scholars and universities?',
    a: 'Yes. Wrirk is structured for individual researchers, PhD scholars, and institutional publication support needs.',
  },
  {
    q: 'How quickly can I get help?',
    a: 'The initial assessment is designed to respond quickly, so you can understand the best publication path without delay.',
  },
];

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-[11px] uppercase tracking-[0.4em] text-fuchsia-200/70">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl leading-[1.04] tracking-tight text-slate-50 font-semibold">
        {title}
      </h2>
      <p className="mt-4 text-sm md:text-base leading-7 text-slate-300 max-w-2xl">{subtitle}</p>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 px-3 py-1 text-[11px] tracking-[0.28em] uppercase text-fuchsia-100/90 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
      {children}
    </span>
  );
}

function ServiceLine({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/8 hover:shadow-[0_30px_120px_rgba(0,0,0,0.32)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
        <ArrowRight className="h-4 w-4 text-fuchsia-300 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function FloatingActionButton({ href, icon: Icon, label, className }: { href: string; icon: LucideIcon; label: string; className?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group flex items-center overflow-hidden rounded-full border border-white/10 bg-[#0c1418]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-fuchsia-400/35 ${className ?? ''}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-200 transition-all duration-300 group-hover:bg-fuchsia-500/25">
        <Icon className="h-5 w-5" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-medium text-slate-100 transition-all duration-300 group-hover:max-w-[180px] group-hover:pr-4">
        {label}
      </span>
    </a>
  );
}

function QuoteMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl leading-none text-fuchsia-200">
      “
    </div>
  );
}

export default function WrirkLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#08101F] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-[0.28] [background-image:radial-gradient(rgba(232,121,249,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,121,249,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(162,28,175,0.14),transparent_30%)]" />

      {/* Floating actions */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <FloatingActionButton href="https://wa.me/91XXXXXXXXXX" icon={MessageCircleMore} label="WhatsApp" />
        <FloatingActionButton href="tel:+91XXXXXXXXXX" icon={PhoneCall} label="Call now" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08101F]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/WrirkLogoOld.png"
              alt="Wrirk logo"
              className="h-11 w-11 rounded-full object-contain shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            />
            <div>
              <div className="text-sm font-semibold tracking-[0.28em] uppercase text-slate-50">Wrirk</div>
              <div className="text-[11px] tracking-[0.32em] uppercase text-fuchsia-100/65">Research Publication Support</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.28em] text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-fuchsia-200">Services</a>
            <a href="#profile" className="transition hover:text-fuchsia-200">Profile</a>
            <a href="#journal" className="transition hover:text-fuchsia-200">Journal Match</a>
            <a href="#process" className="transition hover:text-fuchsia-200">Process</a>
            <a href="#contact" className="transition hover:text-fuchsia-200">Contact</a>
          </nav>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-fuchsia-100 transition hover:border-fuchsia-300/40 hover:bg-fuchsia-400/15 hover:text-white"
          >
            Book a consultation <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Hero */}
        <section className="grid gap-12 py-14 md:grid-cols-[1.12fr_0.88fr] md:gap-8 md:py-20">
          <div className="flex flex-col justify-center">
            <Pill>Premium academic advisory</Pill>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-slate-50 md:text-7xl">
              Research publication services for PhD scholars, academics, and universities.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Wrirk helps researchers publish with clarity, strategy, and expert guidance through journal selection,
              manuscript refinement, submission support, reviewer response assistance, and ethical publication support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950 shadow-[0_18px_50px_rgba(232,121,249,0.24)] transition hover:-translate-y-0.5 hover:bg-fuchsia-300"
              >
                Book a free consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300/30 hover:bg-white/8"
              >
                Explore services <SquareArrowOutUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-fuchsia-400/20 hover:bg-white/7">
                  <div className="text-2xl font-semibold tracking-tight text-slate-50">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[30px] border border-white/10 bg-white/5 p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {reasons.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-[#0c171b] px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200 transition hover:border-fuchsia-300/30 hover:bg-white/8">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute right-6 top-8 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
            <div className="relative w-full max-w-xl">
              <div className="absolute -left-3 top-6 h-full w-full -rotate-6 rounded-[34px] border border-white/10 bg-white/5 animate-[floatBack_8s_ease-in-out_infinite]" />
              <div className="absolute left-2 top-2 h-full w-full -rotate-3 rounded-[34px] border border-white/10 bg-white/8 animate-[floatMid_7s_ease-in-out_infinite]" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_30px_100px_rgba(0,0,0,0.35)] animate-[floatFront_6s_ease-in-out_infinite]">
                <div className="aspect-[4/5] p-5 md:p-7">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    <span>Manuscript review</span>
                    <span>Publication readiness</span>
                  </div>

                  <div className="mt-6 rounded-[26px] border border-white/10 bg-[#0c171b]/90 p-4 shadow-sm md:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.25em] text-fuchsia-200/80">Journal shortlist</div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">Best-fit journal match</div>
                      </div>
                      <div className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-fuchsia-100">
                        94% fit
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {['Scope alignment', 'Indexing check', 'Review time', 'Ethical screening'].map((item, idx) => (
                        <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/8">
                          <span className="text-sm text-slate-300">{item}</span>
                          <span className="text-sm font-medium text-slate-50">0{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/8">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Submission</div>
                      <div className="mt-2 text-lg font-semibold text-slate-50">Ready for next step</div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/8">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Integrity</div>
                      <div className="mt-2 text-lg font-semibold text-slate-50">Ethical support only</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility band */}
        <section className="border-y border-white/10 py-6 md:py-8">
          <div className="grid gap-4 md:grid-cols-4 md:gap-0">
            {[
              ['15+', 'years of academic support'],
              ['500+', 'researchers guided'],
              ['15+', 'domains covered'],
              ['24h', 'consultation response'],
            ].map(([value, label]) => (
              <div key={label} className="flex items-center gap-4 md:justify-center md:border-r md:border-white/10 last:border-r-0">
                <div className="text-2xl font-semibold text-slate-50">{value}</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO intro block */}
        <section className="py-16 md:py-20">
          <div className="grid gap-6 rounded-[36px] border border-white/10 bg-white/5 p-7 md:grid-cols-[1fr_0.9fr] md:p-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200/70">SEO focus</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.02] tracking-tight text-slate-50">
                Research publication support that helps your paper get closer to acceptance.
              </h2>
              <p className="mt-5 max-w-2xl text-sm md:text-base leading-8 text-slate-300">
                Wrirk is built for scholars searching for research publication services, journal selection help,
                manuscript editing, thesis to paper conversion, reviewer response support, and publication consultation.
                The experience is premium, ethical, and designed to help researchers move confidently through the
                publication process.
              </p>
            </div>
            <div className="rounded-[30px] border border-fuchsia-400/15 bg-[#0c171b] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
              <div className="flex items-center gap-2 text-fuchsia-200">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-[0.35em]">What people search for</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'research publication services',
                  'journal selection support',
                  'publication consultant',
                  'manuscript editing',
                  'thesis to paper conversion',
                  'reviewer response help',
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 md:py-28">
          <SectionTitle
            eyebrow="Common publication problems"
            title="We fix the friction points that stop papers from moving forward."
            subtitle="Visitors should quickly recognize their own problem, then see that Wrirk is the expert path forward."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10" />
                  <ArrowRight className="h-4 w-4 text-fuchsia-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Profile journey */}
        <section id="profile" className="py-20 md:py-28">
          <SectionTitle
            eyebrow="Research growth journey"
            title="Build a stronger research profile with a clear publication path."
            subtitle="Wrirk turns publication into a guided progression, helping you move from niche selection to visibility, citations, and a stronger academic identity."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {profileSteps.map((step, index) => (
              <div key={step.title} className="group relative rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/25 hover:bg-white/7">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">0{index + 1}</div>
                  {index < profileSteps.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-fuchsia-300 md:block transition-transform group-hover:translate-x-1" /> : null}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-slate-50">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Manifesto section */}
        <section className="grid gap-8 border-y border-white/10 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200/70">Why publications matter</div>
            <div className="mt-4 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-tight text-slate-50 md:text-7xl">
              Publication is not the end of research.
              <span className="block text-fuchsia-300 italic">It is the beginning of academic influence.</span>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              A strong publication improves visibility, builds credibility, attracts collaboration, supports career growth, and creates a lasting academic footprint.
            </p>
          </div>
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.24)] md:p-10">
            <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Editorial note</div>
            <p className="mt-6 text-2xl md:text-4xl leading-tight italic text-fuchsia-100">
              "A well-published researcher is not simply visible. They are trusted, cited, and invited into the conversation."
            </p>
            <div className="mt-8 text-sm uppercase tracking-[0.3em] text-slate-400">Wrirk academic advisory lens</div>
          </div>
        </section>

        {/* Journal selection */}
        <section id="journal" className="py-20 md:py-28">
          <SectionTitle
            eyebrow="Journal matching advisory"
            title="Choose the right journal with a guided, expert-led review."
            subtitle="Instead of guessing, Wrirk helps compare scope, indexing, review time, ethical fit, and publication strategy so the choice feels informed and intentional."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Decision factors</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {journalFactors.map((factor, idx) => (
                  <span key={factor} className={`rounded-full border px-4 py-2 text-sm transition ${idx === 0 ? 'border-fuchsia-300/25 bg-fuchsia-400/10 text-fuchsia-100' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/8'}`}>
                    {factor}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-[#0c171b] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Recommended match</div>
                      <div className="mt-1 text-xl font-semibold text-slate-50">Strong scope alignment</div>
                    </div>
                    <div className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-fuchsia-100 shadow-sm">
                      High fit
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Ethical screening</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Avoid misleading journals and maintain a publication path that supports credibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">What we evaluate</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-50">A consultation, not a guess</div>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-[#0c171b] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-300 md:block">
                  Guided review
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  'Scope fit',
                  'Indexing visibility',
                  'Review cycle',
                  'Acceptance strategy',
                  'Open access choice',
                  'Publication ethics',
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[20px] border border-white/10 bg-[#0c171b] px-4 py-4 transition hover:bg-white/8">
                    <span className="text-sm text-slate-300">{item}</span>
                    <BadgeCheck className="h-4 w-4 text-fuchsia-300" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[28px] border border-fuchsia-400/15 bg-[linear-gradient(135deg,rgba(232,121,249,0.18),rgba(162,28,175,0.18))] p-6 text-white shadow-[0_25px_80px_rgba(0,0,0,0.24)]">
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">Recommendation style</div>
                <div className="mt-2 text-2xl font-semibold">Data-led, ethical, and publication-focused.</div>
                <p className="mt-3 text-sm leading-6 text-white/82">
                  Wrirk helps you choose journals that fit the manuscript, not just the prestige.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 md:py-28">
          <SectionTitle
            eyebrow="Services ecosystem"
            title="Support that feels interconnected, not fragmented."
            subtitle="Wrirk is designed as a complete publication support experience—from the first consultation to the final submission and reviewer response stage."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {serviceBlocks.map((block) => (
              <div key={block.title} className="rounded-[34px] border border-white/10 bg-white/5 p-6 md:p-8 transition hover:-translate-y-1 hover:bg-white/8">
                <div className="flex items-center gap-3 text-fuchsia-200">
                  <div className="h-10 w-10 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10" />
                  <div className="text-[11px] uppercase tracking-[0.3em]">Wrirk support</div>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-50">{block.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{block.desc}</p>
                <div className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-[#0c171b] px-4 py-3 text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-white/10 bg-[#0c171b] p-6 md:p-8">
            <div className="flex items-center gap-2 text-fuchsia-200">
              <LayoutList className="h-4 w-4" />
              <span className="text-[11px] uppercase tracking-[0.35em]">All supported services</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="py-16 md:py-20">
          <div className="grid gap-6 rounded-[36px] border border-white/10 bg-white/5 p-7 md:grid-cols-[1fr_1fr] md:p-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200/70">Who we help</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.02] tracking-tight text-slate-50">
                Designed for individual researchers and institutional teams.
              </h2>
              <p className="mt-5 max-w-2xl text-sm md:text-base leading-8 text-slate-300">
                Whether you are preparing your first paper, converting a thesis into a journal article, revising after reviewer comments, or building a publication plan for your department, Wrirk provides structured academic support.
              </p>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-[#0c171b] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-3">
                {['PhD scholars', 'Faculty members', 'Early researchers', 'Universities', 'Research centers', 'Institutions'].map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/10 bg-white/5 px-4 py-4 text-center transition hover:bg-white/8">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20 md:py-28">
          <SectionTitle
            eyebrow="Publication process"
            title="A smooth path from consultation to publication support."
            subtitle="Every stage is designed to reduce uncertainty and keep the work moving with editorial precision."
          />

          <div className="mt-14 grid gap-3 lg:grid-cols-8">
            {process.map((step, idx) => (
              <div key={step} className={`rounded-[24px] border border-white/10 p-5 transition hover:-translate-y-1 ${idx % 2 ? 'bg-white/5' : 'bg-[#0c171b]'}`}>
                <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">0{idx + 1}</div>
                <div className="mt-3 text-sm font-semibold text-slate-50 leading-6">{step}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 rounded-[34px] border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_1fr] md:p-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">What you get</div>
              <h3 className="mt-3 text-2xl font-semibold text-slate-50">A clear next step, not a vague promise.</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Publication assessment', 'Journal shortlist', 'Support plan', 'Expert consultation'].map((item) => (
                <div key={item} className="rounded-[18px] border border-white/10 bg-[#0c171b] px-4 py-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips column */}
        <section className="grid gap-8 border-y border-white/10 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200/70">Research career tips</div>
            <h2 className="mt-4 text-4xl md:text-6xl leading-[0.98] tracking-tight text-slate-50 font-semibold">
              Editorial guidance for sharper research decisions.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Use a publication mindset from the start so your topic, structure, citations, and response strategy all work toward the same outcome.
            </p>

            <div className="mt-8 rounded-[30px] border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Featured guidance</div>
              <p className="mt-4 text-2xl md:text-3xl italic leading-tight text-fuchsia-100">
                "A strong abstract does not just describe the paper. It positions the paper."
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {tips.map((tip, idx) => (
              <div key={tip.title} className="rounded-[30px] border border-white/10 bg-white/5 p-6 md:p-7 transition hover:-translate-y-1 hover:bg-white/8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{tip.tag}</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-50">{tip.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-white/10 py-20 md:py-24">
          <SectionTitle
            eyebrow="Success stories"
            title="Editorial-style testimonials from researchers who moved forward with confidence."
            subtitle="These are the kinds of outcomes that matter: clearer strategy, stronger manuscripts, better submission decisions, and a smoother publication journey."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:bg-white/7">
                <QuoteMark />
                <blockquote className="mt-5 text-xl md:text-2xl leading-[1.35] text-slate-50 italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-semibold text-slate-50">{t.name}</div>
                  <div className="mt-1 text-sm text-slate-300">{t.meta}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <SectionTitle
            eyebrow="Frequently asked questions"
            title="Clear answers, calm structure, and no unnecessary clutter."
            subtitle="A refined FAQ section helps visitors understand the service quickly and moves them closer to a consultation."
          />

          <div className="mt-12 divide-y divide-white/10 rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-sm">
            {faqs.map((faq, idx) => {
              const open = openFaq === idx;
              return (
                <button
                  key={faq.q}
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="w-full px-6 py-5 text-left md:px-8 transition hover:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-lg font-semibold text-slate-50">
                      <CircleHelp className="h-5 w-5 text-fuchsia-300" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </div>
                  {open ? <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{faq.a}</p> : null}
                </button>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-20 md:pb-28">
          <div className="grid overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.25)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-[linear-gradient(180deg,rgba(232,121,249,0.18),rgba(162,28,175,0.22))] p-8 text-white md:p-12">
              <div className="text-[11px] uppercase tracking-[0.35em] text-white/70">Contact us</div>
              <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-[0.98] tracking-tight">
                Start with a free consultation.
              </h2>
              <p className="mt-5 max-w-md text-sm md:text-base leading-7 text-white/85">
                Share your research stage, publication goal, or journal challenge. Wrirk will help you map the next step with clarity.
              </p>

              <div className="mt-8 space-y-3">
                {['Confidential handling', 'Human expert guidance', 'Fast response', 'Ethical support only'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/90">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[26px] border border-white/15 bg-white/10 p-5">
                <div className="text-[11px] uppercase tracking-[0.35em] text-white/70">Good fit for</div>
                <p className="mt-3 text-sm leading-7 text-white/90">
                  PhD scholars, faculty researchers, early-stage academics, thesis authors, and institutional publication support requests.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-[11px] uppercase tracking-[0.35em] text-fuchsia-200/70">Request an assessment</div>
              <div className="mt-3 text-3xl font-semibold text-slate-50">Tell us about your research</div>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Tell us the stage of your research, the target outcome, and what kind of support you need. The more context you share, the faster we can suggest the right publication path.
              </p>

              <form className="mt-8 grid gap-4 md:grid-cols-2">
                {['Full name', 'Email address', 'Phone number', 'Research area'].map((label, idx) => (
                  <label key={label} className={idx === 3 ? 'md:col-span-2' : ''}>
                    <div className="mb-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">{label}</div>
                    <input
                      type="text"
                      placeholder={label === 'Phone number' ? '+91 XXXXX XXXXX' : ''}
                      className="w-full rounded-[18px] border border-white/10 bg-[#0c171b] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40 focus:bg-[#0e1b20]"
                    />
                  </label>
                ))}

                <label className="md:col-span-2">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">Service needed</div>
                  <input
                    type="text"
                    placeholder="Journal selection, editing, reviewer response, thesis to paper, etc."
                    className="w-full rounded-[18px] border border-white/10 bg-[#0c171b] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40 focus:bg-[#0e1b20]"
                  />
                </label>

                <label className="md:col-span-2">
                  <div className="mb-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">Message</div>
                  <textarea
                    rows={5}
                    placeholder="Describe your research, current stage, deadline, target journal type, and what you need help with."
                    className="w-full rounded-[18px] border border-white/10 bg-[#0c171b] px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/40 focus:bg-[#0e1b20]"
                  />
                </label>

                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-fuchsia-300 md:col-span-2"
                >
                  Book a free consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#061013]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/mnt/data/WrirkLogoOld.png" alt="Wrirk logo" className="h-10 w-10 rounded-full object-contain" />
              <div className="text-xl font-semibold tracking-tight text-slate-50">Wrirk</div>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
              Premium research publication support for scholars who want clearer strategy, better manuscripts, and a more confident path to publication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm text-slate-400 md:grid-cols-4">
            {[
              ['Quick links', ['Services', 'Process', 'FAQ', 'Contact']],
              ['Support', ['Journal match', 'Editing', 'Reviewer help', 'Consultation']],
              ['Education', ['Research profile', 'Publication tips', 'Journal guidance', 'Writing support']],
              ['Contact', ['Book consultation', 'WhatsApp support', 'Call now', 'Confidential handling']],
            ].map(([title, items]) => (
              <div key={String(title)}>
                <div className="text-[11px] uppercase tracking-[0.3em] text-slate-500">{String(title)}</div>
                <ul className="mt-4 space-y-3">
                  {(items as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
