import React from 'react';
import { Tool } from '../types';
import * as LucideIcons from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  onClick: (tool: Tool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  // Dynamically resolve icon component
  const IconComponent = (LucideIcons as any)[tool.iconName] || LucideIcons.Box;

  return (
    <div 
      onClick={() => onClick(tool)}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-slate-100 hover:border-indigo-200 flex flex-col h-full"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
            <IconComponent className="w-6 h-6 text-indigo-600" />
          </div>
          <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
            {tool.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
          {tool.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100">
           <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
             Best For
           </p>
           <p className="text-sm text-slate-700 font-medium">
             {tool.bestFor}
           </p>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
