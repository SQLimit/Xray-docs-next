import{ag as t,c as e,s as i,g as n,v as s,x as r,a,b as c,m as o,j as l,l as h,z as u,h as p,i as y}from"./mermaid.core.50c763c0.js";import{i as f}from"./init.0b4a962a.js";import{a as d}from"./array.999c8e45.js";import{c as g}from"./constant.4f073c13.js";import{a as _}from"./arc.b4d42f1d.js";import"./app.34fd3ac9.js";class m extends Map{constructor(t,e=b){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[i,n]of t)this.set(i,n)}get(t){return super.get(v(this,t))}has(t){return super.has(v(this,t))}set(t,e){return super.set(function({_intern:t,_key:e},i){const n=e(i);return t.has(n)?t.get(n):(t.set(n,i),i)}(this,t),e)}delete(t){return super.delete(function({_intern:t,_key:e},i){const n=e(i);t.has(n)&&(i=t.get(n),t.delete(n));return i}(this,t))}}function v({_intern:t,_key:e},i){const n=e(i);return t.has(n)?t.get(n):i}function b(t){return null!==t&&"object"==typeof t?t.valueOf():t}const k=Symbol("implicit");function x(){var t=new m,e=[],i=[],n=k;function s(s){let r=t.get(s);if(void 0===r){if(n!==k)return n;t.set(s,r=e.push(s)-1)}return i[r%i.length]}return s.domain=function(i){if(!arguments.length)return e.slice();e=[],t=new m;for(const n of i)t.has(n)||t.set(n,e.push(n)-1);return s},s.range=function(t){return arguments.length?(i=Array.from(t),s):i.slice()},s.unknown=function(t){return arguments.length?(n=t,s):n},s.copy=function(){return x(e,i).unknown(n)},f.apply(s,arguments),s}function S(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function w(t){return t}var A=function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,4],i=[1,5],n=[1,6],s=[1,7],r=[1,9],a=[1,11,13,15,17,19,20,26,27,28,29],c=[2,5],o=[1,6,11,13,15,17,19,20,26,27,28,29],l=[26,27,28],h=[2,8],u=[1,18],p=[1,19],y=[1,20],f=[1,21],d=[1,22],g=[1,23],_=[1,28],m=[6,26,27,28,29],v={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(t,e,i,n,s,r,a){var c=r.length-1;switch(s){case 4:n.setShowData(!0);break;case 7:this.$=r[c-1];break;case 9:n.addSection(r[c-1],n.cleanupValue(r[c]));break;case 10:this.$=r[c].trim(),n.setDiagramTitle(this.$);break;case 11:this.$=r[c].trim(),n.setAccTitle(this.$);break;case 12:case 13:this.$=r[c].trim(),n.setAccDescription(this.$);break;case 14:n.addSection(r[c].substr(8)),this.$=r[c].substr(8);break;case 21:n.parseDirective("%%{","open_directive");break;case 22:n.parseDirective(r[c],"type_directive");break;case 23:r[c]=r[c].trim().replace(/'/g,'"'),n.parseDirective(r[c],"arg_directive");break;case 24:n.parseDirective("}%%","close_directive","pie")}},table:[{3:1,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},{1:[3]},{3:10,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},{3:11,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},t(a,c,{7:12,8:[1,13]}),t(o,[2,18]),t(o,[2,19]),t(o,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(l,h,{21:8,9:16,10:17,5:24,1:[2,3],11:u,13:p,15:y,17:f,19:d,20:g,29:r}),t(a,c,{7:25}),{23:26,24:[1,27],32:_},t([24,32],[2,22]),t(a,[2,6]),{4:29,26:i,27:n,28:s},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(l,[2,13]),t(l,[2,14]),t(l,[2,15]),t(l,h,{21:8,9:16,10:17,5:24,1:[2,4],11:u,13:p,15:y,17:f,19:d,20:g,29:r}),t(m,[2,16]),{25:34,31:[1,35]},t(m,[2,24]),t(a,[2,7]),t(l,[2,9]),t(l,[2,10]),t(l,[2,11]),t(l,[2,12]),{23:36,32:_},{32:[2,23]},t(m,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[],s=[null],r=[],a=this.table,c="",o=0,l=0,h=2,u=1,p=r.slice.call(arguments,1),y=Object.create(this.lexer),f={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(f.yy[d]=this.yy[d]);y.setInput(t,f.yy),f.yy.lexer=y,f.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var g=y.yylloc;r.push(g);var _=y.options&&y.options.ranges;function m(){var t;return"number"!=typeof(t=n.pop()||y.lex()||u)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof f.yy.parseError?this.parseError=f.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var v,b,k,x,S,w,A,E,D={};;){if(b=i[i.length-1],this.defaultActions[b]?k=this.defaultActions[b]:(null==v&&(v=m()),k=a[b]&&a[b][v]),void 0===k||!k.length||!k[0]){var $="";for(S in E=[],a[b])this.terminals_[S]&&S>h&&E.push("'"+this.terminals_[S]+"'");$=y.showPosition?"Parse error on line "+(o+1)+":\n"+y.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[v]||v)+"'":"Parse error on line "+(o+1)+": Unexpected "+(v==u?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError($,{text:y.match,token:this.terminals_[v]||v,line:y.yylineno,loc:g,expected:E})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+v);switch(k[0]){case 1:i.push(v),s.push(y.yytext),r.push(y.yylloc),i.push(k[1]),v=null,l=y.yyleng,c=y.yytext,o=y.yylineno,g=y.yylloc;break;case 2:if(w=this.productions_[k[1]][1],D.$=s[s.length-w],D._$={first_line:r[r.length-(w||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(w||1)].first_column,last_column:r[r.length-1].last_column},_&&(D._$.range=[r[r.length-(w||1)].range[0],r[r.length-1].range[1]]),void 0!==(x=this.performAction.apply(D,[c,l,o,f.yy,k[1],s,r].concat(p))))return x;w&&(i=i.slice(0,-1*w*2),s=s.slice(0,-1*w),r=r.slice(0,-1*w)),i.push(this.productions_[k[1]][0]),s.push(D.$),r.push(D._$),A=a[i[i.length-2]][i[i.length-1]],i.push(A);break;case 3:return!0}}return!0}},b={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:case 6:break;case 7:return 26;case 8:case 9:break;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 20:this.popState();break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};function k(){this.yy={}}return v.lexer=b,k.prototype=v,v.Parser=k,new k}();A.parser=A;const E=A;let D={},$=!1;const T={parseDirective:function(t,e,i){o.parseDirective(this,t,e,i)},getConfig:()=>e().pie,addSection:function(t,i){t=l.sanitizeText(t,e()),void 0===D[t]&&(D[t]=i,h.debug("Added new section :",t))},getSections:()=>D,cleanupValue:function(t){return":"===t.substring(0,1)?(t=t.substring(1).trim(),Number(t.trim())):Number(t.trim())},clear:function(){D={},$=!1,u()},setAccTitle:i,getAccTitle:n,setDiagramTitle:s,getDiagramTitle:r,setShowData:function(t){$=t},getShowData:function(){return $},getAccDescription:a,setAccDescription:c},I=t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`;let j,O=e();const P={parser:E,db:T,renderer:{draw:(i,n,s,r)=>{try{O=e(),h.debug("Rendering info diagram\n"+i);const s=e().securityLevel;let E;"sandbox"===s&&(E=p("#i"+n));const D=p("sandbox"===s?E.nodes()[0].contentDocument.body:"body"),$="sandbox"===s?E.nodes()[0].contentDocument:document;r.db.clear(),r.parser.parse(i),h.debug("Parsed info diagram");const T=$.getElementById(n);j=T.parentElement.offsetWidth,void 0===j&&(j=1200),void 0!==O.useWidth&&(j=O.useWidth),void 0!==O.pie.useWidth&&(j=O.pie.useWidth);const I=D.select("#"+n);y(I,450,j,O.pie.useMaxWidth),T.setAttribute("viewBox","0 0 "+j+" 450");var a=18,c=Math.min(j,450)/2-40,o=I.append("g").attr("transform","translate("+j/2+",225)"),l=r.db.getSections(),u=0;Object.keys(l).forEach((function(t){u+=l[t]}));const P=O.themeVariables;var f=[P.pie1,P.pie2,P.pie3,P.pie4,P.pie5,P.pie6,P.pie7,P.pie8,P.pie9,P.pie10,P.pie11,P.pie12],m=x().range(f),v=Object.entries(l).map((function(t,e){return{order:e,name:t[0],value:t[1]}})),b=function(){var e=w,i=S,n=null,s=g(0),r=g(t),a=g(0);function c(c){var o,l,h,u,p,y=(c=d(c)).length,f=0,g=new Array(y),_=new Array(y),m=+s.apply(this,arguments),v=Math.min(t,Math.max(-t,r.apply(this,arguments)-m)),b=Math.min(Math.abs(v)/y,a.apply(this,arguments)),k=b*(v<0?-1:1);for(o=0;o<y;++o)(p=_[g[o]=o]=+e(c[o],o,c))>0&&(f+=p);for(null!=i?g.sort((function(t,e){return i(_[t],_[e])})):null!=n&&g.sort((function(t,e){return n(c[t],c[e])})),o=0,h=f?(v-y*k)/f:0;o<y;++o,m=u)l=g[o],u=m+((p=_[l])>0?p*h:0)+k,_[l]={data:c[l],index:o,value:p,startAngle:m,endAngle:u,padAngle:b};return _}return c.value=function(t){return arguments.length?(e="function"==typeof t?t:g(+t),c):e},c.sortValues=function(t){return arguments.length?(i=t,n=null,c):i},c.sort=function(t){return arguments.length?(n=t,i=null,c):n},c.startAngle=function(t){return arguments.length?(s="function"==typeof t?t:g(+t),c):s},c.endAngle=function(t){return arguments.length?(r="function"==typeof t?t:g(+t),c):r},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:g(+t),c):a},c}().value((function(t){return t.value})).sort((function(t,e){return t.order-e.order}))(v),k=_().innerRadius(0).outerRadius(c);o.selectAll("mySlices").data(b).enter().append("path").attr("d",k).attr("fill",(function(t){return m(t.data.name)})).attr("class","pieCircle"),o.selectAll("mySlices").data(b).enter().append("text").text((function(t){return(t.data.value/u*100).toFixed(0)+"%"})).attr("transform",(function(t){return"translate("+k.centroid(t)+")"})).style("text-anchor","middle").attr("class","slice"),o.append("text").text(r.db.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");var A=o.selectAll(".legend").data(m.domain()).enter().append("g").attr("class","legend").attr("transform",(function(t,e){return"translate(216,"+(22*e-22*m.domain().length/2)+")"}));A.append("rect").attr("width",a).attr("height",a).style("fill",m).style("stroke",m),A.data(b).append("text").attr("x",22).attr("y",14).text((function(t){return r.db.getShowData()||O.showData||O.pie.showData?t.data.name+" ["+t.data.value+"]":t.data.name}))}catch(E){h.error("Error while rendering info diagram"),h.error(E)}}},styles:I};export{P as diagram};
