import { Tool, ToolCategory } from './types';

export const TOOLS_DATA: Tool[] = [
  {
    id: 'cmap',
    name: 'CMap Tools',
    description: 'Built on the principles of concept mapping discussed in class including hierarchical structures and linking lines labeled with small phrases.',
    category: ToolCategory.CONCEPT_MAPPING,
    keyFeatures: ['Hierarchical structures', 'Labeled linking lines', 'Academic focus'],
    comparativeAnalysis: 'Unlike free-form mind mapping tools, CMap enforces the strict structural rules of concept maps, making it less flexible for brainstorming but superior for structured knowledge representation.',
    bestFor: 'Formal concept mapping assignments requiring specific linking phrases.',
    iconName: 'Network',
    rating: 4
  },
  {
    id: 'conceptmap',
    name: 'Conceptmap.io',
    description: 'Specialized in creating multiple topic sub-topic data structures. Topics can be interconnected with multiple central ideas.',
    category: ToolCategory.CONCEPT_MAPPING,
    keyFeatures: ['Multi-parent nodes', 'Complex interconnection', 'Data structuring'],
    comparativeAnalysis: 'Excels at complex networks where a single node belongs to multiple parents, which standard tree-based mind maps cannot handle.',
    bestFor: 'Complex data structures with interconnectivity.',
    iconName: 'Share2',
    rating: 3.5
  },
  {
    id: 'lucidchart',
    name: 'Lucidchart',
    description: 'Robust real-time collaboration. Similar to Figjam in many ways but limited by its restricted free plan. Limited AI integration in free plan.',
    category: ToolCategory.COLLABORATION,
    keyFeatures: ['Real-time collaboration', 'Professional templates', 'Standard shapes'],
    comparativeAnalysis: 'Similar to Figjam in many ways but heavily restricted by its limited free plan. The AI integration is also limited in the free tier compared to competitors.',
    bestFor: 'Professional flowcharts and diagrams in a corporate setting.',
    iconName: 'LayoutGrid',
    rating: 3
  },
  {
    id: 'mindmap',
    name: 'MindMap',
    description: 'Useful for creating visually appealing mind maps with branches generating out of a central idea. Not too useful for concept maps.',
    category: ToolCategory.MIND_MAPPING,
    keyFeatures: ['Visual branches', 'Central idea focus', 'Aesthetics'],
    comparativeAnalysis: 'Very useful for traditional radiant thinking but not suitable for "concept maps" which require cross-links and labeled connections.',
    bestFor: 'Visual brainstorming and hierarchical lists.',
    iconName: 'GitFork',
    rating: 3
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    description: 'Hand-drawn aesthetic that is easy to navigate from the first try. Allows collaboration between members on a single board. Useful for creating sketch like diagrams particularly during brainstorming.',
    category: ToolCategory.COLLABORATION,
    keyFeatures: ['Hand-drawn style', 'Zero learning curve', 'Collaboration'],
    comparativeAnalysis: 'The most accessible tool for quick sketches. It lacks the advanced automation of Mapify but wins on simplicity and "sketch-like" feel during brainstorming.',
    bestFor: 'Brainstorming sessions and rough sketch diagrams.',
    iconName: 'PenTool',
    rating: 4.5
  },
  {
    id: 'figjam',
    name: 'Figjam',
    description: 'Integrated with Figma. End-to-end development process can be carried out in a single place. AI integrated, allowing diagram generation and editing via prompts. Polished aesthetics. User friendly free plan.',
    category: ToolCategory.COLLABORATION,
    keyFeatures: ['Figma integration', 'AI diagram generation', 'Polished aesthetics', 'User-friendly'],
    comparativeAnalysis: 'Superior to Lucidchart for free users due to a more generous plan. Its AI integration allows for diagram generation via prompts, making it a top tier choice for polished visuals.',
    bestFor: 'Design-centric teams and generating diagrams from text prompts.',
    iconName: 'Figma',
    rating: 5
  },
  {
    id: 'mapify',
    name: 'Mapify',
    description: 'A trending AI tool that helps visualise information and created a mind map. Transform anything to mind maps by AI. Features include auto-layout, intuitive node creation, drag & drop, and a clear interface.',
    category: ToolCategory.AI_ASSISTED,
    keyFeatures: ['Transform anything to map', 'Auto-layout', 'Drag & drop', 'Clear interface', 'Visualise information'],
    comparativeAnalysis: 'Mapify represents the new wave of "AI-first" mapping. It excels at speed—transforming text to structure instantly—but may offer less manual control than Excalidraw.',
    bestFor: 'Rapidly converting text/notes into visual structures.',
    iconName: 'Wand2',
    rating: 4.5
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'For prompts. It helped us visualise the information and created a mind map structure textually.',
    category: ToolCategory.AI_ASSISTED,
    keyFeatures: ['Prompt generation', 'Text-to-structure', 'Idea expansion'],
    comparativeAnalysis: 'Not a visual mapping tool itself, but an essential companion for generating the content that goes INTO the maps. It helps visualize information conceptually before drawing.',
    bestFor: 'Generating ideas, prompts, and structuring unstructured data.',
    iconName: 'Bot',
    rating: 4
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    description: 'It helped us visualise the information and created a mind map.',
    category: ToolCategory.AI_ASSISTED,
    keyFeatures: ['Source grounding', 'Mind map generation', 'Information synthesis'],
    comparativeAnalysis: 'Unique capability to ground the map in specific uploaded documents, unlike ChatGPT which uses general training data.',
    bestFor: 'Research-heavy concept mapping based on specific readings.',
    iconName: 'BookOpen',
    rating: 4
  },
  {
    id: 'mindmeister',
    name: 'Mindmeister',
    description: 'Multiple people can edit the mind map at the same time, we have some good options of themes.',
    category: ToolCategory.MIND_MAPPING,
    keyFeatures: ['Real-time editing', 'Theming options', 'Cloud-based'],
    comparativeAnalysis: 'Offers robust multi-user editing similar to Google Docs for mind maps. Good theme options but can feel more rigid than free-form boards like Figjam.',
    bestFor: 'Collaborative class assignments.',
    iconName: 'Users',
    rating: 3.5
  }
];