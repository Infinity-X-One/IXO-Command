// test-runtime.ts

import { FinSynapseRuntime } from "./finsynapse-runtime";

const runtime = new FinSynapseRuntime();

// Test a conversation with the Strategist bot
const response = runtime.talkTo("strategist", "What’s the best asset to trade right now?");
console.log("🧠 Strategist Reply:", response);

// Show loaded bots
console.log("🔍 Loaded bots:", runtime.listBots());

// View memory
console.log("📚 Current memory state:", runtime.memory());
