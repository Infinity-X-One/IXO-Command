// lib/bot-loader.ts

interface Bot {
  name: string;
  type: string;
  description: string;
}

export const BotRegistry: Record<string, Bot> = {
  strategist: {
    name: "strategist",
    type: "advisor",
    description: "Analyzes financial strategies and provides AI-powered predictions."
  },
  operator: {
    name: "operator",
    type: "workflow",
    description: "Manages automation tasks and coordinates agentic systems."
  },
  personality: {
    name: "personality",
    type: "user-aligned",
    description: "Interacts with users based on psychological matching and portfolio alignment."
  }
};

export function loadBot(botId: string): Bot {
  const bot = BotRegistry[botId];
  if (!bot) throw new Error(`Bot '${botId}' not found in registry.`);
  return bot;
}
