import CronVisitor from './generated/CronVisitor.js';

export class CustomCronVisitor extends CronVisitor {
    constructor() {
        super();
        this.schedule = {
            minute: null,
            hour: null,
            dayOfMonth: null,
            month: null,
            dayOfWeek: null,
            command: null
        };
        this.fieldOrder = ['minute', 'hour', 'dayOfMonth', 'month', 'dayOfWeek'];
        this.currentField = 0;
    }
    visitSchedule(ctx) {
        // Procesar los 5 campos de tiempo
        for (let i = 0; i < 5; i++) {
            this.schedule[this.fieldOrder[i]] = this.visit(ctx.time_field(i));
        }
        
        // Procesar el comando
        this.schedule.command = this.visit(ctx.command());
        
        return this.schedule;
    }

    visitStep(ctx) {
        const base = ctx.wildcard() ? '*' : 
                     ctx.range() ? this.visit(ctx.range()) : 
                     this.visit(ctx.value());
        const step = this.visit(ctx.number());
        return `${base}/${step}`;
    }

    visitRange(ctx) {
        return `${this.visit(ctx.number(0))}-${this.visit(ctx.number(1))}`;
    }

    visitList(ctx) {
        return ctx.item().map(item => this.visit(item)).join(',');
    }

    visitWildcard() {
        return '*';
    }

    visitNumber(ctx) {
        return ctx.getText();
    }

    visitCommand(ctx) {
        return ctx.getText();
    }
}