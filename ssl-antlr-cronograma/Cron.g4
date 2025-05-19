grammar Cron;

schedule: time_field time_field time_field time_field time_field command EOF;

time_field: step | range | list | wildcard | value | predefined;

step: (wildcard | range | value) DIV number;
range: number DASH number;
list: item (COMMA item)*;
item: value | range;
value: number;
wildcard: STAR;

predefined: AT ('yearly' | 'annually' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'reboot');

command: COMMAND_TEXT;

number: DIGIT+;

DIV: '/';
STAR: '*';
DASH: '-';
COMMA: ',';
AT: '@';
DIGIT: [0-9];
SPACE: [ \t]+ -> skip;
NEWLINE: [\r\n]+ -> skip;

// Match any character that's not a space or newline
COMMAND_TEXT: ~[ \t\r\n]+;