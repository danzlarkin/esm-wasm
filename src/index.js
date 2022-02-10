import { one2three } from './wasm/index.js';

export default {
  async fetch(request, env, ctx) {
    const headers = { 'Content-Type': 'text/html;charset=UTF-8' };
    const data = await one2three();
    return new Response(data, { headers });
  }
}