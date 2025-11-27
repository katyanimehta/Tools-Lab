import { GoogleGenAI } from "@google/genai";
import { TOOLS_DATA } from '../data';

// Initialize Gemini Client
// IMPORTANT: The API key must be in process.env.API_KEY
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured. Please add REACT_APP_GEMINI_API_KEY to your environment.";
  }

  try {
    const context = JSON.stringify(TOOLS_DATA);
    
    const systemInstruction = `
      You are an expert AI Assistant for the 'ET-606 Tools Lab' class. 
      Your goal is to help students and visitors understand the concept mapping tools analyzed in the class.
      
      Here is the specific data gathered by the class groups:
      ${context}

      Rules:
      1. ONLY answer based on the provided class data. If asked about a tool not in the list (like Miro), mention that it wasn't part of this specific lab's primary focus or compare it briefly to a similar tool in the list (e.g., "Miro wasn't listed, but it's similar to Figjam...").
      2. Be helpful, concise, and academic yet accessible.
      3. If asked "Which is best?", provide a nuanced answer based on the 'bestFor' and 'comparativeAnalysis' fields.
      4. Format your response with clear paragraphs or bullet points if needed.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now.";
  }
};
