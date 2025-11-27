export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  keyFeatures: string[];
  comparativeAnalysis: string;
  bestFor: string;
  rating?: number; // 1-5 scale representation of "class preference" based on descriptions
  iconName: string; // Lucide icon name mapping
}

export enum ToolCategory {
  CONCEPT_MAPPING = 'Concept Mapping',
  MIND_MAPPING = 'Mind Mapping',
  COLLABORATION = 'Whiteboard & Collab',
  AI_ASSISTED = 'AI & Automation',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
