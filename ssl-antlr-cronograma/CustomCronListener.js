import CronListener from './generated/CronListener.js';

export class CustomCronListener extends CronListener {
    constructor() {
        super();
        this.events = [];
    }

    // ... (keep all other methods the same)

    // Command
    enterCommand(ctx) {
        const cmd = ctx.getText();
        console.log(`Command to execute: ${cmd}`);
    }

    // Helper to get all events
    getEvents() {
        return this.events;
    }
}