import antlr4 from 'antlr4';
import fs from 'fs';

import CronLexer from './generated/CronLexer.js';
import CronParser from './generated/CronParser.js';
import { CustomCronListener } from './CustomCronListener.js';
import { CustomCronVisitor } from './CustomCronVisitor.js';

const input = fs.readFileSync('input.txt', 'utf8').trim();

function parseCronExpression(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new CronLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CronParser(tokens);

    // Manejo mejorado de errores
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            const errorMsg = `[Línea ${line}:${column}] Error: Token inesperado '${offendingSymbol.text}'. Se esperaba: ${msg}`;
            console.error(errorMsg);
            throw new Error(errorMsg);
        },
        reportAmbiguity: () => {},
        reportAttemptingFullContext: () => {},
        reportContextSensitivity: () => {}
    });

    try {
        const tree = parser.schedule();
        
        // 1. Tabla de tokens (análisis léxico)
        console.log("\n=== TABLA DE TOKENS ===");
        
        // Primero, imprimamos información de depuración
        console.log("Tokens brutos:", tokens.getTokens().map(t => ({
            type: lexer.symbolicNames[t.type] || t.type,
            text: t.text,
            line: t.line,
            column: t.column,
            channel: t.channel
        })));
        
        const tokenList = tokens.getTokens();
        console.log("┌───────────────┬───────────────────┬──────────────┐");
        console.log("│ Tipo          │ Valor             │ Posición     │");
        console.log("├───────────────┼───────────────────┼──────────────┤");
        
        let hasTokens = false;
        for (let i = 0; i < tokenList.length; i++) {
            const token = tokenList[i];
            
            // Solo mostrar tokens en el canal por defecto (0) y no EOF (-1)
            if (token.channel === 0 && token.type !== -1) {
                const typeName = lexer.symbolicNames[token.type] || `Tipo ${token.type}`;
                const value = token.text.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
                const position = `Línea ${token.line}:${token.column}`;
                console.log(`│ ${typeName.padEnd(13)} │ ${value.padEnd(17)} │ ${position.padEnd(12)} │`);
                hasTokens = true;
            }
        }
        
        if (!hasTokens) {
            console.log("│ No se encontraron tokens visibles │");
        }
        
        console.log("└───────────────┴───────────────────┴──────────────┘");

        // Resto del código...
        // 2. Árbol sintáctico (análisis sintáctico)
        console.log("\n=== ÁRBOL SINTÁCTICO ===");
        console.log(tree.toStringTree(parser.ruleNames, parser));

        // 3. Interpretación (Visitor)
        console.log("\n=== INTERPRETACIÓN ===");
        const visitor = new CustomCronVisitor();
        const result = visitor.visit(tree);
        console.log("Resultado del parsing:");
        console.log(JSON.stringify(result, null, 2));
        
        return result;
    } catch (e) {
        console.error("\n[ERROR] Durante el parsing:", e.message);
        return null;
    }
}

// Ejecución
console.log(`\nProcesando expresión cron: "${input}"`);
parseCronExpression(input); 