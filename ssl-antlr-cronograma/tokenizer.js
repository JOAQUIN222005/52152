const antlr4 = require('antlr4');
const CronLexer = require('./CronLexer').CronLexer;

function getTokenNameByType(type, vocabulary) {
  const literal = vocabulary.getLiteralName(type);
  const symbolic = vocabulary.getSymbolicName(type);
  return literal || symbolic || '<UNKNOWN>';
}

function tokenizeInput(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new CronLexer(chars);
  const tokens = lexer.getAllTokens();
  const vocabulary = lexer.vocabulary;

  console.log('| Tipo de Token | Valor |');
  console.log('|---------------|-------|');

  for (let token of tokens) {
    const tokenName = getTokenNameByType(token.type, vocabulary);
    console.log(`| ${tokenName} | ${token.text} |`);
  }
}

// Cambia esta línea por la expresión cron que quieras analizar
const input = '0 12 * * MON echo hello';
tokenizeInput(input);
