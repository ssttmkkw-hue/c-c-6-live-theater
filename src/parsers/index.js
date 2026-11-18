// Parser registry. Add a parser: export an object {id, available(), parse(text, ctx)} and list it here.
import { parseLocal } from './local.js';
import { aiParser } from './ai.js';

export const localParser = {
  id: 'local',
  available: () => true,
  parse: (text, ctx = {}) => parseLocal(text, { delayMs: ctx.delayMs || 0 }),
};

export const parsers = { local: localParser, ai: aiParser };
export function pickParser(id) {
  const p = parsers[id];
  return p && p.available() ? p : localParser;
}
