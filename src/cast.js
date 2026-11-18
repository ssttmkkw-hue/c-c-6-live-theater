// Casting: turn an actor name into a look (style/color/accessory) + voice profile.
// Parsers may supply their own hints; this fills in the blanks deterministically.
const PALETTE = ['#c0392b', '#2e86c1', '#27ae60', '#8e44ad', '#d68910', '#16a085', '#cb4b8a', '#5d6d7e'];

const RULES = [
  { re: /ghost|spirit|specter|spectre|phantom|鬼|幽灵|亡魂|魂/i, look: { style: 'ghost', color: '#bfe3ff', accessory: 'crown' }, voice: { pitch: 0.45, rate: 0.72 } },
  { re: /hamlet|哈姆雷特|prince|王子/i, look: { style: 'human', color: '#3d4a78', accessory: 'hair', cape: true }, voice: { pitch: 0.95, rate: 1.0 } },
  { re: /king|emperor|国王|皇帝|君主/i, look: { style: 'human', color: '#7b1fa2', accessory: 'crown', cape: true }, voice: { pitch: 0.55, rate: 0.9 } },
  { re: /queen|empress|王后|女王|皇后/i, look: { style: 'human', color: '#b03a6e', accessory: 'crown-hair', cape: true }, voice: { pitch: 1.4, rate: 0.95 } },
  { re: /jester|clown|fool|小丑|弄臣/i, look: { style: 'human', color: '#e67e22', accessory: 'jester' }, voice: { pitch: 1.6, rate: 1.25 } },
  { re: /detective|inspector|侦探|警察|警探/i, look: { style: 'human', color: '#8a7448', accessory: 'hat', cape: true }, voice: { pitch: 0.8, rate: 0.95 } },
  { re: /thief|robber|小偷|盗贼|贼/i, look: { style: 'human', color: '#222a35', accessory: 'hood' }, voice: { pitch: 1.1, rate: 1.15 } },
  { re: /guard|soldier|守卫|士兵|卫兵/i, look: { style: 'human', color: '#5f6a6a', accessory: 'helmet' }, voice: { pitch: 0.7, rate: 1.0 } },
  { re: /robot|kay|老k|机器人/i, look: { style: 'human', color: '#7f8c8d', accessory: 'antenna' }, voice: { pitch: 0.6, rate: 0.95 } },
];
const ACC = ['hair', 'hat', 'hair-long', 'none'];

export function castFor(name, index = 0) {
  const r = RULES.find(x => x.re.test(name));
  if (r) return { look: { ...r.look }, voice: { ...r.voice } };
  return {
    look: { style: 'human', color: PALETTE[index % PALETTE.length], accessory: ACC[index % ACC.length] },
    voice: { pitch: [1.0, 1.3, 0.8, 1.15, 0.9][index % 5], rate: [1.0, 1.05, 0.95, 1.1, 0.9][index % 5] },
  };
}

export const isCJK = s => /[㐀-鿿]/.test(s);
export const langOf = s => {
  const cjk = (s.match(/[㐀-鿿]/g) || []).length;
  const lat = (s.match(/[A-Za-z]/g) || []).length;
  return cjk >= Math.max(1, lat / 3) && cjk > 0 ? 'zh-CN' : 'en-US';
};
