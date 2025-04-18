// finsynapse-core.ts
// 🧠 FinSynapse Core Intelligence System for IXO Command

import { fetchBotProfiles, AIBotProfile } from "@/lib/bot-loader";
import { getPredictionMemory, PredictionMemoryEntry } from "@/lib/memory";
import { logAgentActivity } from "@/lib/logger";

export type FinSynapseState = {
  initialized: boolean;
  bots: AIBotProfile[];
  memory: PredictionMemoryEntry[];
  botsLoaded: number;
  memorySize: number;
  lastExecution: string;
  modules: string[];
};

const FinSynapse: FinSynapseState = {
  initialized: false,
  bots: [],
  memory: [],
  botsLoaded: 0,
  memorySize: 0,
  lastExecution: "",
  modules: [],
};

export async function initializeFinSynapse(): Promise<FinSynapseState> {
  console.log("🧠 FinSynapse boot sequence started...");

  try {
    const bots = await fetchBotProfiles();
    const memory = await getPredictionMemory();

    FinSynapse.bots = bots;
    FinSynapse.memory = memory;
    FinSynapse.botsLoaded = bots.length;
    FinSynapse.memorySize = memory.length;
    FinSynapse.initialized = true;
    FinSynapse.lastExecution = new Date().toISOString();
    FinSynapse.modules = ["bot-loader", "memory", "logger", "self-awareness"];

    logAgentActivity({
      action: "initialize",
      source: "FinSynapse",
      status: "active",
      botsLoaded: bots.length,
      memorySize: memory.length,
    });

    console.log("✅ FinSynapse is fully operational.");
    return FinSynapse;

  } catch (err) {
    console.error("❌ FinSynapse initialization failed:", err);
    throw err;
  }
}

export function getFinSynapseStatus(): FinSynapseState {
  return FinSynapse;
}

export default FinSynapse;

