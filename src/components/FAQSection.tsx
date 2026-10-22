import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 bg-[#080D22] border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLARIFICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Everything you need to know about the AWS Student Builder Group recruitment at GHRCEM.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#0B1026]/90 border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/30 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-amber-500/20 text-amber-400 rotate-180'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in duration-200"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
