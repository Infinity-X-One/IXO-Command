// lib/finsynapse-runtime.ts

import { loadBot, BotRegistry } from "./bot-loader";
import { Logger, LogLevel } from "./logger";
import { Memory } from "./memory";
import { FinSynapse } from "./finsynapse-core";

export class FinSynapseRuntime {
  private activeBots: Record<string, ReturnType<typeof loadBot>> = {};

  constructor() {
    Logger.info("🧠 FinSynapse Runtime is initializing...");
    this.boot();
  }

  private boot() {
    try {
      for (const botId in BotRegistry) {
        this.activeBots[botId] = loadBot(botId);
        Logger.debug(`🤖 Loaded bot: ${botId}`);
      }
      Logger.info("✅ All bots loaded successfully.");
    } catch (e: any) {
      Logger.error(`Runtime failed to boot: ${e.message}`);
    }
  }

  public listBots(): string[] {
    return Object.keys(this.activeBots);
  }

  public talkTo(botId: string, message: string): string {
    const bot = this.activeBots[botId];
    if (!bot) {
      Logger.warn(`Bot ${botId} not found.`);
      return "Bot not found.";
    }

    Logger.info(`👤 User sent to ${bot.name}: ${message}`);
    const response = FinSynapse.process(bot, message);
    Logger.debug(`💬 ${bot.name} replied: ${response}`);

    return response;
  }

  public memory() {
    return Memory.list();
  }

  public resetMemory() {
    Memory.reset();
    Logger.info("🧠 Memory has been reset.");
  }
}
