
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! 👋 I\'m here to help you build something amazing. Are you looking to upgrade your digital presence or start a new project?', timestamp: new Date() }
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

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const historyMsg = messages.filter((_, i) => i > 0);
      const history = historyMsg.slice(-10).map(m => ({
        role: m.role as "user" | "model",
        parts: [{ text: m.text }]
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text, history })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to communicate with AI server');
      }

      setMessages(prev => [...prev, { role: 'model', text: data.text, timestamp: new Date() }]);

      // Proactive Human Referral Logic
      const inputLower = userMsg.text.toLowerCase();
      const humanKeywords = ['human', 'person', 'agent', 'real person', 'speak to', 'talk to', 'whatsapp', 'call', 'number'];
      const showReferral = humanKeywords.some(keyword => inputLower.includes(keyword));

      if (showReferral) {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'model', 
            text: "Would you like to speak directly with our lead agent? I can connect you via WhatsApp for immediate personal assistance. [[ACTION: {\"type\": \"WHATSAPP\"}]]", 
            timestamp: new Date() 
          }]);
        }, 1000);
      }

    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setMessages(prev => [...prev, {
        role: 'model',
        text: `I'm having trouble connecting to the neural network right now. Please try again in a moment, or reach out to us directly at neo@steigeronline.co.za.`,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-2 md:right-6 z-50 flex flex-col items-end">
      {/* Backdrop Blur Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[450px] max-h-[80vh] glass-panel rounded-2xl border border-neon-cyan/30 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-[float_0.3s_ease-out]">

          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-void/50">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-neon-cyan" />
              <span className="font-display font-bold text-white">Steiger AI</span>
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-neon-cyan/20 text-white rounded-tr-none border border-neon-cyan/20'
                  : 'bg-white/5 text-slate-300 rounded-tl-none border border-white/5'
                  }`}>
                  {/* Parse basic bold markdown and Action Tokens */}
                  {(() => {
                    // split by action token pattern: [[ACTION: { ... }]]
                    const parts = msg.text.split(/(\[\[ACTION:.*?\]\])/);

                    return parts.map((part, partIdx) => {
                      if (part.startsWith('[[ACTION:') && part.endsWith(']]')) {
                        try {
                          const jsonStr = part.slice(9, -2); // remove [[ACTION: and ]]
                          const actionData = JSON.parse(jsonStr);

                          if (actionData.type === 'WHATSAPP') {
                            return (
                              <button
                                key={partIdx}
                                onClick={() => {
                                  window.open('https://wa.me/27699751347', '_blank');
                                }}
                                className="mt-3 w-full py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 hover:bg-[#25D366]/90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                              >
                                <MessageSquare className="w-3.5 h-3.5" /> Speak to Agent
                              </button>
                            );
                          }

                          return (
                            <button
                              key={partIdx}
                              onClick={() => {
                                const event = new CustomEvent('trigger-contact-prefill', { detail: actionData });
                                window.dispatchEvent(event);
                                setIsOpen(false);
                              }}
                              className="mt-3 w-full py-2 bg-neon-pink text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 hover:bg-neon-pink/80 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                            >
                              <Sparkles className="w-3 h-3" /> Initiate Sequence
                            </button>
                          );
                        } catch (e) {
                          return null;
                        }
                      }

                      // Check for bold markdown in the text part
                      return part.split(/(\*\*.*?\*\*)/).map((subPart, subIdx) => {
                        if (subPart.startsWith('**') && subPart.endsWith('**')) {
                          return <strong key={`${partIdx}-${subIdx}`} className="text-white font-bold">{subPart.slice(2, -2)}</strong>;
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
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-void/50 border-t border-white/10">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-4 py-2 border border-white/10 focus-within:border-neon-cyan/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Query system..."
                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-slate-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-neon-cyan hover:text-white disabled:opacity-50 transition-colors"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="mt-2 text-[10px] text-center text-slate-600">
              Powered by Gemini 2.5 Flash
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-void border border-neon-cyan/30 text-neon-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-neon-cyan hover:text-void transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-purple"></span>
        </span>
      </button>

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/50 flex items-center justify-center backdrop-blur transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      )}

    </div>
  );
};

export default AIAssistant;
