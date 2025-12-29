
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getWellnessAdvice = async (userPrompt: string) => {
  if (!API_KEY) {
    throw new Error("Missing API Key");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userPrompt,
    config: {
      systemInstruction: `You are Vera Comfort's Relaxation Guide. Your goal is to help users find the perfect evening relaxation ritual using our electric knee massager.
      - DO NOT mention "pain relief", "arthritis", "curing", or "medical treatment".
      - Focus ONLY on "comfort", "warmth", "relaxation", and "evening rest".
      - If they describe a long day of standing, recommend a specific heat and vibration setting for decompression.
      - Provide 3 non-medical lifestyle tips (e.g., elevation, comfortable slippers, warm tea).
      - Advise them that this is for lifestyle comfort only and to talk to a doctor for any medical concerns.
      Format the response in JSON with 'advice' (string), 'lifestyleTips' (array of strings), and 'recommendedProtocol' (string).`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          advice: { type: Type.STRING, description: "Empathetic relaxation advice." },
          lifestyleTips: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Daily comfort/lifestyle tips."
          },
          recommendedProtocol: { type: Type.STRING, description: "Suggested device setting and duration." }
        },
        required: ["advice", "lifestyleTips", "recommendedProtocol"]
      }
    }
  });

  return JSON.parse(response.text);
};
