'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';

const faqs = [
  {
    question: 'What is otomoAI and how does it work?',
    answer:
      'otomoAI is an AI-powered admin suite built for auto workshops and premium bike mechanics. It captures leads from Facebook and WhatsApp, books appointments automatically, generates proposals and invoices, and follows up with customers — all on autopilot.',
  },
  {
    question: 'Do I need any technical skills to use otomoAI?',
    answer:
      'Not at all. otomoAI is designed to be plug-and-play. Once set up, the AI handles everything from lead capture to follow-ups. If you can use WhatsApp, you can use otomoAI.',
  },
  {
    question: 'How does the AI respond to customer enquiries?',
    answer:
      'Our AI understands common workshop enquiries — brake services, engine diagnostics, tyre changes, custom builds, and more. It responds instantly via WhatsApp or Facebook Messenger with accurate information and can book appointments directly.',
  },
  {
    question: 'Can otomoAI integrate with my existing tools?',
    answer:
      'Yes. otomoAI integrates with WhatsApp, Facebook, Google Calendar, and popular invoicing platforms. We are constantly adding new integrations based on customer feedback.',
  },
  {
    question: 'How much does otomoAI cost?',
    answer:
      'We offer flexible plans tailored to workshops of all sizes. Book a free demo and we will walk you through pricing options that fit your business.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'Most workshops are fully set up within 24 hours. Our onboarding team handles the configuration so you can start capturing leads and automating admin right away.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">FAQ</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </FadeUp>
        <div className="space-y-3 stagger-children">
          {faqs.map((faq, index) => (
            <FadeUp key={index}>
              <div className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-1 ring-white/10' : ''}`}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="text-white font-medium pr-4 text-[15px]">{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-brand-600/20 rotate-180' : 'bg-white/5'}`}>
                    <svg
                      className="w-3.5 h-3.5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed text-[15px]">{faq.answer}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
