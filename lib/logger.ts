// lib/logger.ts

export enum LogLevel {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG"
  }
  
  export class Logger {
    static log(message: string, level: LogLevel = LogLevel.INFO) {
      const timestamp = new Date().toISOString();
      console.log(`[${level}] ${timestamp} - ${message}`);
    }
  
    static info(message: string) {
      this.log(message, LogLevel.INFO);
    }
  
    static warn(message: string) {
      this.log(message, LogLevel.WARN);
    }
  
    static error(message: string) {
      this.log(message, LogLevel.ERROR);
    }
  
    static debug(message: string) {
      this.log(message, LogLevel.DEBUG);
    }
  }
  