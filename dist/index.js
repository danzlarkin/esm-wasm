import{one2three as n}from"./wasm/index.js";export default{async fetch(r,a,o){const e={"Content-Type":"text/html;charset=UTF-8"},t=await n();return new Response(t,{headers:e})}};
