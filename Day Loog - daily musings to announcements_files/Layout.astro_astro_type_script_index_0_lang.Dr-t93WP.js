function Mm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(n.key))=="symbol"?i:String(i),n)}var i}function mu(r,e,t){return e&&Mm(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function oi(){return oi=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},oi.apply(this,arguments)}function Sl(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Bo(r,e)}function Rc(r){return Rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Rc(r)}function Bo(r,e){return Bo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Bo(r,e)}function ym(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Cc(r,e,t){return Cc=ym()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&Bo(a,s.prototype),a},Cc.apply(null,arguments)}function Pc(r){var e=typeof Map=="function"?new Map:void 0;return Pc=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Cc(t,arguments,Rc(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Bo(n,t)},Pc(r)}function Em(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Vi,Tm=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Vi||(Vi={}));var Zu=Vi.off,Tr=function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Zu},r.setLevel=function(t){return Zu=Vi[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Vi.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Vi.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Vi.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Vi.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r}();function jr(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ju(r){return r&&r.sensitive?"":"i"}var ui={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},wr=new(function(){function r(){this.o=ui,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r}()),wm=function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=oi({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=oi({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=ui.prefix+"-"+ui.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},mu(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r}(),nd=new wm,tl=function(r,e){try{var t=function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=wr.toElement(n.html);i.namespace=wr.getNamespace(s),i.container=wr.getContainer(s),i.url=n.url,i.html=n.html,nd.update({ns:i.namespace});var o=wr.toDocument(n.html);document.title=o.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},id=function r(e,t,n){return e instanceof RegExp?function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i}(e,t):Array.isArray(e)?function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Ju(o))}(e,t,n):function(i,s,o){return function(a,l,c){c===void 0&&(c={});for(var u=c.strict,f=u!==void 0&&u,h=c.start,d=h===void 0||h,g=c.end,_=g===void 0||g,m=c.encode,p=m===void 0?function(Y){return Y}:m,S=c.delimiter,v=S===void 0?"/#?":S,M=c.endsWith,E="[".concat(jr(M===void 0?"":M),"]|$"),b="[".concat(jr(v),"]"),T=d?"^":"",L=0,x=a;L<x.length;L++){var y=x[L];if(typeof y=="string")T+=jr(p(y));else{var G=jr(p(y.prefix)),D=jr(p(y.suffix));if(y.pattern)if(l&&l.push(y),G||D)if(y.modifier==="+"||y.modifier==="*"){var U=y.modifier==="*"?"?":"";T+="(?:".concat(G,"((?:").concat(y.pattern,")(?:").concat(D).concat(G,"(?:").concat(y.pattern,"))*)").concat(D,")").concat(U)}else T+="(?:".concat(G,"(").concat(y.pattern,")").concat(D,")").concat(y.modifier);else T+=y.modifier==="+"||y.modifier==="*"?"((?:".concat(y.pattern,")").concat(y.modifier,")"):"(".concat(y.pattern,")").concat(y.modifier);else T+="(?:".concat(G).concat(D,")").concat(y.modifier)}}if(_)f||(T+="".concat(b,"?")),T+=c.endsWith?"(?=".concat(E,")"):"$";else{var I=a[a.length-1],N=typeof I=="string"?b.indexOf(I[I.length-1])>-1:I===void 0;f||(T+="(?:".concat(b,"(?=").concat(E,"))?")),N||(T+="(?=".concat(b,"|").concat(E,")"))}return new RegExp(T,Ju(c))}(function(a,l){l===void 0&&(l={});for(var c=function(D){for(var U=[],I=0;I<D.length;){var N=D[I];if(N!=="*"&&N!=="+"&&N!=="?")if(N!=="\\")if(N!=="{")if(N!=="}")if(N!==":")if(N!=="(")U.push({type:"CHAR",index:I,value:D[I++]});else{var Y=1,B="";if(D[J=I+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(J));for(;J<D.length;)if(D[J]!=="\\"){if(D[J]===")"){if(--Y==0){J++;break}}else if(D[J]==="("&&(Y++,D[J+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(J));B+=D[J++]}else B+=D[J++]+D[J++];if(Y)throw new TypeError("Unbalanced pattern at ".concat(I));if(!B)throw new TypeError("Missing pattern at ".concat(I));U.push({type:"PATTERN",index:I,value:B}),I=J}else{for(var W="",J=I+1;J<D.length;){var R=D.charCodeAt(J);if(!(R>=48&&R<=57||R>=65&&R<=90||R>=97&&R<=122||R===95))break;W+=D[J++]}if(!W)throw new TypeError("Missing parameter name at ".concat(I));U.push({type:"NAME",index:I,value:W}),I=J}else U.push({type:"CLOSE",index:I,value:D[I++]});else U.push({type:"OPEN",index:I,value:D[I++]});else U.push({type:"ESCAPED_CHAR",index:I++,value:D[I++]});else U.push({type:"MODIFIER",index:I,value:D[I++]})}return U.push({type:"END",index:I,value:""}),U}(a),u=l.prefixes,f=u===void 0?"./":u,h="[^".concat(jr(l.delimiter||"/#?"),"]+?"),d=[],g=0,_=0,m="",p=function(D){if(_<c.length&&c[_].type===D)return c[_++].value},S=function(D){var U=p(D);if(U!==void 0)return U;var I=c[_],N=I.index;throw new TypeError("Unexpected ".concat(I.type," at ").concat(N,", expected ").concat(D))},v=function(){for(var D,U="";D=p("CHAR")||p("ESCAPED_CHAR");)U+=D;return U};_<c.length;){var M=p("CHAR"),E=p("NAME"),b=p("PATTERN");if(E||b)f.indexOf(L=M||"")===-1&&(m+=L,L=""),m&&(d.push(m),m=""),d.push({name:E||g++,prefix:L,suffix:"",pattern:b||h,modifier:p("MODIFIER")||""});else{var T=M||p("ESCAPED_CHAR");if(T)m+=T;else if(m&&(d.push(m),m=""),p("OPEN")){var L=v(),x=p("NAME")||"",y=p("PATTERN")||"",G=v();S("CLOSE"),d.push({name:x||(y?g++:""),pattern:x&&!y?h:y,prefix:L,suffix:G,modifier:p("MODIFIER")||""})}else S("END")}}return d}(i,o),s,o)}(e,t,n)},bm={__proto__:null,update:tl,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:id},rd=function(){return window.location.origin},zo=function(r){return r===void 0&&(r=window.location.href),Wi(r).port},Wi=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(rd(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=sd(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},sd=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Lc=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},Am={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:rd,getPort:zo,getPath:function(r){return r===void 0&&(r=window.location.href),Wi(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Wi(r).query):Wi(r).query},getHash:function(r){return Wi(r).hash},parse:Wi,parseQuery:sd,clean:Lc};function Rm(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:oi({href:l},Wi(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function Cm(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function Ss(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(Cm(a)?a.then(s,o):s(a))});return i}}var Gi=new(function(r){function e(){var n;return(n=r.call(this)||this).logger=new Tr("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Sl(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return Ss(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(Tm)),od=function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return id(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Wi(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r}(),Pm=function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}Sl(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=oi({},this.T.get(n),i);return this.T.set(n,s),s},e}(od),Lm=function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r}(),Dm=function(){return!window.history.pushState},Um=function(r){return!r.el||!r.href},Im=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},Nm=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},Om=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},Fm=function(r){var e=r.el;return e.port!==void 0&&zo()!==zo(e.href)},Bm=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},zm=function(r){return r.el.hasAttribute(ui.prefix+"-"+ui.prevent)},km=function(r){return!!r.el.closest("["+ui.prefix+"-"+ui.prevent+'="all"]')},Hm=function(r){var e=r.href;return Lc(e)===Lc()&&zo(e)===zo()},Gm=function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Sl(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",Dm),this.add("exists",Um),this.add("newTab",Im),this.add("blank",Nm),this.add("corsDomain",Om),this.add("corsPort",Fm),this.add("download",Bm),this.add("preventSelf",zm),this.add("preventAll",km),this.add("sameUrl",Hm,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e}(od),Ul=function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(Em(i),e),i.name="BarbaError",i}return Sl(e,r),e}(Pc(Error)),Vm=function(){function r(t){t===void 0&&(t=[]),this.logger=new Tr("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var o=new Map,a=s.find(function(h){var d=!0,g={};return n.self&&h.name==="self"?(o.set(h,g),!0):(i.j.reverse().forEach(function(_){d&&(d=i.M(h,_,t,g),h.from&&h.to&&(d=i.M(h,_,t,g,"from")&&i.M(h,_,t,g,"to")),h.from&&!h.to&&(d=i.M(h,_,t,g,"from")),!h.from&&h.to&&(d=i.M(h,_,t,g,"to")))}),o.set(h,g),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,f=[a];Object.keys(l).length>0&&f.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,f=u,h=u,d=u,g=o?c[o]:c,_=o==="to"?i.next:i.current;if(o?g&&g[u]:g[u]){switch(n.type){case"strings":default:var m=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&m.indexOf(_[f])!==-1&&(l=!0),m.indexOf(_[f])===-1&&(a=!1);break;case"object":var p=Array.isArray(g[h])?g[h]:[g[h]];_[h]?(_[h].name&&p.indexOf(_[h].name)!==-1&&(l=!0),p.indexOf(_[h].name)===-1&&(a=!1)):a=!1;break;case"function":g[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r}();function js(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var Wm=function(){function r(t){t===void 0&&(t=[]),this.logger=new Tr("@barba/core"),this.store=void 0,this.C=!1,this.store=new Vm(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=js(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(h){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var f=js(function(){function h(){return Promise.resolve(l.L("before",n,c)).then(function(){function g(m){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var _=function(){if(u)return js(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(v){if(l.H(v))throw new Ul(v,"Transition error [sync]")});var m=function(v){return js(function(){var M=function(){if(p!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,p)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})}();if(M&&M.then)return M.then(function(){})},function(M){if(l.H(M))throw new Ul(M,"Transition error [before/after/enter]")})},p=!1,S=js(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),tl(s,n)]).then(function(v){return v[0]})).then(function(v){return p=v,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(v){if(l.H(v))throw new Ul(v,"Transition error [before/after/leave]")});return S&&S.then?S.then(m):m()}();return _&&_.then?_.then(g):g()})}var d=function(){if(u)return Promise.resolve(tl(s,n)).then(function(){})}();return d&&d.then?d.then(h):h()},function(h){throw l.C=!1,h.name&&h.name==="BarbaError"?(l.logger.debug(h.label),l.logger.error(h.error),h):(l.logger.debug("Transition error [page]"),l.logger.error(h),h)});return Promise.resolve(f&&f.then?f.then(a):a())}catch(h){return Promise.reject(h)}},e.once=function(t,n){try{return Promise.resolve(Gi.do("once",t,n)).then(function(){return n.once?Ss(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Gi.do("leave",t,n)).then(function(){return n.leave?Ss(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Gi.do("enter",t,n)).then(function(){return n.enter?Ss(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return wr.addContainer(t.next.container,n),Gi.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return wr.removeContainer(t.current.container),Gi.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Gi.do(t,n,i)).then(function(){return i[t]?Ss(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},mu(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r}(),Xm=function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Gi[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?Ss(s[e],s)(n):Promise.resolve()}},r}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var qm={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},ad=new(function(){function r(){this.version="2.10.3",this.schemaPage=qm,this.Logger=Tr,this.logger=new Tr("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Gi,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=wr,this.helpers=bm,this.history=nd,this.request=Rm,this.url=Am,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?ui:l,u=n.requestError,f=n.timeout,h=f===void 0?2e3:f,d=n.cacheIgnore,g=d!==void 0&&d,_=n.cacheFirstPage,m=_!==void 0&&_,p=n.prefetchIgnore,S=p!==void 0&&p,v=n.preventRunning,M=v!==void 0&&v,E=n.prevent,b=E===void 0?null:E,T=n.debug,L=n.logLevel;if(Tr.setLevel((T!==void 0&&T)===!0?"debug":L===void 0?"off":L),this.logger.info(this.version),Object.keys(c).forEach(function(G){ui[G]&&(ui[G]=c[G])}),this.B=u,this.timeout=h,this.cacheIgnore=g,this.cacheFirstPage=m,this.prefetchIgnore=S,this.preventRunning=M,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Pm(g),this.headers=new Lm,this.prevent=new Gm(S),this.transitions=new Wm(s),this.views=new Xm(a),b!==null){if(typeof b!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",b)}this.history.init(x.url.href,x.namespace),m&&this.cache.set(x.url.href,Promise.resolve({html:x.html,url:x.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(G){return G.init()});var y=this.data;y.trigger="barba",y.next=y.current,y.current=oi({},this.schemaPage),this.hooks.do("ready",y),this.once(y),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}}();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var f=l.data;return Promise.resolve(l.hooks.do("page",f)).then(function(){var h=function(d,g){try{var _=(m=l.transitions.get(f,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:f,page:o,transition:m,wrapper:l.q})).then(function(){l.I()}))}catch{return g()}var m;return _&&_.then?_.then(void 0,g):_}(0,function(){Tr.getLevel()===0&&l.force(f.next.url.href)});if(h&&h.then)return h.then(function(){})})},l=this;if(l.data.next.url=oi({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(f){f.url.href!==t&&l.history.add(f.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=function(){if(l.transitions.shouldWait)return Promise.resolve(tl(o,l.data)).then(function(){})}();return Promise.resolve(u&&u.then?u.then(a):a())}catch(f){return Promise.reject(f)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:oi({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:oi({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},mu(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r}());function Ym(r){const e=document.head,t=r.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],n=document.createElement("head");n.innerHTML=t;const i=["meta[name='keywords']","meta[name='description']","meta[property^='fb']","meta[property^='og']","meta[name^='twitter']","meta[name='robots']","meta[itemprop]","link[itemprop]","link[rel='prev']","link[rel='next']","link[rel='canonical']"].join(",");[...e.querySelectorAll(i)].forEach(a=>{e.removeChild(a)}),[...n.querySelectorAll(i)].forEach(a=>{e.appendChild(a)})}function $m(r){return r=r||2e3,new Promise(e=>{setTimeout(()=>{e()},r)})}function Ti(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ld(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Is={duration:.5,overwrite:!1,delay:0},_u,Kt,xt,hi=1e8,jt=1/hi,Dc=Math.PI*2,jm=Dc/4,Km=0,cd=Math.sqrt,Zm=Math.cos,Jm=Math.sin,kt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Li=function(e){return typeof e=="number"},gu=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},gn=function(e){return e!==!1},vu=function(){return typeof window<"u"},ra=function(e){return Et(e)||kt(e)},ud=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,Uc=/(?:-?\.?\d|\.)+/gi,hd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Il=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fd=/[+-]=-?[.\d]+/,dd=/[^,'"\[\]\s]+/gi,Qm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,ti,Ic,xu,On={},nl={},pd,md=function(e){return(nl=Hr(e,On))&&En},Su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ko=function(e,t){return!t&&console.warn(e)},_d=function(e,t){return e&&(On[e]=t)&&nl&&(nl[e]=t)||On},Ho=function(){return 0},e_={suppressEvents:!0,isStart:!0,kill:!1},ka={suppressEvents:!0,kill:!1},t_={suppressEvents:!0},Mu={},Ji=[],Nc={},gd,Cn={},Nl={},Qu=30,Ha=[],yu="",Eu=function(e){var t=e[0],n,i;if(mi(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ha.length;i--&&!Ha[i].targetTest(t););n=Ha[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hd(e[i],n)))||e.splice(i,1);return e},Cr=function(e){return e._gsap||Eu(Gn(e))[0]._gsap},vd=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():gu(n)&&e.getAttribute&&e.getAttribute(t)||n},vn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},ws=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},n_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},il=function(){var e=Ji.length,t=Ji.slice(0),n,i;for(Nc={},Ji.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xd=function(e,t,n,i){Ji.length&&!Kt&&il(),e.render(t,n,Kt&&t<0&&(e._initted||e._startAt)),Ji.length&&!Kt&&il()},Sd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dd).length<2?t:kt(e)?e.trim():e},Md=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},i_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Hr=function(e,t){for(var n in t)e[n]=t[n];return e},eh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},rl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vo=function(e){var t=e.parent||Mt,n=e.keyframes?i_(Zt(e.keyframes)):Wn;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},r_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},yd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},s_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Oc=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(ka):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},o_=function r(e){return!e||e._ts&&r(e.parent)},th=function(e){return e._repeat?Ns(e._tTime,e=e.duration()+e._rDelay)*e:0},Ns=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},sl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yl=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||jt)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yl(e),n._dirty||Pr(n,e)),e},Ed=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=sl(e.rawTime(),t),(!t._dur||Qo(0,t.totalDuration(),n)-t._tTime>jt)&&t.render(n,!0)),Pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ri=function(e,t,n,i){return t.parent&&rr(t),t._start=zt((Li(n)?n:n||e!==Mt?Bn(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yd(e,t,"_first","_last",e._sort?"_start":0),Fc(t)||(e._recent=t),i||Ed(e,t),e._ts<0&&El(e,e._tTime),e},Td=function(e,t){return(On.ScrollTrigger||Su("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},wd=function(e,t,n,i,s){if(wu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gd!==Ln.frame)return Ji.push(e),e._lazy=[s,i],1},a_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Fc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},l_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&a_(e)&&!(!e._initted&&Fc(e))||(e._ts<0||e._dp._ts<0)&&!Fc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Qo(0,e._tDur,t),u=Ns(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ns(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Kt||i||e._zTime===jt||!t&&e._zTime){if(!e._initted&&wd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?jt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Oc(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&rr(e,1),!n&&!Kt&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},c_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Os=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&El(e,e._tTime=e._tDur*a),e.parent&&yl(e),n||Pr(e.parent,e),e},nh=function(e){return e instanceof hn?Pr(e):Os(e,e._dur)},u_={_start:0,endTime:Ho,totalDuration:Ho},Bn=function r(e,t,n){var i=e.labels,s=e._recent||u_,o=e.duration()>=hi?s.endTime(!1):e._dur,a,l,c;return kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Zt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},xo=function(e,t,n){var i=Li(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gn(l.vars.inherit)&&l.parent;o.immediateRender=gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ct(t[0],o,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},Qo=function(e,t,n){return n<e?e:n>t?t:n},$t=function(e,t){return!kt(e)||!(t=Qm.exec(e))?"":t[1]},h_=function(e,t,n){return cr(n,function(i){return Qo(e,t,i)})},Bc=[].slice,bd=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==ti},f_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return kt(i)&&!t||bd(i,1)?(s=n).push.apply(s,Gn(i)):n.push(i)})||n},Gn=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):kt(e)&&!n&&(Ic||!Fs())?Bc.call((t||xu).querySelectorAll(e),0):Zt(e)?f_(e,n):bd(e)?Bc.call(e,0):e?[e]:[]},zc=function(e){return e=Gn(e)[0]||ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gn(t,n.querySelectorAll?n:n===e?ko("Invalid scope")||xu.createElement("div"):e)}},Ad=function(e){return e.sort(function(){return .5-Math.random()})},Rd=function(e){if(Et(e))return e;var t=mi(e)?e:{each:e},n=Lr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return kt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,S,v,M,E,b,T,L,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,hi])[1],!x){for(T=-1e8;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:i%x,S=x===hi?0:l?_*f/x-.5:i/x|0,T=0,L=hi,b=0;b<_;b++)v=b%x-p,M=S-(b/x|0),m[b]=E=c?Math.abs(c==="y"?M:v):cd(v*v+M*M),E>T&&(T=E),E<L&&(L=E);i==="random"&&Ad(m),m.max=T-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=$t(t.amount||t.each)||0,n=n&&_<0?Bd(n):n}return _=(m[h]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},kc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Li(n)?0:$t(n))}},Cd=function(e,t){var n=Zt(e),i,s;return!n&&mi(e)&&(i=n=e.radius||hi,e.values?(e=Gn(e.values),(s=!Li(e[0]))&&(i*=i)):e=kc(e.increment)),cr(t,n?Et(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Li(o)?u:u+$t(o)}:kc(e))},Pd=function(e,t,n,i){return cr(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},d_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},p_=function(e,t){return function(n){return e(parseFloat(n))+(t||$t(n))}},m_=function(e,t,n){return Dd(e,t,0,1,n)},Ld=function(e,t,n){return cr(n,function(i){return e[~~t(i)]})},__=function r(e,t,n){var i=t-e;return Zt(e)?Ld(e,r(0,e.length),t):cr(n,function(s){return(i+(s-e)%i)%i+e})},g_=function r(e,t,n){var i=t-e,s=i*2;return Zt(e)?Ld(e,r(0,e.length-1),t):cr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Go=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?dd:Uc),n+=e.substr(t,i-t)+Pd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dd=function(e,t,n,i,s){var o=t-e,a=i-n;return cr(s,function(l){return n+((l-e)/o*a||0)})},v_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=kt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Hr(Zt(e)?[]:{},e));if(!u){for(l in t)Tu.call(a,e,l,"get",t[l]);s=function(g){return Ru(g,a)||(o?e.p:e)}}}return cr(n,s)},ih=function(e,t,n){var i=e.labels,s=hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(e,t,n){var i=e.vars,s=i[t],o=xt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ji.length&&il(),a&&(xt=a),u=l?s.apply(c,l):s.call(c),xt=o,u},so=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Un(e,"onInterrupt"),e},ys,Ud=[],Id=function(e){if(e)if(e=!e.name&&e.default||e,vu()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ho,render:Ru,add:Tu,kill:I_,modifier:U_,rawVars:0},o={targetTest:0,get:0,getSetter:Au,aliases:{},register:0};if(Fs(),e!==i){if(Cn[t])return;Wn(i,Wn(rl(e,s),o)),Hr(i.prototype,Hr(s,rl(e,o))),Cn[i.prop=t]=i,e.targetTest&&(Ha.push(i),Mu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_d(t,i),e.register&&e.register(En,i,xn)}else Ud.push(e)},ut=255,oo={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Ol=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Nd=function(e,t,n){var i=e?Li(e)?[e>>16,e>>8&ut,e&ut]:0:oo.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oo[e])i=oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Uc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ol(l+1/3,s,o),i[1]=Ol(l,s,o),i[2]=Ol(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(hd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Uc)||oo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ut,o=i[1]/ut,a=i[2]/ut,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Od=function(e){var t=[],n=[],i=-1;return e.split(Qi).forEach(function(s){var o=s.match(Ms)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},rh=function(e,t,n){var i="",s=(e+i).match(Qi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Nd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Od(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Qi,"1").split(Ms),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Qi),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Qi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),x_=/hsl[a]?\(/,Fd=function(e){var t=e.join(" "),n;if(Qi.lastIndex=0,Qi.test(t))return n=x_.test(t),e[1]=rh(e[1],n),e[0]=rh(e[0],n,Od(e[1])),!0},Vo,Ln=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,S=m===!0,v,M,E,b;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,v=E-o,(v>0||S)&&(b=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,o+=v+(v>=s?4:s-v),M=1),S||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](E,h,b,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){pd&&(!Ic&&vu()&&(ti=Ic=window,xu=ti.document||{},On.gsap=En,(ti.gsapVersions||(ti.gsapVersions=[])).push(En.version),md(nl||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Ud.forEach(Id)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Vo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Vo=0,c=Ho},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var v=p?function(M,E,b,T){m(M,E,b,T),f.remove(v)}:m;return f.remove(m),a[S?"unshift":"push"](v),Fs(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Fs=function(){return!Vo&&Ln.wake()},it={},S_=/^[\d.\-M][\d.\-,\s]/,M_=/["']/g,y_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(M_,"").trim():+c,i=l.substr(a+1).trim();return t},E_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},T_=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[y_(t[1])]:E_(e).split(",").map(Sd)):it._CE&&S_.test(e)?it._CE("",e):n},Bd=function(e){return function(t){return 1-e(1-t)}},zd=function r(e,t){for(var n=e._first,i;n;)n instanceof hn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Lr=function(e,t){return e&&(Et(e)?e:it[e]||T_(e))||t},Yr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return vn(e,function(a){it[a]=On[a]=s,it[o=a.toLowerCase()]=n;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},kd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Dc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Jm((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:kd(a);return s=Dc/s,l.config=function(c,u){return r(e,c,u)},l},Bl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kd(n);return i.config=function(s){return r(e,s)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Yr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Yr("Elastic",Fl("in"),Fl("out"),Fl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Yr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Yr("Circ",function(r){return-(cd(1-r*r)-1)});Yr("Sine",function(r){return r===1?1:-Zm(r*jm)+1});Yr("Back",Bl("in"),Bl("out"),Bl());it.SteppedEase=it.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-jt;return function(a){return((i*Qo(0,o,a)|0)+s)*n}}};Is.ease=it["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yu+=r+","+r+"Params,"});var Hd=function(e,t){this.id=Km++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vd,this.set=t?t.getSetter:Au},Wo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Os(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),Vo||Ln.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(El(this,n),!s._dp||s.parent||Ed(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Qo(-Math.abs(this._delay),this._tDur,s),i!==!1),yl(this),s_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=t_);var i=Kt;return Kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Bn(this,n),gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-jt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Et(n)?n:Md,a=function(){var c=i.then;i.then=null,Et(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){so(this)},r}();Wn(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var hn=function(r){ld(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=gn(n.sortChildren),Mt&&ri(n.parent||Mt,Ti(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Td(Ti(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return xo(0,arguments,this),this},t.from=function(i,s,o){return xo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return xo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,vo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(i,s,Bn(this,o),1),this},t.call=function(i,s,o){return ri(this,Ct.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ct(i,o,Bn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,vo(o).immediateRender=gn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,vo(a).immediateRender=gn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,S,v,M,E,b,T;if(this!==Mt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,M=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=zt(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),E=Ns(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),b&&_&1&&(h=c-h,T=1),_!==E&&!this._lock){var L=b&&E&1,x=L===(b&&_&1);if(_<E&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(T?0:zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;zd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=c_(this,zt(a),zt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!_&&(Un(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var y=i<0?i:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||Kt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=y?-1e-8:jt);break}}d=g}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=M,yl(this),this.render(i,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Li(s)||(s=Bn(this,s,i)),!(i instanceof Wo)){if(Zt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(kt(i))return this.addLabel(i,s);if(Et(i))i=Ct.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ct?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return kt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(Ml(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Bn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ct.delayedCall(0,s||Ho,o);return a.data="isPause",this._hasPause=1,ri(this,a,Bn(this,i))},t.removePause=function(i){var s=this._first;for(i=Bn(this,i);s;)s._start===i&&s.data==="isPause"&&rr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Gn(i),l=this._first,c=Li(s),u;l;)l instanceof Ct?n_(l._targets,a)&&(c?(!Xi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Bn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ct.to(o,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||jt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Os(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Wn({startAt:{time:Bn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ih(this,Bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ih(this,Bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=hi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Os(o,o===Mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Mt._ts&&(xd(Mt,sl(i,Mt)),gd=Ln.frame),Ln.frame>=Qu){Qu+=In.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&In.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e}(Wo);Wn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var w_=function(e,t,n,i,s,o,a){var l=new xn(this._pt,e,t,0,1,Yd,null,s),c=0,u=0,f,h,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Go(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),h=n.match(Il)||[];f=Il.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ws(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Il.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(fd.test(i)||p)&&(l.e=0),this._pt=l,l},Tu=function(e,t,n,i,s,o,a,l,c,u){Et(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Et(f)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Et(f)?c?P_:Xd:bu,g;if(kt(i)&&(~i.indexOf("random(")&&(i=Go(i)),i.charAt(1)==="="&&(g=ws(h,i)+($t(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Hc)return!isNaN(h*i)&&i!==""?(g=new xn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?D_:qd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Su(t,i),w_.call(this,e,t,h,i,d,l||In.stringFilter,c))},b_=function(e,t,n,i,s){if(Et(e)&&(e=So(e,s,t,n,i)),!mi(e)||e.style&&e.nodeType||Zt(e)||ud(e))return kt(e)?So(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=So(e[a],s,t,n,i);return o},Gd=function(e,t,n,i,s,o){var a,l,c,u;if(Cn[e]&&(a=new Cn[e]).init(s,a.rawVars?t[e]:b_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new xn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ys))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Xi,Hc,wu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!_u,M=e.timeline,E,b,T,L,x,y,G,D,U,I,N,Y,B;if(M&&(!h||!s)&&(s="none"),e._ease=Lr(s,Is.ease),e._yEase=f?Bd(Lr(f===!0?s:f,Is.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(D=m[0]?Cr(m[0]).harness:0,Y=D&&i[D.prop],E=rl(i,Mu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?ka:e_),_._lazy=0),o){if(rr(e._startAt=Ct.set(m,Wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&gn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!d)&&e._startAt.revert(ka),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=Wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&gn(l),immediateRender:a,stagger:0,parent:p},E),Y&&(T[D.prop]=Y),rr(e._startAt=Ct.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(ka):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,jt,jt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&gn(l)||l&&!g,b=0;b<m.length;b++){if(x=m[b],G=x._gsap||Eu(m)[b]._gsap,e._ptLookup[b]=I={},Nc[G.id]&&Ji.length&&il(),N=S===m?b:S.indexOf(x),D&&(U=new D).init(x,Y||E,e,N,S)!==!1&&(e._pt=L=new xn(e._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(W){I[W]=L}),U.priority&&(y=1)),!D||Y)for(T in E)Cn[T]&&(U=Gd(T,E,e,N,x,S))?U.priority&&(y=1):I[T]=L=Tu.call(e,x,T,"get",E[T],N,S,0,i.stringFilter);e._op&&e._op[b]&&e.kill(x,e._op[b]),v&&e._pt&&(Xi=e,Mt.killTweensOf(x,I,e.globalTime(t)),B=!e.parent,Xi=0),e._pt&&l&&(Nc[G.id]=1)}y&&$d(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&M.render(hi,!0,!0)},A_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Hc=1,e.vars[t]="+=0",wu(e,a),Hc=0,l?ko(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=wt(n)+$t(f.e)),f.b&&(f.b=u.s+$t(f.b))},R_=function(e,t){var n=e[0]?Cr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Hr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},C_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Zt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},So=function(e,t,n,i,s){return Et(e)?e.call(t,n,i,s):kt(e)&&~e.indexOf("random(")?Go(e):e},Vd=yu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wd={};vn(Vd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wd[r]=1});var Ct=function(r){ld(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:vo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Mt,v=(Zt(n)||ud(n)?Li(n[0]):"length"in i)?[n]:Gn(n),M,E,b,T,L,x,y,G;if(a._targets=v.length?Eu(v):ko("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||ra(c)||ra(u)){if(i=a.vars,M=a.timeline=new hn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=Ti(a),M._start=0,h||ra(c)||ra(u)){if(T=v.length,y=h&&Rd(h),mi(h))for(L in h)~Vd.indexOf(L)&&(G||(G={}),G[L]=h[L]);for(E=0;E<T;E++)b=rl(i,Wd),b.stagger=0,p&&(b.yoyoEase=p),G&&Hr(b,G),x=v[E],b.duration=+So(c,Ti(a),E,x,v),b.delay=(+So(u,Ti(a),E,x,v)||0)-a._delay,!h&&T===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),M.to(x,b,y?y(E,x,v):0),M._ease=it.none;M.duration()?c=u=0:a.timeline=0}else if(g){vo(Wn(M.vars.defaults,{ease:"none"})),M._ease=Lr(g.ease||i.ease||"none");var D=0,U,I,N;if(Zt(g))g.forEach(function(Y){return M.to(v,Y,">")}),M.duration();else{b={};for(L in g)L==="ease"||L==="easeEach"||C_(L,g[L],b,g.easeEach);for(L in b)for(U=b[L].sort(function(Y,B){return Y.t-B.t}),D=0,E=0;E<U.length;E++)I=U[E],N={ease:I.e,duration:(I.t-(E?U[E-1].t:0))/100*c},N[L]=I.v,M.to(v,N,D),D+=N.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!_u&&(Xi=Ti(a),Mt.killTweensOf(v),Xi=0),ri(S,Ti(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===zt(S._time)&&gn(f)&&o_(Ti(a))&&S.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&Td(Ti(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-jt&&!u?l:i<jt?0:i,h,d,g,_,m,p,S,v,M;if(!c)l_(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=zt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===zt(f/_)&&(h=c,g--),h>c&&(h=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,h=c-h),m=Ns(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&zd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(wd(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!a&&!s&&!g&&(Un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Oc(this,i,s,o),Un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Oc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Vo||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wu(this,c),u=this._ease(c/this._dur),A_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(El(this,0),this.parent||yd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?so(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xi&&Xi.vars.overwrite!==!0)._first||so(this),this.parent&&o!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Gn(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&r_(a,l))return s==="all"&&(this._pt=0),so(this);for(f=this._op=this._op||[],s!=="all"&&(kt(s)&&(_={},vn(s,function(S){return _[S]=1}),s=_),s=R_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ml(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&so(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return xo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return xo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Mt.killTweensOf(i,s,o)},e}(Wo);Wn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(r){Ct[r]=function(){var e=new hn,t=Bc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bu=function(e,t,n){return e[t]=n},Xd=function(e,t,n){return e[t](n)},P_=function(e,t,n,i){return e[t](i.fp,n)},L_=function(e,t,n){return e.setAttribute(t,n)},Au=function(e,t){return Et(e[t])?Xd:gu(e[t])&&e.setAttribute?L_:bu},qd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},D_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ru=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},U_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},I_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},N_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},$d=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},xn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||qd,this.d=l||this,this.set=c||bu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=N_,this.m=n,this.mt=s,this.tween=i},r}();vn(yu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Mu[r]=1});On.TweenMax=On.TweenLite=Ct;On.TimelineLite=On.TimelineMax=hn;Mt=new hn({sortChildren:!1,defaults:Is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=Fd;var Dr=[],Ga={},O_=[],sh=0,F_=0,zl=function(e){return(Ga[e]||O_).map(function(t){return t()})},Gc=function(){var e=Date.now(),t=[];e-sh>2&&(zl("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ti.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),zl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sh=e,zl("matchMedia"))},jd=function(){function r(t,n){this.selector=n&&zc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=F_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Et(n)&&(s=i,i=n,n=Et);var o=this,a=function(){var c=xt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=zc(s)),xt=o,f=i.apply(o,arguments),Et(f)&&o._r.push(f),xt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Et?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ct&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ct)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),B_=function(){function r(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){mi(n)||(n={matches:n});var o=new jd(0,s||this.scope),a=o.conditions={},l,c,u;xt&&!o.selector&&(o.selector=xt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ti.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Gc):l.addEventListener("change",Gc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Id(i)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){kt(e)&&(e=Gn(e)[0]);var s=Cr(e||{}).get,o=n?Md:Sd;return n==="native"&&(n=""),e&&(t?o((Cn[t]&&Cn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Cn[a]&&Cn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Gn(e),e.length>1){var i=e.map(function(u){return En.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Cn[t],a=Cr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ys._pt=0,f.init(e,n?u+n:u,ys,0,[e]),f.render(1,f),ys._pt&&Ru(1,ys)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=En.to(e,Hr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Lr(e.ease,Is.ease)),eh(Is,e||{})},config:function(e){return eh(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Cn[a]&&!On[a]&&ko(t+" effect requires "+a+" plugin.")}),Nl[t]=function(a,l,c){return n(Gn(a),Wn(l||{},s),c)},o&&(hn.prototype[t]=function(a,l,c){return this.add(Nl[t](a,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Lr(t)},parseEase:function(e,t){return arguments.length?Lr(e,t):it},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new hn(e),i,s;for(n.smoothChildTiming=gn(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,i=Mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(Mt,n,0),n},context:function(e,t){return e?new jd(e,t):xt},matchMedia:function(e){return new B_(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Gc()},addEventListener:function(e,t){var n=Ga[e]||(Ga[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ga[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:__,wrapYoyo:g_,distribute:Rd,random:Pd,snap:Cd,normalize:m_,getUnit:$t,clamp:h_,splitColor:Nd,toArray:Gn,selector:zc,mapRange:Dd,pipe:d_,unitize:p_,interpolate:v_,shuffle:Ad},install:md,effects:Nl,ticker:Ln,updateRoot:hn.updateRoot,plugins:Cn,globalTimeline:Mt,core:{PropTween:xn,globals:_d,Tween:Ct,Timeline:hn,Animation:Wo,getCache:Cr,_removeLinkedListItem:Ml,reverting:function(){return Kt},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return _u=e}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ol[r]=Ct[r]});Ln.add(hn.updateRoot);ys=ol.to({},{duration:0});var z_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},k_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=z_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},kl=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(kt(s)&&(l={},vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}k_(a,s)}}}},En=ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kl("roundProps",kc),kl("modifiers"),kl("snap",Cd))||ol;Ct.version=hn.version=En.version="3.12.5";pd=1;vu()&&Fs();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oh,qi,bs,Cu,br,ah,Pu,H_=function(){return typeof window<"u"},Di={},vr=180/Math.PI,As=Math.PI/180,Kr=Math.atan2,lh=1e8,Lu=/([A-Z])/g,G_=/(left|right|width|margin|padding|x)/i,V_=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},W_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},X_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},q_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Kd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Y_=function(e,t,n){return e.style[t]=n},$_=function(e,t,n){return e.style.setProperty(t,n)},j_=function(e,t,n){return e._gsap[t]=n},K_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Z_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},J_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},yt="transform",Sn=yt+"Origin",Q_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Di&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=wi(i,a)}):this.tfm[e]=o.x?o[e]:wi(i,e),e===Sn&&(this.tfm.zOrigin=o.zOrigin);else return ai.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(yt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},Jd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pu(),(!s||!s.isStart)&&!n[yt]&&(Jd(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qd=function(e,t){var n={target:e,props:[],revert:eg,save:Q_};return e._gsap||En.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},ep,Wc=function(e,t){var n=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return n&&n.style?n:qi.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Bs(t)||t,1)||""},ch="O,Moz,ms,Ms,Webkit".split(","),Bs=function(e,t,n){var i=t||br,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ch[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ch[o]:"")+e},Xc=function(){H_()&&window.document&&(oh=window,qi=oh.document,bs=qi.documentElement,br=Wc("div")||{style:{}},Wc("div"),yt=Bs(yt),Sn=yt+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ep=!!Bs("perspective"),Pu=En.core.reverting,Cu=1)},Hl=function r(e){var t=Wc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(bs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),bs.removeChild(t),this.style.cssText=s,o},uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tp=function(e){var t;try{t=e.getBBox()}catch{t=Hl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hl||(t=Hl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+uh(e,["x","cx","x1"])||0,y:+uh(e,["y","cy","y1"])||0,width:0,height:0}:t},np=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tp(e))},Gr=function(e,t){if(t){var n=e.style,i;t in Di&&t!==Sn&&(t=yt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(t)}},Yi=function(e,t,n,i,s,o){var a=new xn(e._pt,t,n,0,1,o?Zd:Kd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},hh={deg:1,rad:1,turn:1},tg={grid:1,flex:1},sr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=br.style,l=G_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||hh[i]||hh[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&np(e),(d||o==="%")&&(Di[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],wt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===qi||!_.appendChild)&&(_=qi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ln.time&&!m.uncache)return wt(s/m.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+i,g=e[u],S?e.style[t]=S:Gr(e,t)}else(d||o==="%")&&!tg[fi(_,"display")]&&(a.position=fi(e,"position")),_===e&&(a.position="static"),_.appendChild(br),g=br[u],_.removeChild(br),a.position="absolute";return l&&d&&(m=Cr(_),m.time=Ln.time,m.width=_[u]),wt(h?g*s/f:g&&s?f/g*s:0)},wi=function(e,t,n,i){var s;return Cu||Xc(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Di[t]&&t!=="transform"?(s=qo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ll(fi(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=al[t]&&al[t](e,t,n)||fi(e,t)||vd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?sr(e,t,s,n)+n:s},ng=function(e,t,n,i){if(!n||n==="none"){var s=Bs(t,e,1),o=s&&fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var a=new xn(this._pt,e.style,t,0,1,Yd),l=0,c=0,u,f,h,d,g,_,m,p,S,v,M,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=fi(e,t)||i,_?e.style[t]=_:Gr(e,t)),u=[n,i],Fd(u),n=u[0],i=u[1],h=n.match(Ms)||[],E=i.match(Ms)||[],E.length){for(;f=Ms.exec(i);)m=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=ws(d,m)+M),p=parseFloat(m),v=m.substr((p+"").length),l=Ms.lastIndex-v.length,v||(v=v||In.units[t]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(d=sr(e,t,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Zd:Kd;return fd.test(i)&&(a.e=0),this._pt=a,a},fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ig=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=fh[n]||n,t[1]=fh[i]||i,t.join(" ")},rg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Di[a]&&(l=1,a=a==="transformOrigin"?Sn:yt),Gr(n,a);l&&(Gr(n,yt),o&&(o.svg&&n.removeAttribute("transform"),qo(n,1),o.uncache=1,Jd(i)))}},al={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new xn(e._pt,t,n,0,0,rg);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Xo=[1,0,0,1,0,0],ip={},rp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dh=function(e){var t=fi(e,yt);return rp(t)?Xo:t.substr(7).match(hd).map(wt)},Du=function(e,t){var n=e._gsap||Cr(e),i=e.style,s=dh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!e.offsetParent&&e!==bs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,bs.appendChild(e)),s=dh(e),l?i.display=l:Gr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Du(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],v=t.split(" "),M=parseFloat(v[0])||0,E=parseFloat(v[1])||0,b,T,L,x;n?l!==Xo&&(T=d*m-g*_)&&(L=M*(m/T)+E*(-_/T)+(_*S-m*p)/T,x=M*(-g/T)+E*(d/T)-(d*S-g*p)/T,M=L,E=x):(b=tp(e),M=b.x+(~v[0].indexOf("%")?M/100*b.width:M),E=b.y+(~(v[1]||v[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&a.smooth?(p=M-c,S=E-u,a.xOffset=f+(p*d+S*_)-p,a.yOffset=h+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Sn]="0px 0px",o&&(Yi(o,a,"xOrigin",c,M),Yi(o,a,"yOrigin",u,E),Yi(o,a,"xOffset",f,a.xOffset),Yi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+E)},qo=function(e,t){var n=e._gsap||new Hd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=fi(e,Sn)||"0",u,f,h,d,g,_,m,p,S,v,M,E,b,T,L,x,y,G,D,U,I,N,Y,B,W,J,R,F,$,re,ee,oe;return u=f=h=_=m=p=S=v=M=0,d=g=1,n.svg=!!(e.getCTM&&np(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),i.scale=i.rotate=i.translate="none"),T=Du(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),qc(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,T)),E=n.xOrigin||0,b=n.yOrigin||0,T!==Xo&&(G=T[0],D=T[1],U=T[2],I=T[3],u=N=T[4],f=Y=T[5],T.length===6?(d=Math.sqrt(G*G+D*D),g=Math.sqrt(I*I+U*U),_=G||D?Kr(D,G)*vr:0,S=U||I?Kr(U,I)*vr+_:0,S&&(g*=Math.abs(Math.cos(S*As))),n.svg&&(u-=E-(E*G+b*U),f-=b-(E*D+b*I))):(oe=T[6],re=T[7],R=T[8],F=T[9],$=T[10],ee=T[11],u=T[12],f=T[13],h=T[14],L=Kr(oe,$),m=L*vr,L&&(x=Math.cos(-L),y=Math.sin(-L),B=N*x+R*y,W=Y*x+F*y,J=oe*x+$*y,R=N*-y+R*x,F=Y*-y+F*x,$=oe*-y+$*x,ee=re*-y+ee*x,N=B,Y=W,oe=J),L=Kr(-U,$),p=L*vr,L&&(x=Math.cos(-L),y=Math.sin(-L),B=G*x-R*y,W=D*x-F*y,J=U*x-$*y,ee=I*y+ee*x,G=B,D=W,U=J),L=Kr(D,G),_=L*vr,L&&(x=Math.cos(L),y=Math.sin(L),B=G*x+D*y,W=N*x+Y*y,D=D*x-G*y,Y=Y*x-N*y,G=B,N=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=wt(Math.sqrt(G*G+D*D+U*U)),g=wt(Math.sqrt(Y*Y+oe*oe)),L=Kr(N,Y),S=Math.abs(L)>2e-4?L*vr:0,M=ee?1/(ee<0?-ee:ee):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rp(fi(e,yt)),B&&e.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=wt(d),n.scaleY=wt(g),n.rotation=wt(_)+a,n.rotationX=wt(m)+a,n.rotationY=wt(p)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Sn]=ll(c)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?og:ep?sp:sg,n.uncache=0,n},ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var i=$t(t);return wt(parseFloat(t)+parseFloat(sr(e,"x",n+"px",i)))+i},sg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sp(e,t)},fr="0deg",Ks="0px",dr=") ",sp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,M="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==fr||u!==fr)){var b=parseFloat(u)*As,T=Math.sin(b),L=Math.cos(b),x;b=parseFloat(f)*As,x=Math.cos(b),o=Gl(S,o,T*x*-v),a=Gl(S,a,-Math.sin(b)*-v),l=Gl(S,l,L*x*-v+v)}m!==Ks&&(M+="perspective("+m+dr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||o!==Ks||a!==Ks||l!==Ks)&&(M+=l!==Ks||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+dr),c!==fr&&(M+="rotate("+c+dr),u!==fr&&(M+="rotateY("+u+dr),f!==fr&&(M+="rotateX("+f+dr),(h!==fr||d!==fr)&&(M+="skew("+h+", "+d+dr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+dr),S.style[yt]=M||"translate(0, 0)"},og=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(o),M=parseFloat(a),E,b,T,L,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,E=Math.cos(l)*f,b=Math.sin(l)*f,T=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=As,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,L*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),E*=x,b*=x)),E=wt(E),b=wt(b),T=wt(T),L=wt(L)):(E=f,L=h,b=T=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=sr(d,"x",o,"px"),M=sr(d,"y",a,"px")),(g||_||m||p)&&(v=wt(v+g-(g*E+_*T)+m),M=wt(M+_-(g*b+_*L)+p)),(i||s)&&(x=d.getBBox(),v=wt(v+i/100*x.width),M=wt(M+s/100*x.height)),x="matrix("+E+","+b+","+T+","+L+","+v+","+M+")",d.setAttribute("transform",x),S&&(d.style[yt]=x)},ag=function(e,t,n,i,s){var o=360,a=kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*lh)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*lh)%o-~~(c/o)*o)),e._pt=h=new xn(e._pt,t,n,i,c,W_),h.e=u,h.u="deg",e._props.push(n),h},ph=function(e,t){for(var n in t)e[n]=t[n];return e},lg=function(e,t,n){var i=ph({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[yt]=t,a=qo(n,1),Gr(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],o[yt]=t,a=qo(n,1),o[yt]=c);for(l in Di)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=$t(c),g=$t(u),f=d!==g?sr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new xn(e._pt,a,l,f,h-f,Vc),e._pt.u=g||0,e._props.push(l));ph(a,i)};vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});al[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return wi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var op={name:"css",register:Xc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,S,v,M,E,b,T,L;Cu||Xc(),this.styles=this.styles||Qd(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Cn[_]&&Gd(_,t,n,i,e,s)))){if(d=typeof u,g=al[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Go(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Qi.lastIndex=0,Qi.test(c)||(m=$t(c),p=$t(u)),p?m!==p&&(c=sr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],kt(c)&&~c.indexOf("random(")&&(c=Go(c)),$t(c+"")||c==="auto"||(c+=In.units[_]||$t(wi(e,_))||""),(c+"").charAt(1)==="="&&(c=wi(e,_))):c=wi(e,_),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),_ in ai&&(_==="autoAlpha"&&(h===1&&wi(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),Yi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ai[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Di,v){if(this.styles.save(_),M||(E=e._gsap,E.renderTransform&&!t.parseTransform||qo(e,t.parseTransform),b=t.smoothOrigin!==!1&&E.smooth,M=this._pt=new xn(this._pt,a,yt,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new xn(this._pt,E,"scaleY",E.scaleY,(S?ws(E.scaleY,S+f):f)-E.scaleY||0,Vc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Sn,0,a[Sn]),u=ig(u),E.svg?qc(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Yi(this,E,"zOrigin",E.zOrigin,p),Yi(this,a,_,ll(c),ll(u)));continue}else if(_==="svgOrigin"){qc(e,u,1,b,0,this);continue}else if(_ in ip){ag(this,E,_,h,S?ws(h,S+u):u);continue}else if(_==="smoothOrigin"){Yi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){lg(this,u,e);continue}}else _ in a||(_=Bs(_)||_);if(v||(f||f===0)&&(h||h===0)&&!V_.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=$t(u)||(_ in In.units?In.units[_]:m),m!==p&&(h=sr(e,_,c,p)),this._pt=new xn(this._pt,v?E:a,_,h,(S?ws(h,S+f):f)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?q_:Vc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=X_);else if(_ in a)ng.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Su(_,u);continue}v||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||e[_])),o.push(_)}}T&&$d(this)},render:function(e,t){if(t.tween._time||!Pu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Di&&t!==Sn&&(e._gsap.x||wi(e,"x"))?n&&ah===n?t==="scale"?K_:j_:(ah=n||{})&&(t==="scale"?Z_:J_):e.style&&!gu(e.style[t])?Y_:~t.indexOf("-")?$_:Au(e,t)},core:{_removeProperty:Gr,_getMatrix:Du}};En.utils.checkPrefix=Bs;En.core.getStyleSaver=Qd;(function(r,e,t,n){var i=vn(r+","+e+","+t,function(s){Di[s]=1});vn(e,function(s){In.units[s]="deg",ip[s]=1}),ai[i[13]]=r+","+e,vn(n,function(s){var o=s.split(":");ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});En.registerPlugin(op);var be=En.registerPlugin(op)||En;be.core.Tween;/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cg=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,ug=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,hg=Math.PI/180,sa=Math.sin,oa=Math.cos,Mo=Math.abs,Zs=Math.sqrt,fg=function(e){return typeof e=="number"},mh=1e5,Ii=function(e){return Math.round(e*mh)/mh||0};function dg(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,f,h;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+s,l[u+1]=f*t+h*i+o;return r._dirty=1,r}function pg(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=Mo(t),n=Mo(n);var c=i%360*hg,u=oa(c),f=sa(c),h=Math.PI,d=h*2,g=(r-a)/2,_=(e-l)/2,m=u*g+f*_,p=-f*g+u*_,S=m*m,v=p*p,M=S/(t*t)+v/(n*n);M>1&&(t=Zs(M)*t,n=Zs(M)*n);var E=t*t,b=n*n,T=(E*b-E*v-b*S)/(E*v+b*S);T<0&&(T=0);var L=(s===o?-1:1)*Zs(T),x=L*(t*p/n),y=L*-(n*m/t),G=(r+a)/2,D=(e+l)/2,U=G+(u*x-f*y),I=D+(f*x+u*y),N=(m-x)/t,Y=(p-y)/n,B=(-m-x)/t,W=(-p-y)/n,J=N*N+Y*Y,R=(Y<0?-1:1)*Math.acos(N/Zs(J)),F=(N*W-Y*B<0?-1:1)*Math.acos((N*B+Y*W)/Zs(J*(B*B+W*W)));isNaN(F)&&(F=h),!o&&F>0?F-=d:o&&F<0&&(F+=d),R%=d,F%=d;var $=Math.ceil(Mo(F)/(d/4)),re=[],ee=F/$,oe=4/3*sa(ee/2)/(1+oa(ee/2)),_e=u*t,Se=f*t,Me=f*-n,Fe=u*n,Qe;for(Qe=0;Qe<$;Qe++)i=R+Qe*ee,m=oa(i),p=sa(i),N=oa(i+=ee),Y=sa(i),re.push(m-oe*p,p+oe*m,N+oe*Y,Y-oe*N,N,Y);for(Qe=0;Qe<re.length;Qe+=2)m=re[Qe],p=re[Qe+1],re[Qe]=m*_e+p*Me+U,re[Qe+1]=m*Se+p*Fe+I;return re[Qe-2]=a,re[Qe-1]=l,re}}function mg(r){var e=(r+"").replace(ug,function(x){var y=+x;return y<1e-4&&y>-1e-4?0:y}).match(cg)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,f,h,d,g,_,m,p,S,v,M,E,b,T,L=function(y,G,D,U){S=(D-y)/3,v=(U-G)/3,_.push(y+S,G+v,D-S,U-v,D,U)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=d,isNaN(e[c])?(d=e[c].toUpperCase(),g=d!==e[c]):c--,f=+e[c+1],h=+e[c+2],g&&(f+=n,h+=i),c||(m=f,p=h),d==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=m=f,i=p=h,_=[f,h],t.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),g||(n=i=0),_.push(f,h,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")S=n,v=i,(E==="C"||E==="S")&&(S+=n-_[_.length-4],v+=i-_[_.length-3]),g||(n=i=0),_.push(S,v,f,h,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")S=n+(f-n)*s,v=i+(h-i)*s,g||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,_.push(S,v,n+(f-n)*s,i+(h-i)*s,n,i),c+=4;else if(d==="T")S=n-_[_.length-4],v=i-_[_.length-3],_.push(n+S,i+v,f+(n+S*1.5-f)*s,h+(i+v*1.5-h)*s,n=f,i=h),c+=2;else if(d==="H")L(n,i,n=f,i),c+=1;else if(d==="V")L(n,i,n,i=f+(g?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=m,h=p,_.closed=!0),(d==="L"||Mo(n-f)>.5||Mo(i-h)>.5)&&(L(n,i,f,h),d==="L"&&(c+=2)),n=f,i=h;else if(d==="A"){if(b=e[c+4],T=e[c+5],S=e[c+6],v=e[c+7],u=7,b.length>1&&(b.length<3?(v=S,S=T,u--):(v=T,S=b.substr(2),u-=2),T=b.charAt(1),b=b.charAt(0)),M=pg(n,i,+e[c+1],+e[c+2],+e[c+3],+b,+T,(g?n:0)+S*1,(g?i:0)+v*1),c+=u,M)for(u=0;u<M.length;u++)_.push(M[u]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function _g(r){fg(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+Ii(o[0])+","+Ii(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Ii(o[s++])+","+Ii(o[s++])+" "+Ii(o[s++])+","+Ii(o[s++])+" "+Ii(o[s++])+","+Ii(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n,ap,lp=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},_h=function(){_n=lp(),_n?(_n.registerEase("_CE",Ws.create),ap=1):console.warn("Please gsap.registerPlugin(CustomEase)")},gg=1e20,aa=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},vg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,xg=/[cLlsSaAhHvVtTqQ]/g,Sg=function(e){var t=e.length,n=gg,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Mg=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Sg(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},yg=function r(e,t,n,i,s,o,a,l,c,u,f){var h=(e+n)/2,d=(t+i)/2,g=(n+s)/2,_=(i+o)/2,m=(s+a)/2,p=(o+l)/2,S=(h+g)/2,v=(d+_)/2,M=(g+m)/2,E=(_+p)/2,b=(S+M)/2,T=(v+E)/2,L=a-e,x=l-t,y=Math.abs((n-a)*x-(i-l)*L),G=Math.abs((s-a)*x-(o-l)*L),D;return u||(u=[{x:e,y:t},{x:a,y:l}],f=1),u.splice(f||u.length-1,0,{x:b,y:T}),(y+G)*(y+G)>c*(L*L+x*x)&&(D=u.length,r(e,t,h,d,S,v,b,T,c,u,f),r(b,T,M,E,m,p,a,l,c,u,f+1+(u.length-D))),u},Ws=function(){function r(t,n,i){ap||_h(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(vg),o=1,a=[],l=[],c=i.precision||1,u=c<=1,f,h,d,g,_,m,p,S,v;if(this.data=n,(xg.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=mg(n)[0]),f=s.length,f===4)s.unshift(0,0),s.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[f-2]!=1)&&Mg(s,i.height,i.originY),this.segment=s,g=2;g<f;g+=6)h={x:+s[g-2],y:+s[g-1]},d={x:+s[g+4],y:+s[g+5]},a.push(h,d),yg(h.x,h.y,+s[g],+s[g+1],+s[g+2],+s[g+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(f=a.length,g=0;g<f;g++)p=a[g],S=a[g-1]||p,(p.x>S.x||S.y!==p.y&&S.x===p.x||p===S)&&p.x<=1?(S.cx=p.x-S.x,S.cy=p.y-S.y,S.n=p,S.nx=p.x,u&&g>1&&Math.abs(S.cy/S.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),S.cx<o&&(S.cx?o=S.cx:(S.cx=.001,g===f-1&&(S.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),f--);if(f=1/o+1|0,_=1/f,m=0,p=a[0],u){for(g=0;g<f;g++)v=g*_,p.nx<v&&(p=a[++m]),h=p.y+(v-p.x)/p.cx*p.cy,l[g]={x:v,cx:_,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);l[f-1].cy=a[a.length-1].y-h}else{for(g=0;g<f;g++)p.nx<g*_&&(p=a[++m]),l[g]=p;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(M){var E=l[M*f|0]||l[f-1];return E.nx<M&&(E=E.n),E.y+(M-E.x)/E.cx*E.cy},this.ease.custom=this,this.id&&_n&&_n.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){_n=n,_h()},r.get=function(n){return _n.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=_n.utils.toArray(i.path)[0],u,f,h,d,g,_,m,p,S,v;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=_n.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=_g(dg([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(i.precision||1)*200),d=1/m,m+=2,p=5/m,S=aa(a+d*s),v=aa(l+n(d)*-o),f=(v-l)/(S-a),h=2;h<m;h++)g=aa(a+h*d*s),_=aa(l+n(h*d)*-o),(Math.abs((_-v)/(g-S)-f)>p||h===m-1)&&(u.push(S,v),f=(_-v)/(g-S)),S=g,v=_;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r}();lp()&&_n.registerPlugin(Ws);Ws.version="3.12.5";function Eg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Tg(r,e,t){return e&&Eg(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht,Va,Dn,$i,ji,Rs,cp,xr,yo,up,Ai,jn,hp,fp=function(){return Ht||typeof window<"u"&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},dp=1,Es=[],et=[],di=[],Eo=Date.now,Yc=function(e,t){return t},wg=function(){var e=yo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,di),et=n,di=i,Yc=function(o,a){return t[o](a)}},er=function(e,t){return~di.indexOf(e)&&di[di.indexOf(e)+1][t]},To=function(e){return!!~up.indexOf(e)},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},la="scrollLeft",ca="scrollTop",$c=function(){return Ai&&Ai.isPressed||et.cache++},cl=function(e,t){var n=function i(s){if(s||s===0){dp&&(Dn.history.scrollRestoration="manual");var o=Ai&&Ai.isPressed;s=i.v=Math.round(s)||(Ai&&Ai.iOS?1:0),e(s),i.cacheID=et.cache,o&&Yc("ss",s)}else(t||et.cache!==i.cacheID||Yc("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},fn={s:la,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cl(function(r){return arguments.length?Dn.scrollTo(r,Dt.sc()):Dn.pageXOffset||$i[la]||ji[la]||Rs[la]||0})},Dt={s:ca,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:fn,sc:cl(function(r){return arguments.length?Dn.scrollTo(fn.sc(),r):Dn.pageYOffset||$i[ca]||ji[ca]||Rs[ca]||0})},mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ht.utils.toArray)(e)[0]||(typeof e=="string"&&Ht.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},or=function(e,t){var n=t.s,i=t.sc;To(e)&&(e=$i.scrollingElement||ji);var s=et.indexOf(e),o=i===Dt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||nn(e,"scroll",$c);var a=et[s+o],l=a||(et[s+o]=cl(er(e,n),!0)||(To(e)?i:cl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Ht.getProperty(e,"scrollBehavior")==="smooth"),l},jc=function(e,t,n){var i=e,s=e,o=Eo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Eo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,p=Eo();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Js=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},pp=function(){yo=Ht.core.globals().ScrollTrigger,yo&&yo.core&&wg()},mp=function(e){return Ht=e||fp(),!Va&&Ht&&typeof document<"u"&&document.body&&(Dn=window,$i=document,ji=$i.documentElement,Rs=$i.body,up=[Dn,$i,ji,Rs],Ht.utils.clamp,hp=Ht.core.context||function(){},xr="onpointerenter"in Rs?"pointer":"mouse",cp=bt.isTouch=Dn.matchMedia&&Dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jn=bt.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dp=0},500),pp(),Va=1),Va};fn.op=Dt;et.cache=0;var bt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Va||mp(Ht)||console.warn("Please gsap.registerPlugin(Observer)"),yo||pp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,v=n.onPress,M=n.onRelease,E=n.onRight,b=n.onLeft,T=n.onUp,L=n.onDown,x=n.onChangeX,y=n.onChangeY,G=n.onChange,D=n.onToggleX,U=n.onToggleY,I=n.onHover,N=n.onHoverEnd,Y=n.onMove,B=n.ignoreCheck,W=n.isNormalizer,J=n.onGestureStart,R=n.onGestureEnd,F=n.onWheel,$=n.onEnable,re=n.onDisable,ee=n.onClick,oe=n.scrollSpeed,_e=n.capture,Se=n.allowClicks,Me=n.lockAxis,Fe=n.onLockAxis;this.target=a=mn(a)||ji,this.vars=n,d&&(d=Ht.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,oe=oe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Dn.getComputedStyle(Rs).lineHeight)||22);var Qe,De,k,Ne,de,Le,Pe,V=this,Oe=0,Be=0,tt=n.passive||!u,je=or(a,fn),dt=or(a,Dt),C=je(),w=dt(),H=~o.indexOf("touch")&&!~o.indexOf("pointer")&&jn[0]==="pointerdown",ne=To(a),Q=a.ownerDocument||$i,te=[0,0,0],ge=[0,0,0],se=0,j=function(){return se=Eo()},fe=function(Ae,ke){return(V.event=Ae)&&d&&~d.indexOf(Ae.target)||ke&&H&&Ae.pointerType!=="touch"||B&&B(Ae,ke)},Ce=function(){V._vx.reset(),V._vy.reset(),De.pause(),f&&f(V)},we=function(){var Ae=V.deltaX=gh(te),ke=V.deltaY=gh(ge),he=Math.abs(Ae)>=i,Ge=Math.abs(ke)>=i;G&&(he||Ge)&&G(V,Ae,ke,te,ge),he&&(E&&V.deltaX>0&&E(V),b&&V.deltaX<0&&b(V),x&&x(V),D&&V.deltaX<0!=Oe<0&&D(V),Oe=V.deltaX,te[0]=te[1]=te[2]=0),Ge&&(L&&V.deltaY>0&&L(V),T&&V.deltaY<0&&T(V),y&&y(V),U&&V.deltaY<0!=Be<0&&U(V),Be=V.deltaY,ge[0]=ge[1]=ge[2]=0),(Ne||k)&&(Y&&Y(V),k&&(S(V),k=!1),Ne=!1),Le&&!(Le=!1)&&Fe&&Fe(V),de&&(F(V),de=!1),Qe=0},ve=function(Ae,ke,he){te[he]+=Ae,ge[he]+=ke,V._vx.update(Ae),V._vy.update(ke),c?Qe||(Qe=requestAnimationFrame(we)):we()},xe=function(Ae,ke){Me&&!Pe&&(V.axis=Pe=Math.abs(Ae)>Math.abs(ke)?"x":"y",Le=!0),Pe!=="y"&&(te[2]+=Ae,V._vx.update(Ae,!0)),Pe!=="x"&&(ge[2]+=ke,V._vy.update(ke,!0)),c?Qe||(Qe=requestAnimationFrame(we)):we()},He=function(Ae){if(!fe(Ae,1)){Ae=Js(Ae,u);var ke=Ae.clientX,he=Ae.clientY,Ge=ke-V.x,Ue=he-V.y,ze=V.isDragging;V.x=ke,V.y=he,(ze||Math.abs(V.startX-ke)>=s||Math.abs(V.startY-he)>=s)&&(S&&(k=!0),ze||(V.isDragging=!0),xe(Ge,Ue),ze||m&&m(V))}},rt=V.onPress=function(pe){fe(pe,1)||pe&&pe.button||(V.axis=Pe=null,De.pause(),V.isPressed=!0,pe=Js(pe),Oe=Be=0,V.startX=V.x=pe.clientX,V.startY=V.y=pe.clientY,V._vx.reset(),V._vy.reset(),nn(W?a:Q,jn[1],He,tt,!0),V.deltaX=V.deltaY=0,v&&v(V))},P=V.onRelease=function(pe){if(!fe(pe,1)){tn(W?a:Q,jn[1],He,!0);var Ae=!isNaN(V.y-V.startY),ke=V.isDragging,he=ke&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ge=Js(pe);!he&&Ae&&(V._vx.reset(),V._vy.reset(),u&&Se&&Ht.delayedCall(.08,function(){if(Eo()-se>300&&!pe.defaultPrevented){if(pe.target.click)pe.target.click();else if(Q.createEvent){var Ue=Q.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Dn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),pe.target.dispatchEvent(Ue)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&ke&&!W&&De.restart(!0),p&&ke&&p(V),M&&M(V,he)}},le=function(Ae){return Ae.touches&&Ae.touches.length>1&&(V.isGesturing=!0)&&J(Ae,V.isDragging)},q=function(){return(V.isGesturing=!1)||R(V)},ie=function(Ae){if(!fe(Ae)){var ke=je(),he=dt();ve((ke-C)*oe,(he-w)*oe,1),C=ke,w=he,f&&De.restart(!0)}},ae=function(Ae){if(!fe(Ae)){Ae=Js(Ae,u),F&&(de=!0);var ke=(Ae.deltaMode===1?l:Ae.deltaMode===2?Dn.innerHeight:1)*g;ve(Ae.deltaX*ke,Ae.deltaY*ke,0),f&&!W&&De.restart(!0)}},Xe=function(Ae){if(!fe(Ae)){var ke=Ae.clientX,he=Ae.clientY,Ge=ke-V.x,Ue=he-V.y;V.x=ke,V.y=he,Ne=!0,f&&De.restart(!0),(Ge||Ue)&&xe(Ge,Ue)}},lt=function(Ae){V.event=Ae,I(V)},ct=function(Ae){V.event=Ae,N(V)},pn=function(Ae){return fe(Ae)||Js(Ae,u)&&ee(V)};De=V._dc=Ht.delayedCall(h||.25,Ce).pause(),V.deltaX=V.deltaY=0,V._vx=jc(0,50,!0),V._vy=jc(0,50,!0),V.scrollX=je,V.scrollY=dt,V.isDragging=V.isGesturing=V.isPressed=!1,hp(this),V.enable=function(pe){return V.isEnabled||(nn(ne?Q:a,"scroll",$c),o.indexOf("scroll")>=0&&nn(ne?Q:a,"scroll",ie,tt,_e),o.indexOf("wheel")>=0&&nn(a,"wheel",ae,tt,_e),(o.indexOf("touch")>=0&&cp||o.indexOf("pointer")>=0)&&(nn(a,jn[0],rt,tt,_e),nn(Q,jn[2],P),nn(Q,jn[3],P),Se&&nn(a,"click",j,!0,!0),ee&&nn(a,"click",pn),J&&nn(Q,"gesturestart",le),R&&nn(Q,"gestureend",q),I&&nn(a,xr+"enter",lt),N&&nn(a,xr+"leave",ct),Y&&nn(a,xr+"move",Xe)),V.isEnabled=!0,pe&&pe.type&&rt(pe),$&&$(V)),V},V.disable=function(){V.isEnabled&&(Es.filter(function(pe){return pe!==V&&To(pe.target)}).length||tn(ne?Q:a,"scroll",$c),V.isPressed&&(V._vx.reset(),V._vy.reset(),tn(W?a:Q,jn[1],He,!0)),tn(ne?Q:a,"scroll",ie,_e),tn(a,"wheel",ae,_e),tn(a,jn[0],rt,_e),tn(Q,jn[2],P),tn(Q,jn[3],P),tn(a,"click",j,!0),tn(a,"click",pn),tn(Q,"gesturestart",le),tn(Q,"gestureend",q),tn(a,xr+"enter",lt),tn(a,xr+"leave",ct),tn(a,xr+"move",Xe),V.isEnabled=V.isPressed=V.isDragging=!1,re&&re(V))},V.kill=V.revert=function(){V.disable();var pe=Es.indexOf(V);pe>=0&&Es.splice(pe,1),Ai===V&&(Ai=0)},Es.push(V),W&&To(a)&&(Ai=V),V.enable(_)},Tg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();bt.version="3.12.5";bt.create=function(r){return new bt(r)};bt.register=mp;bt.getAll=function(){return Es.slice()};bt.getById=function(r){return Es.filter(function(e){return e.vars.id===r})[0]};fp()&&Ht.registerPlugin(bt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ye,ms,nt,St,Kn,mt,_p,ul,Yo,wo,ao,ua,qt,Tl,Kc,an,vh,xh,_s,gp,Vl,vp,on,Zc,xp,Sp,ki,Jc,Uu,Cs,Iu,hl,Qc,Wl,ha=1,Yt=Date.now,Xl=Yt(),Vn=0,lo=0,Sh=function(e,t,n){var i=Rn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mh=function(e,t){return t&&(!Rn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},bg=function r(){return lo&&requestAnimationFrame(r)},yh=function(){return Tl=1},Eh=function(){return Tl=0},ni=function(e){return e},co=function(e){return Math.round(e*1e5)/1e5||0},Mp=function(){return typeof window<"u"},yp=function(){return ye||Mp()&&(ye=window.gsap)&&ye.registerPlugin&&ye},Vr=function(e){return!!~_p.indexOf(e)},Ep=function(e){return(e==="Height"?Iu:nt["inner"+e])||Kn["client"+e]||mt["client"+e]},Tp=function(e){return er(e,"getBoundingClientRect")||(Vr(e)?function(){return $a.width=nt.innerWidth,$a.height=Iu,$a}:function(){return bi(e)})},Ag=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=er(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Ep(s):e["client"+s])||0}},Rg=function(e,t){return!t||~di.indexOf(e)?Tp(e):function(){return $a}},li=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=er(e,n))?o()-Tp(e)()[s]:Vr(e)?(Kn[n]||mt[n])-Ep(i):e[n]-e["offset"+i])},fa=function(e,t){for(var n=0;n<_s.length;n+=3)(!t||~t.indexOf(_s[n+1]))&&e(_s[n],_s[n+1],_s[n+2])},Rn=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},uo=function(e){return typeof e=="number"},Sr=function(e){return typeof e=="object"},Qs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ql=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zr=Math.abs,wp="left",bp="top",Nu="right",Ou="bottom",Ur="width",Ir="height",bo="Right",Ao="Left",Ro="Top",Co="Bottom",Rt="padding",zn="margin",zs="Width",Fu="Height",Lt="px",kn=function(e){return nt.getComputedStyle(e)},Cg=function(e){var t=kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Th=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bi=function(e,t){var n=t&&kn(e)[Kc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},fl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ap=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Pg=function(e){return function(t){return ye.utils.snap(Ap(e),t)}},Bu=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Lg=function(e){return function(t,n){return Bu(Ap(e))(t,n.direction)}},da=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Bt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ft=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},pa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},wh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ma={toggleActions:"play",anticipatePin:0},dl={top:0,left:0,center:.5,bottom:1,right:1},Wa=function(e,t){if(Rn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in dl?dl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_a=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=St.createElement("div"),_=Vr(n)||er(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:n,S=e.indexOf("start")!==-1,v=S?c:u,M="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===Dt?Nu:Ou)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Xa(g,0,i,S),g},Xa=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+zs]=1,s["border"+a+zs]=0,s[n.p]=t+"px",ye.set(e,s)},Ke=[],eu={},$o,bh=function(){return Yt()-Vn>34&&($o||($o=requestAnimationFrame(Pi)))},Jr=function(){(!on||!on.isPressed||on.startX>mt.clientWidth)&&(et.cache++,on?$o||($o=requestAnimationFrame(Pi)):Pi(),Vn||Xr("scrollStart"),Vn=Yt())},Yl=function(){Sp=nt.innerWidth,xp=nt.innerHeight},ho=function(){et.cache++,!qt&&!vp&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!Zc||Sp!==nt.innerWidth||Math.abs(nt.innerHeight-xp)>nt.innerHeight*.25)&&ul.restart(!0)},Wr={},Dg=[],Rp=function r(){return Ft(Je,"scrollEnd",r)||Ar(!0)},Xr=function(e){return Wr[e]&&Wr[e].map(function(t){return t()})||Dg},An=[],Cp=function(e){for(var t=0;t<An.length;t+=5)(!e||An[t+4]&&An[t+4].query===e)&&(An[t].style.cssText=An[t+1],An[t].getBBox&&An[t].setAttribute("transform",An[t+2]||""),An[t+3].uncache=1)},zu=function(e,t){var n;for(an=0;an<Ke.length;an++)n=Ke[an],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));hl=!0,t&&Cp(t),t||Xr("revert")},Pp=function(e,t){et.cache++,(t||!ln)&&et.forEach(function(n){return dn(n)&&n.cacheID++&&(n.rec=0)}),Rn(e)&&(nt.history.scrollRestoration=Uu=e)},ln,Nr=0,Ah,Ug=function(){if(Ah!==Nr){var e=Ah=Nr;requestAnimationFrame(function(){return e===Nr&&Ar(!0)})}},Lp=function(){mt.appendChild(Cs),Iu=!on&&Cs.offsetHeight||nt.innerHeight,mt.removeChild(Cs)},Rh=function(e){return Yo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ar=function(e,t){if(Vn&&!e&&!hl){Bt(Je,"scrollEnd",Rp);return}Lp(),ln=Je.isRefreshing=!0,et.forEach(function(i){return dn(i)&&++i.cacheID&&(i.rec=i())});var n=Xr("refreshInit");gp&&Je.sort(),t||zu(),et.forEach(function(i){dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ke.slice(0).forEach(function(i){return i.refresh()}),hl=!1,Ke.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Qc=1,Rh(!0),Ke.forEach(function(i){var s=li(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Rh(!1),Qc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pp(Uu,1),ul.pause(),Nr++,ln=2,Pi(2),Ke.forEach(function(i){return dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ln=Je.isRefreshing=!1,Xr("refresh")},tu=0,qa=1,Po,Pi=function(e){if(e===2||!ln&&!hl){Je.isUpdating=!0,Po&&Po.update(0);var t=Ke.length,n=Yt(),i=n-Xl>=50,s=t&&Ke[0].scroll();if(qa=tu>s?-1:1,ln||(tu=s),i&&(Vn&&!Tl&&n-Vn>200&&(Vn=0,Xr("scrollEnd")),ao=Xl,Xl=n),qa<0){for(an=t;an-- >0;)Ke[an]&&Ke[an].update(0,i);qa=1}else for(an=0;an<t;an++)Ke[an]&&Ke[an].update(0,i);Je.isUpdating=!1}$o=0},nu=[wp,bp,Ou,Nu,zn+Co,zn+bo,zn+Ro,zn+Ao,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ya=nu.concat([Ur,Ir,"boxSizing","max"+zs,"max"+Fu,"position",zn,Rt,Rt+Ro,Rt+bo,Rt+Co,Rt+Ao]),Ig=function(e,t,n){Ps(n);var i=e._gsap;if(i.spacerIsNative)Ps(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},$l=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=nu.length,o=t.style,a=e.style,l;s--;)l=nu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ou]=a[Nu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ur]=fl(e,fn)+Lt,o[Ir]=fl(e,Dt)+Lt,o[Rt]=a[zn]=a[bp]=a[wp]="0",Ps(i),a[Ur]=a["max"+zs]=n[Ur],a[Ir]=a["max"+Fu]=n[Ir],a[Rt]=n[Rt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ng=/([A-Z])/g,Ps=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Ng,"-$1").toLowerCase())}},ga=function(e){for(var t=Ya.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ya[s],n[Ya[s]]);return i.t=e,i},Og=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},$a={left:0,top:0},Ch=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){dn(e)&&(e=e(l)),Rn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Wa("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),uo(e))d&&(e=ye.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Xa(a,n,i,!0);else{dn(t)&&(t=t(l));var v=(e||"0").split(" "),M,E,b,T;S=mn(t,l)||mt,M=bi(S)||{},(!M||!M.left&&!M.top)&&kn(S).display==="none"&&(T=S.style.display,S.style.display="block",M=bi(S),T?S.style.display=T:S.style.removeProperty("display")),E=Wa(v[0],M[i.d]),b=Wa(v[1]||"0",n),e=M[i.p]-c[i.p]-u+E+s-b,a&&Xa(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var L=e+n,x=o._isStart;m="scroll"+i.d2,Xa(o,L,i,x&&L>20||!x&&(f?Math.max(mt[m],Kn[m]):o.parentNode[m])<=L+1),f&&(c=bi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Lt))}return d&&S&&(m=bi(S),d.seek(h),p=bi(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Fg=/(webkit|moz|length|cssText|inset)/i,Ph=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=kn(e);for(o in a)!+o&&!Fg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},Dp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},va=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},Lh=function(e,t){var n=or(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=Dp(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Pi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=ye.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Bt(e,"wheel",n.wheelHandler),Je.isTouch&&Bt(e,"touchmove",n.wheelHandler),s},Je=function(){function r(t,n){ms||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!lo){this.update=this.refresh=this.kill=ni;return}n=Th(Rn(n)||uo(n)||n.nodeType?{trigger:n}:n,ma);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,v=s.once,M=s.snap,E=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,L=s.fastScrollEnd,x=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?fn:Dt,G=!f&&f!==0,D=mn(n.scroller||nt),U=ye.core.getCache(D),I=Vr(D),N=("pinType"in n?n.pinType:er(D,"pinType")||I&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=G&&n.toggleActions.split(" "),W="markers"in n?n.markers:ma.markers,J=I?0:parseFloat(kn(D)["border"+y.p2+zs])||0,R=this,F=n.onRefreshInit&&function(){return n.onRefreshInit(R)},$=Ag(D,I,y),re=Rg(D,I),ee=0,oe=0,_e=0,Se=or(D,y),Me,Fe,Qe,De,k,Ne,de,Le,Pe,V,Oe,Be,tt,je,dt,C,w,H,ne,Q,te,ge,se,j,fe,Ce,we,ve,xe,He,rt,P,le,q,ie,ae,Xe,lt,ct;if(R._startClamp=R._endClamp=!1,R._dir=y,m*=45,R.scroller=D,R.scroll=T?T.time.bind(T):Se,De=Se(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(gp=1,n.refreshPriority===-9999&&(Po=R)),U.tweenScroll=U.tweenScroll||{top:Lh(D,Dt),left:Lh(D,fn)},R.tweenTo=Me=U.tweenScroll[y.p],R.scrubDuration=function(he){le=uo(he)&&he,le?P?P.duration(he):P=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(R)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),He=0,l||(l=i.vars.id)),M&&((!Sr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in mt.style&&ye.set(I?[mt,Kn]:D,{scrollBehavior:"auto"}),et.forEach(function(he){return dn(he)&&he.target===(I?St.scrollingElement||Kn:D)&&(he.smooth=!1)}),Qe=dn(M.snapTo)?M.snapTo:M.snapTo==="labels"?Pg(i):M.snapTo==="labelsDirectional"?Lg(i):M.directional!==!1?function(he,Ge){return Bu(M.snapTo)(he,Yt()-oe<500?0:Ge.direction)}:ye.utils.snap(M.snapTo),q=M.duration||{min:.1,max:2},q=Sr(q)?wo(q.min,q.max):wo(q,q),ie=ye.delayedCall(M.delay||le/2||.1,function(){var he=Se(),Ge=Yt()-oe<500,Ue=Me.tween;if((Ge||Math.abs(R.getVelocity())<10)&&!Ue&&!Tl&&ee!==he){var ze=(he-Ne)/je,Tt=i&&!G?i.totalProgress():ze,qe=Ge?0:(Tt-rt)/(Yt()-ao)*1e3||0,gt=ye.utils.clamp(-ze,1-ze,Zr(qe/2)*qe/.185),Nt=ze+(M.inertia===!1?0:gt),vt,ht,A=M,z=A.onStart,X=A.onInterrupt,O=A.onComplete;if(vt=Qe(Nt,R),uo(vt)||(vt=Nt),ht=Math.round(Ne+vt*je),he<=de&&he>=Ne&&ht!==he){if(Ue&&!Ue._initted&&Ue.data<=Zr(ht-he))return;M.inertia===!1&&(gt=vt-ze),Me(ht,{duration:q(Zr(Math.max(Zr(Nt-Tt),Zr(vt-Tt))*.185/qe/.05||0)),ease:M.ease||"power3",data:Zr(ht-he),onInterrupt:function(){return ie.restart(!0)&&X&&X(R)},onComplete:function(){R.update(),ee=Se(),i&&(P?P.resetTo("totalProgress",vt,i._tTime/i._tDur):i.progress(vt)),He=rt=i&&!G?i.totalProgress():R.progress,S&&S(R),O&&O(R)}},he,gt*je,ht-he-gt*je),z&&z(R,Me.tween)}}else R.isActive&&ee!==he&&ie.restart(!0)}).pause()),l&&(eu[l]=R),h=R.trigger=mn(h||d!==!0&&d),ct=h&&h._gsap&&h._gsap.stRevert,ct&&(ct=ct(R)),d=d===!0?h:mn(d),Rn(a)&&(a={targets:h,className:a}),d&&(g===!1||g===zn||(g=!g&&d.parentNode&&d.parentNode.style&&kn(d.parentNode).display==="flex"?!1:Rt),R.pin=d,Fe=ye.core.getCache(d),Fe.spacer?dt=Fe.pinState:(b&&(b=mn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Fe.spacerIsNative=!!b,b&&(Fe.spacerState=ga(b))),Fe.spacer=H=b||St.createElement("div"),H.classList.add("pin-spacer"),l&&H.classList.add("pin-spacer-"+l),Fe.pinState=dt=ga(d)),n.force3D!==!1&&ye.set(d,{force3D:!0}),R.spacer=H=Fe.spacer,xe=kn(d),j=xe[g+y.os2],Q=ye.getProperty(d),te=ye.quickSetter(d,y.a,Lt),$l(d,H,xe),w=ga(d)),W){Be=Sr(W)?Th(W,wh):wh,V=_a("scroller-start",l,D,y,Be,0),Oe=_a("scroller-end",l,D,y,Be,0,V),ne=V["offset"+y.op.d2];var pn=mn(er(D,"content")||D);Le=this.markerStart=_a("start",l,pn,y,Be,ne,0,T),Pe=this.markerEnd=_a("end",l,pn,y,Be,ne,0,T),T&&(lt=ye.quickSetter([Le,Pe],y.a,Lt)),!N&&!(di.length&&er(D,"fixedMarkers")===!0)&&(Cg(I?mt:D),ye.set([V,Oe],{force3D:!0}),Ce=ye.quickSetter(V,y.a,Lt),ve=ye.quickSetter(Oe,y.a,Lt))}if(T){var pe=T.vars.onUpdate,Ae=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){R.update(0,0,1),pe&&pe.apply(T,Ae||[])})}if(R.previous=function(){return Ke[Ke.indexOf(R)-1]},R.next=function(){return Ke[Ke.indexOf(R)+1]},R.revert=function(he,Ge){if(!Ge)return R.kill(!0);var Ue=he!==!1||!R.enabled,ze=qt;Ue!==R.isReverted&&(Ue&&(ae=Math.max(Se(),R.scroll.rec||0),_e=R.progress,Xe=i&&i.progress()),Le&&[Le,Pe,V,Oe].forEach(function(Tt){return Tt.style.display=Ue?"none":"block"}),Ue&&(qt=R,R.update(Ue)),d&&(!E||!R.isActive)&&(Ue?Ig(d,H,dt):$l(d,H,kn(d),fe)),Ue||R.update(Ue),qt=ze,R.isReverted=Ue)},R.refresh=function(he,Ge,Ue,ze){if(!((qt||!R.enabled)&&!Ge)){if(d&&he&&Vn){Bt(r,"scrollEnd",Rp);return}!ln&&F&&F(R),qt=R,Me.tween&&!Ue&&(Me.tween.kill(),Me.tween=0),P&&P.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Tt=$(),qe=re(),gt=T?T.duration():li(D,y),Nt=je<=.01,vt=0,ht=ze||0,A=Sr(Ue)?Ue.end:n.end,z=n.endTrigger||h,X=Sr(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),O=R.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer,R),Z=h&&Math.max(0,Ke.indexOf(R))||0,ce=Z,me,Te,Ie,Ve,Ee,Re,st,pt,Jt,Qt,at,We,Ui;for(W&&Sr(Ue)&&(We=ye.getProperty(V,y.p),Ui=ye.getProperty(Oe,y.p));ce--;)Re=Ke[ce],Re.end||Re.refresh(0,1)||(qt=R),st=Re.pin,st&&(st===h||st===d||st===O)&&!Re.isReverted&&(Qt||(Qt=[]),Qt.unshift(Re),Re.revert(!0,!0)),Re!==Ke[ce]&&(Z--,ce--);for(dn(X)&&(X=X(R)),X=Sh(X,"start",R),Ne=Ch(X,h,Tt,y,Se(),Le,V,R,qe,J,N,gt,T,R._startClamp&&"_startClamp")||(d?-.001:0),dn(A)&&(A=A(R)),Rn(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(Rn(X)?X.split(" ")[0]:"")+A:(vt=Wa(A.substr(2),Tt),A=Rn(X)?X:(T?ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ne):Ne)+vt,z=h)),A=Sh(A,"end",R),de=Math.max(Ne,Ch(A||(z?"100% 0":gt),z,Tt,y,Se()+vt,Pe,Oe,R,qe,J,N,gt,T,R._endClamp&&"_endClamp"))||-.001,vt=0,ce=Z;ce--;)Re=Ke[ce],st=Re.pin,st&&Re.start-Re._pinPush<=Ne&&!T&&Re.end>0&&(me=Re.end-(R._startClamp?Math.max(0,Re.start):Re.start),(st===h&&Re.start-Re._pinPush<Ne||st===O)&&isNaN(X)&&(vt+=me*(1-Re.progress)),st===d&&(ht+=me));if(Ne+=vt,de+=vt,R._startClamp&&(R._startClamp+=vt),R._endClamp&&!ln&&(R._endClamp=de||-.001,de=Math.min(de,li(D,y))),je=de-Ne||(Ne-=.01)&&.001,Nt&&(_e=ye.utils.clamp(0,1,ye.utils.normalize(Ne,de,ae))),R._pinPush=ht,Le&&vt&&(me={},me[y.a]="+="+vt,O&&(me[y.p]="-="+Se()),ye.set([Le,Pe],me)),d&&!(Qc&&R.end>=li(D,y)))me=kn(d),Ve=y===Dt,Ie=Se(),ge=parseFloat(Q(y.a))+ht,!gt&&de>1&&(at=(I?St.scrollingElement||Kn:D).style,at={style:at,value:at["overflow"+y.a.toUpperCase()]},I&&kn(mt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(at.style["overflow"+y.a.toUpperCase()]="scroll")),$l(d,H,me),w=ga(d),Te=bi(d,!0),pt=N&&or(D,Ve?fn:Dt)(),g?(fe=[g+y.os2,je+ht+Lt],fe.t=H,ce=g===Rt?fl(d,y)+je+ht:0,ce&&(fe.push(y.d,ce+Lt),H.style.flexBasis!=="auto"&&(H.style.flexBasis=ce+Lt)),Ps(fe),O&&Ke.forEach(function(ft){ft.pin===O&&ft.vars.pinSpacing!==!1&&(ft._subPinOffset=!0)}),N&&Se(ae)):(ce=fl(d,y),ce&&H.style.flexBasis!=="auto"&&(H.style.flexBasis=ce+Lt)),N&&(Ee={top:Te.top+(Ve?Ie-Ne:pt)+Lt,left:Te.left+(Ve?pt:Ie-Ne)+Lt,boxSizing:"border-box",position:"fixed"},Ee[Ur]=Ee["max"+zs]=Math.ceil(Te.width)+Lt,Ee[Ir]=Ee["max"+Fu]=Math.ceil(Te.height)+Lt,Ee[zn]=Ee[zn+Ro]=Ee[zn+bo]=Ee[zn+Co]=Ee[zn+Ao]="0",Ee[Rt]=me[Rt],Ee[Rt+Ro]=me[Rt+Ro],Ee[Rt+bo]=me[Rt+bo],Ee[Rt+Co]=me[Rt+Co],Ee[Rt+Ao]=me[Rt+Ao],C=Og(dt,Ee,E),ln&&Se(0)),i?(Jt=i._initted,Vl(1),i.render(i.duration(),!0,!0),se=Q(y.a)-ge+je+ht,we=Math.abs(je-se)>1,N&&we&&C.splice(C.length-2,2),i.render(0,!0,!0),Jt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vl(0)):se=je,at&&(at.value?at.style["overflow"+y.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+y.a));else if(h&&Se()&&!T)for(Te=h.parentNode;Te&&Te!==mt;)Te._pinOffset&&(Ne-=Te._pinOffset,de-=Te._pinOffset),Te=Te.parentNode;Qt&&Qt.forEach(function(ft){return ft.revert(!1,!0)}),R.start=Ne,R.end=de,De=k=ln?ae:Se(),!T&&!ln&&(De<ae&&Se(ae),R.scroll.rec=0),R.revert(!1,!0),oe=Yt(),ie&&(ee=-1,ie.restart(!0)),qt=0,i&&G&&(i._initted||Xe)&&i.progress()!==Xe&&i.progress(Xe||0,!0).render(i.time(),!0,!0),(Nt||_e!==R.progress||T||_)&&(i&&!G&&i.totalProgress(T&&Ne<-.001&&!_e?ye.utils.normalize(Ne,de,0):_e,!0),R.progress=Nt||(De-Ne)/je===_e?0:_e),d&&g&&(H._pinOffset=Math.round(R.progress*se)),P&&P.invalidate(),isNaN(We)||(We-=ye.getProperty(V,y.p),Ui-=ye.getProperty(Oe,y.p),va(V,y,We),va(Le,y,We-(ze||0)),va(Oe,y,Ui),va(Pe,y,Ui-(ze||0))),Nt&&!ln&&R.update(),u&&!ln&&!tt&&(tt=!0,u(R),tt=!1)}},R.getVelocity=function(){return(Se()-k)/(Yt()-ao)*1e3||0},R.endAnimation=function(){Qs(R.callbackAnimation),i&&(P?P.progress(1):i.paused()?G||Qs(i,R.direction<0,1):Qs(i,i.reversed()))},R.labelToScroll=function(he){return i&&i.labels&&(Ne||R.refresh()||Ne)+i.labels[he]/i.duration()*je||0},R.getTrailing=function(he){var Ge=Ke.indexOf(R),Ue=R.direction>0?Ke.slice(0,Ge).reverse():Ke.slice(Ge+1);return(Rn(he)?Ue.filter(function(ze){return ze.vars.preventOverlaps===he}):Ue).filter(function(ze){return R.direction>0?ze.end<=Ne:ze.start>=de})},R.update=function(he,Ge,Ue){if(!(T&&!Ue&&!he)){var ze=ln===!0?ae:R.scroll(),Tt=he?0:(ze-Ne)/je,qe=Tt<0?0:Tt>1?1:Tt||0,gt=R.progress,Nt,vt,ht,A,z,X,O,Z;if(Ge&&(k=De,De=T?Se():ze,M&&(rt=He,He=i&&!G?i.totalProgress():qe)),m&&d&&!qt&&!ha&&Vn&&(!qe&&Ne<ze+(ze-k)/(Yt()-ao)*m?qe=1e-4:qe===1&&de>ze+(ze-k)/(Yt()-ao)*m&&(qe=.9999)),qe!==gt&&R.enabled){if(Nt=R.isActive=!!qe&&qe<1,vt=!!gt&&gt<1,X=Nt!==vt,z=X||!!qe!=!!gt,R.direction=qe>gt?1:-1,R.progress=qe,z&&!qt&&(ht=qe&&!gt?0:qe===1?1:gt===1?2:3,G&&(A=!X&&B[ht+1]!=="none"&&B[ht+1]||B[ht],Z=i&&(A==="complete"||A==="reset"||A in i))),x&&(X||Z)&&(Z||f||!i)&&(dn(x)?x(R):R.getTrailing(x).forEach(function(Ie){return Ie.endAnimation()})),G||(P&&!qt&&!ha?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",qe,i._tTime/i._tDur):(P.vars.totalProgress=qe,P.invalidate().restart())):i&&i.totalProgress(qe,!!(qt&&(oe||he)))),d){if(he&&g&&(H.style[g+y.os2]=j),!N)te(co(ge+se*qe));else if(z){if(O=!he&&qe>gt&&de+1>ze&&ze+1>=li(D,y),E)if(!he&&(Nt||O)){var ce=bi(d,!0),me=ze-Ne;Ph(d,mt,ce.top+(y===Dt?me:0)+Lt,ce.left+(y===Dt?0:me)+Lt)}else Ph(d,H);Ps(Nt||O?C:w),we&&qe<1&&Nt||te(ge+(qe===1&&!O?se:0))}}M&&!Me.tween&&!qt&&!ha&&ie.restart(!0),a&&(X||v&&qe&&(qe<1||!Wl))&&Yo(a.targets).forEach(function(Ie){return Ie.classList[Nt||v?"add":"remove"](a.className)}),o&&!G&&!he&&o(R),z&&!qt?(G&&(Z&&(A==="complete"?i.pause().totalProgress(1):A==="reset"?i.restart(!0).pause():A==="restart"?i.restart(!0):i[A]()),o&&o(R)),(X||!Wl)&&(c&&X&&ql(R,c),Y[ht]&&ql(R,Y[ht]),v&&(qe===1?R.kill(!1,1):Y[ht]=0),X||(ht=qe===1?1:3,Y[ht]&&ql(R,Y[ht]))),L&&!Nt&&Math.abs(R.getVelocity())>(uo(L)?L:2500)&&(Qs(R.callbackAnimation),P?P.progress(1):Qs(i,A==="reverse"?1:!qe,1))):G&&o&&!qt&&o(R)}if(ve){var Te=T?ze/T.duration()*(T._caScrollDist||0):ze;Ce(Te+(V._isFlipped?1:0)),ve(Te)}lt&&lt(-ze/T.duration()*(T._caScrollDist||0))}},R.enable=function(he,Ge){R.enabled||(R.enabled=!0,Bt(D,"resize",ho),I||Bt(D,"scroll",Jr),F&&Bt(r,"refreshInit",F),he!==!1&&(R.progress=_e=0,De=k=ee=Se()),Ge!==!1&&R.refresh())},R.getTween=function(he){return he&&Me?Me.tween:P},R.setPositions=function(he,Ge,Ue,ze){if(T){var Tt=T.scrollTrigger,qe=T.duration(),gt=Tt.end-Tt.start;he=Tt.start+gt*he/qe,Ge=Tt.start+gt*Ge/qe}R.refresh(!1,!1,{start:Mh(he,Ue&&!!R._startClamp),end:Mh(Ge,Ue&&!!R._endClamp)},ze),R.update()},R.adjustPinSpacing=function(he){if(fe&&he){var Ge=fe.indexOf(y.d)+1;fe[Ge]=parseFloat(fe[Ge])+he+Lt,fe[1]=parseFloat(fe[1])+he+Lt,Ps(fe)}},R.disable=function(he,Ge){if(R.enabled&&(he!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ge||P&&P.pause(),ae=0,Fe&&(Fe.uncache=1),F&&Ft(r,"refreshInit",F),ie&&(ie.pause(),Me.tween&&Me.tween.kill()&&(Me.tween=0)),!I)){for(var Ue=Ke.length;Ue--;)if(Ke[Ue].scroller===D&&Ke[Ue]!==R)return;Ft(D,"resize",ho),I||Ft(D,"scroll",Jr)}},R.kill=function(he,Ge){R.disable(he,Ge),P&&!Ge&&P.kill(),l&&delete eu[l];var Ue=Ke.indexOf(R);Ue>=0&&Ke.splice(Ue,1),Ue===an&&qa>0&&an--,Ue=0,Ke.forEach(function(ze){return ze.scroller===R.scroller&&(Ue=1)}),Ue||ln||(R.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),Ge||i.kill()),Le&&[Le,Pe,V,Oe].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Po===R&&(Po=0),d&&(Fe&&(Fe.uncache=1),Ue=0,Ke.forEach(function(ze){return ze.pin===d&&Ue++}),Ue||(Fe.spacer=0)),n.onKill&&n.onKill(R)},Ke.push(R),R.enable(!1,!1),ct&&ct(R),i&&i.add&&!je){var ke=R.update;R.update=function(){R.update=ke,Ne||de||R.refresh()},ye.delayedCall(.01,R.update),je=.01,Ne=de=0}else R.refresh();d&&Ug()},r.register=function(n){return ms||(ye=n||yp(),Mp()&&window.document&&r.enable(),ms=lo),ms},r.defaults=function(n){if(n)for(var i in n)ma[i]=n[i];return ma},r.disable=function(n,i){lo=0,Ke.forEach(function(o){return o[i?"kill":"disable"](n)}),Ft(nt,"wheel",Jr),Ft(St,"scroll",Jr),clearInterval(ua),Ft(St,"touchcancel",ni),Ft(mt,"touchstart",ni),da(Ft,St,"pointerdown,touchstart,mousedown",yh),da(Ft,St,"pointerup,touchend,mouseup",Eh),ul.kill(),fa(Ft);for(var s=0;s<et.length;s+=3)pa(Ft,et[s],et[s+1]),pa(Ft,et[s],et[s+2])},r.enable=function(){if(nt=window,St=document,Kn=St.documentElement,mt=St.body,ye&&(Yo=ye.utils.toArray,wo=ye.utils.clamp,Jc=ye.core.context||ni,Vl=ye.core.suppressOverwrites||ni,Uu=nt.history.scrollRestoration||"auto",tu=nt.pageYOffset,ye.core.globals("ScrollTrigger",r),mt)){lo=1,Cs=document.createElement("div"),Cs.style.height="100vh",Cs.style.position="absolute",Lp(),bg(),bt.register(ye),r.isTouch=bt.isTouch,ki=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zc=bt.isTouch===1,Bt(nt,"wheel",Jr),_p=[nt,St,Kn,mt],ye.matchMedia?(r.matchMedia=function(l){var c=ye.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ye.addEventListener("matchMediaInit",function(){return zu()}),ye.addEventListener("matchMediaRevert",function(){return Cp()}),ye.addEventListener("matchMedia",function(){Ar(0,1),Xr("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return Yl(),Yl})):console.warn("Requires GSAP 3.11.0 or later"),Yl(),Bt(St,"scroll",Jr);var n=mt.style,i=n.borderTopStyle,s=ye.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=bi(mt),Dt.m=Math.round(o.top+Dt.sc())||0,fn.m=Math.round(o.left+fn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ua=setInterval(bh,250),ye.delayedCall(.5,function(){return ha=0}),Bt(St,"touchcancel",ni),Bt(mt,"touchstart",ni),da(Bt,St,"pointerdown,touchstart,mousedown",yh),da(Bt,St,"pointerup,touchend,mouseup",Eh),Kc=ye.utils.checkPrefix("transform"),Ya.push(Kc),ms=Yt(),ul=ye.delayedCall(.2,Ar).pause(),_s=[St,"visibilitychange",function(){var l=nt.innerWidth,c=nt.innerHeight;St.hidden?(vh=l,xh=c):(vh!==l||xh!==c)&&ho()},St,"DOMContentLoaded",Ar,nt,"load",Ar,nt,"resize",ho],fa(Bt),Ke.forEach(function(l){return l.enable(0,1)}),a=0;a<et.length;a+=3)pa(Ft,et[a],et[a+1]),pa(Ft,et[a],et[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Wl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ua)||(ua=i)&&setInterval(bh,i),"ignoreMobileResize"in n&&(Zc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(fa(Ft)||fa(Bt,n.autoRefreshEvents||"none"),vp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=mn(n),o=et.indexOf(s),a=Vr(s);~o&&et.splice(o,a?6:2),i&&(a?di.unshift(nt,i,mt,i,Kn,i):di.unshift(s,i))},r.clearMatchMedia=function(n){Ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Rn(n)?mn(n):n).getBoundingClientRect(),a=o[s?Ur:Ir]*i||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},r.positionInViewport=function(n,i,s){Rn(n)&&(n=mn(n));var o=n.getBoundingClientRect(),a=o[s?Ur:Ir],l=i==null?a/2:i in dl?dl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},r.killAll=function(n){if(Ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Wr.killAll||[];Wr={},i.forEach(function(s){return s()})}},r}();Je.version="3.12.5";Je.saveStyles=function(r){return r?Yo(r).forEach(function(e){if(e&&e.style){var t=An.indexOf(e);t>=0&&An.splice(t,5),An.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Jc())}}):An};Je.revert=function(r,e){return zu(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?ho():(ms||Je.register())&&Ar(!0)};Je.update=function(r){return++et.cache&&Pi(r===!0?2:0)};Je.clearScrollMemory=Pp;Je.maxScroll=function(r,e){return li(r,e?fn:Dt)};Je.getScrollFunc=function(r,e){return or(mn(r),e?fn:Dt)};Je.getById=function(r){return eu[r]};Je.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Vn};Je.snapDirectional=Bu;Je.addEventListener=function(r,e){var t=Wr[r]||(Wr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=Wr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=ye.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return dn(s)&&(s=s(),Bt(Je,"refresh",function(){return s=e.batchMax()})),Yo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Dh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},jl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===Kn&&r(mt,t)},xa={auto:1,scroll:1},Bg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ye.core.getCache(s),a=Yt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(xa[(l=kn(s)).overflowY]||xa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Vr(s)&&(xa[(l=kn(s)).overflowY]||xa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Up=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Bg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Bt(St,bt.eventTypes[0],Ih,!1,!0)},onDisable:function(){return Ft(St,bt.eventTypes[0],Ih,!0)}})},zg=/(input|label|select|textarea)/i,Uh,Ih=function(e){var t=zg.test(e.target.tagName);(t||Uh)&&(e._gsapAllow=!0,Uh=t)},kg=function(e){Sr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=mn(e.target)||Kn,u=ye.core.globals().ScrollSmoother,f=u&&u.get(),h=ki&&(e.content&&mn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=or(c,Dt),g=or(c,fn),_=1,m=(bt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,S=dn(i)?function(){return i(a)}:function(){return i||2.8},v,M,E=Up(c,e.type,!0,s),b=function(){return M=!1},T=ni,L=ni,x=function(){l=li(c,Dt),L=wo(ki?1:0,l),n&&(T=wo(0,li(c,fn))),v=Nr},y=function(){h._gsap.y=co(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},G=function(){if(M){requestAnimationFrame(b);var W=co(a.deltaY/2),J=L(d.v-W);if(h&&J!==d.v+d.offset){d.offset=J-d.v;var R=co((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=et.cache,Pi()}return!0}d.offset&&y(),M=!0},D,U,I,N,Y=function(){x(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&ye.set(h,{y:"+=0"}),e.ignoreCheck=function(B){return ki&&B.type==="touchmove"&&G()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){M=!1;var B=_;_=co((nt.visualViewport&&nt.visualViewport.scale||1)/m),D.pause(),B!==_&&jl(c,_>1.01?!0:n?!1:"x"),U=g(),I=d(),x(),v=Nr},e.onRelease=e.onGestureStart=function(B,W){if(d.offset&&y(),!W)N.restart(!0);else{et.cache++;var J=S(),R,F;n&&(R=g(),F=R+J*.05*-B.velocityX/.227,J*=Dh(g,R,F,li(c,fn)),D.vars.scrollX=T(F)),R=d(),F=R+J*.05*-B.velocityY/.227,J*=Dh(d,R,F,li(c,Dt)),D.vars.scrollY=L(F),D.invalidate().duration(J).play(.01),(ki&&D.vars.scrollY>=l||R>=l-1)&&ye.to({},{onUpdate:Y,duration:J})}o&&o(B)},e.onWheel=function(){D._ts&&D.pause(),Yt()-p>1e3&&(v=0,p=Yt())},e.onChange=function(B,W,J,R,F){if(Nr!==v&&x(),W&&n&&g(T(R[2]===W?U+(B.startX-B.x):g()+W-R[1])),J){d.offset&&y();var $=F[2]===J,re=$?I+B.startY-B.y:d()+J-F[1],ee=L(re);$&&re!==ee&&(I+=ee-re),d(ee)}(J||W)&&Pi()},e.onEnable=function(){jl(c,n?!1:"x"),Je.addEventListener("refresh",Y),Bt(nt,"resize",Y),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){jl(c,!0),Ft(nt,"resize",Y),Je.removeEventListener("refresh",Y),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new bt(e),a.iOS=ki,ki&&!d()&&d(1),ki&&ye.ticker.add(ni),N=a._dc,D=ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Dp(d,d(),function(){return D.pause()})},onUpdate:Pi,onComplete:N.vars.onComplete}),a};Je.sort=function(r){return Ke.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new bt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return on;if(r===!0&&on)return on.enable();if(r===!1){on&&on.kill(),on=r;return}var e=r instanceof bt?r:kg(r);return on&&on.target===e.target&&on.kill(),Vr(e.target)&&(on=e),e};Je.core={_getVelocityProp:jc,_inputObserver:Up,_scrollers:et,_proxies:di,bridge:{ss:function(){Vn||Xr("scrollStart"),Vn=Yt()},ref:function(){return qt}}};yp()&&ye.registerPlugin(Je);const pl=window.innerWidth,ml=767,Ip="ontouchstart"in document.documentElement,Hg=()=>{const r=document.querySelectorAll("[data-size]"),e=document.querySelectorAll("[data-system-color]");let t=pl<ml;const n={"--system-list-titie":t?20:40,"--system-head-text":t?11:12,"--system-category-text":t?16:20,"--system-contents-main-title":t?26:42,"--system-contents-title":t?24:28,"--system-contents-text":t?14:16,"--system-contents-final":t?20:30};r.forEach(i=>{i.addEventListener("click",s=>{r.forEach(a=>{a.classList.remove("is-active")}),s.target.classList.add("is-active");const o=Number(s.target.dataset.diff);be.to(document.documentElement,{"--system-list-titie":(n["--system-list-titie"]+o)/10+"rem","--system-head-text":n["--system-head-text"]+o,"--system-category-text":n["--system-category-text"]+o,"--system-contents-title":n["--system-contents-title"]+o,"--system-contents-text":n["--system-contents-text"]+o,"--system-contents-final":n["--system-contents-final"]+o,"--system-contents-main-title":(n["--system-contents-main-title"]+o)/10+"rem",duration:.45})})}),e.forEach(i=>{i.addEventListener("click",s=>{e.forEach(a=>{a.classList.remove("is-active")});const o=s.target.dataset.systemColor;s.target.classList.add("is-active"),be.to(document.documentElement,{"--system-background-color":o=="light"?"#efefef":"#111111","--system-body-color":o=="light"?"#dbdbdb":"#222222","--system-color":o=="light"?"#000000":"#eeeeee","--system-sub-color":o=="light"?"#eeeeee":"#000000","--system-sub-color02":o=="light"?"#2f2f2f":"#ccc","--system-sub-color03":o=="light"?"#d2d2d2":"#444444",duration:.45})})})};let Kl,ku;const Gg="ontouchstart"in document.documentElement,Np=()=>{ku=document.querySelectorAll("a,button,.c-custom-system__box-inner")},Vg=()=>{ku=[]},Wg=()=>{Kl=document.querySelector(".c-mouse-cursor"),be.to(Kl,{opacity:1}),Xg(Kl)};function Xg(r){let e=0,t=0,n=0,i=0;window.addEventListener("mousemove",o=>{e=o.clientX,t=o.clientY});function s(){n+=(e-n)*.3,i+=(t-i)*.3,r.style.left=`${n}px`,r.style.top=`${i}px`,requestAnimationFrame(s)}s()}const Op=()=>{let r=.6;ku.forEach(e=>{e.addEventListener("mouseenter",()=>{be.to(".c-mouse-cursor__inner",{scale:2.5,ease:"power4.out",duration:r,overwrite:"auto"})}),e.addEventListener("mouseleave",()=>{be.to(".c-mouse-cursor__inner",{scale:1,ease:"power4.out",duration:r,overwrite:"auto"})})}),window.addEventListener("mousedown",()=>{be.to(".c-mouse-cursor__inner",{scale:3,ease:"power4.out",duration:r,overwrite:"auto"})}),window.addEventListener("mouseup",()=>{be.to(".c-mouse-cursor__inner",{scale:1,ease:"power4.out",duration:r,overwrite:"auto"})})},qg=()=>{Gg||Wg()};be.registerPlugin(Je,Ws);let iu,_l,ru,Yg=window.matchMedia("(max-width: 767px)");function $g(){location.reload()}const Fp=r=>{switch(r){case"home":be.to(iu,{x:pl<ml?27:33,duration:1,delay:.35,ease:"power4.out"}),be.to(_l,{scale:0,duration:1,ease:"power4.out",onComplete:()=>{be.set(ru,{clipPath:"inset(0% 0% 0% 100%)",stagger:{from:"start",amount:.1}})}});break;case"single":be.fromTo(_l,{scale:0},{scale:1,duration:1,delay:.34,ease:"power4.out"}),be.fromTo(iu,{x:pl<ml?27:33},{x:0,duration:1,ease:"power4.out"}),be.to(ru,{clipPath:"inset(0% 0% 0% 0%)",duration:1,delay:.8,ease:"power4.out",stagger:{from:"start",each:.01}}),be.to(".back-default",{opacity:0,pointerEvents:"none",duration:1});break}},jg=()=>{const r=document.querySelector(".c-custom-system__box"),e=document.querySelector(".c-custom-system__box-inner");let t=!1;const n=()=>{be.to(r,{clipPath:"inset(0% 0% 0% 0%)",duration:1,ease:"power4.out"}),be.set(".c-custom-system",{height:250})},i=()=>{be.to(r,{clipPath:"inset(79% 0% 0% 0%)",duration:1,ease:"power4.out"}),be.set(".c-custom-system",{height:42})};e.addEventListener("click",()=>{t=!t,t?n():i()})},Kg=()=>{const r=document.querySelector(".c-about-button"),e=document.querySelector(".c-about-body-close"),t=()=>{be.to(".c-about-body",{clipPath:"inset(0% 0% 0% 0%)",pointerEvents:"auto",duration:1,ease:"power4.inOut"}),be.fromTo(".c-about-body-close-cover",{scale:0},{scale:1,duration:1,ease:"power4.out",delay:1.1}),be.fromTo(".c-about-body-close-cover span",{clipPath:"inset(0% 0% 0% 100%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,delay:1.5,ease:"power4.out",stagger:{from:"start",each:.01}})},n=()=>{be.to(".c-about-body",{clipPath:"inset(0% 0% 100% 0%)",pointerEvents:"none",duration:1,ease:"power4.inOut"})};r.addEventListener("click",t),e.addEventListener("click",n)},Zg=r=>{const e={count:0};be.to(".loading-title--main",{clipPath:"inset(0% 0% 0% 0%)",ease:"none",duration:2.9}),be.to(e,{count:100,duration:2.5,ease:"none",onUpdate:function(){document.querySelector(".loading-number [data-count]").innerText=Math.round(e.count)},onComplete:()=>{be.timeline({onComplete:()=>{r.removeAttribute("style"),be.to("[data-loading-hide]",{opacity:1,pointerEvents:"auto",duration:.7}),window.opening=!0}}).to(r,{y:0,duration:1.9,ease:"power4.inOut",delay:.3}).to(".loading-background",{y:"-100svh",duration:1.9,ease:"power4.inOut"},"<")}})},Jg=(r,e)=>{iu=document.querySelector(".c-custom-system__box"),_l=document.querySelector(".c-custom-system__back-cover"),ru=_l.querySelectorAll(".c-custom-system__back span"),Zg(e),Fp(r),Np(),qg(),jg(),Hg(),Kg(),Ip||(Op(),Yg.addEventListener("change",$g))},Qg=r=>{setTimeout(()=>{Np(),Fp(r),Ip||Op()},200)},e0=()=>{Vg()};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="155",t0=0,Nh=1,n0=2,Bp=1,i0=2,Ei=3,ar=0,Mn=1,si=2,tr=0,Ls=1,Oh=2,Fh=3,Bh=4,r0=5,gs=100,s0=101,o0=102,zh=103,kh=104,a0=200,l0=201,c0=202,u0=203,zp=204,kp=205,h0=206,f0=207,d0=208,p0=209,m0=210,_0=0,g0=1,v0=2,su=3,x0=4,S0=5,M0=6,y0=7,Hp=0,E0=1,T0=2,nr=0,w0=1,b0=2,A0=3,R0=4,C0=5,Gp=300,ks=301,Hs=302,ou=303,au=304,wl=306,lu=1e3,Jn=1001,cu=1002,cn=1003,Hh=1004,Zl=1005,Hn=1006,P0=1007,jo=1008,ir=1009,L0=1010,D0=1011,Gu=1012,Vp=1013,Ki=1014,Zi=1015,Ko=1016,Wp=1017,Xp=1018,Or=1020,U0=1021,Qn=1023,I0=1024,N0=1025,Fr=1026,Gs=1027,O0=1028,qp=1029,F0=1030,Yp=1031,$p=1033,Jl=33776,Ql=33777,ec=33778,tc=33779,Gh=35840,Vh=35841,Wh=35842,Xh=35843,B0=36196,qh=37492,Yh=37496,$h=37808,jh=37809,Kh=37810,Zh=37811,Jh=37812,Qh=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,of=37819,af=37820,lf=37821,nc=36492,z0=36283,cf=36284,uf=36285,hf=36286,jp=3e3,Br=3001,k0=3200,H0=3201,G0=0,V0=1,zr="",$e="srgb",_i="srgb-linear",Kp="display-p3",ic=7680,W0=519,X0=512,q0=513,Y0=514,$0=515,j0=516,K0=517,Z0=518,J0=519,ff=35044,df="300 es",uu=1035,Ri=2e3,gl=2001;class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pf=1234567;const Lo=Math.PI/180,Zo=180/Math.PI;function qs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function un(r,e,t){return Math.max(e,Math.min(t,r))}function Vu(r,e){return(r%e+e)%e}function Q0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ev(r,e,t){return r!==e?(t-r)/(e-r):0}function Do(r,e,t){return(1-t)*r+t*e}function tv(r,e,t,n){return Do(r,e,1-Math.exp(-t*n))}function nv(r,e=1){return e-Math.abs(Vu(r,e*2)-e)}function iv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function sv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ov(r,e){return r+Math.random()*(e-r)}function av(r){return r*(.5-Math.random())}function lv(r){r!==void 0&&(pf=r);let e=pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cv(r){return r*Lo}function uv(r){return r*Zo}function hu(r){return(r&r-1)===0&&r!==0}function hv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const mf={DEG2RAD:Lo,RAD2DEG:Zo,generateUUID:qs,clamp:un,euclideanModulo:Vu,mapLinear:Q0,inverseLerp:ev,lerp:Do,damp:tv,pingpong:nv,smoothstep:iv,smootherstep:rv,randInt:sv,randFloat:ov,randFloatSpread:av,seededRandom:lv,degToRad:cv,radToDeg:uv,isPowerOfTwo:hu,ceilPowerOfTwo:hv,floorPowerOfTwo:vl,setQuaternionFromProperEuler:fv,normalize:rn,denormalize:vs};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],v=i[4],M=i[7],E=i[2],b=i[5],T=i[8];return s[0]=o*_+a*S+l*E,s[3]=o*m+a*v+l*b,s[6]=o*p+a*M+l*T,s[1]=c*_+u*S+f*E,s[4]=c*m+u*v+f*b,s[7]=c*p+u*M+f*T,s[2]=h*_+d*S+g*E,s[5]=h*m+d*v+g*b,s[8]=h*p+d*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new Ze;function Zp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const _f={};function Uo(r){r in _f||(_f[r]=!0,console.warn(r))}function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const dv=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pv=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function mv(r){return r.convertSRGBToLinear().applyMatrix3(pv)}function _v(r){return r.applyMatrix3(dv).convertLinearToSRGB()}const gv={[_i]:r=>r,[$e]:r=>r.convertSRGBToLinear(),[Kp]:mv},vv={[_i]:r=>r,[$e]:r=>r.convertLinearToSRGB(),[Kp]:_v},Xn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return _i},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=gv[e],i=vv[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Qr;class Jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qr===void 0&&(Qr=Jo("canvas")),Qr.width=e.width,Qr.height=e.height;const n=Qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xv=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=qs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oc(i[o].image)):s.push(oc(i[o]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sv=0;class yn extends Xs{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=Jn,i=Jn,s=Hn,o=jo,a=Qn,l=ir,c=yn.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=qs(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Br?$e:zr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lu:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lu:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Br:jp}set encoding(e){Uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?$e:zr}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Gp;yn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,i=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(d+1)/2,E=(p+1)/2,b=(u+h)/4,T=(f+_)/4,L=(g+m)/4;return v>M&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=T/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=L/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=L/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mv extends Xs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Br?$e:zr),this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Mv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class em extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yv extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),b=Math.atan2(E,p*S);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const M=a*S;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+_*M,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new K,gf=new ea;class ta{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox),es.applyMatrix4(e.matrixWorld),this.union(es);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)vi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else i.boundingBox===null&&i.computeBoundingBox(),es.copy(i.boundingBox),es.applyMatrix4(e.matrixWorld),this.union(es)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Sa.subVectors(this.max,eo),ts.subVectors(e.a,eo),ns.subVectors(e.b,eo),is.subVectors(e.c,eo),Ni.subVectors(ns,ts),Oi.subVectors(is,ns),pr.subVectors(ts,is);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-pr.z,pr.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,pr.z,0,-pr.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-pr.y,pr.x,0];return!lc(t,ts,ns,is,Sa)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,ts,ns,is,Sa))?!1:(Ma.crossVectors(Ni,Oi),t=[Ma.x,Ma.y,Ma.z],lc(t,ts,ns,is,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new K,new K,new K,new K,new K,new K,new K,new K],vi=new K,es=new ta,ts=new K,ns=new K,is=new K,Ni=new K,Oi=new K,pr=new K,eo=new K,Sa=new K,Ma=new K,mr=new K;function lc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mr.fromArray(r,s);const a=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ev=new ta,to=new K,cc=new K;class Wu{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ev.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(cc)),this.expandByPoint(to.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new K,uc=new K,ya=new K,Fi=new K,hc=new K,Ea=new K,fc=new K;class Tv{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(uc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Fi.dot(this.direction),l=-Fi.dot(ya),c=Fi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(uc).addScaledVector(ya,h),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,s){hc.subVectors(t,e),Ea.subVectors(n,e),fc.crossVectors(hc,Ea);let o=this.direction.dot(fc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Ea.crossVectors(Fi,Ea));if(l<0)return null;const c=a*this.direction.dot(hc.cross(Fi));if(c<0||l+c>o)return null;const u=-a*Fi.dot(fc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,bv)}lookAt(e,t,n){const i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Bi.crossVectors(n,wn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Bi.crossVectors(n,wn)),Bi.normalize(),Ta.crossVectors(wn,Bi),i[0]=Bi.x,i[4]=Ta.x,i[8]=wn.x,i[1]=Bi.y,i[5]=Ta.y,i[9]=wn.y,i[2]=Bi.z,i[6]=Ta.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],M=n[11],E=n[15],b=i[0],T=i[4],L=i[8],x=i[12],y=i[1],G=i[5],D=i[9],U=i[13],I=i[2],N=i[6],Y=i[10],B=i[14],W=i[3],J=i[7],R=i[11],F=i[15];return s[0]=o*b+a*y+l*I+c*W,s[4]=o*T+a*G+l*N+c*J,s[8]=o*L+a*D+l*Y+c*R,s[12]=o*x+a*U+l*B+c*F,s[1]=u*b+f*y+h*I+d*W,s[5]=u*T+f*G+h*N+d*J,s[9]=u*L+f*D+h*Y+d*R,s[13]=u*x+f*U+h*B+d*F,s[2]=g*b+_*y+m*I+p*W,s[6]=g*T+_*G+m*N+p*J,s[10]=g*L+_*D+m*Y+p*R,s[14]=g*x+_*U+m*B+p*F,s[3]=S*b+v*y+M*I+E*W,s[7]=S*T+v*G+M*N+E*J,s[11]=S*L+v*D+M*Y+E*R,s[15]=S*x+v*U+M*B+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,E=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,b=t*S+n*v+i*M+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=S*T,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,e[4]=v*T,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*T,e[8]=M*T,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=E*T,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,S=l*c,v=l*u,M=l*f,E=n.x,b=n.y,T=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+M)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(h+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+v)*T,i[9]=(m-S)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const c=1/s,u=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ri){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(a===Ri)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===gl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ri){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(a===Ri)g=(o+s)*f,_=-2*f;else if(a===gl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new K,qn=new Vt,wv=new K(0,0,0),bv=new K(1,1,1),Bi=new K,Ta=new K,wn=new K,vf=new Vt,xf=new ea;class bl{constructor(e=0,t=0,n=0,i=bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bl.DEFAULT_ORDER="XYZ";class tm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const Sf=new K,ss=new ea,Si=new Vt,wa=new K,no=new K,Rv=new K,Cv=new ea,Mf=new K(1,0,0),yf=new K(0,1,0),Ef=new K(0,0,1),Pv={type:"added"},Tf={type:"removed"};class Nn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new K,t=new bl,n=new ea,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Ze}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(no,wa,this.up):Si.lookAt(wa,no,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Si),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Nn.DEFAULT_UP=new K(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new K,Mi=new K,dc=new K,yi=new K,os=new K,as=new K,wf=new K,pc=new K,mc=new K,_c=new K;let ba=!1;class Zn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yn.subVectors(i,t),Mi.subVectors(n,t),dc.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Mi),l=Yn.dot(dc),c=Mi.dot(Mi),u=Mi.dot(dc),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,n,i,s,o,a,l){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,yi),l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),Zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;os.subVectors(i,n),as.subVectors(s,n),pc.subVectors(e,n);const l=os.dot(pc),c=as.dot(pc);if(l<=0&&c<=0)return t.copy(n);mc.subVectors(e,i);const u=os.dot(mc),f=as.dot(mc);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(os,o);_c.subVectors(e,s);const d=os.dot(_c),g=as.dot(_c);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(as,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return wf.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(wf,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lv=0;class Al extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Ls,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zp,this.blendDst=kp,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ic,this.stencilZFail=ic,this.stencilZPass=ic,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==ar&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function gc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xn.workingColorSpace){if(e=Vu(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gc(o,s,e+1/3),this.g=gc(o,s,e),this.b=gc(o,s,e-1/3)}return Xn.toWorkingColorSpace(this,i),this}setStyle(e,t=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){const n=nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=sc(e.r),this.g=sc(e.g),this.b=sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Xn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(un(Xt.r*255,0,255))*65536+Math.round(un(Xt.g*255,0,255))*256+Math.round(un(Xt.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xn.workingColorSpace){Xn.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xn.workingColorSpace){return Xn.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=$e){Xn.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),$n.h+=e,$n.s+=t,$n.l+=n,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Aa);const n=Do($n.h,Aa.h,t),i=Do($n.s,Aa.s,t),s=Do($n.l,Aa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new _t;_t.NAMES=nm;class im extends Al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new K,Ra=new ot;class pi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ff,this.updateRange={offset:0,count:-1},this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ff&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class rm extends pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sm extends pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kr extends pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dv=0;const Fn=new Vt,vc=new Nn,ls=new K,bn=new ta,io=new ta,Ot=new K;class $r extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(bn.min,io.min),bn.expandByPoint(Ot),Ot.addVectors(bn.max,io.max),bn.expandByPoint(Ot)):(bn.expandByPoint(io.min),bn.expandByPoint(io.max))}bn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Ot.add(ls)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new K,u[y]=new K;const f=new K,h=new K,d=new K,g=new ot,_=new ot,m=new ot,p=new K,S=new K;function v(y,G,D){f.fromArray(i,y*3),h.fromArray(i,G*3),d.fromArray(i,D*3),g.fromArray(o,y*2),_.fromArray(o,G*2),m.fromArray(o,D*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(U),S.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(U),c[y].add(p),c[G].add(p),c[D].add(p),u[y].add(S),u[G].add(S),u[D].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let y=0,G=M.length;y<G;++y){const D=M[y],U=D.start,I=D.count;for(let N=U,Y=U+I;N<Y;N+=3)v(n[N+0],n[N+1],n[N+2])}const E=new K,b=new K,T=new K,L=new K;function x(y){T.fromArray(s,y*3),L.copy(T);const G=c[y];E.copy(G),E.sub(T.multiplyScalar(T.dot(G))).normalize(),b.crossVectors(L,G);const U=b.dot(u[y])<0?-1:1;l[y*4]=E.x,l[y*4+1]=E.y,l[y*4+2]=E.z,l[y*4+3]=U}for(let y=0,G=M.length;y<G;++y){const D=M[y],U=D.start,I=D.count;for(let N=U,Y=U+I;N<Y;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new pi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $r,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bf=new Vt,_r=new Tv,Ca=new Wu,Af=new K,cs=new K,us=new K,hs=new K,xc=new K,Pa=new K,La=new ot,Da=new ot,Ua=new ot,Rf=new K,Cf=new K,Pf=new K,Ia=new K,Na=new K;class Ci extends Nn{constructor(e=new $r,t=new im){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(xc.fromBufferAttribute(f,e),o?Pa.addScaledVector(xc,u):Pa.addScaledVector(xc.sub(t),u))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Ca.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ca,Af)===null||_r.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(bf.copy(s).invert(),_r.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=v;M<E;M+=3){const b=a.getX(M),T=a.getX(M+1),L=a.getX(M+2);i=Oa(this,p,e,n,c,u,f,b,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=Oa(this,o,e,n,c,u,f,S,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=v;M<E;M+=3){const b=M,T=M+1,L=M+2;i=Oa(this,p,e,n,c,u,f,b,T,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,M=m+2;i=Oa(this,o,e,n,c,u,f,S,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Uv(r,e,t,n,i,s,o,a){let l;if(e.side===Mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ar,a),l===null)return null;Na.copy(a),Na.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:r}}function Oa(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,cs),r.getVertexPosition(l,us),r.getVertexPosition(c,hs);const u=Uv(r,e,t,n,cs,us,hs,Ia);if(u){i&&(La.fromBufferAttribute(i,a),Da.fromBufferAttribute(i,l),Ua.fromBufferAttribute(i,c),u.uv=Zn.getInterpolation(Ia,cs,us,hs,La,Da,Ua,new ot)),s&&(La.fromBufferAttribute(s,a),Da.fromBufferAttribute(s,l),Ua.fromBufferAttribute(s,c),u.uv1=Zn.getInterpolation(Ia,cs,us,hs,La,Da,Ua,new ot),u.uv2=u.uv1),o&&(Rf.fromBufferAttribute(o,a),Cf.fromBufferAttribute(o,l),Pf.fromBufferAttribute(o,c),u.normal=Zn.getInterpolation(Ia,cs,us,hs,Rf,Cf,Pf,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};Zn.getNormal(cs,us,hs,f.normal),u.face=f}return u}class na extends $r{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new kr(c,3)),this.setAttribute("normal",new kr(u,3)),this.setAttribute("uv",new kr(f,2));function g(_,m,p,S,v,M,E,b,T,L,x){const y=M/T,G=E/L,D=M/2,U=E/2,I=b/2,N=T+1,Y=L+1;let B=0,W=0;const J=new K;for(let R=0;R<Y;R++){const F=R*G-U;for(let $=0;$<N;$++){const re=$*y-D;J[_]=re*S,J[m]=F*v,J[p]=I,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=b>0?1:-1,u.push(J.x,J.y,J.z),f.push($/T),f.push(1-R/L),B+=1}}for(let R=0;R<L;R++)for(let F=0;F<T;F++){const $=h+F+N*R,re=h+F+N*(R+1),ee=h+(F+1)+N*(R+1),oe=h+(F+1)+N*R;l.push($,re,oe),l.push(re,ee,oe),W+=6}a.addGroup(d,W,x),d+=W,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(r){const e={};for(let t=0;t<r.length;t++){const n=Vs(r[t]);for(const i in n)e[i]=n[i]}return e}function Iv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function om(r){return r.getRenderTarget()===null?r.outputColorSpace:_i}const Nv={clone:Vs,merge:sn};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class am extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends am{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ds=1;class Bv extends Nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Pn(fs,ds,e,t);i.layers=this.layers,this.add(i);const s=new Pn(fs,ds,e,t);s.layers=this.layers,this.add(s);const o=new Pn(fs,ds,e,t);o.layers=this.layers,this.add(o);const a=new Pn(fs,ds,e,t);a.layers=this.layers,this.add(a);const l=new Pn(fs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Pn(fs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class lm extends yn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zv extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Br?$e:zr),this.texture=new lm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new na(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:tr});s.uniforms.tEquirect.value=t;const o=new Ci(i,s),a=t.minFilter;return t.minFilter===jo&&(t.minFilter=Hn),new Bv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Sc=new K,kv=new K,Hv=new Ze;class Mr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sc.subVectors(n,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hv.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Wu,Fa=new K;class cm{constructor(e=new Mr,t=new Mr,n=new Mr,i=new Mr,s=new Mr,o=new Mr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,m-d,M-p).normalize(),n[1].setComponents(l+s,h+c,m+d,M+p).normalize(),n[2].setComponents(l+o,h+u,m+g,M+S).normalize(),n[3].setComponents(l-o,h-u,m-g,M-S).normalize(),n[4].setComponents(l-a,h-f,m-_,M-v).normalize(),t===Ri)n[5].setComponents(l+a,h+f,m+_,M+v).normalize();else if(t===gl)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fa.x=i.normal.x>0?e.max.x:e.min.x,Fa.y=i.normal.y>0?e.max.y:e.min.y,Fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function um(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gv(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Rl extends $r{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let v=0;v<c;v++){const M=v*f-s;g.push(M,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,M=S+c*(p+1),E=S+1+c*(p+1),b=S+1+c*p;d.push(v,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new kr(g,3)),this.setAttribute("normal",new kr(_,3)),this.setAttribute("uv",new kr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ex=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ux=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,kx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$x=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,RS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Vv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:$v,aomap_fragment:jv,aomap_pars_fragment:Kv,begin_vertex:Zv,beginnormal_vertex:Jv,bsdfs:Qv,iridescence_fragment:ex,bumpmap_pars_fragment:tx,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:rx,clipping_planes_vertex:sx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:lx,color_vertex:cx,common:ux,cube_uv_reflection_fragment:hx,defaultnormal_vertex:fx,displacementmap_pars_vertex:dx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:_x,colorspace_fragment:gx,colorspace_pars_fragment:vx,envmap_fragment:xx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:Mx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Ix,envmap_vertex:Ex,fog_vertex:Tx,fog_pars_vertex:wx,fog_fragment:bx,fog_pars_fragment:Ax,gradientmap_pars_fragment:Rx,lightmap_fragment:Cx,lightmap_pars_fragment:Px,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Dx,lights_pars_begin:Ux,lights_toon_fragment:Nx,lights_toon_pars_fragment:Ox,lights_phong_fragment:Fx,lights_phong_pars_fragment:Bx,lights_physical_fragment:zx,lights_physical_pars_fragment:kx,lights_fragment_begin:Hx,lights_fragment_maps:Gx,lights_fragment_end:Vx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:$x,map_pars_fragment:jx,map_particle_fragment:Kx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:Qx,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:oS,normal_pars_vertex:aS,normal_vertex:lS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:fS,iridescence_pars_fragment:dS,opaque_fragment:pS,packing:mS,premultiplied_alpha_fragment:_S,project_vertex:gS,dithering_fragment:vS,dithering_pars_fragment:xS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:ES,shadowmap_vertex:TS,shadowmask_pars_fragment:wS,skinbase_vertex:bS,skinning_pars_vertex:AS,skinning_vertex:RS,skinnormal_vertex:CS,specularmap_fragment:PS,specularmap_pars_fragment:LS,tonemapping_fragment:DS,tonemapping_pars_fragment:US,transmission_fragment:IS,transmission_pars_fragment:NS,uv_pars_fragment:OS,uv_pars_vertex:FS,uv_vertex:BS,worldpos_vertex:zS,background_vert:kS,background_frag:HS,backgroundCube_vert:GS,backgroundCube_frag:VS,cube_vert:WS,cube_frag:XS,depth_vert:qS,depth_frag:YS,distanceRGBA_vert:$S,distanceRGBA_frag:jS,equirect_vert:KS,equirect_frag:ZS,linedashed_vert:JS,linedashed_frag:QS,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:rM,meshmatcap_frag:sM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:lM,meshphong_frag:cM,meshphysical_vert:uM,meshphysical_frag:hM,meshtoon_vert:fM,meshtoon_frag:dM,points_vert:pM,points_frag:mM,shadow_vert:_M,shadow_frag:gM,sprite_vert:vM,sprite_frag:xM},ue={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ii={basic:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:sn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:sn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:sn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:sn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:sn([ue.points,ue.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:sn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:sn([ue.common,ue.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:sn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:sn([ue.sprite,ue.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:sn([ue.common,ue.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:sn([ue.lights,ue.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ba={r:0,b:0,g:0};function SM(r,e,t,n,i,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let S=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0),r.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),S=!0;break}(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wl)?(u===void 0&&(u=new Ci(new na(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Vs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==$e,(f!==v||h!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ci(new Rl(2,2),new lr({name:"BackgroundMaterial",uniforms:Vs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ba,om(r)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function MM(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,N,Y,B,W){let J=!1;if(o){const R=_(B,Y,N);c!==R&&(c=R,d(c.object)),J=p(I,B,Y,W),J&&S(I,B,Y,W)}else{const R=N.wireframe===!0;(c.geometry!==B.id||c.program!==Y.id||c.wireframe!==R)&&(c.geometry=B.id,c.program=Y.id,c.wireframe=R,J=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,L(I,N,Y,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,N,Y){const B=Y.wireframe===!0;let W=a[I.id];W===void 0&&(W={},a[I.id]=W);let J=W[N.id];J===void 0&&(J={},W[N.id]=J);let R=J[B];return R===void 0&&(R=m(h()),J[B]=R),R}function m(I){const N=[],Y=[],B=[];for(let W=0;W<i;W++)N[W]=0,Y[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:B,object:I,attributes:{},index:null}}function p(I,N,Y,B){const W=c.attributes,J=N.attributes;let R=0;const F=Y.getAttributes();for(const $ in F)if(F[$].location>=0){const ee=W[$];let oe=J[$];if(oe===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;R++}return c.attributesNum!==R||c.index!==B}function S(I,N,Y,B){const W={},J=N.attributes;let R=0;const F=Y.getAttributes();for(const $ in F)if(F[$].location>=0){let ee=J[$];ee===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),W[$]=oe,R++}c.attributes=W,c.attributesNum=R,c.index=B}function v(){const I=c.newAttributes;for(let N=0,Y=I.length;N<Y;N++)I[N]=0}function M(I){E(I,0)}function E(I,N){const Y=c.newAttributes,B=c.enabledAttributes,W=c.attributeDivisors;Y[I]=1,B[I]===0&&(r.enableVertexAttribArray(I),B[I]=1),W[I]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),W[I]=N)}function b(){const I=c.newAttributes,N=c.enabledAttributes;for(let Y=0,B=N.length;Y<B;Y++)N[Y]!==I[Y]&&(r.disableVertexAttribArray(Y),N[Y]=0)}function T(I,N,Y,B,W,J,R){R===!0?r.vertexAttribIPointer(I,N,Y,W,J):r.vertexAttribPointer(I,N,Y,B,W,J)}function L(I,N,Y,B){if(n.isWebGL2===!1&&(I.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=B.attributes,J=Y.getAttributes(),R=N.defaultAttributeValues;for(const F in J){const $=J[F];if($.location>=0){let re=W[F];if(re===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){const ee=re.normalized,oe=re.itemSize,_e=t.get(re);if(_e===void 0)continue;const Se=_e.buffer,Me=_e.type,Fe=_e.bytesPerElement,Qe=n.isWebGL2===!0&&(Me===r.INT||Me===r.UNSIGNED_INT||re.gpuType===Vp);if(re.isInterleavedBufferAttribute){const De=re.data,k=De.stride,Ne=re.offset;if(De.isInstancedInterleavedBuffer){for(let de=0;de<$.locationSize;de++)E($.location+de,De.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let de=0;de<$.locationSize;de++)M($.location+de);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let de=0;de<$.locationSize;de++)T($.location+de,oe/$.locationSize,Me,ee,k*Fe,(Ne+oe/$.locationSize*de)*Fe,Qe)}else{if(re.isInstancedBufferAttribute){for(let De=0;De<$.locationSize;De++)E($.location+De,re.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<$.locationSize;De++)M($.location+De);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let De=0;De<$.locationSize;De++)T($.location+De,oe/$.locationSize,Me,ee,oe*Fe,oe/$.locationSize*De*Fe,Qe)}}else if(R!==void 0){const ee=R[F];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv($.location,ee);break;case 3:r.vertexAttrib3fv($.location,ee);break;case 4:r.vertexAttrib4fv($.location,ee);break;default:r.vertexAttrib1fv($.location,ee)}}}}b()}function x(){D();for(const I in a){const N=a[I];for(const Y in N){const B=N[Y];for(const W in B)g(B[W].object),delete B[W];delete N[Y]}delete a[I]}}function y(I){if(a[I.id]===void 0)return;const N=a[I.id];for(const Y in N){const B=N[Y];for(const W in B)g(B[W].object),delete B[W];delete N[Y]}delete a[I.id]}function G(I){for(const N in a){const Y=a[N];if(Y[I.id]===void 0)continue;const B=Y[I.id];for(const W in B)g(B[W].object),delete B[W];delete Y[I.id]}}function D(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function yM(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function EM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),E=v&&M,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:b}}function TM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Mr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,v=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,v,d);for(let E=0;E!==v;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(f[v]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wM(r){let e=new WeakMap;function t(o,a){return a===ou?o.mapping=ks:a===au&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ou||a===au)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zv(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bM extends am{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Lf=[.125,.215,.35,.446,.526,.582],Er=20,Mc=new bM,Df=new _t;let yc=null;const yr=(1+Math.sqrt(5))/2,ps=1/yr,Uf=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,yr,ps),new K(0,yr,-ps),new K(ps,0,yr),new K(-ps,0,yr),new K(yr,ps,0),new K(-yr,ps,0)];class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){yc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ko,format:Qn,colorSpace:_i,depthBuffer:!1},i=Nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AM(s)),this._blurMaterial=RM(s,e,t)}return i}_compileMaterial(e){const t=new Ci(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,i){const a=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Df),u.toneMapping=nr,u.autoClear=!1;const d=new im({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Ci(new na,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Df),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;za(i,S*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ks||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Uf[(i-1)%Uf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ci(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Er-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const p=[];let S=0;for(let T=0;T<Er;++T){const L=T/_,x=Math.exp(-L*L/2);p.push(x),T===0?S+=x:T<m&&(S+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const M=this._sizeLods[i],E=3*M*(i>v-Ts?i-v+Ts:0),b=4*(this._cubeSize-M);za(t,E,b,3*M,2*M),l.setRenderTarget(t),l.render(f,Mc)}}function AM(r){const e=[],t=[],n=[];let i=r;const s=r-Ts+1+Lf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ts?l=Lf[o-r+Ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let b=0;b<d;b++){const T=b%3*2/3-1,L=b>2?0:-1,x=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(x,_*g*b),v.set(h,m*g*b);const y=[b,b,b,b,b,b];M.set(y,p*g*b)}const E=new $r;E.setAttribute("position",new pi(S,_)),E.setAttribute("uv",new pi(v,m)),E.setAttribute("faceIndex",new pi(M,p)),e.push(E),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nf(r,e,t){const n=new qr(r,e,t);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function RM(r,e,t){const n=new Float32Array(Er),i=new K(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Of(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ff(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ou||l===au,u=l===ks||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new If(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new If(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function PM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function LM(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let v=0,M=S.length;v<M;v+=3){const E=S[v+0],b=S[v+1],T=S[v+2];h.push(E,b,b,T,T,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const E=v+0,b=v+1,T=v+2;h.push(E,b,b,T,T,E)}}else return;const m=new(Zp(h)?sm:rm)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DM(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){r.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function UM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function IM(r,e){return r[0]-e[0]}function NM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function OM(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let N=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),E===!0&&(x=3);let y=u.attributes.position.count*x,G=1;y>e.maxTextureSize&&(G=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const D=new Float32Array(y*G*4*_),U=new em(D,y,G,_);U.type=Zi,U.needsUpdate=!0;const I=x*4;for(let Y=0;Y<_;Y++){const B=b[Y],W=T[Y],J=L[Y],R=y*G*4*Y;for(let F=0;F<B.count;F++){const $=F*I;v===!0&&(o.fromBufferAttribute(B,F),D[R+$+0]=o.x,D[R+$+1]=o.y,D[R+$+2]=o.z,D[R+$+3]=0),M===!0&&(o.fromBufferAttribute(W,F),D[R+$+4]=o.x,D[R+$+5]=o.y,D[R+$+6]=o.z,D[R+$+7]=0),E===!0&&(o.fromBufferAttribute(J,F),D[R+$+8]=o.x,D[R+$+9]=o.y,D[R+$+10]=o.z,D[R+$+11]=J.itemSize===4?o.w:1)}}m={count:_,texture:U,size:new ot(y,G)},s.set(u,m),u.addEventListener("dispose",N)}let p=0;for(let v=0;v<h.length;v++)p+=h[v];const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const E=_[M];E[0]=M,E[1]=h[M]}_.sort(NM);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(IM);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const E=a[M],b=E[0],T=E[1];b!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+M)!==m[b]&&u.setAttribute("morphTarget"+M,m[b]),p&&u.getAttribute("morphNormal"+M)!==p[b]&&u.setAttribute("morphNormal"+M,p[b]),i[M]=T,S+=T):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const v=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function FM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hm=new yn,fm=new em,dm=new yv,pm=new lm,Bf=[],zf=[],kf=new Float32Array(16),Hf=new Float32Array(9),Gf=new Float32Array(4);function Ys(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Bf[i];if(s===void 0&&(s=new Float32Array(i),Bf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Cl(r,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function BM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function GM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Gf.set(n),r.uniformMatrix2fv(this.addr,!1,Gf),It(t,n)}}function VM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Hf.set(n),r.uniformMatrix3fv(this.addr,!1,Hf),It(t,n)}}function WM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;kf.set(n),r.uniformMatrix4fv(this.addr,!1,kf),It(t,n)}}function XM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function jM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function QM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||hm,i)}function ey(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dm,i)}function ty(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pm,i)}function ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fm,i)}function iy(r){switch(r){case 5126:return BM;case 35664:return zM;case 35665:return kM;case 35666:return HM;case 35674:return GM;case 35675:return VM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return $M;case 5125:return jM;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function ry(r,e){r.uniform1fv(this.addr,e)}function sy(r,e){const t=Ys(e,this.size,2);r.uniform2fv(this.addr,t)}function oy(r,e){const t=Ys(e,this.size,3);r.uniform3fv(this.addr,t)}function ay(r,e){const t=Ys(e,this.size,4);r.uniform4fv(this.addr,t)}function ly(r,e){const t=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cy(r,e){const t=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uy(r,e){const t=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hy(r,e){r.uniform1iv(this.addr,e)}function fy(r,e){r.uniform2iv(this.addr,e)}function dy(r,e){r.uniform3iv(this.addr,e)}function py(r,e){r.uniform4iv(this.addr,e)}function my(r,e){r.uniform1uiv(this.addr,e)}function _y(r,e){r.uniform2uiv(this.addr,e)}function gy(r,e){r.uniform3uiv(this.addr,e)}function vy(r,e){r.uniform4uiv(this.addr,e)}function xy(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hm,s[o])}function Sy(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||dm,s[o])}function My(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pm,s[o])}function yy(r,e,t){const n=this.cache,i=e.length,s=Cl(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fm,s[o])}function Ey(r){switch(r){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return cy;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return _y;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return yy}}class Ty{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=iy(t.type)}}class wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ey(t.type)}}class by{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Vf(r,e){r.seq.push(e),r.map[e.id]=e}function Ay(r,e,t){const n=r.name,i=n.length;for(Ec.lastIndex=0;;){const s=Ec.exec(n),o=Ec.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Vf(t,c===void 0?new Ty(a,r,e):new wy(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new by(a),Vf(t,f)),t=f}}}class ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ay(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Ry=0;function Cy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Py(r){switch(r){case _i:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Xf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cy(r.getShaderSource(e),o)}else return i}function Ly(r,e){const t=Py(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dy(r,e){let t;switch(e){case w0:t="Linear";break;case b0:t="Reinhard";break;case A0:t="OptimizedCineon";break;case R0:t="ACESFilmic";break;case C0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Uy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fo).join(`
`)}function Iy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ny(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function fo(r){return r!==""}function qf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(r){return r.replace(Oy,By)}const Fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function By(r,e){let t=Ye[e];if(t===void 0){const n=Fy.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(r){return r.replace(zy,ky)}function ky(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case Hs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Wy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case E0:e="ENVMAP_BLENDING_MIX";break;case T0:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hy(t),c=Gy(t),u=Vy(t),f=Wy(t),h=Xy(t),d=t.isWebGL2?"":Uy(t),g=Iy(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[d,jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Ye.tonemapping_pars_fragment:"",t.toneMapping!==nr?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),o=fu(o),o=qf(o,t),o=Yf(o,t),a=fu(a),a=qf(a,t),a=Yf(a,t),o=$f(o),a=$f(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,M=S+p+a,E=Wf(i,i.VERTEX_SHADER,v),b=Wf(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,E),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),y=i.getShaderInfoLog(E).trim(),G=i.getShaderInfoLog(b).trim();let D=!0,U=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,b);else{const I=Xf(i,E,"vertex"),N=Xf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+I+`
`+N)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(y===""||G==="")&&(U=!1);U&&(this.diagnostics={runnable:D,programLog:x,vertexShader:{log:y,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(E),i.deleteShader(b);let T;this.getUniforms=function(){return T===void 0&&(T=new ja(i,_)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=Ny(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let Yy=0;class $y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jy(e),t.set(e,n)),n}}class jy{constructor(e){this.id=Yy++,this.code=e,this.usedTimes=0}}function Ky(r,e,t,n,i,s,o){const a=new tm,l=new $y,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,y,G,D,U){const I=D.fog,N=U.geometry,Y=x.isMeshStandardMaterial?D.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),W=B&&B.mapping===wl?B.image.height:null,J=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const R=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,F=R!==void 0?R.length:0;let $=0;N.morphAttributes.position!==void 0&&($=1),N.morphAttributes.normal!==void 0&&($=2),N.morphAttributes.color!==void 0&&($=3);let re,ee,oe,_e;if(J){const pe=ii[J];re=pe.vertexShader,ee=pe.fragmentShader}else re=x.vertexShader,ee=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const Se=r.getRenderTarget(),Me=U.isInstancedMesh===!0,Fe=!!x.map,Qe=!!x.matcap,De=!!B,k=!!x.aoMap,Ne=!!x.lightMap,de=!!x.bumpMap,Le=!!x.normalMap,Pe=!!x.displacementMap,V=!!x.emissiveMap,Oe=!!x.metalnessMap,Be=!!x.roughnessMap,tt=x.anisotropy>0,je=x.clearcoat>0,dt=x.iridescence>0,C=x.sheen>0,w=x.transmission>0,H=tt&&!!x.anisotropyMap,ne=je&&!!x.clearcoatMap,Q=je&&!!x.clearcoatNormalMap,te=je&&!!x.clearcoatRoughnessMap,ge=dt&&!!x.iridescenceMap,se=dt&&!!x.iridescenceThicknessMap,j=C&&!!x.sheenColorMap,fe=C&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,we=!!x.specularColorMap,ve=!!x.specularIntensityMap,xe=w&&!!x.transmissionMap,He=w&&!!x.thicknessMap,rt=!!x.gradientMap,P=!!x.alphaMap,le=x.alphaTest>0,q=!!x.alphaHash,ie=!!x.extensions,ae=!!N.attributes.uv1,Xe=!!N.attributes.uv2,lt=!!N.attributes.uv3;let ct=nr;return x.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ct=r.toneMapping),{isWebGL2:u,shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:re,fragmentShader:ee,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Me,instancingColor:Me&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:_i,map:Fe,matcap:Qe,envMap:De,envMapMode:De&&B.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:Ne,bumpMap:de,normalMap:Le,displacementMap:h&&Pe,emissiveMap:V,normalMapObjectSpace:Le&&x.normalMapType===V0,normalMapTangentSpace:Le&&x.normalMapType===G0,metalnessMap:Oe,roughnessMap:Be,anisotropy:tt,anisotropyMap:H,clearcoat:je,clearcoatMap:ne,clearcoatNormalMap:Q,clearcoatRoughnessMap:te,iridescence:dt,iridescenceMap:ge,iridescenceThicknessMap:se,sheen:C,sheenColorMap:j,sheenRoughnessMap:fe,specularMap:Ce,specularColorMap:we,specularIntensityMap:ve,transmission:w,transmissionMap:xe,thicknessMap:He,gradientMap:rt,opaque:x.transparent===!1&&x.blending===Ls,alphaMap:P,alphaTest:le,alphaHash:q,combine:x.combine,mapUv:Fe&&_(x.map.channel),aoMapUv:k&&_(x.aoMap.channel),lightMapUv:Ne&&_(x.lightMap.channel),bumpMapUv:de&&_(x.bumpMap.channel),normalMapUv:Le&&_(x.normalMap.channel),displacementMapUv:Pe&&_(x.displacementMap.channel),emissiveMapUv:V&&_(x.emissiveMap.channel),metalnessMapUv:Oe&&_(x.metalnessMap.channel),roughnessMapUv:Be&&_(x.roughnessMap.channel),anisotropyMapUv:H&&_(x.anisotropyMap.channel),clearcoatMapUv:ne&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(x.sheenRoughnessMap.channel),specularMapUv:Ce&&_(x.specularMap.channel),specularColorMapUv:we&&_(x.specularColorMap.channel),specularIntensityMapUv:ve&&_(x.specularIntensityMap.channel),transmissionMapUv:xe&&_(x.transmissionMap.channel),thicknessMapUv:He&&_(x.thicknessMap.channel),alphaMapUv:P&&_(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Le||tt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Xe,vertexUv3s:lt,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Fe||P),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:$,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,useLegacyLights:r._useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ie&&x.extensions.derivatives===!0,extensionFragDepth:ie&&x.extensions.fragDepth===!0,extensionDrawBuffers:ie&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)y.push(G),y.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(S(y,x),v(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),x.push(a.mask)}function M(x){const y=g[x.type];let G;if(y){const D=ii[y];G=Nv.clone(D.uniforms)}else G=x.uniforms;return G}function E(x,y){let G;for(let D=0,U=c.length;D<U;D++){const I=c[D];if(I.cacheKey===y){G=I,++G.usedTimes;break}}return G===void 0&&(G=new qy(r,y,x,s),c.push(G)),G}function b(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function Zy(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Jy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Kf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Jy),n.length>1&&n.sort(h||Kf),i.length>1&&i.sort(h||Kf)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Qy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Zf,r.set(n,[o])):i>=s.length?(o=new Zf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function eE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new _t};break;case"SpotLight":t={position:new K,direction:new K,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function tE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nE=0;function iE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rE(r,e){const t=new eE,n=tE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new K);const s=new K,o=new Vt,a=new Vt;function l(u,f){let h=0,d=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,p=0,S=0,v=0,M=0,E=0,b=0,T=0,L=0;u.sort(iE);const x=f===!0?Math.PI:1;for(let G=0,D=u.length;G<D;G++){const U=u[G],I=U.color,N=U.intensity,Y=U.distance,B=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=I.r*N*x,d+=I.g*N*x,g+=I.b*N*x;else if(U.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],N);else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const J=U.shadow,R=n.get(U);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=B,i.directionalShadowMatrix[_]=U.shadow.matrix,M++}i.directional[_]=W,_++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(I).multiplyScalar(N*x),W.distance=Y,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[p]=W;const J=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,J.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[p]=J.matrix,U.castShadow){const R=n.get(U);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=B,b++}p++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(I).multiplyScalar(N),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=W,S++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*x),W.distance=U.distance,W.decay=U.decay,U.castShadow){const J=U.shadow,R=n.get(U);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,R.shadowCameraNear=J.camera.near,R.shadowCameraFar=J.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=U.shadow.matrix,E++}i.point[m]=W,m++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(N*x),W.groundColor.copy(U.groundColor).multiplyScalar(N*x),i.hemi[v]=W,v++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==_||y.pointLength!==m||y.spotLength!==p||y.rectAreaLength!==S||y.hemiLength!==v||y.numDirectionalShadows!==M||y.numPointShadows!==E||y.numSpotShadows!==b||y.numSpotMaps!==T)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,y.directionalLength=_,y.pointLength=m,y.spotLength=p,y.rectAreaLength=S,y.hemiLength=v,y.numDirectionalShadows=M,y.numPointShadows=E,y.numSpotShadows=b,y.numSpotMaps=T,i.version=nE++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const M=u[S];if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Jf(r,e){const t=new rE(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function sE(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Jf(r,e),t.set(s,[l])):o>=a.length?(l=new Jf(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class oE extends Al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aE extends Al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uE(r,e,t){let n=new cm;const i=new ot,s=new ot,o=new Gt,a=new oE({depthPacking:H0}),l=new aE,c={},u=t.maxTextureSize,f={[ar]:Mn,[Mn]:ar,[si]:si},h=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:lE,fragmentShader:cE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new $r;g.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ci(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let p=this.type;this.render=function(E,b,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=r.getRenderTarget(),x=r.getActiveCubeFace(),y=r.getActiveMipmapLevel(),G=r.state;G.setBlending(tr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const D=p!==Ei&&this.type===Ei,U=p===Ei&&this.type!==Ei;for(let I=0,N=E.length;I<N;I++){const Y=E[I],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const W=B.getFrameExtents();if(i.multiply(W),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,B.mapSize.y=s.y)),B.map===null||D===!0||U===!0){const R=this.type!==Ei?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new qr(i.x,i.y,R),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const J=B.getViewportCount();for(let R=0;R<J;R++){const F=B.getViewport(R);o.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),G.viewport(o),B.updateMatrices(Y,R),n=B.getFrustum(),M(b,T,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Ei&&S(B,T),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(L,x,y)};function S(E,b){const T=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qr(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,T,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,T,d,_,null)}function v(E,b,T,L){let x=null;const y=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(y!==void 0)x=y;else if(x=T.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=x.uuid,D=b.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let I=U[D];I===void 0&&(I=x.clone(),U[D]=I),x=I}if(x.visible=b.visible,x.wireframe=b.wireframe,L===Ei?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=r.properties.get(x);G.light=T}return x}function M(E,b,T,L,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const D=e.update(E),U=E.material;if(Array.isArray(U)){const I=D.groups;for(let N=0,Y=I.length;N<Y;N++){const B=I[N],W=U[B.materialIndex];if(W&&W.visible){const J=v(E,W,L,x);r.renderBufferDirect(T,null,D,J,E,B)}}}else if(U.visible){const I=v(E,U,L,x);r.renderBufferDirect(T,null,D,I,E,null)}}const G=E.children;for(let D=0,U=G.length;D<U;D++)M(G[D],b,T,L,x)}}function hE(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const le=new Gt;let q=null;const ie=new Gt(0,0,0,0);return{setMask:function(ae){q!==ae&&!P&&(r.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){P=ae},setClear:function(ae,Xe,lt,ct,pn){pn===!0&&(ae*=ct,Xe*=ct,lt*=ct),le.set(ae,Xe,lt,ct),ie.equals(le)===!1&&(r.clearColor(ae,Xe,lt,ct),ie.copy(le))},reset:function(){P=!1,q=null,ie.set(-1,0,0,0)}}}function s(){let P=!1,le=null,q=null,ie=null;return{setTest:function(ae){ae?Se(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(ae){le!==ae&&!P&&(r.depthMask(ae),le=ae)},setFunc:function(ae){if(q!==ae){switch(ae){case _0:r.depthFunc(r.NEVER);break;case g0:r.depthFunc(r.ALWAYS);break;case v0:r.depthFunc(r.LESS);break;case su:r.depthFunc(r.LEQUAL);break;case x0:r.depthFunc(r.EQUAL);break;case S0:r.depthFunc(r.GEQUAL);break;case M0:r.depthFunc(r.GREATER);break;case y0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=ae}},setLocked:function(ae){P=ae},setClear:function(ae){ie!==ae&&(r.clearDepth(ae),ie=ae)},reset:function(){P=!1,le=null,q=null,ie=null}}}function o(){let P=!1,le=null,q=null,ie=null,ae=null,Xe=null,lt=null,ct=null,pn=null;return{setTest:function(pe){P||(pe?Se(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(pe){le!==pe&&!P&&(r.stencilMask(pe),le=pe)},setFunc:function(pe,Ae,ke){(q!==pe||ie!==Ae||ae!==ke)&&(r.stencilFunc(pe,Ae,ke),q=pe,ie=Ae,ae=ke)},setOp:function(pe,Ae,ke){(Xe!==pe||lt!==Ae||ct!==ke)&&(r.stencilOp(pe,Ae,ke),Xe=pe,lt=Ae,ct=ke)},setLocked:function(pe){P=pe},setClear:function(pe){pn!==pe&&(r.clearStencil(pe),pn=pe)},reset:function(){P=!1,le=null,q=null,ie=null,ae=null,Xe=null,lt=null,ct=null,pn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,M=null,E=null,b=null,T=null,L=null,x=!1,y=null,G=null,D=null,U=null,I=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=B>=2);let J=null,R={};const F=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),re=new Gt().fromArray(F),ee=new Gt().fromArray($);function oe(P,le,q,ie){const ae=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(P,Xe),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<q;lt++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,ie,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(le+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return Xe}const _e={};_e[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(r.DEPTH_TEST),l.setFunc(su),Pe(!1),V(Nh),Se(r.CULL_FACE),de(tr);function Se(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Me(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Fe(P,le){return d[P]!==le?(r.bindFramebuffer(P,le),d[P]=le,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function Qe(P,le){let q=_,ie=!1;if(P)if(q=g.get(le),q===void 0&&(q=[],g.set(le,q)),P.isWebGLMultipleRenderTargets){const ae=P.texture;if(q.length!==ae.length||q[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,lt=ae.length;Xe<lt;Xe++)q[Xe]=r.COLOR_ATTACHMENT0+Xe;q.length=ae.length,ie=!0}}else q[0]!==r.COLOR_ATTACHMENT0&&(q[0]=r.COLOR_ATTACHMENT0,ie=!0);else q[0]!==r.BACK&&(q[0]=r.BACK,ie=!0);ie&&(t.isWebGL2?r.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function De(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const k={[gs]:r.FUNC_ADD,[s0]:r.FUNC_SUBTRACT,[o0]:r.FUNC_REVERSE_SUBTRACT};if(n)k[zh]=r.MIN,k[kh]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(k[zh]=P.MIN_EXT,k[kh]=P.MAX_EXT)}const Ne={[a0]:r.ZERO,[l0]:r.ONE,[c0]:r.SRC_COLOR,[zp]:r.SRC_ALPHA,[m0]:r.SRC_ALPHA_SATURATE,[d0]:r.DST_COLOR,[h0]:r.DST_ALPHA,[u0]:r.ONE_MINUS_SRC_COLOR,[kp]:r.ONE_MINUS_SRC_ALPHA,[p0]:r.ONE_MINUS_DST_COLOR,[f0]:r.ONE_MINUS_DST_ALPHA};function de(P,le,q,ie,ae,Xe,lt,ct){if(P===tr){p===!0&&(Me(r.BLEND),p=!1);return}if(p===!1&&(Se(r.BLEND),p=!0),P!==r0){if(P!==S||ct!==x){if((v!==gs||b!==gs)&&(r.blendEquation(r.FUNC_ADD),v=gs,b=gs),ct)switch(P){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oh:r.blendFunc(r.ONE,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,E=null,T=null,L=null,S=P,x=ct}return}ae=ae||le,Xe=Xe||q,lt=lt||ie,(le!==v||ae!==b)&&(r.blendEquationSeparate(k[le],k[ae]),v=le,b=ae),(q!==M||ie!==E||Xe!==T||lt!==L)&&(r.blendFuncSeparate(Ne[q],Ne[ie],Ne[Xe],Ne[lt]),M=q,E=ie,T=Xe,L=lt),S=P,x=!1}function Le(P,le){P.side===si?Me(r.CULL_FACE):Se(r.CULL_FACE);let q=P.side===Mn;le&&(q=!q),Pe(q),P.blending===Ls&&P.transparent===!1?de(tr):de(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ie=P.stencilWrite;c.setTest(ie),ie&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(P){y!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),y=P)}function V(P){P!==t0?(Se(r.CULL_FACE),P!==G&&(P===Nh?r.cullFace(r.BACK):P===n0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),G=P}function Oe(P){P!==D&&(Y&&r.lineWidth(P),D=P)}function Be(P,le,q){P?(Se(r.POLYGON_OFFSET_FILL),(U!==le||I!==q)&&(r.polygonOffset(le,q),U=le,I=q)):Me(r.POLYGON_OFFSET_FILL)}function tt(P){P?Se(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function je(P){P===void 0&&(P=r.TEXTURE0+N-1),J!==P&&(r.activeTexture(P),J=P)}function dt(P,le,q){q===void 0&&(J===null?q=r.TEXTURE0+N-1:q=J);let ie=R[q];ie===void 0&&(ie={type:void 0,texture:void 0},R[q]=ie),(ie.type!==P||ie.texture!==le)&&(J!==q&&(r.activeTexture(q),J=q),r.bindTexture(P,le||_e[P]),ie.type=P,ie.texture=le)}function C(){const P=R[J];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function w(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){re.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function ve(P){ee.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function xe(P,le){let q=f.get(le);q===void 0&&(q=new WeakMap,f.set(le,q));let ie=q.get(P);ie===void 0&&(ie=r.getUniformBlockIndex(le,P.name),q.set(P,ie))}function He(P,le){const ie=f.get(le).get(P);u.get(le)!==ie&&(r.uniformBlockBinding(le,ie,P.__bindingPointIndex),u.set(le,ie))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,R={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,M=null,E=null,b=null,T=null,L=null,x=!1,y=null,G=null,D=null,U=null,I=null,re.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Me,bindFramebuffer:Fe,drawBuffers:Qe,useProgram:De,setBlending:de,setMaterial:Le,setFlipSided:Pe,setCullFace:V,setLineWidth:Oe,setPolygonOffset:Be,setScissorTest:tt,activeTexture:je,bindTexture:dt,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:fe,texImage3D:Ce,updateUBOMapping:xe,uniformBlockBinding:He,texStorage2D:se,texStorage3D:j,texSubImage2D:ne,texSubImage3D:Q,compressedTexSubImage2D:te,compressedTexSubImage3D:ge,scissor:we,viewport:ve,reset:rt}}function fE(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,w){return p?new OffscreenCanvas(C,w):Jo("canvas")}function v(C,w,H,ne){let Q=1;if((C.width>ne||C.height>ne)&&(Q=ne/Math.max(C.width,C.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const te=w?vl:Math.floor,ge=te(Q*C.width),se=te(Q*C.height);_===void 0&&(_=S(ge,se));const j=H?S(ge,se):_;return j.width=ge,j.height=se,j.getContext("2d").drawImage(C,0,0,ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ge+"x"+se+")."),j}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return hu(C.width)&&hu(C.height)}function E(C){return a?!1:C.wrapS!==Jn||C.wrapT!==Jn||C.minFilter!==cn&&C.minFilter!==Hn}function b(C,w){return C.generateMipmaps&&w&&C.minFilter!==cn&&C.minFilter!==Hn}function T(C){r.generateMipmap(C)}function L(C,w,H,ne,Q=!1){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=w;return w===r.RED&&(H===r.FLOAT&&(te=r.R32F),H===r.HALF_FLOAT&&(te=r.R16F),H===r.UNSIGNED_BYTE&&(te=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(te=r.R8UI),H===r.UNSIGNED_SHORT&&(te=r.R16UI),H===r.UNSIGNED_INT&&(te=r.R32UI),H===r.BYTE&&(te=r.R8I),H===r.SHORT&&(te=r.R16I),H===r.INT&&(te=r.R32I)),w===r.RG&&(H===r.FLOAT&&(te=r.RG32F),H===r.HALF_FLOAT&&(te=r.RG16F),H===r.UNSIGNED_BYTE&&(te=r.RG8)),w===r.RGBA&&(H===r.FLOAT&&(te=r.RGBA32F),H===r.HALF_FLOAT&&(te=r.RGBA16F),H===r.UNSIGNED_BYTE&&(te=ne===$e&&Q===!1?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)),(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(C,w,H){return b(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Hn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function y(C){return C===cn||C===Hh||C===Zl?r.NEAREST:r.LINEAR}function G(C){const w=C.target;w.removeEventListener("dispose",G),U(w),w.isVideoTexture&&g.delete(w)}function D(C){const w=C.target;w.removeEventListener("dispose",D),N(w)}function U(C){const w=n.get(C);if(w.__webglInit===void 0)return;const H=C.source,ne=m.get(H);if(ne){const Q=ne[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(C),Object.keys(ne).length===0&&m.delete(H)}n.remove(C)}function I(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const H=C.source,ne=m.get(H);delete ne[w.__cacheKey],o.memory.textures--}function N(C){const w=C.texture,H=n.get(C),ne=n.get(w);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let te=0;te<H.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(H.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)r.deleteFramebuffer(H.__webglFramebuffer[Q]);else r.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,te=w.length;Q<te;Q++){const ge=n.get(w[Q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(w[Q])}n.remove(w),n.remove(C)}let Y=0;function B(){Y=0}function W(){const C=Y;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Y+=1,C}function J(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function R(C,w){const H=n.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(H,C,w);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function F(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Fe(H,C,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function $(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Fe(H,C,w);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function re(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Qe(H,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}const ee={[lu]:r.REPEAT,[Jn]:r.CLAMP_TO_EDGE,[cu]:r.MIRRORED_REPEAT},oe={[cn]:r.NEAREST,[Hh]:r.NEAREST_MIPMAP_NEAREST,[Zl]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[P0]:r.LINEAR_MIPMAP_NEAREST,[jo]:r.LINEAR_MIPMAP_LINEAR},_e={[X0]:r.NEVER,[J0]:r.ALWAYS,[q0]:r.LESS,[$0]:r.LEQUAL,[Y0]:r.EQUAL,[Z0]:r.GEQUAL,[j0]:r.GREATER,[K0]:r.NOTEQUAL};function Se(C,w,H){if(H?(r.texParameteri(C,r.TEXTURE_WRAP_S,ee[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ee[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ee[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,oe[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,oe[w.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Jn||w.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,y(w.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,y(w.minFilter)),w.minFilter!==cn&&w.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,_e[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===cn||w.minFilter!==Zl&&w.minFilter!==jo||w.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ko&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Me(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",G));const ne=w.source;let Q=m.get(ne);Q===void 0&&(Q={},m.set(ne,Q));const te=J(w);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[te].usedTimes++;const ge=Q[C.__cacheKey];ge!==void 0&&(Q[C.__cacheKey].usedTimes--,ge.usedTimes===0&&I(w)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return H}function Fe(C,w,H){let ne=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=r.TEXTURE_3D);const Q=Me(C,w),te=w.source;t.bindTexture(ne,C.__webglTexture,r.TEXTURE0+H);const ge=n.get(te);if(te.version!==ge.__version||Q===!0){t.activeTexture(r.TEXTURE0+H),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const se=E(w)&&M(w.image)===!1;let j=v(w.image,se,!1,u);j=dt(w,j);const fe=M(j)||a,Ce=s.convert(w.format,w.colorSpace);let we=s.convert(w.type),ve=L(w.internalFormat,Ce,we,w.colorSpace);Se(ne,w,fe);let xe;const He=w.mipmaps,rt=a&&w.isVideoTexture!==!0,P=ge.__version===void 0||Q===!0,le=x(w,j,fe);if(w.isDepthTexture)ve=r.DEPTH_COMPONENT,a?w.type===Zi?ve=r.DEPTH_COMPONENT32F:w.type===Ki?ve=r.DEPTH_COMPONENT24:w.type===Or?ve=r.DEPTH24_STENCIL8:ve=r.DEPTH_COMPONENT16:w.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Fr&&ve===r.DEPTH_COMPONENT&&w.type!==Gu&&w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ki,we=s.convert(w.type)),w.format===Gs&&ve===r.DEPTH_COMPONENT&&(ve=r.DEPTH_STENCIL,w.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Or,we=s.convert(w.type))),P&&(rt?t.texStorage2D(r.TEXTURE_2D,1,ve,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ve,j.width,j.height,0,Ce,we,null));else if(w.isDataTexture)if(He.length>0&&fe){rt&&P&&t.texStorage2D(r.TEXTURE_2D,le,ve,He[0].width,He[0].height);for(let q=0,ie=He.length;q<ie;q++)xe=He[q],rt?t.texSubImage2D(r.TEXTURE_2D,q,0,0,xe.width,xe.height,Ce,we,xe.data):t.texImage2D(r.TEXTURE_2D,q,ve,xe.width,xe.height,0,Ce,we,xe.data);w.generateMipmaps=!1}else rt?(P&&t.texStorage2D(r.TEXTURE_2D,le,ve,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j.width,j.height,Ce,we,j.data)):t.texImage2D(r.TEXTURE_2D,0,ve,j.width,j.height,0,Ce,we,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ve,He[0].width,He[0].height,j.depth);for(let q=0,ie=He.length;q<ie;q++)xe=He[q],w.format!==Qn?Ce!==null?rt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,j.depth,Ce,xe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,ve,xe.width,xe.height,j.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,j.depth,Ce,we,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,ve,xe.width,xe.height,j.depth,0,Ce,we,xe.data)}else{rt&&P&&t.texStorage2D(r.TEXTURE_2D,le,ve,He[0].width,He[0].height);for(let q=0,ie=He.length;q<ie;q++)xe=He[q],w.format!==Qn?Ce!==null?rt?t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,xe.width,xe.height,Ce,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,ve,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(r.TEXTURE_2D,q,0,0,xe.width,xe.height,Ce,we,xe.data):t.texImage2D(r.TEXTURE_2D,q,ve,xe.width,xe.height,0,Ce,we,xe.data)}else if(w.isDataArrayTexture)rt?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ve,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ce,we,j.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,j.width,j.height,j.depth,0,Ce,we,j.data);else if(w.isData3DTexture)rt?(P&&t.texStorage3D(r.TEXTURE_3D,le,ve,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ce,we,j.data)):t.texImage3D(r.TEXTURE_3D,0,ve,j.width,j.height,j.depth,0,Ce,we,j.data);else if(w.isFramebufferTexture){if(P)if(rt)t.texStorage2D(r.TEXTURE_2D,le,ve,j.width,j.height);else{let q=j.width,ie=j.height;for(let ae=0;ae<le;ae++)t.texImage2D(r.TEXTURE_2D,ae,ve,q,ie,0,Ce,we,null),q>>=1,ie>>=1}}else if(He.length>0&&fe){rt&&P&&t.texStorage2D(r.TEXTURE_2D,le,ve,He[0].width,He[0].height);for(let q=0,ie=He.length;q<ie;q++)xe=He[q],rt?t.texSubImage2D(r.TEXTURE_2D,q,0,0,Ce,we,xe):t.texImage2D(r.TEXTURE_2D,q,ve,Ce,we,xe);w.generateMipmaps=!1}else rt?(P&&t.texStorage2D(r.TEXTURE_2D,le,ve,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,we,j)):t.texImage2D(r.TEXTURE_2D,0,ve,Ce,we,j);b(w,fe)&&T(ne),ge.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Qe(C,w,H){if(w.image.length!==6)return;const ne=Me(C,w),Q=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const te=n.get(Q);if(Q.version!==te.__version||ne===!0){t.activeTexture(r.TEXTURE0+H),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ge=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,j=[];for(let q=0;q<6;q++)!ge&&!se?j[q]=v(w.image[q],!1,!0,c):j[q]=se?w.image[q].image:w.image[q],j[q]=dt(w,j[q]);const fe=j[0],Ce=M(fe)||a,we=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),xe=L(w.internalFormat,we,ve,w.colorSpace),He=a&&w.isVideoTexture!==!0,rt=te.__version===void 0||ne===!0;let P=x(w,fe,Ce);Se(r.TEXTURE_CUBE_MAP,w,Ce);let le;if(ge){He&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,xe,fe.width,fe.height);for(let q=0;q<6;q++){le=j[q].mipmaps;for(let ie=0;ie<le.length;ie++){const ae=le[ie];w.format!==Qn?we!==null?He?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,ae.width,ae.height,we,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,ae.width,ae.height,we,ve,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,xe,ae.width,ae.height,0,we,ve,ae.data)}}}else{le=w.mipmaps,He&&rt&&(le.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,xe,j[0].width,j[0].height));for(let q=0;q<6;q++)if(se){He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,j[q].width,j[q].height,we,ve,j[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,xe,j[q].width,j[q].height,0,we,ve,j[q].data);for(let ie=0;ie<le.length;ie++){const Xe=le[ie].image[q].image;He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,Xe.width,Xe.height,we,ve,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,xe,Xe.width,Xe.height,0,we,ve,Xe.data)}}else{He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,we,ve,j[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,xe,we,ve,j[q]);for(let ie=0;ie<le.length;ie++){const ae=le[ie];He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,we,ve,ae.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,xe,we,ve,ae.image[q])}}}b(w,Ce)&&T(r.TEXTURE_CUBE_MAP),te.__version=Q.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function De(C,w,H,ne,Q,te){const ge=s.convert(H.format,H.colorSpace),se=s.convert(H.type),j=L(H.internalFormat,ge,se,H.colorSpace);if(!n.get(w).__hasExternalTextures){const Ce=Math.max(1,w.width>>te),we=Math.max(1,w.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,j,Ce,we,w.depth,0,ge,se,null):t.texImage2D(Q,te,j,Ce,we,0,ge,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),tt(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,n.get(H).__webglTexture,0,Be(w)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,n.get(H).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function k(C,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ne=r.DEPTH_COMPONENT16;if(H||tt(w)){const Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Zi?ne=r.DEPTH_COMPONENT32F:Q.type===Ki&&(ne=r.DEPTH_COMPONENT24));const te=Be(w);tt(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ne,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ne,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Be(w);H&&tt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,w.width,w.height):tt(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<ne.length;Q++){const te=ne[Q],ge=s.convert(te.format,te.colorSpace),se=s.convert(te.type),j=L(te.internalFormat,ge,se,te.colorSpace),fe=Be(w);H&&tt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,w.width,w.height):tt(w)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,j,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),R(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,Q=Be(w);if(w.depthTexture.format===Fr)tt(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(w.depthTexture.format===Gs)tt(w)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function de(C){const w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=r.createRenderbuffer(),k(w.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),k(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,w,H){const ne=n.get(C);w!==void 0&&De(ne.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&de(C)}function Pe(C){const w=C.texture,H=n.get(C),ne=n.get(w);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=w.version,o.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,ge=M(C)||a;if(Q){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let j=0;j<w.mipmaps.length;j++)H.__webglFramebuffer[se][j]=r.createFramebuffer()}else H.__webglFramebuffer[se]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)H.__webglFramebuffer[se]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const se=C.texture;for(let j=0,fe=se.length;j<fe;j++){const Ce=n.get(se[j]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&tt(C)===!1){const se=te?w:[w];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<se.length;j++){const fe=se[j];H.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const Ce=s.convert(fe.format,fe.colorSpace),we=s.convert(fe.type),ve=L(fe.internalFormat,Ce,we,fe.colorSpace,C.isXRRenderTarget===!0),xe=Be(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ve,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,H.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),k(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),Se(r.TEXTURE_CUBE_MAP,w,ge);for(let se=0;se<6;se++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)De(H.__webglFramebuffer[se][j],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,j);else De(H.__webglFramebuffer[se],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(w,ge)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const se=C.texture;for(let j=0,fe=se.length;j<fe;j++){const Ce=se[j],we=n.get(Ce);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),Se(r.TEXTURE_2D,Ce,ge),De(H.__webglFramebuffer,C,Ce,r.COLOR_ATTACHMENT0+j,r.TEXTURE_2D,0),b(Ce,ge)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ne.__webglTexture),Se(se,w,ge),a&&w.mipmaps&&w.mipmaps.length>0)for(let j=0;j<w.mipmaps.length;j++)De(H.__webglFramebuffer[j],C,w,r.COLOR_ATTACHMENT0,se,j);else De(H.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,se,0);b(w,ge)&&T(se),t.unbindTexture()}C.depthBuffer&&de(C)}function V(C){const w=M(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,Q=H.length;ne<Q;ne++){const te=H[ne];if(b(te,w)){const ge=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,se=n.get(te).__webglTexture;t.bindTexture(ge,se),T(ge),t.unbindTexture()}}}function Oe(C){if(a&&C.samples>0&&tt(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ne=C.height;let Q=r.COLOR_BUFFER_BIT;const te=[],ge=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(C),j=C.isWebGLMultipleRenderTargets===!0;if(j)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){te.push(r.COLOR_ATTACHMENT0+fe),C.depthBuffer&&te.push(ge);const Ce=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ce===!1&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),j&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[fe]),Ce===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ge]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ge])),j){const we=n.get(w[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,H,ne,0,0,H,ne,Q,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,se.__webglColorRenderbuffer[fe]);const Ce=n.get(w[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Be(C){return Math.min(f,C.samples)}function tt(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(C){const w=o.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function dt(C,w){const H=C.colorSpace,ne=C.format,Q=C.type;return C.isCompressedTexture===!0||C.format===uu||H!==_i&&H!==zr&&(H===$e?a===!1?e.has("EXT_sRGB")===!0&&ne===Qn?(C.format=uu,C.minFilter=Hn,C.generateMipmaps=!1):w=Jp.sRGBToLinear(w):(ne!==Qn||Q!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=R,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=re,this.rebindTextures=Le,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=De,this.useMultisampledRTT=tt}function dE(r,e,t){const n=t.isWebGL2;function i(s,o=zr){let a;if(s===ir)return r.UNSIGNED_BYTE;if(s===Wp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Xp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===L0)return r.BYTE;if(s===D0)return r.SHORT;if(s===Gu)return r.UNSIGNED_SHORT;if(s===Vp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Ko)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===U0)return r.ALPHA;if(s===Qn)return r.RGBA;if(s===I0)return r.LUMINANCE;if(s===N0)return r.LUMINANCE_ALPHA;if(s===Fr)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===uu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===O0)return r.RED;if(s===qp)return r.RED_INTEGER;if(s===F0)return r.RG;if(s===Yp)return r.RG_INTEGER;if(s===$p)return r.RGBA_INTEGER;if(s===Jl||s===Ql||s===ec||s===tc)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===Wh||s===Xh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===B0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qh||s===Yh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qh)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$h||s===jh||s===Kh||s===Zh||s===Jh||s===Qh||s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===$h)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ef)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===of)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===af)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nc)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===z0||s===cf||s===uf||s===hf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class pE extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class po extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mE={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new po;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _E extends yn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Fr,u!==Fr&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fr&&(n=Ki),n===void 0&&u===Gs&&(n=Or),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gE extends Xs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],v=[],M=new Pn;M.layers.enable(1),M.viewport=new Gt;const E=new Pn;E.layers.enable(2),E.viewport=new Gt;const b=[M,E],T=new pE;T.layers.enable(1),T.layers.enable(2);let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=S[F];return $===void 0&&($=new Tc,S[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=S[F];return $===void 0&&($=new Tc,S[F]=$),$.getGripSpace()},this.getHand=function(F){let $=S[F];return $===void 0&&($=new Tc,S[F]=$),$.getHandSpace()};function y(F){const $=v.indexOf(F.inputSource);if($===-1)return;const re=S[$];re!==void 0&&(re.update(F.inputSource,F.frame,c||o),re.dispatchEvent({type:F.type,data:F.inputSource}))}function G(){i.removeEventListener("select",y),i.removeEventListener("selectstart",y),i.removeEventListener("selectend",y),i.removeEventListener("squeeze",y),i.removeEventListener("squeezestart",y),i.removeEventListener("squeezeend",y),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",D);for(let F=0;F<S.length;F++){const $=v[F];$!==null&&(v[F]=null,S[F].disconnect($))}L=null,x=null,e.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",y),i.addEventListener("selectstart",y),i.addEventListener("selectend",y),i.addEventListener("squeeze",y),i.addEventListener("squeezestart",y),i.addEventListener("squeezeend",y),i.addEventListener("end",G),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),p=new qr(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,re=null,ee=null;_.depth&&(ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Gs:Fr,re=_.stencil?Or:Ki);const oe={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(oe),i.updateRenderState({layers:[h]}),p=new qr(h.textureWidth,h.textureHeight,{format:Qn,type:ir,depthTexture:new _E(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(p);_e.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(F){for(let $=0;$<F.removed.length;$++){const re=F.removed[$],ee=v.indexOf(re);ee>=0&&(v[ee]=null,S[ee].disconnect(re))}for(let $=0;$<F.added.length;$++){const re=F.added[$];let ee=v.indexOf(re);if(ee===-1){for(let _e=0;_e<S.length;_e++)if(_e>=v.length){v.push(re),ee=_e;break}else if(v[_e]===null){v[_e]=re,ee=_e;break}if(ee===-1)break}const oe=S[ee];oe&&oe.connect(re)}}const U=new K,I=new K;function N(F,$,re){U.setFromMatrixPosition($.matrixWorld),I.setFromMatrixPosition(re.matrixWorld);const ee=U.distanceTo(I),oe=$.projectionMatrix.elements,_e=re.projectionMatrix.elements,Se=oe[14]/(oe[10]-1),Me=oe[14]/(oe[10]+1),Fe=(oe[9]+1)/oe[5],Qe=(oe[9]-1)/oe[5],De=(oe[8]-1)/oe[0],k=(_e[8]+1)/_e[0],Ne=Se*De,de=Se*k,Le=ee/(-De+k),Pe=Le*-De;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Pe),F.translateZ(Le),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const V=Se+Le,Oe=Me+Le,Be=Ne-Pe,tt=de+(ee-Pe),je=Fe*Me/Oe*V,dt=Qe*Me/Oe*V;F.projectionMatrix.makePerspective(Be,tt,je,dt,V,Oe),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function Y(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;T.near=E.near=M.near=F.near,T.far=E.far=M.far=F.far,(L!==T.near||x!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,x=T.far);const $=F.parent,re=T.cameras;Y(T,$);for(let ee=0;ee<re.length;ee++)Y(re[ee],$);re.length===2?N(T,M,E):T.projectionMatrix.copy(M.projectionMatrix),B(F,T,$)};function B(F,$,re){re===null?F.matrix.copy($.matrixWorld):(F.matrix.copy(re.matrixWorld),F.matrix.invert(),F.matrix.multiply($.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const ee=F.children;for(let oe=0,_e=ee.length;oe<_e;oe++)ee[oe].updateMatrixWorld(!0);F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Zo*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let W=null;function J(F,$){if(u=$.getViewerPose(c||o),g=$,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ee=!1;re.length!==T.cameras.length&&(T.cameras.length=0,ee=!0);for(let oe=0;oe<re.length;oe++){const _e=re[oe];let Se=null;if(d!==null)Se=d.getViewport(_e);else{const Fe=f.getViewSubImage(h,_e);Se=Fe.viewport,oe===0&&(e.setRenderTargetTextures(p,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(p))}let Me=b[oe];Me===void 0&&(Me=new Pn,Me.layers.enable(oe),Me.viewport=new Gt,b[oe]=Me),Me.matrix.fromArray(_e.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(_e.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Se.x,Se.y,Se.width,Se.height),oe===0&&(T.matrix.copy(Me.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ee===!0&&T.cameras.push(Me)}}for(let re=0;re<S.length;re++){const ee=v[re],oe=S[re];ee!==null&&oe!==void 0&&oe.update(ee,$,c||o)}W&&W(F,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const R=new um;R.setAnimationLoop(J),this.setAnimationLoop=function(F){W=F},this.dispose=function(){}}}function vE(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,om(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xE(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(S,E);const b=e.render.frame;s[S.id]!==b&&(h(S),s[S.id]=b)}function u(S){const v=f();S.__bindingPointIndex=v;const M=r.createBuffer(),E=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=i[S.id],M=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,T=M.length;b<T;b++){const L=M[b];if(d(L,b,E)===!0){const x=L.__offset,y=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let D=0;D<y.length;D++){const U=y[D],I=_(U);typeof U=="number"?(L.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,x+G,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=U.elements[0],L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=U.elements[0],L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=U.elements[0]):(U.toArray(L.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,L.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,v,M){const E=S.value;if(M[v]===void 0){if(typeof E=="number")M[v]=E;else{const b=Array.isArray(E)?E:[E],T=[];for(let L=0;L<b.length;L++)T.push(b[L].clone());M[v]=T}return!0}else if(typeof E=="number"){if(M[v]!==E)return M[v]=E,!0}else{const b=Array.isArray(M[v])?M[v]:[M[v]],T=Array.isArray(E)?E:[E];for(let L=0;L<b.length;L++){const x=b[L];if(x.equals(T[L])===!1)return x.copy(T[L]),!0}}return!1}function g(S){const v=S.uniforms;let M=0;const E=16;let b=0;for(let T=0,L=v.length;T<L;T++){const x=v[T],y={boundary:0,storage:0},G=Array.isArray(x.value)?x.value:[x.value];for(let D=0,U=G.length;D<U;D++){const I=G[D],N=_(I);y.boundary+=N.boundary,y.storage+=N.storage}if(x.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,T>0){b=M%E;const D=E-b;b!==0&&D-y.boundary<0&&(M+=E-b,x.__offset=M)}M+=y.storage}return b=M%E,b>0&&(M+=E-b),S.__size=M,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}function SE(){const r=Jo("canvas");return r.style.display="block",r}class mm{constructor(e={}){const{canvas:t=SE(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const v=this;let M=!1,E=0,b=0,T=null,L=-1,x=null;const y=new Gt,G=new Gt;let D=null;const U=new _t(0);let I=0,N=t.width,Y=t.height,B=1,W=null,J=null;const R=new Gt(0,0,N,Y),F=new Gt(0,0,N,Y);let $=!1;const re=new cm;let ee=!1,oe=!1,_e=null;const Se=new Vt,Me=new ot,Fe=new K,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?B:1}let k=n;function Ne(A,z){for(let X=0;X<A.length;X++){const O=A[X],Z=t.getContext(O,z);if(Z!==null)return Z}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ie,!1),k===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),k=Ne(z,A),k===null)throw Ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let de,Le,Pe,V,Oe,Be,tt,je,dt,C,w,H,ne,Q,te,ge,se,j,fe,Ce,we,ve,xe,He;function rt(){de=new PM(k),Le=new EM(k,de,e),de.init(Le),ve=new dE(k,de,Le),Pe=new hE(k,de,Le),V=new UM(k),Oe=new Zy,Be=new fE(k,de,Pe,Oe,Le,ve,V),tt=new wM(v),je=new CM(v),dt=new Gv(k,Le),xe=new MM(k,de,dt,Le),C=new LM(k,dt,V,xe),w=new FM(k,C,dt,V),fe=new OM(k,Le,Be),ge=new TM(Oe),H=new Ky(v,tt,je,de,Le,xe,ge),ne=new vE(v,Oe),Q=new Qy,te=new sE(de,Le),j=new SM(v,tt,je,Pe,w,h,l),se=new uE(v,w,Le),He=new xE(k,V,Le,Pe),Ce=new yM(k,de,V,Le),we=new DM(k,de,V,Le),V.programs=H.programs,v.capabilities=Le,v.extensions=de,v.properties=Oe,v.renderLists=Q,v.shadowMap=se,v.state=Pe,v.info=V}rt();const P=new gE(v,k);this.xr=P,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(N,Y,!1))},this.getSize=function(A){return A.set(N,Y)},this.setSize=function(A,z,X=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,Y=z,t.width=Math.floor(A*B),t.height=Math.floor(z*B),X===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(N*B,Y*B).floor()},this.setDrawingBufferSize=function(A,z,X){N=A,Y=z,B=X,t.width=Math.floor(A*X),t.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,z,X,O){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,z,X,O),Pe.viewport(y.copy(R).multiplyScalar(B).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,z,X,O){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,z,X,O),Pe.scissor(G.copy(F).multiplyScalar(B).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(A){Pe.setScissorTest($=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(A=!0,z=!0,X=!0){let O=0;if(A){let Z=!1;if(T!==null){const ce=T.texture.format;Z=ce===$p||ce===Yp||ce===qp}if(Z){const ce=T.texture.type,me=ce===ir||ce===Ki||ce===Gu||ce===Or||ce===Wp||ce===Xp,Te=j.getClearColor(),Ie=j.getClearAlpha(),Ve=Te.r,Ee=Te.g,Re=Te.b;me?(d[0]=Ve,d[1]=Ee,d[2]=Re,d[3]=Ie,k.clearBufferuiv(k.COLOR,0,d)):(g[0]=Ve,g[1]=Ee,g[2]=Re,g[3]=Ie,k.clearBufferiv(k.COLOR,0,g))}else O|=k.COLOR_BUFFER_BIT}z&&(O|=k.DEPTH_BUFFER_BIT),X&&(O|=k.STENCIL_BUFFER_BIT),k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Q.dispose(),te.dispose(),Oe.dispose(),tt.dispose(),je.dispose(),w.dispose(),xe.dispose(),He.dispose(),H.dispose(),P.dispose(),P.removeEventListener("sessionstart",pe),P.removeEventListener("sessionend",Ae),_e&&(_e.dispose(),_e=null),ke.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=V.autoReset,z=se.enabled,X=se.autoUpdate,O=se.needsUpdate,Z=se.type;rt(),V.autoReset=A,se.enabled=z,se.autoUpdate=X,se.needsUpdate=O,se.type=Z}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const z=A.target;z.removeEventListener("dispose",ae),Xe(z)}function Xe(A){lt(A),Oe.remove(A)}function lt(A){const z=Oe.get(A).programs;z!==void 0&&(z.forEach(function(X){H.releaseProgram(X)}),A.isShaderMaterial&&H.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,O,Z,ce){z===null&&(z=Qe);const me=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=Nt(A,z,X,O,Z);Pe.setMaterial(O,me);let Ie=X.index,Ve=1;if(O.wireframe===!0){if(Ie=C.getWireframeAttribute(X),Ie===void 0)return;Ve=2}const Ee=X.drawRange,Re=X.attributes.position;let st=Ee.start*Ve,pt=(Ee.start+Ee.count)*Ve;ce!==null&&(st=Math.max(st,ce.start*Ve),pt=Math.min(pt,(ce.start+ce.count)*Ve)),Ie!==null?(st=Math.max(st,0),pt=Math.min(pt,Ie.count)):Re!=null&&(st=Math.max(st,0),pt=Math.min(pt,Re.count));const Jt=pt-st;if(Jt<0||Jt===1/0)return;xe.setup(Z,O,Te,X,Ie);let Qt,at=Ce;if(Ie!==null&&(Qt=dt.get(Ie),at=we,at.setIndex(Qt)),Z.isMesh)O.wireframe===!0?(Pe.setLineWidth(O.wireframeLinewidth*De()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(Z.isLine){let We=O.linewidth;We===void 0&&(We=1),Pe.setLineWidth(We*De()),Z.isLineSegments?at.setMode(k.LINES):Z.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else Z.isPoints?at.setMode(k.POINTS):Z.isSprite&&at.setMode(k.TRIANGLES);if(Z.isInstancedMesh)at.renderInstances(st,Jt,Z.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ui=Math.min(X.instanceCount,We);at.renderInstances(st,Jt,Ui)}else at.render(st,Jt)},this.compile=function(A,z){function X(O,Z,ce){O.transparent===!0&&O.side===si&&O.forceSinglePass===!1?(O.side=Mn,O.needsUpdate=!0,qe(O,Z,ce),O.side=ar,O.needsUpdate=!0,qe(O,Z,ce),O.side=si):qe(O,Z,ce)}m=te.get(A),m.init(),S.push(m),A.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights),A.traverse(function(O){const Z=O.material;if(Z)if(Array.isArray(Z))for(let ce=0;ce<Z.length;ce++){const me=Z[ce];X(me,A,O)}else X(Z,A,O)}),S.pop(),m=null};let ct=null;function pn(A){ct&&ct(A)}function pe(){ke.stop()}function Ae(){ke.start()}const ke=new um;ke.setAnimationLoop(pn),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(A){ct=A,P.setAnimationLoop(A),A===null?ke.stop():ke.start()},P.addEventListener("sessionstart",pe),P.addEventListener("sessionend",Ae),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(z),z=P.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,T),m=te.get(A,S.length),m.init(),S.push(m),Se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),re.setFromProjectionMatrix(Se),oe=this.localClippingEnabled,ee=ge.init(this.clippingPlanes,oe),_=Q.get(A,p.length),_.init(),p.push(_),he(A,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,J),this.info.render.frame++,ee===!0&&ge.beginShadows();const X=m.state.shadowsArray;if(se.render(X,A,z),ee===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(_,A),m.setupLights(v._useLegacyLights),z.isArrayCamera){const O=z.cameras;for(let Z=0,ce=O.length;Z<ce;Z++){const me=O[Z];Ge(_,A,me,me.viewport)}}else Ge(_,A,z);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,z),xe.resetDefaultState(),L=-1,x=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function he(A,z,X,O){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){O&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const me=w.update(A),Te=A.material;Te.visible&&_.push(A,me,Te,X,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const me=w.update(A),Te=A.material;if(O&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Fe.copy(me.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const Ie=me.groups;for(let Ve=0,Ee=Ie.length;Ve<Ee;Ve++){const Re=Ie[Ve],st=Te[Re.materialIndex];st&&st.visible&&_.push(A,me,st,X,Fe.z,Re)}}else Te.visible&&_.push(A,me,Te,X,Fe.z,null)}}const ce=A.children;for(let me=0,Te=ce.length;me<Te;me++)he(ce[me],z,X,O)}function Ge(A,z,X,O){const Z=A.opaque,ce=A.transmissive,me=A.transparent;m.setupLightsView(X),ee===!0&&ge.setGlobalState(v.clippingPlanes,X),ce.length>0&&Ue(Z,ce,z,X),O&&Pe.viewport(y.copy(O)),Z.length>0&&ze(Z,z,X),ce.length>0&&ze(ce,z,X),me.length>0&&ze(me,z,X),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ue(A,z,X,O){const Z=Le.isWebGL2;_e===null&&(_e=new qr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ko:ir,minFilter:jo,samples:Z?4:0})),v.getDrawingBufferSize(Me),Z?_e.setSize(Me.x,Me.y):_e.setSize(vl(Me.x),vl(Me.y));const ce=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(U),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const me=v.toneMapping;v.toneMapping=nr,ze(A,X,O),Be.updateMultisampleRenderTarget(_e),Be.updateRenderTargetMipmap(_e);let Te=!1;for(let Ie=0,Ve=z.length;Ie<Ve;Ie++){const Ee=z[Ie],Re=Ee.object,st=Ee.geometry,pt=Ee.material,Jt=Ee.group;if(pt.side===si&&Re.layers.test(O.layers)){const Qt=pt.side;pt.side=Mn,pt.needsUpdate=!0,Tt(Re,X,O,st,pt,Jt),pt.side=Qt,pt.needsUpdate=!0,Te=!0}}Te===!0&&(Be.updateMultisampleRenderTarget(_e),Be.updateRenderTargetMipmap(_e)),v.setRenderTarget(ce),v.setClearColor(U,I),v.toneMapping=me}function ze(A,z,X){const O=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,ce=A.length;Z<ce;Z++){const me=A[Z],Te=me.object,Ie=me.geometry,Ve=O===null?me.material:O,Ee=me.group;Te.layers.test(X.layers)&&Tt(Te,z,X,Ie,Ve,Ee)}}function Tt(A,z,X,O,Z,ce){A.onBeforeRender(v,z,X,O,Z,ce),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(v,z,X,O,A,ce),Z.transparent===!0&&Z.side===si&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,v.renderBufferDirect(X,z,O,Z,A,ce),Z.side=ar,Z.needsUpdate=!0,v.renderBufferDirect(X,z,O,Z,A,ce),Z.side=si):v.renderBufferDirect(X,z,O,Z,A,ce),A.onAfterRender(v,z,X,O,Z,ce)}function qe(A,z,X){z.isScene!==!0&&(z=Qe);const O=Oe.get(A),Z=m.state.lights,ce=m.state.shadowsArray,me=Z.state.version,Te=H.getParameters(A,Z.state,ce,z,X),Ie=H.getProgramCacheKey(Te);let Ve=O.programs;O.environment=A.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(A.isMeshStandardMaterial?je:tt).get(A.envMap||O.environment),Ve===void 0&&(A.addEventListener("dispose",ae),Ve=new Map,O.programs=Ve);let Ee=Ve.get(Ie);if(Ee!==void 0){if(O.currentProgram===Ee&&O.lightsStateVersion===me)return gt(A,Te),Ee}else Te.uniforms=H.getUniforms(A),A.onBuild(X,Te,v),A.onBeforeCompile(Te,v),Ee=H.acquireProgram(Te,Ie),Ve.set(Ie,Ee),O.uniforms=Te.uniforms;const Re=O.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=ge.uniform),gt(A,Te),O.needsLights=ht(A),O.lightsStateVersion=me,O.needsLights&&(Re.ambientLightColor.value=Z.state.ambient,Re.lightProbe.value=Z.state.probe,Re.directionalLights.value=Z.state.directional,Re.directionalLightShadows.value=Z.state.directionalShadow,Re.spotLights.value=Z.state.spot,Re.spotLightShadows.value=Z.state.spotShadow,Re.rectAreaLights.value=Z.state.rectArea,Re.ltc_1.value=Z.state.rectAreaLTC1,Re.ltc_2.value=Z.state.rectAreaLTC2,Re.pointLights.value=Z.state.point,Re.pointLightShadows.value=Z.state.pointShadow,Re.hemisphereLights.value=Z.state.hemi,Re.directionalShadowMap.value=Z.state.directionalShadowMap,Re.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Re.spotShadowMap.value=Z.state.spotShadowMap,Re.spotLightMatrix.value=Z.state.spotLightMatrix,Re.spotLightMap.value=Z.state.spotLightMap,Re.pointShadowMap.value=Z.state.pointShadowMap,Re.pointShadowMatrix.value=Z.state.pointShadowMatrix);const st=Ee.getUniforms(),pt=ja.seqWithValue(st.seq,Re);return O.currentProgram=Ee,O.uniformsList=pt,Ee}function gt(A,z){const X=Oe.get(A);X.outputColorSpace=z.outputColorSpace,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Nt(A,z,X,O,Z){z.isScene!==!0&&(z=Qe),Be.resetTextureUnits();const ce=z.fog,me=O.isMeshStandardMaterial?z.environment:null,Te=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:_i,Ie=(O.isMeshStandardMaterial?je:tt).get(O.envMap||me),Ve=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ee=!!X.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,pt=!!X.morphAttributes.color;let Jt=nr;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Jt=v.toneMapping);const Qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=Qt!==void 0?Qt.length:0,We=Oe.get(O),Ui=m.state.lights;if(ee===!0&&(oe===!0||A!==x)){const Tn=A===x&&O.id===L;ge.setState(O,A,Tn)}let ft=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ui.state.version||We.outputColorSpace!==Te||Z.isInstancedMesh&&We.instancing===!1||!Z.isInstancedMesh&&We.instancing===!0||Z.isSkinnedMesh&&We.skinning===!1||!Z.isSkinnedMesh&&We.skinning===!0||Z.isInstancedMesh&&We.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&We.instancingColor===!1&&Z.instanceColor!==null||We.envMap!==Ie||O.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ge.numPlanes||We.numIntersection!==ge.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Ee||We.morphTargets!==Re||We.morphNormals!==st||We.morphColors!==pt||We.toneMapping!==Jt||Le.isWebGL2===!0&&We.morphTargetsCount!==at)&&(ft=!0):(ft=!0,We.__version=O.version);let ur=We.currentProgram;ft===!0&&(ur=qe(O,z,Z));let ju=!1,$s=!1,Pl=!1;const en=ur.getUniforms(),hr=We.uniforms;if(Pe.useProgram(ur.program)&&(ju=!0,$s=!0,Pl=!0),O.id!==L&&(L=O.id,$s=!0),ju||x!==A){if(en.setValue(k,"projectionMatrix",A.projectionMatrix),Le.logarithmicDepthBuffer&&en.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,$s=!0,Pl=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Tn=en.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,Fe.setFromMatrixPosition(A.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&en.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Z.isSkinnedMesh)&&en.setValue(k,"viewMatrix",A.matrixWorldInverse)}if(Z.isSkinnedMesh){en.setOptional(k,Z,"bindMatrix"),en.setOptional(k,Z,"bindMatrixInverse");const Tn=Z.skeleton;Tn&&(Le.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),en.setValue(k,"boneTexture",Tn.boneTexture,Be),en.setValue(k,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ll=X.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&Le.isWebGL2===!0)&&fe.update(Z,X,ur),($s||We.receiveShadow!==Z.receiveShadow)&&(We.receiveShadow=Z.receiveShadow,en.setValue(k,"receiveShadow",Z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(hr.envMap.value=Ie,hr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$s&&(en.setValue(k,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&vt(hr,Pl),ce&&O.fog===!0&&ne.refreshFogUniforms(hr,ce),ne.refreshMaterialUniforms(hr,O,B,Y,_e),ja.upload(k,We.uniformsList,hr,Be)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ja.upload(k,We.uniformsList,hr,Be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&en.setValue(k,"center",Z.center),en.setValue(k,"modelViewMatrix",Z.modelViewMatrix),en.setValue(k,"normalMatrix",Z.normalMatrix),en.setValue(k,"modelMatrix",Z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Tn=O.uniformsGroups;for(let Dl=0,Sm=Tn.length;Dl<Sm;Dl++)if(Le.isWebGL2){const Ku=Tn[Dl];He.update(Ku,ur),He.bind(Ku,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function vt(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function ht(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,z,X){Oe.get(A.texture).__webglTexture=z,Oe.get(A.depthTexture).__webglTexture=X;const O=Oe.get(A);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=X===void 0,O.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const X=Oe.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,X=0){T=A,E=z,b=X;let O=!0,Z=null,ce=!1,me=!1;if(A){const Ie=Oe.get(A);Ie.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(k.FRAMEBUFFER,null),O=!1):Ie.__webglFramebuffer===void 0?Be.setupRenderTarget(A):Ie.__hasExternalTextures&&Be.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const Ee=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ee[z])?Z=Ee[z][X]:Z=Ee[z],ce=!0):Le.isWebGL2&&A.samples>0&&Be.useMultisampledRTT(A)===!1?Z=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ee)?Z=Ee[X]:Z=Ee,y.copy(A.viewport),G.copy(A.scissor),D=A.scissorTest}else y.copy(R).multiplyScalar(B).floor(),G.copy(F).multiplyScalar(B).floor(),D=$;if(Pe.bindFramebuffer(k.FRAMEBUFFER,Z)&&Le.drawBuffers&&O&&Pe.drawBuffers(A,Z),Pe.viewport(y),Pe.scissor(G),Pe.setScissorTest(D),ce){const Ie=Oe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,X)}else if(me){const Ie=Oe.get(A.texture),Ve=z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Ve)}L=-1},this.readRenderTargetPixels=function(A,z,X,O,Z,ce,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te){Pe.bindFramebuffer(k.FRAMEBUFFER,Te);try{const Ie=A.texture,Ve=Ie.format,Ee=Ie.type;if(Ve!==Qn&&ve.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ee===Ko&&(de.has("EXT_color_buffer_half_float")||Le.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ee!==ir&&ve.convert(Ee)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ee===Zi&&(Le.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-O&&X>=0&&X<=A.height-Z&&k.readPixels(z,X,O,Z,ve.convert(Ve),ve.convert(Ee),ce)}finally{const Ie=T!==null?Oe.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,z,X=0){const O=Math.pow(2,-X),Z=Math.floor(z.image.width*O),ce=Math.floor(z.image.height*O);Be.setTexture2D(z,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,A.x,A.y,Z,ce),Pe.unbindTexture()},this.copyTextureToTexture=function(A,z,X,O=0){const Z=z.image.width,ce=z.image.height,me=ve.convert(X.format),Te=ve.convert(X.type);Be.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,A.x,A.y,Z,ce,me,Te,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,me,z.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,O,A.x,A.y,me,Te,z.image),O===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,z,X,O,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=A.max.x-A.min.x+1,me=A.max.y-A.min.y+1,Te=A.max.z-A.min.z+1,Ie=ve.convert(O.format),Ve=ve.convert(O.type);let Ee;if(O.isData3DTexture)Be.setTexture3D(O,0),Ee=k.TEXTURE_3D;else if(O.isDataArrayTexture)Be.setTexture2DArray(O,0),Ee=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);const Re=k.getParameter(k.UNPACK_ROW_LENGTH),st=k.getParameter(k.UNPACK_IMAGE_HEIGHT),pt=k.getParameter(k.UNPACK_SKIP_PIXELS),Jt=k.getParameter(k.UNPACK_SKIP_ROWS),Qt=k.getParameter(k.UNPACK_SKIP_IMAGES),at=X.isCompressedTexture?X.mipmaps[0]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,at.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Ee,Z,z.x,z.y,z.z,ce,me,Te,Ie,Ve,at.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ee,Z,z.x,z.y,z.z,ce,me,Te,Ie,at.data)):k.texSubImage3D(Ee,Z,z.x,z.y,z.z,ce,me,Te,Ie,Ve,at),k.pixelStorei(k.UNPACK_ROW_LENGTH,Re),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,st),k.pixelStorei(k.UNPACK_SKIP_PIXELS,pt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qt),Z===0&&O.generateMipmaps&&k.generateMipmap(Ee),Pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,Pe.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Br:jp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?$e:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ME extends mm{}ME.prototype.isWebGL1Renderer=!0;class yE extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Qf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class EE{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const TE=new EE;class qu{constructor(e){this.manager=e!==void 0?e:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qu.DEFAULT_MATERIAL_NAME="__DEFAULT";class wE extends qu{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){u(),Qf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Yu extends qu{constructor(e){super(e)}load(e,t,n,i){const s=new yn,o=new wE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);class Pt{static get RENDERER_SETTING(){return{clearColor:0,width:window.innerWidth,height:window.innerHeight}}static get CAMERA_PARAM(){return{fov:60,fovy:60,aspect:window.innerWidth/window.innerHeight,near:.1,far:1e4,x:0,y:0,z:3,lookAt:new K(0,0,0)}}constructor(){this.render,this.scene,this.canvas,this.controls,this.stats,this.axesHelper,this.gridHelper,this.render=this.render.bind(this),this.width=window.innerWidth,this.height=window.innerHeight,this.Dev=!1,this.composer,this.loader=new Yu}_setRender(){this.renderer=new mm({antialias:!0,alpha:!0}),this.renderer.setClearColor(2236962,0),this.renderer.setSize(Pt.RENDERER_SETTING.width,Pt.RENDERER_SETTING.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.canvas=document.querySelector("#webgl"),this.canvas.appendChild(this.renderer.domElement)}_setScene(){this.scene=new yE}_setCamera(){this.camera=new Pn(Pt.CAMERA_PARAM.fovy,Pt.CAMERA_PARAM.aspect,Pt.CAMERA_PARAM.near,Pt.CAMERA_PARAM.far),this.camera.position.set(Pt.CAMERA_PARAM.x,Pt.CAMERA_PARAM.y,Pt.CAMERA_PARAM.z),this.camera.lookAt(Pt.CAMERA_PARAM.lookAt),this.camera.fov=mf.radToDeg(Math.atan(window.innerWidth/this.camera.aspect/(2*this.camera.position.z)))*2,this.camera.updateProjectionMatrix()}_init(){this._setRender(),this._setScene(),this._setCamera()}render(){this.renderer.render(this.scene,this.camera)}onLoop(){this.render()}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.camera=new Pn(Pt.CAMERA_PARAM.fovy,this.width/this.height,Pt.CAMERA_PARAM.near,Pt.CAMERA_PARAM.far),this.camera.position.set(Pt.CAMERA_PARAM.x,Pt.CAMERA_PARAM.y,Pt.CAMERA_PARAM.z),this.camera.lookAt(Pt.CAMERA_PARAM.lookAt),this.camera.fov=mf.radToDeg(Math.atan(this.width/this.camera.aspect/(2*this.camera.position.z)))*2,this.camera.updateProjectionMatrix()}}class bE{constructor(){this.images=[],this.imagesData=[],this.textures=[],this.loader=new Yu}getImages(e){e.forEach(t=>{const n=t.getBoundingClientRect(),i={src:t.src,w:n.width,h:n.height,top:n.top,left:n.left};this.imagesData.push(i),this.images.push(t)})}setTexture(e){return e.forEach((t,n)=>{const i=this.loader.load(t);this.textures.push(i)}),this.textures}onImagesUpdate(){this.images.forEach((e,t)=>{const n=e.getBoundingClientRect();this.imagesData[t].src=e.src,this.imagesData[t].width=n.width,this.imagesData[t].height=n.height,this.imagesData[t].top=n.top,this.imagesData[t].left=n.left})}}const AE=`
  varying vec2 vUv;
  varying vec2 v_offset;
  uniform vec2 u_offset;

  float PI = 3.1415926535897932384626433832795;

  vec3 curve(vec3 position , vec2 uv , vec2 offset) {
    position.x = position.x + (sin(uv.y * PI) * offset.x);
    position.y = position.y + (sin(uv.x * PI) * offset.y);
    return position;
  }

  void main() {
    vUv = uv;
    v_offset = u_offset;
    vec3 newPos = curve(position,vUv,u_offset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
  }
`,RE=`
precision mediump float;
uniform sampler2D u_texture;
uniform float u_directionX;
uniform vec2 u_resolution;
uniform vec2 u_planeSize;
uniform vec2 u_imageSize;
varying vec2 vUv;
varying vec2 v_offset;
uniform float u_progress;


vec2 imageAspect(vec2 planeSize,vec2 ImageSize, vec2 p) {
  vec2 ratio = vec2(
        min((planeSize.x / planeSize.y) / (ImageSize.x / ImageSize.y), 1.0),
        min((planeSize.y / planeSize.x) / (ImageSize.y / ImageSize.x), 1.0)
    );

    vec2 uv = vec2(
    (vUv.x - 0.5) * ratio.x + 0.5,
    (vUv.y - 0.5) * ratio.y + 0.5
  );

    return uv;
}


void main() {

  float intensity = 0.2;

  /*----------------------------------
  * アスペクト補正
  ---------------------------------------*/
  float uScale = 0.85;
  vec2 p = imageAspect(u_planeSize,u_imageSize,vUv);
  vec2 texCenter = vec2(0.5,0.5+u_directionX);
  vec2 texScale = (p - texCenter) * uScale + texCenter;
  /*----------------------------------
  * Texture加工
  ---------------------------------------*/
  float num = 20.0;
  vec2 grid = floor(texScale * num) / num;
  vec2 centerGrid = grid + vec2(0.5 / num, 0.5 / num);
  float moveDistance = length(texScale);
  float strength = smoothstep(0.1, 0.0, moveDistance * 10.) * 10.;

  vec2 uv = p - centerGrid * strength;

  vec2 offset = vec2(0.5, 0.5) * v_offset * 10.;

  float r = texture2D(u_texture, uv  - offset * 0.07).r;
  float g = texture2D(u_texture, uv  - offset * 0.09).g;
  float b = texture2D(u_texture, uv  - offset * 0.11).b;


  vec4 Tex = vec4(r,g,b,1.0);
  vec4 blackColor = vec4(0.0, 0.0, 0.0, 1.0);
  float alpha = u_progress;

  vec4 f = mix(Tex, blackColor, 0.);
  /*----------------------------------
  * 結果
  ---------------------------------------*/
  gl_FragColor = f;


}
`;class CE{constructor(e,t){this.stage=e,this.imageLoader=new bE,this.domImageData=t,this.domImageSrc=[],this.mobile="ontouchstart"in document.documentElement,this.w=window.innerWidth,this.h=window.innerHeight,this.textures=[],this.loader=new Yu,this.group=new po,this.objcts=[],this.viewport={width:window.innerWidth,height:window.innerHeight,widthHalf:window.innerWidth/2,heightHalf:window.innerHeight/2}}_init(e){this.#e(),this.createObjects(),this.curveAnimation(e)}_setImage(){return new Promise((e,t)=>{this.domImageData.forEach(n=>{this.domImageSrc.push(n.src)}),this.textures=this.imageLoader.setTexture(this.domImageSrc),e()})}#e(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight,this.viewport.widthHalf=this.viewport.width/2,this.viewport.heightHalf=this.viewport.height/2}createMesh(e){const t={x:1,y:1},n={x:this.domImageData[e].width,y:this.domImageData[e].height};this.textureSize={x:this.domImageData[e].naturalWidth,y:this.domImageData[e].naturalHeight};const i={u_resolution:{value:new ot(window.innerWidth,window.innerHeight)},u_texture:{value:this.textures[e]},u_planeSize:{value:n},u_imageSize:{value:this.textureSize},u_amplitude:{value:.5},u_progress:{value:0},u_time:{value:0},u_viewSize:{value:new ot(1,1)},u_meshScale:{value:new ot(1,1)},u_meshPosition:{value:new ot(0,0)},u_offset:{value:new ot(0,0)},u_directionX:{value:0}};return this.geometry=new Rl(t.x,t.y,20,20),this.material=new lr({uniforms:i,vertexShader:AE,fragmentShader:RE,side:si}),new Ci(this.geometry,this.material)}createObjects(){this.textures.forEach((e,t)=>{this.mesh=this.createMesh(t),this.mesh.scale.set(this.domImageData[t].width,this.domImageData[t].height,0),this.meshWidthHalf=this.mesh.scale.x*.5,this.meshHeightHalf=this.mesh.scale.y*.5,this.mesh.position.x=-this.viewport.widthHalf+this.meshWidthHalf+this.domImageData[t].left,this.mesh.position.y=this.viewport.heightHalf-this.meshHeightHalf-this.domImageData[t].top;const n=this.domImageData[t].width*this.viewport.width/window.innerWidth,i=this.domImageData[t].height*this.viewport.height/window.innerHeight;let s=this.domImageData[t].left*this.viewport.width/window.innerWidth,o=this.domImageData[t].top*this.viewport.height/window.innerHeight;s=s-this.viewport.width/2,o=o-this.viewport.height/2;let a=s+n/2,l=-o-i/2;this.mesh.material.uniforms.u_meshPosition.value.x=a/n,this.mesh.material.uniforms.u_meshPosition.value.y=l/i,this.mesh.material.uniforms.u_meshScale.value.x=n,this.mesh.material.uniforms.u_meshScale.value.y=i,this.mesh.material.uniforms.u_viewSize.value.x=this.viewport.width,this.mesh.material.uniforms.u_viewSize.value.y=this.viewport.height,this.objcts.push(this.mesh),this.stage.scene.add(this.mesh)})}curveAnimation(e){e.addEventListener("click",()=>{this.objcts.forEach(t=>{be.fromTo(t.material.uniforms.u_offset.value,{x:0},{x:-.3,ease:"power4.out",duration:.6,delay:.1,onComplete:()=>{be.to(t.material.uniforms.u_offset.value,{x:0,ease:"power4.out",duration:.9})}})})})}onResize(){this.w=window.innerWidth,this.h=window.innerHeight,this.#e(),this.mesh.material.uniforms.u_viewSize.value.x=this.viewport.width,this.mesh.material.uniforms.u_viewSize.value.y=this.viewport.height}onMeshUpdata(e,t){this.objcts[t].material.needsUpdate=!0,this.objcts[t].scale.x=this.domImageData[t].width,this.objcts[t].scale.y=this.domImageData[t].height,this.objcts[t].material.uniforms.u_planeSize.value.x=this.objcts[t].scale.x,this.objcts[t].material.uniforms.u_planeSize.value.y=this.objcts[t].scale.y,this.meshWidthHalf=this.objcts[t].scale.x*.5,this.meshHeightHalf=this.objcts[t].scale.y*.5,this.objcts[t].position.y=this.viewport.heightHalf-this.meshHeightHalf-this.domImageData[t].top,this.objcts[t].position.x=-this.viewport.widthHalf+this.meshWidthHalf+this.domImageData[t].left;const n=this.domImageData[t].width*this.viewport.width/window.innerWidth,i=this.domImageData[t].height*this.viewport.height/window.innerHeight;let s=this.domImageData[t].left*this.viewport.width/window.innerWidth,o=this.domImageData[t].top*this.viewport.height/window.innerHeight;s=s-this.viewport.width/2,o=o-this.viewport.height/2;let a=s+n/2,l=-o-i/2;this.objcts[t].material.uniforms.u_meshPosition.value.x=a/n,this.objcts[t].material.uniforms.u_meshPosition.value.y=l/i}onScrollUpdata(e){this.objcts.forEach(t=>{t.material.uniforms.u_offset.value.x=e/3e3,t.material.uniforms.u_directionX.value=-e/500})}onUpdate(){}dispose(){this.composer&&(this.composer.renderTarget1&&this.composer.renderTarget1.dispose(),this.composer.renderTarget2&&this.composer.renderTarget2.dispose(),this.composer.dispose()),this.stage.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>{t.map&&t.map.dispose(),t.dispose()}):(e.material.map&&e.material.map.dispose(),e.material.dispose())))}),this.stage.renderer.dispose(),this.stage.scene=null,this.stage.camera=null,this.loader=null,this.gltfLoader=null,this.group=null}}let wc="ontouchstart"in document.documentElement,$u=0,mo=0,_o=0,ro=10,bc=0;const PE=(r,e,t)=>r*(1-t)+e*t;let Io=null,Ka=!1,Za=0,Ja=0,du,No,Oo,Rr,Ac,xl={x:0},Us,xs=[],Hi=[],go=0,Fo,Qa=[];const LE=async r=>{Us=document.querySelector("[data-image-container]"),xs=[...document.querySelectorAll("[data-image-item]")],Fo=document.querySelector("[data-mini-map]"),Qa=[],Hi=xs.map(n=>n.clientWidth),go=Hi.reduce((n,i)=>n+i,0)+(Hi.length-1)*ro;const e=.1;xs.forEach((n,i)=>{let s=document.createElement("div");s.classList.add("p-single__mini-item"),Fo.appendChild(s),Qa.push(s)}),r.addEventListener("click",()=>{be.fromTo(xl,{x:0},{x:wc?"-=5900%":"-=6150%",ease:"power4.out",duration:2})});const t=async n=>{bc=xl.x,await Promise.all(xs.map(async(i,s)=>{await new Promise(h=>{let d=i.querySelector("img");if(!d){h();return}d.complete?h():d.onload=()=>h()});let o=Hi[s],a=bc+n;bc+=o+ro,be.set(i,{x:a,modifiers:{x:h=>`${be.utils.wrap(-o,go-o+ro,parseFloat(h))}px`}});let l=be.utils.wrap(-o,go-o+ro,parseFloat(a)),c=Qa[s],u=l*e,f=o*e-2;be.set(c,{x:u,width:f})}))};await t(0),du=n=>{mo-=n.deltaY*.5},No=n=>{Za=wc?n.touches[0].clientX:n.clientX,Ka=!0,Us.style.cursor="grabbing"},Oo=n=>{Ka&&(Ja=wc?n.touches[0].clientX:n.clientX,mo+=(Ja-Za)*1,Za=Ja)},Rr=()=>{Ka=!1,Us.style.cursor="grab"},Ac=()=>{Io=requestAnimationFrame(Ac),_o=PE(_o,mo,.08),$u=mo-_o,t(_o)},Io=requestAnimationFrame(Ac),window.addEventListener("wheel",du),window.addEventListener("touchstart",No),window.addEventListener("touchmove",Oo),window.addEventListener("touchend",Rr),window.addEventListener("mousedown",No),window.addEventListener("mousemove",Oo),window.addEventListener("mouseleave",Rr),window.addEventListener("mouseup",Rr),window.addEventListener("selectstart",()=>!1),window.addEventListener("resize",()=>{Hi=xs.map(n=>n.clientWidth),go=Hi.reduce((n,i)=>n+i,0)+(Hi.length-1)*ro})},DE=()=>{Io&&(cancelAnimationFrame(Io),Io=null),be.killTweensOf(xl),window.removeEventListener("wheel",du),window.removeEventListener("touchstart",No),window.removeEventListener("touchmove",Oo),window.removeEventListener("touchend",Rr),window.removeEventListener("mousedown",No),window.removeEventListener("mousemove",Oo),window.removeEventListener("mouseleave",Rr),window.removeEventListener("mouseup",Rr),window.removeEventListener("selectstart",()=>!1),Fo&&(Fo.innerHTML=""),Qa=[],xl={x:0},$u=0,mo=0,_o=0,Ka=!1,Za=0,Ja=0,Us&&(Us.style.cursor="default"),Us=null,xs=[],Hi=[],go=0,Fo=null};class UE{constructor(e){this.images=e,this.elementData=[]}_init(){this.#e()}#e(){this.images.forEach(e=>{const t=e.getBoundingClientRect(),n=e.src,i=t.width,s=t.height,o=t.top,a=t.left,l=e.naturalWidth,c=e.naturalHeight,u={src:n,width:i,height:s,top:o,left:a,naturalWidth:l,naturalHeight:c};this.elementData.push(u)})}elementUpdata(){this.images.forEach((e,t)=>{const n=e.getBoundingClientRect();this.elementData[t].src=e.src,this.elementData[t].width=n.width,this.elementData[t].height=n.height,this.elementData[t].top=n.top,this.elementData[t].left=n.left,this.elementData[t].naturalWidth=e.naturalWidth,this.elementData[t].naturalHeight=e.naturalHeight})}}be.registerPlugin(Je,Ws);let ia,ci=null,ei=null,el=null,pu=!1;const _m=()=>{!ci||!ei||(ci.onResize(),ei.onResize())};function IE(){const r=document.querySelectorAll("[data-image-item] img");let e=new UE(r);e._init(),ci=new Pt,ei=new CE(ci,e.elementData),ei._setImage().then(()=>{ci._init(),ei._init(ia);const t=()=>{el=requestAnimationFrame(t),e.elementUpdata(),pu&&ci.onLoop(),ei.onScrollUpdata($u),r.forEach((n,i)=>{ei.onMeshUpdata(e.elementData[i],i)})};t(),window.addEventListener("resize",_m)})}const NE=()=>{const r=document.querySelector(".p-single__modal-close"),e=()=>{pu=!0,be.to(".p-single__modal",{opacity:1,pointerEvents:"auto",duration:.4}),be.fromTo("#webgl",{opacity:0,filter:"blur(20px)"},{opacity:1,filter:"blur(0px)",delay:.4}),be.fromTo(".p-single__modal-close-cover",{scale:0},{scale:1,duration:1,ease:"power4.out",delay:1.1}),be.fromTo(".p-single__modal-close-cover span",{clipPath:"inset(0% 0% 0% 100%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1,delay:1.5,ease:"power4.out",stagger:{from:"start",each:.01}}),be.fromTo(".attention-drag",{opacity:0},{opacity:1,duration:.4}),window.lenis.stop()},t=()=>{be.to(".p-single__modal",{opacity:0,pointerEvents:"none",duration:.4,onComplete:()=>{pu=!1}}),be.to(".attention-drag",{opacity:0,duration:.4}),window.lenis.start()};ia.addEventListener("click",e),r.addEventListener("click",t)},OE=async()=>{ia=document.querySelector(".p-single__related"),NE()},FE=async()=>{await LE(ia),IE()},BE=()=>{window.removeEventListener("resize",_m),el&&(cancelAnimationFrame(el),el=null),ei&&typeof ei.dispose=="function"&&ei.dispose(),ci&&typeof ci.dispose=="function"&&(ci.dispose(),console.log("---  leave 【_stage】 ---")),ci=null,ei=null,ia=null,DE()};be.registerPlugin(Je,Ws);let gm;const zE=()=>{if(pl<ml)return;const r=document.querySelectorAll(".p-home-lists__item"),e=document.querySelector(".p-home-sticky__box img");r.forEach((t,n)=>{t.addEventListener("mouseenter",i=>{const s=i.target.querySelector("img").src;e.src=s})})},kE=()=>{let r=3,e=window.opening?.55:2.5,t=.04;be.to(".p-home-head__big-text-main",{y:"0%",duration:r,ease:"power4.inOut",delay:e,stagger:{from:"start",each:t}}),be.to(".p-home-head__big-text-main .-inner ",{y:"0%",duration:r,ease:"power4.inOut",delay:e,stagger:{from:"start",each:t}})},HE=()=>{document.querySelectorAll(".p-home-main__link").forEach((e,t)=>{be.to(e,{width:"100vw",scrollTrigger:{trigger:e,scroller:gm,start:t==0?"10% 90%":"top-=100px bottom",end:`+=${window.innerHeight}px`,scrub:!0}})})},GE=()=>{let r=window.opening?.55:2.5;be.fromTo(".p-home-main__contents",{y:110},{y:0,delay:r,duration:3,ease:"power4.inOut"})},VE=()=>{let r=window.opening?.55:2.5;be.to(".back-default",{opacity:1,pointerEvents:"auto",duration:1,delay:r})},WE=()=>{let r=window.opening?.55:2.5;be.to(".back-default",{opacity:0,pointerEvents:"none",duration:1,delay:r})},XE=()=>{let r=window.location.href,t=new URL(r).searchParams.get("q");setTimeout(()=>{gm=document.querySelector('[data-barba="container"]'),t=="image"?HE():zE()},200)},qE=()=>{let r=window.location.href;new URL(r).searchParams.get("q")=="image"?(GE(),VE()):WE(),kE()};var YE="1.3.1";function vm(r,e,t){return Math.max(r,Math.min(e,t))}function $E(r,e,t){return(1-t)*r+t*e}function jE(r,e,t,n){return $E(r,e,1-Math.exp(-t*n))}function KE(r,e){return(r%e+e)%e}var ZE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=vm(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=jE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function JE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var QE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=JE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xm=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},ed=100/6,zi={passive:!1},eT=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zi),this.element.addEventListener("touchstart",this.onTouchStart,zi),this.element.addEventListener("touchmove",this.onTouchMove,zi),this.element.addEventListener("touchend",this.onTouchEnd,zi)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new xm;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,zi),this.element.removeEventListener("touchstart",this.onTouchStart,zi),this.element.removeEventListener("touchmove",this.onTouchMove,zi),this.element.removeEventListener("touchend",this.onTouchEnd,zi)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?ed:n===2?this.window.width:1,s=n===1?ed:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},tT=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new ZE;emitter=new xm;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=L=>Math.min(1,1.001-Math.pow(2,-10*L)),lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:v=!1,anchors:M=!1,autoToggle:E=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:T=!1}={}){window.lenisVersion=YE,(!r||r===document.documentElement)&&(r=window),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:v,anchors:M,autoToggle:E,allowNestedScroll:b,__experimental__naiveDimensions:T},this.dimensions=new QE(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new eT(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(h)>5;_&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let h;if(typeof r=="string"?h=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(h=r),h){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=h.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const h=r-this.animatedScroll;h>this.limit/2?r=r-this.limit:h<-this.limit/2&&(r=r+this.limit)}}else r=vm(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(h,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,f,h;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const b=E.overflowX,T=E.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(T),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,h=r.clientHeight,a=c>f,l=u>h,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,h=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const E=e!==0,b=t!==0;E&&s&&a&&(g="x"),b&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,S,v;if(g==="x")_=r.scrollLeft,m=c-f,p=e,S=s,v=a;else if(g==="y")_=r.scrollTop,m=u-h,p=t,S=o,v=l;else return!1;return(p>0?_<m:_>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?KE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const td=(r,e)=>{const t=new tT({autoRaf:!0,wrapper:r,content:e,duration:.8});window.lenis=t};ad.init({transitions:[{sync:!0,once(r){window.opening=!1;const e=r.next.container,t=e.querySelector(".main");be.set(e,{y:"100svh"}),document.querySelector("html"),td(e,t),Jg(r.next.namespace,r.next.container)},async leave(r){be.to(r.current.container,{scale:.9,duration:1,ease:"power4.out"}),be.to(r.current.container,{clipPath:"inset(0% 0% 101% 0%)",duration:1.2,delay:.4,ease:"power4.out"}),be.fromTo(".attention-loading",{opacity:0},{opacity:1,duration:.4}),e0(),await $m(2e3)},beforeEnter({next:r}){Ym(r)},enter(r){const e=r.next.container,t=e.querySelector(".main");td(e,t),window.lenis.stop(),be.set(r.next.container,{clipPath:"inset(100% 0% 0% 0%)"}),be.set(r.next.container,{scale:.9}),be.set(r.next.container,{position:"absolute",zIndex:"2",top:"0",left:"0"}),be.to(r.next.container,{clipPath:"inset(0% 0% 0% 0%)",ease:"power4.out",duration:1.4,delay:1.3}),be.to(r.next.container,{scale:1,ease:"power4.out",duration:.8,delay:2.1,onComplete:()=>{be.to(".attention-loading",{opacity:0,duration:.4}),r.next.container.removeAttribute("style"),window.lenis.start()}}),Qg(r.next.namespace)}}],views:[{namespace:"home",afterLeave(r){},beforeEnter(r){qE()},afterEnter(){XE()}},{namespace:"single",beforeLeave(r){BE()},beforeEnter(r){OE();const e=r.current.url.query.q,t=document.querySelector(".c-custom-system__back");switch(e){case"image":t.href="/?q=image";break;default:t.href="/";break}},afterEnter(){FE()}}]});ad.hooks.after(r=>{r.next.namespace});
