import y from"./module.wasm";let o;const r=new Array(32).fill(void 0);r.push(void 0,null,!0,!1);let s=r.length;function b(e){s===r.length&&r.push(r.length+1);const n=s;return s=r[n],r[n]=e,n}function f(e){return r[e]}function m(e){e<36||(r[e]=s,s=e)}function l(e){const n=f(e);return m(e),n}let _=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});_.decode();let u=null;function d(){return(u===null||u.buffer!==o.memory.buffer)&&(u=new Uint8Array(o.memory.buffer)),u}function h(e,n){return _.decode(d().subarray(e,e+n))}export function one2three(){var e=o.one2three();return l(e)}async function p(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(c){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",c);else throw c}const a=await e.arrayBuffer();return await WebAssembly.instantiate(a,n)}else{const a=await WebAssembly.instantiate(e,n);return a instanceof WebAssembly.Instance?{instance:a,module:e}:a}}async function w(e){typeof e>"u"&&(e=new URL("esm_wasm_bg.wasm",import.meta.url));const n={};n.wbg={},n.wbg.__wbindgen_number_new=function(t){var i=t;return b(i)},n.wbg.__wbindgen_object_drop_ref=function(t){l(t)},n.wbg.__wbindgen_object_clone_ref=function(t){var i=f(t);return b(i)},n.wbg.__wbg_new_16f24b0728c5e67b=function(){var t=new Array;return b(t)},n.wbg.__wbg_push_a72df856079e6930=function(t,i){var g=f(t).push(f(i));return g},n.wbg.__wbindgen_throw=function(t,i){throw new Error(h(t,i))},(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:a,module:c}=await p(await e,n);return o=a.exports,w.__wbindgen_wasm_module=c,o}export default w;(async()=>await w(y))();
