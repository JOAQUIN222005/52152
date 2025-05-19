// Generated from d:/ssl-antlr-calculator/Cron.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CronListener from './CronListener.js';
import CronVisitor from './CronVisitor.js';

const serializedATN = [4,1,16,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,2,3,2,42,8,2,1,2,
1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,54,8,4,10,4,12,4,57,9,4,1,5,1,5,
3,5,61,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,4,10,73,8,10,11,10,12,
10,74,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,1,7,75,0,22,1,0,0,
0,2,36,1,0,0,0,4,41,1,0,0,0,6,46,1,0,0,0,8,50,1,0,0,0,10,60,1,0,0,0,12,62,
1,0,0,0,14,64,1,0,0,0,16,66,1,0,0,0,18,69,1,0,0,0,20,72,1,0,0,0,22,23,3,
2,1,0,23,24,3,2,1,0,24,25,3,2,1,0,25,26,3,2,1,0,26,27,3,2,1,0,27,28,3,18,
9,0,28,29,5,0,0,1,29,1,1,0,0,0,30,37,3,4,2,0,31,37,3,6,3,0,32,37,3,8,4,0,
33,37,3,14,7,0,34,37,3,12,6,0,35,37,3,16,8,0,36,30,1,0,0,0,36,31,1,0,0,0,
36,32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,3,1,0,0,0,38,
42,3,14,7,0,39,42,3,6,3,0,40,42,3,12,6,0,41,38,1,0,0,0,41,39,1,0,0,0,41,
40,1,0,0,0,42,43,1,0,0,0,43,44,5,8,0,0,44,45,3,20,10,0,45,5,1,0,0,0,46,47,
3,20,10,0,47,48,5,10,0,0,48,49,3,20,10,0,49,7,1,0,0,0,50,55,3,10,5,0,51,
52,5,11,0,0,52,54,3,10,5,0,53,51,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,
56,1,0,0,0,56,9,1,0,0,0,57,55,1,0,0,0,58,61,3,12,6,0,59,61,3,6,3,0,60,58,
1,0,0,0,60,59,1,0,0,0,61,11,1,0,0,0,62,63,3,20,10,0,63,13,1,0,0,0,64,65,
5,9,0,0,65,15,1,0,0,0,66,67,5,12,0,0,67,68,7,0,0,0,68,17,1,0,0,0,69,70,5,
16,0,0,70,19,1,0,0,0,71,73,5,13,0,0,72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,
0,0,0,74,75,1,0,0,0,75,21,1,0,0,0,5,36,41,55,60,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CronParser extends antlr4.Parser {

    static grammarFileName = "Cron.g4";
    static literalNames = [ null, "'yearly'", "'annually'", "'monthly'", 
                            "'weekly'", "'daily'", "'hourly'", "'reboot'", 
                            "'/'", "'*'", "'-'", "','", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "DIV", "STAR", "DASH", "COMMA", "AT", "DIGIT", 
                             "SPACE", "NEWLINE", "COMMAND_TEXT" ];
    static ruleNames = [ "schedule", "time_field", "step", "range", "list", 
                         "item", "value", "wildcard", "predefined", "command", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CronParser.ruleNames;
        this.literalNames = CronParser.literalNames;
        this.symbolicNames = CronParser.symbolicNames;
    }



	schedule() {
	    let localctx = new ScheduleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CronParser.RULE_schedule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.time_field();
	        this.state = 23;
	        this.time_field();
	        this.state = 24;
	        this.time_field();
	        this.state = 25;
	        this.time_field();
	        this.state = 26;
	        this.time_field();
	        this.state = 27;
	        this.command();
	        this.state = 28;
	        this.match(CronParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	time_field() {
	    let localctx = new Time_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CronParser.RULE_time_field);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.step();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.range();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.list();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.wildcard();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 34;
	            this.value();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 35;
	            this.predefined();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CronParser.RULE_step);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 38;
	            this.wildcard();
	            break;

	        case 2:
	            this.state = 39;
	            this.range();
	            break;

	        case 3:
	            this.state = 40;
	            this.value();
	            break;

	        }
	        this.state = 43;
	        this.match(CronParser.DIV);
	        this.state = 44;
	        this.number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CronParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.number();
	        this.state = 47;
	        this.match(CronParser.DASH);
	        this.state = 48;
	        this.number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CronParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.item();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 51;
	            this.match(CronParser.COMMA);
	            this.state = 52;
	            this.item();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CronParser.RULE_item);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.range();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CronParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CronParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(CronParser.STAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predefined() {
	    let localctx = new PredefinedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CronParser.RULE_predefined);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(CronParser.AT);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 254) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CronParser.RULE_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(CronParser.COMMAND_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CronParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 71;
	        		this.match(CronParser.DIGIT);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 74; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CronParser.EOF = antlr4.Token.EOF;
CronParser.T__0 = 1;
CronParser.T__1 = 2;
CronParser.T__2 = 3;
CronParser.T__3 = 4;
CronParser.T__4 = 5;
CronParser.T__5 = 6;
CronParser.T__6 = 7;
CronParser.DIV = 8;
CronParser.STAR = 9;
CronParser.DASH = 10;
CronParser.COMMA = 11;
CronParser.AT = 12;
CronParser.DIGIT = 13;
CronParser.SPACE = 14;
CronParser.NEWLINE = 15;
CronParser.COMMAND_TEXT = 16;

CronParser.RULE_schedule = 0;
CronParser.RULE_time_field = 1;
CronParser.RULE_step = 2;
CronParser.RULE_range = 3;
CronParser.RULE_list = 4;
CronParser.RULE_item = 5;
CronParser.RULE_value = 6;
CronParser.RULE_wildcard = 7;
CronParser.RULE_predefined = 8;
CronParser.RULE_command = 9;
CronParser.RULE_number = 10;

class ScheduleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_schedule;
    }

	time_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Time_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Time_fieldContext,i);
	    }
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	EOF() {
	    return this.getToken(CronParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterSchedule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitSchedule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitSchedule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Time_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_time_field;
    }

	step() {
	    return this.getTypedRuleContext(StepContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	predefined() {
	    return this.getTypedRuleContext(PredefinedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterTime_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitTime_field(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitTime_field(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_step;
    }

	DIV() {
	    return this.getToken(CronParser.DIV, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitStep(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitStep(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_range;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	DASH() {
	    return this.getToken(CronParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CronParser.COMMA);
	    } else {
	        return this.getToken(CronParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_item;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_value;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_wildcard;
    }

	STAR() {
	    return this.getToken(CronParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitWildcard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredefinedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_predefined;
    }

	AT() {
	    return this.getToken(CronParser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterPredefined(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitPredefined(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitPredefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_command;
    }

	COMMAND_TEXT() {
	    return this.getToken(CronParser.COMMAND_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CronParser.DIGIT);
	    } else {
	        return this.getToken(CronParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CronParser.ScheduleContext = ScheduleContext; 
CronParser.Time_fieldContext = Time_fieldContext; 
CronParser.StepContext = StepContext; 
CronParser.RangeContext = RangeContext; 
CronParser.ListContext = ListContext; 
CronParser.ItemContext = ItemContext; 
CronParser.ValueContext = ValueContext; 
CronParser.WildcardContext = WildcardContext; 
CronParser.PredefinedContext = PredefinedContext; 
CronParser.CommandContext = CommandContext; 
CronParser.NumberContext = NumberContext; 
