'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, Loader2, ArrowRight } from 'lucide-react';

const COUNTRY_CODE_OPTIONS = [
  { value: '+91', label: 'India', short: 'IN' },
  { value: '+1', label: 'United States / Canada', short: 'US' },
  { value: '+44', label: 'United Kingdom', short: 'UK' },
  { value: '+61', label: 'Australia', short: 'AU' },
  { value: '+971', label: 'United Arab Emirates', short: 'AE' },
  { value: '+966', label: 'Saudi Arabia', short: 'SA' },
  { value: '+65', label: 'Singapore', short: 'SG' },
  { value: '+60', label: 'Malaysia', short: 'MY' },
  { value: '+49', label: 'Germany', short: 'DE' },
  { value: '+33', label: 'France', short: 'FR' },
  { value: '+39', label: 'Italy', short: 'IT' },
  { value: '+34', label: 'Spain', short: 'ES' },
  { value: '+31', label: 'Netherlands', short: 'NL' },
  { value: '+27', label: 'South Africa', short: 'ZA' },
  { value: '+234', label: 'Nigeria', short: 'NG' },
  { value: '+92', label: 'Pakistan', short: 'PK' },
  { value: '+880', label: 'Bangladesh', short: 'BD' },
  { value: '+94', label: 'Sri Lanka', short: 'LK' },
  { value: '+977', label: 'Nepal', short: 'NP' },
  { value: '+63', label: 'Philippines', short: 'PH' },
  { value: '+81', label: 'Japan', short: 'JP' },
] as const;

interface SharedFormProps {
  formId: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  onSuccess?: () => void;
}

export default function SharedForm({ formId, buttonText, buttonIcon, onSuccess }: SharedFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    countryCode: '+91',
    customCountryCode: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const router = useRouter();

  const isValidName = (name: string) => name.trim().length >= 2;
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const isValidMessage = (message: string) => message.trim().length >= 5;
  const getNameError = (name: string) => {
    if (!name.trim()) {
      return 'Please enter your full name.';
    }

    return isValidName(name) ? '' : 'Please enter a valid full name.';
  };
  const getEmailError = (email: string) => {
    if (!email.trim()) {
      return 'Please enter your email address.';
    }

    return isValidEmail(email) ? '' : 'Please enter a valid email address.';
  };
  const normalizeCountryCode = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return '';
    }

    return trimmed.startsWith('+') ? trimmed : `+${trimmed.replace(/\D/g, '')}`;
  };

  const getActiveCountryCode = (countryCode: string, customCountryCode: string) => {
    return countryCode === 'custom' ? normalizeCountryCode(customCountryCode) : countryCode;
  };

  const isValidPhone = (countryCode: string, phone: string, customCountryCode: string) => {
    const activeCountryCode = getActiveCountryCode(countryCode, customCountryCode);

    if (countryCode === '+91') {
      return /^\d{10}$/.test(phone);
    }

    if (countryCode === 'custom') {
      return /^\+\d{1,4}$/.test(activeCountryCode) && /^\d{6,15}$/.test(phone);
    }

    return /^\d{6,15}$/.test(phone);
  };

  const getPhoneError = (countryCode: string, phone: string, customCountryCode: string) => {
    const activeCountryCode = getActiveCountryCode(countryCode, customCountryCode);

    if (!phone) {
      return 'Please enter your phone number.';
    }

    if (countryCode === '+91' && phone.length !== 10) {
      return 'Your phone no is not 10 digits.';
    }

    if (countryCode === 'custom' && !customCountryCode.trim()) {
      return 'Please enter your country code.';
    }

    if (countryCode === 'custom' && !/^\+\d{1,4}$/.test(activeCountryCode)) {
      return 'Please enter a valid country code.';
    }

    if (countryCode !== '+91' && !/^\d{6,15}$/.test(phone)) {
      return 'Please enter a valid phone number.';
    }

    return '';
  };

  const getMessageError = (message: string) => {
    if (!message.trim()) {
      return 'Please enter your message.';
    }

    return isValidMessage(message) ? '' : 'Please enter a longer message.';
  };

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, '');
    setFormState((prev) => {
      const next = { ...prev, phone: digits };
      setPhoneError(getPhoneError(next.countryCode, digits, next.customCountryCode));
      return next;
    });
  };

  const handleCountryCodeChange = (value: string) => {
    setFormState((prev) => {
      const next = {
        ...prev,
        countryCode: value,
        customCountryCode: value === 'custom' ? prev.customCountryCode : '',
      };
      setPhoneError(getPhoneError(value, next.phone, next.customCountryCode));
      return next;
    });
  };

  const handleCustomCountryCodeChange = (value: string) => {
    setFormState((prev) => {
      const next = { ...prev, customCountryCode: value };
      setPhoneError(getPhoneError(next.countryCode, next.phone, value));
      return next;
    });
  };

  const handleEmailChange = (value: string) => {
    setFormState((prev) => ({ ...prev, email: value }));
    setEmailError(getEmailError(value));
  };

  const handleNameChange = (value: string) => {
    setFormState((prev) => ({ ...prev, name: value }));
    setNameError(getNameError(value));
  };

  const handleMessageChange = (value: string) => {
    setFormState((prev) => ({ ...prev, message: value }));
    setMessageError(getMessageError(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextNameError = getNameError(formState.name);
    const nextPhoneError = getPhoneError(formState.countryCode, formState.phone, formState.customCountryCode);
    const nextEmailError = getEmailError(formState.email);
    const nextMessageError = getMessageError(formState.message);
    setNameError(nextNameError);
    setPhoneError(nextPhoneError);
    setEmailError(nextEmailError);
    setMessageError(nextMessageError);

    if (nextNameError || nextPhoneError || nextEmailError || nextMessageError) {
      return;
    }

    setSubmitStatus('loading');
    
    try {
      const activeCountryCode = getActiveCountryCode(formState.countryCode, formState.customCountryCode);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formState,
          countryCode: activeCountryCode,
        })
      });

      if (!response.ok) {
        throw new Error('API Request Failed');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        if (onSuccess) onSuccess();
        router.push('/thank-you');
      }, 1200);
      
    } catch(err) {
      console.error('Submission error:', err);
      // Fallback in case of error but want to let user know it failed
      // For now, if it fails because of invalid API key locally, we'll log it
      setSubmitStatus('idle');
      alert('Failed to send Request. Please check API Key configuration.');
    }
  };

  const defaultIcon = <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover/submitbtn:translate-x-1" />;

  const interactionFired = React.useRef(false);
  
  const handleInteraction = () => {
    if (formId !== 'popup' && !interactionFired.current) {
      interactionFired.current = true;
      window.dispatchEvent(new Event('formInteractionStarted'));
    }
  };

  return (
    <form className="space-y-5 w-full" onSubmit={handleSubmit} onFocus={handleInteraction} onClick={handleInteraction} noValidate>
      {/* Full Name */}
      <div className="relative group/field">
        <input 
          type="text"
          id={`${formId}-name`}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent" 
          placeholder="Full Name"
          value={formState.name}
          onChange={(e) => handleNameChange(e.target.value)}
          required
        />
        <label htmlFor={`${formId}-name`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Full Name</label>
        {formState.name.length > 2 && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
        {nameError && <p className="mt-2 text-sm text-red-400">{nameError}</p>}
      </div>

      {/* Phone Number */}
      <div className="relative group/field">
        <div className="flex overflow-visible rounded-lg border border-white/10 bg-[#030712] focus-within:border-cyan-400 transition-colors">
          <label htmlFor={`${formId}-country-code`} className="sr-only">
            Country Code
          </label>
          <select
            id={`${formId}-country-code`}
            className="w-28 shrink-0 bg-[#030712] px-3 py-3.5 text-sm text-white outline-none border-r border-white/10"
            value={formState.countryCode}
            onChange={(e) => handleCountryCodeChange(e.target.value)}
          >
            {COUNTRY_CODE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value} {option.short}
              </option>
            ))}
            <option value="custom">Other</option>
          </select>
          <div className="relative flex-1">
            <input 
              type="tel"
              id={`${formId}-phone`}
              className="peer w-full bg-transparent px-4 py-3.5 text-white text-sm focus:outline-none placeholder-transparent" 
              placeholder="Phone Number"
              value={formState.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              inputMode="numeric"
              maxLength={formState.countryCode === '+91' ? 10 : 15}
              required
            />
            <label htmlFor={`${formId}-phone`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Phone Number</label>
            {isValidPhone(formState.countryCode, formState.phone, formState.customCountryCode) && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
          </div>
        </div>
        {formState.countryCode === 'custom' && (
          <div className="mt-3">
            <label htmlFor={`${formId}-custom-country-code`} className="mb-2 block text-xs uppercase tracking-widest text-slate-400">
              Custom Country Code
            </label>
            <input
              id={`${formId}-custom-country-code`}
              type="text"
              inputMode="tel"
              placeholder="+971"
              value={formState.customCountryCode}
              onChange={(e) => handleCustomCountryCodeChange(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#030712] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none"
            />
          </div>
        )}
        {phoneError && <p className="mt-2 text-sm text-red-400">{phoneError}</p>}
      </div>

      {/* Email Address */}
      <div className="relative group/field">
        <input 
          type="email"
          id={`${formId}-email`}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent" 
          placeholder="Email Address"
          value={formState.email}
          onChange={(e) => handleEmailChange(e.target.value)}
          inputMode="email"
          required
        />
        <label htmlFor={`${formId}-email`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Email Address</label>
        {isValidEmail(formState.email) && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
      </div>
      {emailError && <p className="mt-2 text-sm text-red-400">{emailError}</p>}

      {/* Message */}
      <div className="relative group/field">
        <textarea 
          id={`${formId}-message`}
          rows={3}
          className="peer w-full bg-[#030712] border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors z-10 relative placeholder-transparent resize-none" 
          placeholder="Message"
          value={formState.message}
          onChange={(e) => handleMessageChange(e.target.value)}
          required
        ></textarea>
        <label htmlFor={`${formId}-message`} className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:px-1 peer-focus:bg-[#060D1A] peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:bg-[#060D1A] peer-not-placeholder-shown:text-cyan-400 pointer-events-none z-20">Message</label>
        {formState.message.length > 5 && <Check className="absolute right-3 top-3.5 h-5 w-5 text-emerald-400 animate-[fadeSlideUp_0.3s_ease-out] drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] z-20" />}
      </div>
      {messageError && <p className="mt-2 text-sm text-red-400">{messageError}</p>}

      {/* Submit Button */}
      <div className="relative group/submitbtn mt-6">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-indigo-500 rounded-lg blur opacity-60 animate-pulse group-hover/submitbtn:opacity-100 transition duration-500"></div>
        <button 
          disabled={submitStatus !== 'idle'} 
          className={`w-full relative overflow-hidden rounded-lg py-4 font-black tracking-widest uppercase text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-transparent hover:border-cyan-400 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed ${submitStatus !== 'idle' ? 'text-white' : 'bg-white text-[#0A0F1C] hover:text-white'}`}
        >
          <div className={`absolute inset-0 bg-linear-to-r from-cyan-500 to-indigo-600 transform transition-transform duration-300 ease-in-out ${submitStatus !== 'idle' ? 'translate-y-0' : 'translate-y-full group-hover/submitbtn:translate-y-0'}`}></div>
          <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
            {submitStatus === 'idle' && <><span className="relative z-10">{buttonText}</span> {buttonIcon || defaultIcon}</>}
            {submitStatus === 'loading' && <><Loader2 className="h-5 w-5 animate-spin text-white" /> <span>Sending...</span></>}
            {submitStatus === 'success' && <><Check className="h-5 w-5 text-emerald-300" /> <span className="text-white relative z-10">Request Received!</span></>}
          </span>
        </button>
      </div>
    </form>
  );
}
