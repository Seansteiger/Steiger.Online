'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '@/types';
import { useTheme } from '@/context/ThemeContext';

const quickPrompts = [
  'What is included in the R999 landing page?',
  'How much for a business website?',
  'How fast can you build my site?',
];

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! 👋 I am Steiger AI. Are you looking for a simple landing page, a business website, or an online store?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const historyMsg = messages.filter((_, i) => i > 0);
      const history = historyMsg.slice(-8).map((m) => ({
        role: m.role as 'user' | 'model',
        parts: [{ text: m.text }],
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text, history }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reach AI assistant');
      }

      setMessages((prev) => [...prev, { role: 'model', text: data.text, timestamp: new Date() }]);

      // Human Referral Keyword Check
      const inputLower = userMsg.text.toLowerCase();
      const humanKeywords = ['human', 'person', 'agent', 'call', 'speak to', 'whatsapp', 'owner', 'sean'];
      const showReferral = humanKeywords.some((keyword) => inputLower.includes(keyword));

      if (showReferral) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'model',
              text: 'Would you like to speak directly with our team? You can message us on WhatsApp for quick personal help. [[ACTION: {"type": "WHATSAPP"}]]',
              timestamp: new Date(),
            },
          ]);
        }, 800);
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'Our AI is momentarily resting. You can chat with us directly on WhatsApp at +27 69 975 1347! [[ACTION: {"type": "WHATSAPP"}]]',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm sm:hidden z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`mb-4 w-[calc(100vw-3rem)] sm:w-96 h-[500px] max-h-[82vh] rounded-2xl border flex flex-col shadow-2xl overflow-hidden transition-colors ${
            isLight
              ? 'bg-white border-amber-400/50 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
              : 'bg-[#151821] border-amber-400/40 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 border-b flex justify-between items-center transition-colors ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#1c202c] border-white/10'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-lg border flex items-center justify-center ${
                  isLight
                    ? 'bg-amber-100 border-amber-300 text-amber-700'
                    : 'bg-amber-400/10 border-amber-400/30 text-amber-400'
                }`}
              >
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span
                  className={`font-bold text-xs tracking-wide block ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  Steiger AI Assistant
                </span>
                <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded-md transition-colors ${
                isLight ? 'text-slate-400 hover:text-slate-700' : 'text-slate-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? isLight
                        ? 'bg-amber-400 text-slate-950 font-medium rounded-tr-none shadow-sm'
                        : 'bg-amber-400/20 text-white rounded-tr-none border border-amber-400/30'
                      : isLight
                      ? 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/80'
                      : 'bg-[#1c202c] text-slate-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {(() => {
                    const parts = msg.text.split(/(\[\[ACTION:.*?\]\])/);

                    return parts.map((part, partIdx) => {
                      if (part.startsWith('[[ACTION:') && part.endsWith(']]')) {
                        try {
                          const jsonStr = part.slice(9, -2);
                          const actionData = JSON.parse(jsonStr);

                          if (actionData.type === 'WHATSAPP') {
                            return (
                              <button
                                key={partIdx}
                                type="button"
                                onClick={() => {
                                  window.open('https://wa.me/27699751347?text=Hi%20Steiger%20Online!%20I%20have%20a%20question%20about%20your%20websites.', '_blank');
                                }}
                                className="mt-3 w-full py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-md"
                              >
                                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                <span>Chat on WhatsApp</span>
                              </button>
                            );
                          }

                          return (
                            <button
                              key={partIdx}
                              type="button"
                              onClick={() => {
                                const event = new CustomEvent('trigger-contact-prefill', {
                                  detail: actionData,
                                });
                                window.dispatchEvent(event);
                                setIsOpen(false);
                              }}
                              className="mt-3 w-full py-2.5 px-3 rounded-lg bg-amber-400 text-[#0f1117] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Select This Package</span>
                            </button>
                          );
                        } catch (e) {
                          return null;
                        }
                      }

                      return part.split(/(\*\*.*?\*\*)/).map((subPart, subIdx) => {
                        if (subPart.startsWith('**') && subPart.endsWith('**')) {
                          return (
                            <strong
                              key={`${partIdx}-${subIdx}`}
                              className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}
                            >
                              {subPart.slice(2, -2)}
                            </strong>
                          );
                        }
                        return <span key={`${partIdx}-${subIdx}`}>{subPart}</span>;
                      });
                    });
                  })()}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className={`p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 ${
                    isLight ? 'bg-slate-100' : 'bg-[#1c202c]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 2 && (
            <div
              className={`px-4 py-2 flex flex-wrap gap-1.5 border-t ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#1c202c]/50 border-white/5'
              }`}
            >
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className={`px-2.5 py-1 rounded-full text-[10px] border transition-colors ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/5'
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div
            className={`p-3 border-t transition-colors ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#1c202c] border-white/10'
            }`}
          >
            <div
              className={`flex items-center gap-2 rounded-xl px-3 py-2 border transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 focus-within:border-amber-500 shadow-xs'
                  : 'bg-[#151821] border-white/10 focus-within:border-amber-400'
              }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about website packages, speed, pricing..."
                className={`flex-1 bg-transparent border-none outline-none text-xs ${
                  isLight
                    ? 'text-slate-900 placeholder-slate-400'
                    : 'text-white placeholder-slate-500'
                }`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="p-1 rounded-lg text-amber-500 hover:opacity-80 disabled:opacity-30 transition-opacity"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Warm Floating Pill Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-2 px-4 py-3 rounded-full border shadow-lg transition-all duration-300 active:scale-95 ${
          isLight
            ? 'bg-white border-amber-400 text-slate-900 hover:shadow-amber-500/20'
            : 'bg-[#151821] border-amber-400/40 text-white hover:border-amber-400'
        }`}
        aria-label="Toggle AI Consultation"
      >
        <div className="relative">
          <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        </div>
        <span className="text-xs font-mono font-semibold tracking-wide">
          {isOpen ? 'Close' : 'Ask Steiger AI'}
        </span>
      </button>
    </div>
  );
};

export default AIAssistant;
