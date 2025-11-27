import React from 'react';
import { Tool } from '../types';
import { X, CheckCircle2, TrendingUp, Lightbulb } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface ToolModalProps {
  tool: Tool | null;
  onClose: () => void;
}

const ToolModal: React.FC<ToolModalProps> = ({ tool, onClose }) => {
  if (!tool) return null;

  const IconComponent = (LucideIcons as any)[tool.iconName] || LucideIcons.Box;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 rounded-xl">
              <IconComponent className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{tool.name}</h2>
              <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                {tool.category}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          
          <section>
            <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Description & Use Cases
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tool.keyFeatures.map((feature, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Comparative Analysis
            </h3>
            <p className="text-indigo-800 leading-relaxed text-sm">
              {tool.comparativeAnalysis}
            </p>
          </section>

          <section>
             <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Ideal For
            </h3>
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-emerald-900 font-medium">
                {tool.bestFor}
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ToolModal;
