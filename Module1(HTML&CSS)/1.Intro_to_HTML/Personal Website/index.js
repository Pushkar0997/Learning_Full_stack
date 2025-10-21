/*
  Personalization (code-only)
  - Edit the constants below to change the website.
  - movieGenre changes typography; favouriteFood changes color theme/background.
  - No UI is shown on the page.

  Options:
  movieGenre: 'Action' | 'Comedy' | 'Drama' | 'Sci-Fi' | 'Horror' | 'Romance'
  favouriteFood: 'Pizza' | 'Sushi' | 'Burgers' | 'Pasta' | 'Salad'
  themeOverride: set to a CSS color (e.g. '#ff6b6b') to override food-based color, or null to use mapping
  edgeStyle: 'rounded' | 'sharp'
*/

const movieGenre = 'Sci-Fi';
const favouriteFood = 'Burgers';
const themeOverride = null; // e.g. '#ff6b6b' or 'rebeccapurple'; null = auto from food
const edgeStyle = 'rounded';

function applySettingsToDOM(s){
  document.documentElement.style.setProperty('--theme-color', s.themeColor);
  document.documentElement.setAttribute('data-edge', s.edgeStyle);

  // mood classes (subtle only)
  document.body.classList.remove('mood-dark','mood-bright');
  const g = (s.movieGenre || '').toLowerCase();
  if(g === 'horror') document.body.classList.add('mood-dark');
  if(g === 'comedy') document.body.classList.add('mood-bright');

  // typography based on genre
  const t = typographyForGenre(s.movieGenre);
  document.documentElement.style.setProperty('--font-family', t.family);
  document.documentElement.style.setProperty('--letter-spacing', t.letterSpacing);
  document.documentElement.style.setProperty('--heading-transform', t.headingTransform);
  document.documentElement.style.setProperty('--heading-weight', String(t.headingWeight));
}

// Build a gentle, preference-driven background. Uses gradients; keeps file-size tiny.
function backgroundForSettings(s){
  const g = (s.movieGenre || '').toLowerCase();
  const color = s.themeColor;

  // base color stops
  const colMain = color;
  const colAccent = shadeHex(colMain, -16) || '#166a63';

  // genre-based backgrounds
  if(g === 'horror'){
    return `linear-gradient(180deg, #0b0f14 0%, #111827 60%)`;
  }
  if(g === 'comedy'){
    return `linear-gradient(135deg, ${lighten(colMain,32)} 0%, ${colMain} 60%)`;
  }
  if(g === 'sci-fi' || g === 'sci fi'){
    return `radial-gradient(circle at 10% 10%, ${colMain} 0%, ${colAccent} 30%, #071422 100%)`;
  }
  if(g === 'romance'){
    return `linear-gradient(180deg, ${lighten(colMain,18)} 0%, ${colMain} 60%)`;
  }
  if(g === 'action'){
    return `linear-gradient(120deg, ${colAccent} 0%, ${colMain} 60%, #0b1220 100%)`;
  }
  // default / drama / fallback
  return `linear-gradient(180deg, ${lighten(colMain,8)} 0%, ${colMain} 60%)`;
}

// small color helpers (operate on #rrggbb strings)
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function parseHex(h){
  if(!h) return null;
  if(h[0]==='#') h=h.slice(1);
  if(h.length===3) h=h.split('').map(ch=>ch+ch).join('');
  const r=parseInt(h.slice(0,2),16); const g=parseInt(h.slice(2,4),16); const b=parseInt(h.slice(4,6),16);
  return [r,g,b];
}
function rgbToHex(r,g,b){return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');}
function shadeHex(hex, percent){
  const rgb = parseHex(hex); if(!rgb) return null;
  const r = clamp(Math.round(rgb[0] * (100+percent)/100),0,255);
  const g = clamp(Math.round(rgb[1] * (100+percent)/100),0,255);
  const b = clamp(Math.round(rgb[2] * (100+percent)/100),0,255);
  return rgbToHex(r,g,b);
}
function lighten(hex,percent){return shadeHex(hex, percent);} 

// also set --bg and readable --text
function finalizeThemeVars(s){
  const bg = backgroundForSettings(s);
  document.documentElement.style.setProperty('--bg', bg);

  // derive readable foreground from themeColor
  const hex = toHex(s.themeColor) || s.themeColor;
  const rgb = parseHex(hex);
  let textColor = '#111827';
  if(rgb){
    const brightness = (rgb[0]*299 + rgb[1]*587 + rgb[2]*114)/1000;
    textColor = brightness < 140 ? '#e6eef8' : '#0b1220';
  }
  document.documentElement.style.setProperty('--text', textColor);
}

// map foods to accent colors
function colorForFood(food){
  const f = (food||'').toLowerCase();
  switch(f){
    case 'pizza': return '#e63946';
    case 'sushi': return '#2a9d8f';
    case 'burgers': return '#f59e0b';
    case 'pasta': return '#fb8c00';
    case 'salad': return '#22c55e';
    default: return '#2a9d8f';
  }
}

// map movie genre to typography choices
function typographyForGenre(genre){
  const g = (genre||'').toLowerCase();
  switch(g){
    case 'action':
      return {family:"system-ui, -apple-system, 'Segoe UI', Roboto, Arial", letterSpacing:'0.02em', headingTransform:'uppercase', headingWeight:800};
    case 'comedy':
      return {family:"'Segoe UI', Roboto, Arial, system-ui", letterSpacing:'0.01em', headingTransform:'none', headingWeight:700};
    case 'drama':
      return {family:"Georgia, 'Times New Roman', serif", letterSpacing:'0', headingTransform:'none', headingWeight:700};
    case 'sci-fi':
    case 'sci fi':
      return {family:"'Segoe UI', Roboto, Arial, system-ui", letterSpacing:'0.08em', headingTransform:'uppercase', headingWeight:700};
    case 'horror':
      return {family:"system-ui, -apple-system, 'Segoe UI', Roboto, Arial", letterSpacing:'0.02em', headingTransform:'none', headingWeight:800};
    case 'romance':
      return {family:"'Georgia', 'Times New Roman', serif", letterSpacing:'0.01em', headingTransform:'none', headingWeight:600};
    default:
      return {family:"system-ui, -apple-system, 'Segoe UI', Roboto, Arial", letterSpacing:'0', headingTransform:'none', headingWeight:700};
  }
}

// no summary or UI injected — preferences are code-only

// helper: try to convert CSS color to hex (best-effort)
function toHex(color){
  // if already hex
  if(!color) return null;
  if(color[0] === '#') return color;
  // canvas trick
  try{
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = color;
    const hex = ctx.fillStyle; // will be normalized to rgb(...) or #rrggbb
    if(hex.indexOf('#')===0) return hex;
    // rgb(...) -> hex
    const m = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if(m){
      const r = parseInt(m[1]).toString(16).padStart(2,'0');
      const g = parseInt(m[2]).toString(16).padStart(2,'0');
      const b = parseInt(m[3]).toString(16).padStart(2,'0');
      return `#${r}${g}${b}`;
    }
    return null;
  }catch(e){ return null; }
}

// Initialize
document.addEventListener('DOMContentLoaded', ()=>{
  const accent = themeOverride || colorForFood(favouriteFood);
  const s = { movieGenre, favouriteFood, themeColor: accent, edgeStyle };
  applySettingsToDOM(s);
  finalizeThemeVars(s);
});
