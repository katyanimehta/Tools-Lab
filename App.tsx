import React, { useState, useMemo } from 'react';
import { TOOLS_DATA } from './data';
import { Tool, ToolCategory } from './types';
import ToolCard from './components/ToolCard';
import ToolModal from './components/ToolModal';
import AIChat from './components/AIChat';
import { Search, BrainCircuit, Filter } from 'lucide-react';

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [filterCategory, setFilterCategory] = useState<ToolCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter(tool => {
      const matchesCategory = filterCategory === 'All' || tool.category === filterCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filterCategory, searchQuery]);

  const categories = ['All', ...Object.values(ToolCategory)];

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-100/50 to-transparent -z-10"></div>
      <div className="fixed -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="fixed top-48 -left-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm rounded-full border border-indigo-100 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <BrainCircuit className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-slate-700 tracking-wide">ET-606 Tools Lab</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight animate-in fade-in slide-in-from-top-6 duration-700">
            Mapping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Department</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-8 duration-700 delay-100">
            A comprehensive showcase of digital tools analyzed by the Centre of Educational Technology. 
            Exploring the landscape of concept mapping through collaboration, AI, and structure.
          </p>
        </header>

        {/* Controls Section */}
        <div className="mb-12 space-y-6">
          
          {/* Search and Filters Container */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-slate-200">
            
            {/* Search */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Find a tool..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterCategory === cat
                      ? 'bg-slate-900 text-white shadow-md transform scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Section */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onClick={setSelectedTool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600">No tools found</h3>
            <p className="text-slate-400">Try adjusting your search or filters.</p>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ET-606 Tools Lab. Centre of Educational Technology.
          </p>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      
      {/* AI Assistant */}
      <AIChat />
      
    </div>
  );
};

export default App;
