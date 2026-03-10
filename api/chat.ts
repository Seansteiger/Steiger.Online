import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_INSTRUCTION } from '../constants';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message, history } = await req.json();
    
    // Read the secret API key from Vercel's environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chat = model.startChat({
      history: history || []
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('AI Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
