module.exports=function(e,t){"use strict";var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};var i=true;try{e[t].call(r.exports,r,r.exports,__webpack_require__);i=false}finally{if(i)delete n[t]}r.l=true;return r.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(526)}return startup()}({1:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const i=n(129);const o=n(622);const s=n(669);const u=n(672);const c=s.promisify(i.exec);function cp(e,t,n={}){return r(this,void 0,void 0,function*(){const{force:r,recursive:i}=readCopyOptions(n);const s=(yield u.exists(t))?yield u.stat(t):null;if(s&&s.isFile()&&!r){return}const c=s&&s.isDirectory()?o.join(t,o.basename(e)):t;if(!(yield u.exists(e))){throw new Error(`no such file or directory: ${e}`)}const a=yield u.stat(e);if(a.isDirectory()){if(!i){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,c,0,r)}}else{if(o.relative(e,c)===""){throw new Error(`'${c}' and '${e}' are the same file`)}yield copyFile(e,c,r)}})}t.cp=cp;function mv(e,t,n={}){return r(this,void 0,void 0,function*(){if(yield u.exists(t)){let r=true;if(yield u.isDirectory(t)){t=o.join(t,o.basename(e));r=yield u.exists(t)}if(r){if(n.force==null||n.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(o.dirname(t));yield u.rename(e,t)})}t.mv=mv;function rmRF(e){return r(this,void 0,void 0,function*(){if(u.IS_WINDOWS){try{if(yield u.isDirectory(e,true)){yield c(`rd /s /q "${e}"`)}else{yield c(`del /f /a "${e}"`)}}catch(e){if(e.code!=="ENOENT")throw e}try{yield u.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield u.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield c(`rm -rf "${e}"`)}else{yield u.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return r(this,void 0,void 0,function*(){yield u.mkdirP(e)})}t.mkdirP=mkdirP;function which(e,t){return r(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(u.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}}try{const t=[];if(u.IS_WINDOWS&&process.env.PATHEXT){for(const e of process.env.PATHEXT.split(o.delimiter)){if(e){t.push(e)}}}if(u.isRooted(e)){const n=yield u.tryGetExecutablePath(e,t);if(n){return n}return""}if(e.includes("/")||u.IS_WINDOWS&&e.includes("\\")){return""}const n=[];if(process.env.PATH){for(const e of process.env.PATH.split(o.delimiter)){if(e){n.push(e)}}}for(const r of n){const n=yield u.tryGetExecutablePath(r+o.sep+e,t);if(n){return n}}return""}catch(e){throw new Error(`which failed with message ${e.message}`)}})}t.which=which;function readCopyOptions(e){const t=e.force==null?true:e.force;const n=Boolean(e.recursive);return{force:t,recursive:n}}function cpDirRecursive(e,t,n,i){return r(this,void 0,void 0,function*(){if(n>=255)return;n++;yield mkdirP(t);const r=yield u.readdir(e);for(const o of r){const r=`${e}/${o}`;const s=`${t}/${o}`;const c=yield u.lstat(r);if(c.isDirectory()){yield cpDirRecursive(r,s,n,i)}else{yield copyFile(r,s,i)}}yield u.chmod(t,(yield u.stat(e)).mode)})}function copyFile(e,t,n){return r(this,void 0,void 0,function*(){if((yield u.lstat(e)).isSymbolicLink()){try{yield u.lstat(t);yield u.unlink(t)}catch(e){if(e.code==="EPERM"){yield u.chmod(t,"0666");yield u.unlink(t)}}const n=yield u.readlink(e);yield u.symlink(n,t,u.IS_WINDOWS?"junction":null)}else if(!(yield u.exists(t))||n){yield u.copyFile(e,t)}})}},9:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=i(n(87));const s=i(n(614));const u=i(n(129));const c=i(n(622));const a=i(n(1));const f=i(n(672));const l=process.platform==="win32";class ToolRunner extends s.EventEmitter{constructor(e,t,n){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=n||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const n=this._getSpawnFileName();const r=this._getSpawnArgs(e);let i=t?"":"[command]";if(l){if(this._isCmdFile()){i+=n;for(const e of r){i+=` ${e}`}}else if(e.windowsVerbatimArguments){i+=`"${n}"`;for(const e of r){i+=` ${e}`}}else{i+=this._windowsQuoteCmdArg(n);for(const e of r){i+=` ${this._windowsQuoteCmdArg(e)}`}}}else{i+=n;for(const e of r){i+=` ${e}`}}return i}_processLineBuffer(e,t,n){try{let r=t+e.toString();let i=r.indexOf(o.EOL);while(i>-1){const e=r.substring(0,i);n(e);r=r.substring(i+o.EOL.length);i=r.indexOf(o.EOL)}t=r}catch(e){this._debug(`error processing line. Failed with error ${e}`)}}_getSpawnFileName(){if(l){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(l){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const n of this.args){t+=" ";t+=e.windowsVerbatimArguments?n:this._windowsQuoteCmdArg(n)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let n=false;for(const r of e){if(t.some(e=>e===r)){n=true;break}}if(!n){return e}let r='"';let i=true;for(let t=e.length;t>0;t--){r+=e[t-1];if(i&&e[t-1]==="\\"){r+="\\"}else if(e[t-1]==='"'){i=true;r+='"'}else{i=false}}r+='"';return r.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let n=true;for(let r=e.length;r>0;r--){t+=e[r-1];if(n&&e[r-1]==="\\"){t+="\\"}else if(e[r-1]==='"'){n=true;t+="\\"}else{n=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const n={};n.cwd=e.cwd;n.env=e.env;n["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){n.argv0=`"${t}"`}return n}exec(){return r(this,void 0,void 0,function*(){if(!f.isRooted(this.toolPath)&&(this.toolPath.includes("/")||l&&this.toolPath.includes("\\"))){this.toolPath=c.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield a.which(this.toolPath,true);return new Promise((e,t)=>{this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const n=this._cloneExecOptions(this.options);if(!n.silent&&n.outStream){n.outStream.write(this._getCommandString(n)+o.EOL)}const r=new ExecState(n,this.toolPath);r.on("debug",e=>{this._debug(e)});const i=this._getSpawnFileName();const s=u.spawn(i,this._getSpawnArgs(n),this._getSpawnOptions(this.options,i));const c="";if(s.stdout){s.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!n.silent&&n.outStream){n.outStream.write(e)}this._processLineBuffer(e,c,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}const a="";if(s.stderr){s.stderr.on("data",e=>{r.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!n.silent&&n.errStream&&n.outStream){const t=n.failOnStdErr?n.errStream:n.outStream;t.write(e)}this._processLineBuffer(e,a,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}s.on("error",e=>{r.processError=e.message;r.processExited=true;r.processClosed=true;r.CheckComplete()});s.on("exit",e=>{r.processExitCode=e;r.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);r.CheckComplete()});s.on("close",e=>{r.processExitCode=e;r.processExited=true;r.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);r.CheckComplete()});r.on("done",(n,r)=>{if(c.length>0){this.emit("stdline",c)}if(a.length>0){this.emit("errline",a)}s.removeAllListeners();if(n){t(n)}else{e(r)}});if(this.options.input){if(!s.stdin){throw new Error("child process missing stdin")}s.stdin.end(this.options.input)}})})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let n=false;let r=false;let i="";function append(e){if(r&&e!=='"'){i+="\\"}i+=e;r=false}for(let o=0;o<e.length;o++){const s=e.charAt(o);if(s==='"'){if(!r){n=!n}else{append(s)}continue}if(s==="\\"&&r){append(s);continue}if(s==="\\"&&n){r=true;continue}if(s===" "&&!n){if(i.length>0){t.push(i);i=""}continue}append(s)}if(i.length>0){t.push(i.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends s.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(78));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function parse(e){if(!(0,r.default)(e)){throw TypeError("Invalid UUID")}let t;const n=new Uint8Array(16);n[0]=(t=parseInt(e.slice(0,8),16))>>>24;n[1]=t>>>16&255;n[2]=t>>>8&255;n[3]=t&255;n[4]=(t=parseInt(e.slice(9,13),16))>>>8;n[5]=t&255;n[6]=(t=parseInt(e.slice(14,18),16))>>>8;n[7]=t&255;n[8]=(t=parseInt(e.slice(19,23),16))>>>8;n[9]=t&255;n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255;n[11]=t/4294967296&255;n[12]=t>>>24&255;n[13]=t>>>16&255;n[14]=t>>>8&255;n[15]=t&255;return n}var i=parse;t.default=i},48:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.matlab=void 0;const u=o(n(470));const c=o(n(986));const a=o(n(89));t.matlab=a;function run(){return s(this,void 0,void 0,function*(){const e=process.platform;const t=process.cwd();const n=u.getInput("command");const r=yield u.group("Generate script",()=>s(this,void 0,void 0,function*(){const e=yield a.generateScript(t,n);u.info("Successfully generated script");return e}));yield u.group("Run command",()=>s(this,void 0,void 0,function*(){yield a.runCommand(r,e,c.exec)}))})}if(false){}},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"v1",{enumerable:true,get:function(){return r.default}});Object.defineProperty(t,"v3",{enumerable:true,get:function(){return i.default}});Object.defineProperty(t,"v4",{enumerable:true,get:function(){return o.default}});Object.defineProperty(t,"v5",{enumerable:true,get:function(){return s.default}});Object.defineProperty(t,"NIL",{enumerable:true,get:function(){return u.default}});Object.defineProperty(t,"version",{enumerable:true,get:function(){return c.default}});Object.defineProperty(t,"validate",{enumerable:true,get:function(){return a.default}});Object.defineProperty(t,"stringify",{enumerable:true,get:function(){return f.default}});Object.defineProperty(t,"parse",{enumerable:true,get:function(){return l.default}});var r=_interopRequireDefault(n(893));var i=_interopRequireDefault(n(209));var o=_interopRequireDefault(n(733));var s=_interopRequireDefault(n(384));var u=_interopRequireDefault(n(327));var c=_interopRequireDefault(n(695));var a=_interopRequireDefault(n(78));var f=_interopRequireDefault(n(411));var l=_interopRequireDefault(n(22));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(456));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function validate(e){return typeof e==="string"&&r.default.test(e)}var i=validate;t.default=i},82:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},87:function(e){e.exports=require("os")},89:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.getRunMATLABCommandScriptPath=t.runCommand=t.generateScript=void 0;const u=n(747);const c=o(n(87));const a=o(n(622));const f=n(62);const l=o(n(152));function generateScript(e,t){return s(this,void 0,void 0,function*(){const n=l.safeName(`command_${f.v4()}`);const r=yield u.promises.mkdtemp(a.join(c.tmpdir(),"run_matlab_command-"));const i=a.join(r,n+".m");yield u.promises.writeFile(i,l.cdAndCall(e,t),{encoding:"utf8"});return{dir:r,command:n}})}t.generateScript=generateScript;function runCommand(e,t,n){return s(this,void 0,void 0,function*(){const r=getRunMATLABCommandScriptPath(t);yield u.promises.chmod(r,511);const i=l.cdAndCall(e.dir,e.command);const o=yield n(r,[i]);if(o!==0){return Promise.reject(Error(`Exited with non-zero code ${o}`))}})}t.runCommand=runCommand;function getRunMATLABCommandScriptPath(e){const t=e==="win32"?"bat":"sh";const n=a.join(__dirname,"bin",`run_matlab_command.${t}`);return n}t.getRunMATLABCommandScriptPath=getRunMATLABCommandScriptPath},102:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(n(747));const o=r(n(87));const s=n(82);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!i.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}i.appendFileSync(n,`${s.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},129:function(e){e.exports=require("child_process")},152:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.safeName=t.pathToCharVec=t.cdAndCall=void 0;function cdAndCall(e,t){return`cd('${pathToCharVec(e)}'); ${t}`}t.cdAndCall=cdAndCall;function pathToCharVec(e){return e.replace(/'/g,"''")}t.pathToCharVec=pathToCharVec;function safeName(e){return e.replace(/-/g,"_")}t.safeName=safeName},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(212));var i=_interopRequireDefault(n(803));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const o=(0,r.default)("v3",48,i.default);var s=o;t.default=s},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=_default;t.URL=t.DNS=void 0;var r=_interopRequireDefault(n(411));var i=_interopRequireDefault(n(22));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function stringToBytes(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n){t.push(e.charCodeAt(n))}return t}const o="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=o;const s="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=s;function _default(e,t,n){function generateUUID(e,o,s,u){if(typeof e==="string"){e=stringToBytes(e)}if(typeof o==="string"){o=(0,i.default)(o)}if(o.length!==16){throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)")}let c=new Uint8Array(16+e.length);c.set(o);c.set(e,o.length);c=n(c);c[6]=c[6]&15|t;c[8]=c[8]&63|128;if(s){u=u||0;for(let e=0;e<16;++e){s[u+e]=c[e]}return s}return(0,r.default)(c)}try{generateUUID.name=e}catch(e){}generateUUID.DNS=o;generateUUID.URL=s;return generateUUID}},327:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n="00000000-0000-0000-0000-000000000000";t.default=n},357:function(e){e.exports=require("assert")},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(212));var i=_interopRequireDefault(n(498));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const o=(0,r.default)("v5",80,i.default);var s=o;t.default=s},411:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(78));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const i=[];for(let e=0;e<256;++e){i.push((e+256).toString(16).substr(1))}function stringify(e,t=0){const n=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!(0,r.default)(n)){throw TypeError("Stringified UUID is invalid")}return n}var o=stringify;t.default=o},417:function(e){e.exports=require("crypto")},431:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(n(87));const o=n(82);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const s="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=s+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${s}${escapeData(this.message)}`;return e}}function escapeData(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},456:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;t.default=n},470:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(431);const s=n(102);const u=n(82);const c=i(n(87));const a=i(n(622));var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=u.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${c.EOL}${n}${c.EOL}${t}`;s.issueCommand("ENV",r)}else{o.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){s.issueCommand("PATH",e)}else{o.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${a.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+c.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(417));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function sha1(e){if(Array.isArray(e)){e=Buffer.from(e)}else if(typeof e==="string"){e=Buffer.from(e,"utf8")}return r.default.createHash("sha1").update(e).digest()}var i=sha1;t.default=i},526:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};var s=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});const u=o(n(470));const c=o(n(986));const a=n(48);const f=o(n(724));function run(){return s(this,void 0,void 0,function*(){const e=process.platform;const t=process.cwd();const n={JUnitTestResults:u.getInput("test-results-junit"),CoberturaCodeCoverage:u.getInput("code-coverage-cobertura"),SourceFolder:u.getInput("source-folder")};const r=f.generateCommand(n);const i=yield u.group("Generate script",()=>s(this,void 0,void 0,function*(){const e=yield a.matlab.generateScript(t,r);u.info("Successfully generated script");return e}));yield u.group("Run command",()=>s(this,void 0,void 0,function*(){yield a.matlab.runCommand(i,e,c.exec)}))})}run().catch(e=>{u.setFailed(e)})},614:function(e){e.exports=require("events")},622:function(e){e.exports=require("path")},669:function(e){e.exports=require("util")},672:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var i;Object.defineProperty(t,"__esModule",{value:true});const o=n(357);const s=n(747);const u=n(622);i=s.promises,t.chmod=i.chmod,t.copyFile=i.copyFile,t.lstat=i.lstat,t.mkdir=i.mkdir,t.readdir=i.readdir,t.readlink=i.readlink,t.rename=i.rename,t.rmdir=i.rmdir,t.stat=i.stat,t.symlink=i.symlink,t.unlink=i.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return r(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,n=false){return r(this,void 0,void 0,function*(){const r=n?yield t.stat(e):yield t.lstat(e);return r.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function mkdirP(e,n=1e3,i=1){return r(this,void 0,void 0,function*(){o.ok(e,"a path argument must be provided");e=u.resolve(e);if(i>=n)return t.mkdir(e);try{yield t.mkdir(e);return}catch(r){switch(r.code){case"ENOENT":{yield mkdirP(u.dirname(e),n,i+1);yield t.mkdir(e);return}default:{let n;try{n=yield t.stat(e)}catch(e){throw r}if(!n.isDirectory())throw r}}}})}t.mkdirP=mkdirP;function tryGetExecutablePath(e,n){return r(this,void 0,void 0,function*(){let r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){const t=u.extname(e).toUpperCase();if(n.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(r)){return e}}}const i=e;for(const o of n){e=i+o;r=undefined;try{r=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(r&&r.isFile()){if(t.IS_WINDOWS){try{const n=u.dirname(e);const r=u.basename(e).toUpperCase();for(const i of yield t.readdir(n)){if(r===i.toUpperCase()){e=u.join(n,i);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(r)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(78));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function version(e){if(!(0,r.default)(e)){throw TypeError("Invalid UUID")}return parseInt(e.substr(14,1),16)}var i=version;t.default=i},724:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n))r(t,e,n);i(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.generateCommand=void 0;const s=o(n(622));function generateCommand(e){const t=`\n        addpath('${s.join(__dirname,"scriptgen")}');\n        testScript = genscript('Test',\n            'JUnitTestResults','${e.JUnitTestResults||""}',\n            'CoberturaCodeCoverage','${e.CoberturaCodeCoverage||""}',\n            'SourceFolder','${e.SourceFolder||""}');\n        disp('Running MATLAB script with contents:');\n        disp(strtrim(testScript.writeToText()));\n        fprintf('__________\\n\\n');\n        run(testScript);\n    `.replace(/$\n^\s*/gm," ").trim();return t}t.generateCommand=generateCommand},733:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(844));var i=_interopRequireDefault(n(411));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function v4(e,t,n){e=e||{};const o=e.random||(e.rng||r.default)();o[6]=o[6]&15|64;o[8]=o[8]&63|128;if(t){n=n||0;for(let e=0;e<16;++e){t[n+e]=o[e]}return t}return(0,i.default)(o)}var o=v4;t.default=o},747:function(e){e.exports=require("fs")},803:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(417));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function md5(e){if(Array.isArray(e)){e=Buffer.from(e)}else if(typeof e==="string"){e=Buffer.from(e,"utf8")}return r.default.createHash("md5").update(e).digest()}var i=md5;t.default=i},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=rng;var r=_interopRequireDefault(n(417));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const i=new Uint8Array(256);let o=i.length;function rng(){if(o>i.length-16){r.default.randomFillSync(i);o=0}return i.slice(o,o+=16)}},893:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=_interopRequireDefault(n(844));var i=_interopRequireDefault(n(411));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}let o;let s;let u=0;let c=0;function v1(e,t,n){let a=t&&n||0;const f=t||new Array(16);e=e||{};let l=e.node||o;let d=e.clockseq!==undefined?e.clockseq:s;if(l==null||d==null){const t=e.random||(e.rng||r.default)();if(l==null){l=o=[t[0]|1,t[1],t[2],t[3],t[4],t[5]]}if(d==null){d=s=(t[6]<<8|t[7])&16383}}let p=e.msecs!==undefined?e.msecs:Date.now();let h=e.nsecs!==undefined?e.nsecs:c+1;const m=p-u+(h-c)/1e4;if(m<0&&e.clockseq===undefined){d=d+1&16383}if((m<0||p>u)&&e.nsecs===undefined){h=0}if(h>=1e4){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")}u=p;c=h;s=d;p+=122192928e5;const _=((p&268435455)*1e4+h)%4294967296;f[a++]=_>>>24&255;f[a++]=_>>>16&255;f[a++]=_>>>8&255;f[a++]=_&255;const v=p/4294967296*1e4&268435455;f[a++]=v>>>8&255;f[a++]=v&255;f[a++]=v>>>24&15|16;f[a++]=v>>>16&255;f[a++]=d>>>8|128;f[a++]=d&255;for(let e=0;e<6;++e){f[a+e]=l[e]}return t||(0,i.default)(f)}var a=v1;t.default=a},986:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=i(n(9));function exec(e,t,n){return r(this,void 0,void 0,function*(){const r=o.argStringToArray(e);if(r.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const i=r[0];t=r.slice(1).concat(t||[]);const s=new o.ToolRunner(i,t,n);return s.exec()})}t.exec=exec}});