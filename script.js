/* ===================== DADOS ===================== */
const foods = [
  {n:"Arroz agulhinha (kg)", c:"Grãos e cereais", old:5.20, cur:5.53},
  {n:"Feijão carioca (kg)", c:"Grãos e cereais", old:8.40, cur:8.73},
  {n:"Feijão preto (kg)", c:"Grãos e cereais", old:9.10, cur:9.40},
  {n:"Farinha de mandioca (kg)", c:"Grãos e cereais", old:6.50, cur:6.30},
  {n:"Macarrão espaguete (500g)", c:"Grãos e cereais", old:4.20, cur:4.35},
  {n:"Tomate (kg)", c:"Hortifruti", old:6.80, cur:8.54},
  {n:"Cebola (kg)", c:"Hortifruti", old:5.50, cur:5.10},
  {n:"Batata inglesa (kg)", c:"Hortifruti", old:6.20, cur:5.80},
  {n:"Banana prata (kg)", c:"Hortifruti", old:4.80, cur:4.94},
  {n:"Laranja (kg)", c:"Hortifruti", old:3.90, cur:3.60},
  {n:"Cenoura (kg)", c:"Hortifruti", old:5.20, cur:5.60},
  {n:"Alface (unidade)", c:"Hortifruti", old:2.50, cur:2.70},
  {n:"Mandioca (kg)", c:"Hortifruti", old:4.50, cur:4.20},
  {n:"Abóbora (kg)", c:"Hortifruti", old:3.80, cur:4.00},
  {n:"Coco verde (unidade)", c:"Hortifruti", old:4.00, cur:4.50},
  {n:"Carne bovina 1ª (kg)", c:"Proteínas", old:38.90, cur:39.63},
  {n:"Frango inteiro (kg)", c:"Proteínas", old:9.80, cur:9.50},
  {n:"Ovos (dúzia)", c:"Proteínas", old:9.50, cur:10.20},
  {n:"Tilápia (kg)", c:"Proteínas", old:16.00, cur:15.20},
  {n:"Carne suína, pernil (kg)", c:"Proteínas", old:19.50, cur:20.30},
  {n:"Leite integral (litro)", c:"Laticínios", old:5.80, cur:6.01},
  {n:"Queijo coalho (kg)", c:"Laticínios", old:32.00, cur:33.50},
  {n:"Manteiga (200g)", c:"Laticínios", old:9.90, cur:10.04},
  {n:"Iogurte natural (170g)", c:"Laticínios", old:3.20, cur:3.35},
  {n:"Açúcar cristal (kg)", c:"Outros", old:4.60, cur:4.45},
  {n:"Café em pó (500g)", c:"Outros", old:22.00, cur:20.90},
  {n:"Óleo de soja (900ml)", c:"Outros", old:8.20, cur:7.90},
  {n:"Sal refinado (kg)", c:"Outros", old:2.30, cur:2.25},
  {n:"Pão francês (kg)", c:"Outros", old:14.50, cur:14.64},
  {n:"Margarina (500g)", c:"Outros", old:7.20, cur:7.45},
];

const markets = [
  {n:"Super Dabarra", addr:"Av. Pres. Castelo Branco, 4763 — Barra do Ceará", rating:4.3, tag:"Supermercado + padaria", lat:-3.7062508, lng:-38.574654, best:false},
  {n:"Supermercado Vinte", addr:"Av. 20 de Janeiro, 1680 — Barra do Ceará", rating:4.4, tag:"Mercantil tradicional", lat:-3.7057423, lng:-38.5812012, best:false},
  {n:"Atacadão LAG — Leste", addr:"Av. Pres. Castelo Branco, 5943 — Barra do Ceará", rating:4.3, tag:"Atacarejo", lat:-3.7023082, lng:-38.5842616, best:true},
  {n:"Mercadinho Super Aguiar", addr:"Tv. Castelo, 620 — Barra do Ceará", rating:4.2, tag:"Mercadinho de bairro", lat:-3.7007362, lng:-38.5825497, best:false},
  {n:"Mercadinho Teles", addr:"R. Graça Aranha, 397 — Barra do Ceará", rating:4.5, tag:"Mercadinho de bairro", lat:-3.7083534, lng:-38.5731151, best:false},
  {n:"Supermercado Kibão", addr:"Av. Pres. Castelo Branco, 5645 — Barra do Ceará", rating:4.4, tag:"Supermercado + entrega", lat:-3.7032269, lng:-38.5813109, best:false},
  {n:"Mercadinho Arco-Verde", addr:"R. 6 Companheiros, 262 — Barra do Ceará", rating:4.2, tag:"Mercadinho de bairro", lat:-3.7026790, lng:-38.5761454, best:false},
  {n:"Centerbox Barra do Ceará I", addr:"Av. Cel. Carvalho, 1261 — Barra do Ceará", rating:4.2, tag:"Rede de supermercados", lat:-3.7133333, lng:-38.5886111, best:true},
  {n:"Centerbox Barra do Ceará II", addr:"Av. Cel. Carvalho, 901 — Barra do Ceará", rating:4.2, tag:"Rede de supermercados", lat:-3.7099342, lng:-38.5889900, best:false},
  {n:"Mercadinho Cavalcante", addr:"R. Álvaro Garrido, 193 — Barra do Ceará", rating:4.3, tag:"Miúda e Genilson", lat:-3.7129179, lng:-38.5810946, best:false},
  {n:"Feira Negra de Fortaleza", addr:"R. Astrogildo Fontoura — Barra do Ceará", rating:3.0, tag:"Feira / atacado", lat:-3.7121362, lng:-38.5833711, best:false},
  {n:"Feira das Goiabeiras", addr:"R. Sen. Robert Kennedy, 410 — Barra do Ceará (sábados)", rating:4.6, tag:"Feira livre", lat:-3.7037143, lng:-38.5789647, best:true},
  {n:"Cometa Supermercados — Castelo Branco", addr:"Av. Pres. Castelo Branco, 5211 — Barra do Ceará", rating:4.4, tag:"Rede de supermercados", lat:-3.7048575, lng:-38.5779713, best:false},
  {n:"Mercadinho Ideal", addr:"R. Manuel Moura, 180 — Barra do Ceará", rating:4.6, tag:"Mercadinho de bairro", lat:-3.7149602, lng:-38.5826226, best:false},
  {n:"Mercantil Morros", addr:"R. Sen. Robert Kennedy, 209 — Barra do Ceará", rating:4.3, tag:"Mercantil de bairro", lat:-3.7017921, lng:-38.5778668, best:false},
];

const faqs = [
  {q:"De onde vêm os preços do site?", a:"Os valores partem de cotações públicas da Ceasa-CE e da Pesquisa Nacional da Cesta Básica (Dieese/Conab) para Fortaleza, e são refinados com reportes enviados por moradores da Barra do Ceará na aba Reportar."},
  {q:"Os preços são exatos, iguais ao caixa do mercado?", a:"Não necessariamente. Eles são valores de referência e podem variar de mercado para mercado e de um dia para o outro. Use o site para ter uma noção de tendência (alta ou queda) e sempre confirme o valor final no caixa."},
  {q:"Com que frequência os preços são atualizados?", a:"A base de referência é revisada mensalmente. Já os reportes da comunidade (aba Reportar) aparecem em tempo real, assim que são enviados."},
  {q:"Posso reportar um preço mesmo sem me identificar?", a:"Sim. O campo de nome é opcional — você pode enviar como anônimo ou usar um apelido."},
  {q:"Como reporto um produto perto do vencimento?", a:"Vá até a aba Reportar, clique em \"Reportar vencimento\", selecione o mercado e informe o produto e a data. Isso ajuda outros moradores a evitarem comprar produtos vencidos ou aproveitarem promoções de véspera de vencimento."},
  {q:"O Radar da Barra tem alguma ligação com os mercados listados?", a:"Não. É um projeto comunitário e independente. Os mercados são listados apenas como referência de localização para os moradores do bairro."},
];

function pctChange(o,c){ return ((c-o)/o)*100; }
function calcAge(dateStr){
  if(!dateStr) return null;
  const birth = new Date(dateStr+'T00:00:00');
  if(isNaN(birth.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if(m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

/* ===================== HEADER ===================== */
const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
if(burgerBtn && mainNav){
  burgerBtn.addEventListener('click', ()=> mainNav.classList.toggle('open'));
}

const navButtons = document.querySelectorAll('nav button[data-target]');
const navSections = ['precos','mercados','pedidos','conta','finalidade','tutorial','reportar']
  .map(id=>document.getElementById(id)).filter(Boolean);

navButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.dataset.target);
    if(target) target.scrollIntoView({behavior:'smooth'});
    if(mainNav) mainNav.classList.remove('open');
  });
});

const navSpy = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navButtons.forEach(b=>b.classList.toggle('active', b.dataset.target===entry.target.id));
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
navSections.forEach(s=>navSpy.observe(s));

/* ===================== TICKER ===================== */
const tickerTrack = document.getElementById('tickerTrack');
function buildTicker(){
  if(!tickerTrack) return;
  const set = foods.map(f=>{
    const delta = pctChange(f.old,f.cur); const up = delta>0;
    return `<span class="tick-item">${f.n.split('(')[0].trim()} <span class="${up?'tick-up':'tick-down'}">${up?'▲':'▼'} ${Math.abs(delta).toFixed(1)}% · R$ ${f.cur.toFixed(2)}</span></span>`;
  }).join('');
  tickerTrack.innerHTML = set + set;
}

/* ===================== SCROLL REVEAL ===================== */
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); revealObs.unobserve(e.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay = (i % 6) * 60 + 'ms';
  revealObs.observe(el);
});

/* ===================== BARRA DE PROGRESSO ===================== */
const scrollProgressEl = document.createElement('div');
scrollProgressEl.className = 'scroll-progress';
document.body.appendChild(scrollProgressEl);
function updateScrollProgress(){
  const h = document.documentElement;
  const total = h.scrollHeight - h.clientHeight;
  scrollProgressEl.style.width = (total>0 ? (h.scrollTop/total*100) : 0) + '%';
}
window.addEventListener('scroll', updateScrollProgress, {passive:true});
updateScrollProgress();

/* ===================== BOTÃO VOLTAR AO TOPO ===================== */
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
backToTopBtn.textContent = '↑';
document.body.appendChild(backToTopBtn);
backToTopBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
window.addEventListener('scroll', ()=>{
  backToTopBtn.classList.toggle('show', window.scrollY > 500);
}, {passive:true});

/* ===================== CONTADORES ANIMADOS ===================== */
function countUpTo(el, target, duration=900){
  if(!el) return;
  const startTime = performance.now();
  function tick(now){
    const p = Math.min((now-startTime)/duration, 1);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(target*eased);
    if(p<1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('[data-countup]').forEach(el=>{
  countUpTo(el, parseInt(el.dataset.countup, 10));
});

/* ===================== PÁGINA: PREÇOS ===================== */
const grid = document.getElementById('priceGrid');
const emptyMsg = document.getElementById('emptyMsg');
let currentCat = 'todos', currentVari = 'todos', currentSearch = '';

function renderPrices(){
  if(!grid) return;
  const term = currentSearch.trim().toLowerCase();
  let items = foods.filter(f=>{
    const matchCat = currentCat==='todos' || f.c===currentCat;
    const matchSearch = f.n.toLowerCase().includes(term);
    const delta = pctChange(f.old,f.cur);
    const matchVari = currentVari==='todos' || (currentVari==='up' && delta>0) || (currentVari==='down' && delta<0);
    return matchCat && matchSearch && matchVari;
  });
  grid.innerHTML = '';
  if(emptyMsg) emptyMsg.style.display = items.length? 'none':'block';
  items.forEach((f,i)=>{
    const delta = pctChange(f.old,f.cur);
    const up = delta>0;
    const card = document.createElement('div');
    card.className = 'price-card';
    card.style.animationDelay = (i % 12) * 30 + 'ms';
    card.innerHTML = `
      <span class="cat">${f.c}</span>
      <h4>${f.n}</h4>
      <div class="price-row">
        <span class="price-old mono">R$ ${f.old.toFixed(2)}</span>
        <span class="price-new mono">R$ ${f.cur.toFixed(2)}</span>
      </div>
      <span class="badge ${up?'up':'down'}">${up?'▲':'▼'} ${Math.abs(delta).toFixed(1)}%</span>
    `;
    grid.appendChild(card);
  });
}

function updateCounts(){
  const upEl = document.getElementById('upCount'), downEl = document.getElementById('downCount');
  if(!upEl || !downEl) return;
  countUpTo(upEl, foods.filter(f=>pctChange(f.old,f.cur)>0).length);
  countUpTo(downEl, foods.filter(f=>pctChange(f.old,f.cur)<0).length);
}

const searchInput = document.getElementById('searchInput');
if(searchInput) searchInput.addEventListener('input', e=>{currentSearch=e.target.value; renderPrices();});
const catFilter = document.getElementById('catFilter');
if(catFilter) catFilter.addEventListener('change', e=>{currentCat=e.target.value; renderPrices();});
document.querySelectorAll('#variSeg button').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('#variSeg button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); currentVari=b.dataset.vari; renderPrices();
  });
});

/* ===================== PÁGINA: MERCADOS ===================== */
const marketGrid = document.getElementById('marketGrid');
function renderMarkets(){
  if(!marketGrid) return;
  marketGrid.innerHTML = markets.map((m,i)=>`
    <div class="market-card" style="animation-delay:${(i % 12) * 30}ms">
      <div class="top-row">
        <h4>${m.n}</h4>
        <span class="rating mono">★ ${m.rating.toFixed(1)}</span>
      </div>
      <span class="market-tag ${m.best?'best':''}">${m.best?'★ Melhor custo-benefício':m.tag}</span>
      <div class="addr">${m.addr}</div>
      <a class="maplink" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lng}">Ver no mapa →</a>
    </div>
  `).join('');
}

/* ===================== PÁGINA: TUTORIAL (FAQ) ===================== */
const faqList = document.getElementById('faqList');
function renderFaq(){
  if(!faqList) return;
  faqList.innerHTML = faqs.map((f,i)=>`
    <div class="faq-item" data-i="${i}">
      <button class="faq-q">${f.q}<span class="plus">+</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join('');
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.parentElement;
      const ans = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(o=>{o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight=null;});
      if(!isOpen){ item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight+'px'; }
    });
  });
}

/* ===================== PÁGINA: REPORTAR ===================== */
const pAlimento = document.getElementById('p-alimento');
const pMercado = document.getElementById('p-mercado');
const vMercado = document.getElementById('v-mercado');
if(pAlimento && pMercado && vMercado){
  foods.forEach(f=>{ const o=document.createElement('option'); o.textContent=f.n; pAlimento.appendChild(o); });
  markets.forEach(m=>{
    const o1=document.createElement('option'); o1.textContent=m.n; pMercado.appendChild(o1);
    const o2=document.createElement('option'); o2.textContent=m.n; vMercado.appendChild(o2);
  });
}

const reportTabs = document.querySelectorAll('.report-tabs button');
reportTabs.forEach(b=>{
  b.addEventListener('click', ()=>{
    reportTabs.forEach(x=>x.classList.remove('active')); b.classList.add('active');
    document.querySelectorAll('#form-preco, #form-venc').forEach(p=>p.classList.remove('active'));
    document.getElementById('form-'+b.dataset.form).classList.add('active');
  });
});

const reportsList = document.getElementById('reportsList');
function loadReports(){ return dbGet(DB_KEYS.reports); }
function saveReports(list){ dbSet(DB_KEYS.reports, list); renderDbPanel(); }
function renderReports(){
  if(!reportsList) return;
  const list = loadReports();
  if(!list.length){ reportsList.innerHTML = '<p style="color:var(--gray); font-size:.86rem;">Nenhum reporte ainda. Seja o primeiro a contribuir!</p>'; return; }
  reportsList.innerHTML = list.slice().reverse().slice(0,12).map(r=>`
    <div class="report-item">
      <span>${r.text}</span>
      <span class="who">${r.who} · ${r.date}</span>
    </div>
  `).join('');
}

const formPreco = document.getElementById('formPreco');
if(formPreco) formPreco.addEventListener('submit', e=>{
  e.preventDefault();
  const alimento = pAlimento.value, mercado = pMercado.value, preco = document.getElementById('p-preco').value;
  const nome = document.getElementById('p-nome').value.trim() || 'Anônimo';
  const list = loadReports();
  list.push({text:`💰 ${alimento} — R$ ${parseFloat(preco).toFixed(2)} no ${mercado}`, who:nome, date:new Date().toLocaleDateString('pt-BR')});
  saveReports(list); renderReports();
  document.getElementById('confirmPreco').style.display='block';
  e.target.reset();
  setTimeout(()=>document.getElementById('confirmPreco').style.display='none', 4000);
});

const formVenc = document.getElementById('formVenc');
if(formVenc) formVenc.addEventListener('submit', e=>{
  e.preventDefault();
  const produto = document.getElementById('v-produto').value, mercado = vMercado.value, data = document.getElementById('v-data').value;
  const list = loadReports();
  list.push({text:`⏰ ${produto} vence em ${new Date(data+'T00:00:00').toLocaleDateString('pt-BR')} — ${mercado}`, who:'Comunidade', date:new Date().toLocaleDateString('pt-BR')});
  saveReports(list); renderReports();
  document.getElementById('confirmVenc').style.display='block';
  e.target.reset();
  setTimeout(()=>document.getElementById('confirmVenc').style.display='none', 4000);
});

/* ===================== ACESSIBILIDADE ===================== */
const a11yBtn = document.getElementById('a11yBtn');
const a11yPanel = document.getElementById('a11yPanel');
const a11yCloseBtn = document.getElementById('a11yCloseBtn');

function loadA11y(){
  try{ return JSON.parse(localStorage.getItem('radarBarraA11y')||'{}'); }catch(e){ return {}; }
}
function saveA11y(state){ localStorage.setItem('radarBarraA11y', JSON.stringify(state)); }

let a11y = Object.assign({fontStep:0, contrast:false, underline:false, dyslexia:false, cursor:false, pause:false, guide:false, speech:false, libras:false}, loadA11y());

const a11yToggles = {
  contrast:{id:'toggleContrast', cls:'a11y-contrast'},
  underline:{id:'toggleUnderline', cls:'a11y-underline'},
  dyslexia:{id:'toggleDyslexia', cls:'a11y-dyslexia'},
  cursor:{id:'toggleCursor', cls:'a11y-bigcursor'},
  pause:{id:'togglePause', cls:'a11y-pause'},
  guide:{id:'toggleGuide', cls:'a11y-reading-guide'},
};

function applyA11y(){
  const fontValEl = document.getElementById('fontVal');
  if(fontValEl) fontValEl.textContent = (100 + a11y.fontStep*10) + '%';
  document.documentElement.style.fontSize = (100 + a11y.fontStep*10) + '%';
  Object.keys(a11yToggles).forEach(key=>{
    const t = a11yToggles[key];
    document.body.classList.toggle(t.cls, !!a11y[key]);
    const el = document.getElementById(t.id);
    if(el) el.classList.toggle('active', !!a11y[key]);
  });
  const speechEl = document.getElementById('toggleSpeech');
  if(speechEl) speechEl.classList.toggle('active', !!a11y.speech);
  saveA11y(a11y);
}

const fontPlus = document.getElementById('fontPlus');
if(fontPlus) fontPlus.addEventListener('click', ()=>{ if(a11y.fontStep<5){ a11y.fontStep++; applyA11y(); } });
const fontMinus = document.getElementById('fontMinus');
if(fontMinus) fontMinus.addEventListener('click', ()=>{ if(a11y.fontStep>-3){ a11y.fontStep--; applyA11y(); } });

Object.keys(a11yToggles).forEach(key=>{
  const el = document.getElementById(a11yToggles[key].id);
  if(el) el.addEventListener('click', ()=>{ a11y[key] = !a11y[key]; applyA11y(); });
});

const toggleSpeechBtn = document.getElementById('toggleSpeech');
if(toggleSpeechBtn) toggleSpeechBtn.addEventListener('click', ()=>{ a11y.speech = !a11y.speech; applyA11y(); });

const toggleLibrasBtn = document.getElementById('toggleLibras');
const librasWidgetEl = document.getElementById('librasWidget');

(function initLibras(){
  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.onload = ()=>{
    if(window.VLibras){
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    } else {
      showToast('Não foi possível iniciar o Modo Libras agora.');
    }
  };
  script.onerror = ()=>{ showToast('Não foi possível carregar o Modo Libras agora. Verifique sua conexão.'); };
  document.body.appendChild(script);
})();

function setLibrasVisible(on){
  if(librasWidgetEl) librasWidgetEl.classList.toggle('libras-off', !on);
  if(toggleLibrasBtn) toggleLibrasBtn.classList.toggle('active', on);
}
if(toggleLibrasBtn) toggleLibrasBtn.addEventListener('click', ()=>{
  a11y.libras = !a11y.libras;
  saveA11y(a11y);
  setLibrasVisible(a11y.libras);
});
setLibrasVisible(!!a11y.libras);

document.addEventListener('mouseup', ()=>{
  if(!a11y.speech) return;
  const text = window.getSelection().toString().trim();
  if(text && 'speechSynthesis' in window){
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'pt-BR';
    window.speechSynthesis.speak(utter);
  }
});

const readingGuide = document.getElementById('readingGuide');
document.addEventListener('mousemove', e=>{
  if(a11y.guide && readingGuide){ readingGuide.style.top = (e.clientY - 18) + 'px'; }
});

const a11yResetBtn = document.getElementById('a11yReset');
if(a11yResetBtn) a11yResetBtn.addEventListener('click', ()=>{
  a11y = {fontStep:0, contrast:false, underline:false, dyslexia:false, cursor:false, pause:false, guide:false, speech:false, libras:false};
  applyA11y();
  setLibrasVisible(false);
});

if(a11yBtn) a11yBtn.addEventListener('click', ()=>{
  const open = a11yPanel.classList.toggle('open');
  a11yBtn.setAttribute('aria-expanded', open);
});
if(a11yCloseBtn) a11yCloseBtn.addEventListener('click', ()=>{
  a11yPanel.classList.remove('open');
  a11yBtn.setAttribute('aria-expanded','false');
});
document.addEventListener('click', e=>{
  if(a11yPanel && a11yBtn && !a11yPanel.contains(e.target) && !a11yBtn.contains(e.target)){
    a11yPanel.classList.remove('open'); a11yBtn.setAttribute('aria-expanded','false');
  }
});

applyA11y();

/* ===================== TOAST NOTIFICATIONS ===================== */
const toastWrap = document.createElement('div');
toastWrap.className = 'toast-wrap';
toastWrap.setAttribute('aria-live', 'polite');
toastWrap.setAttribute('aria-atomic', 'true');
document.body.appendChild(toastWrap);
function showToast(msg, duration=2600){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  toastWrap.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{
    t.classList.remove('show');
    setTimeout(()=> t.remove(), 300);
  }, duration);
}

/* ===================== FOCUS TRAP MODALS ===================== */
(function(){
  let lastFocused = null;
  function getFocusable(container){
    return Array.from(container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter(el => el.offsetParent !== null);
  }
  function setupTrap(overlayEl, cardSelector){
    if(!overlayEl) return;
    const card = cardSelector ? overlayEl.querySelector(cardSelector) : overlayEl;
    if(!card) return;
    function onKeydown(e){
      if(e.key !== 'Tab') return;
      const list = getFocusable(card);
      if(!list.length) return;
      const first = list[0], last = list[list.length-1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
    const obs = new MutationObserver(()=>{
      const isOpen = overlayEl.classList.contains('open');
      if(isOpen){
        lastFocused = document.activeElement;
        const focusables = getFocusable(card);
        (focusables[0] || card).focus();
        card.addEventListener('keydown', onKeydown);
      } else {
        card.removeEventListener('keydown', onKeydown);
        if(lastFocused && lastFocused.focus) lastFocused.focus();
      }
    });
    obs.observe(overlayEl, {attributes:true, attributeFilter:['class']});
  }
  setupTrap(document.getElementById('checkoutOverlay'), '.modal-card');
  setupTrap(document.getElementById('statusOverlay'), '.modal-card');
  setupTrap(document.getElementById('myOrdersOverlay'), '.modal-card');
  setupTrap(document.getElementById('adminOverlay'), '.modal-card');
  setupTrap(document.getElementById('cartDrawer'), null);
})();

/* ===================== 360 BASKET ===================== */
const CESTA_BASICA_ITENS = ["Arroz agulhinha (kg)","Feijão carioca (kg)","Café em pó (500g)","Açúcar cristal (kg)","Óleo de soja (900ml)","Farinha de mandioca (kg)","Leite integral (litro)","Carne bovina 1ª (kg)","Pão francês (kg)","Manteiga (200g)","Tomate (kg)","Banana prata (kg)","Batata inglesa (kg)"];
const BASKET_ICONS = {
  "Arroz agulhinha (kg)": '<path d="M8 3h8l1.5 4-1 3H7.5l-1-3z"/><path d="M7.2 10c-1.2 4-1.2 8 .8 11h8c2-3 2-7 .8-11"/>',
  "Feijão carioca (kg)": '<path d="M8 3h8l1.5 4-1 3H7.5l-1-3z"/><path d="M7.2 10c-1.2 4-1.2 8 .8 11h8c2-3 2-7 .8-11"/><ellipse cx="10.5" cy="15" rx="1.3" ry=".9" fill="var(--red)" stroke="none" transform="rotate(30 10.5 15)"/><ellipse cx="13.5" cy="18" rx="1.3" ry=".9" fill="var(--red)" stroke="none" transform="rotate(-20 13.5 18)"/>',
  "Café em pó (500g)": '<path d="M6 10h10v4a5 5 0 01-10 0v-4z"/><path d="M16 11h2a2 2 0 010 4h-2"/><path d="M8 3c0 1-1 1-1 2M11 3c0 1-1 1-1 2"/>',
  "Açúcar cristal (kg)": '<rect x="6" y="8" width="12" height="12" rx="1"/><path d="M8 8l2-4h4l2 4"/>',
  "Óleo de soja (900ml)": '<path d="M10 2h4v3l2 2v13a1 1 0 01-1 1H9a1 1 0 01-1-1V7l2-2V2z"/><line x1="9" y1="11" x2="15" y2="11"/>',
  "Farinha de mandioca (kg)": '<path d="M8 3h8l1.5 4-1 3H7.5l-1-3z"/><path d="M7.2 10c-1.2 4-1.2 8 .8 11h8c2-3 2-7 .8-11"/><line x1="9" y1="13" x2="15" y2="13"/>',
  "Leite integral (litro)": '<path d="M8 4h8v3l-8 0z"/><path d="M8 7h8v13H8z"/><path d="M8 4l2-2h4l2 2"/>',
  "Carne bovina 1ª (kg)": '<path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7z"/><circle cx="9" cy="10" r="1" fill="var(--red)" stroke="none"/><circle cx="14" cy="14" r="1" fill="var(--red)" stroke="none"/>',
  "Pão francês (kg)": '<path d="M4 14c0-5 4-9 8-9s8 4 8 9-4 5-8 5-8 0-8-5z"/><path d="M8 10c1-1 2-1 3 0M13 10c1-1 2-1 3 0"/>',
  "Manteiga (200g)": '<rect x="5" y="9" width="14" height="8" rx="1"/><path d="M5 9l2-3h10l2 3"/>',
  "Tomate (kg)": '<circle cx="12" cy="13" r="7"/><path d="M12 6c-1-2 1-3 3-2-1 1-1 2-3 2z"/>',
  "Banana prata (kg)": '<path d="M6 17c6 2 12-2 13-9"/><path d="M18 8c1-1 2-1 2 0"/>',
  "Batata inglesa (kg)": '<ellipse cx="12" cy="12" rx="7" ry="5" transform="rotate(-15 12 12)"/><circle cx="10" cy="11" r=".6" fill="var(--red)" stroke="none"/><circle cx="14" cy="13" r=".6" fill="var(--red)" stroke="none"/>',
};

const basketCarousel = document.getElementById('basketCarousel');
function renderBasket360(){
  if(!basketCarousel) return;
  const items = CESTA_BASICA_ITENS.map(n=>foods.find(f=>f.n===n)).filter(Boolean);
  const N = items.length;
  const angleStep = 360/N;
  const radius = Math.round(78 / Math.tan(Math.PI/N));
  basketCarousel.innerHTML = items.map((f,i)=>`
    <div class="basket360-item" style="transform: rotateY(${(i*angleStep).toFixed(2)}deg) translateZ(${radius}px)">
      <svg class="ic" viewBox="0 0 24 24">${BASKET_ICONS[f.n]||''}</svg>
      <div class="nm">${f.n}</div>
      <div class="pr">R$ ${f.cur.toFixed(2)}</div>
    </div>
  `).join('');
}

let basketAngle = 0, basketDragging = false, basketStartX = 0, basketStartAngle = 0, basketAutoRotate = true;
function applyBasketRotation(){
  if(basketCarousel) basketCarousel.style.transform = `rotateY(${basketAngle}deg)`;
}
if(basketCarousel){
  basketCarousel.addEventListener('pointerdown', e=>{
    basketDragging = true; basketAutoRotate = false; basketStartX = e.clientX; basketStartAngle = basketAngle;
    basketCarousel.setPointerCapture(e.pointerId);
  });
  basketCarousel.addEventListener('pointermove', e=>{
    if(!basketDragging) return;
    basketAngle = basketStartAngle + (e.clientX - basketStartX) * 0.45;
    applyBasketRotation();
  });
  basketCarousel.addEventListener('pointerup', ()=>{ basketDragging = false; });
  basketCarousel.addEventListener('pointerleave', ()=>{ basketDragging = false; });
}
const basket360Prev = document.getElementById('basket360Prev');
const basket360Next = document.getElementById('basket360Next');
if(basket360Prev) basket360Prev.addEventListener('click', ()=>{ basketAutoRotate=false; basketAngle -= 360/13; applyBasketRotation(); });
if(basket360Next) basket360Next.addEventListener('click', ()=>{ basketAutoRotate=false; basketAngle += 360/13; applyBasketRotation(); });
setInterval(()=>{
  if(basketAutoRotate && !basketDragging && basketCarousel){ basketAngle += 0.12; applyBasketRotation(); }
}, 30);

/* ===================== LOCAL STORAGE DATABASE ===================== */
const DB_KEYS = {users:'radarBarraUsers', orders:'radarBarraOrders', reports:'radarBarraReports', session:'radarBarraSession'};
function dbGet(key){ try{ return JSON.parse(sessionStorage.getItem(key)||'[]'); }catch(e){ return []; } }
function dbSet(key, val){ sessionStorage.setItem(key, JSON.stringify(val)); }

function simpleHash(str){
  let hash = 0;
  for(let i=0;i<str.length;i++){ hash = ((hash<<5)-hash) + str.charCodeAt(i); hash |= 0; }
  return Math.abs(hash).toString(36);
}
function hashPass(email, senha){ return simpleHash(email.trim().toLowerCase()+'::'+senha); }

function getUsers(){ return dbGet(DB_KEYS.users); }
function saveUsers(list){ dbSet(DB_KEYS.users, list); renderDbPanel(); }
function getSessionEmail(){ return sessionStorage.getItem(DB_KEYS.session); }
function setSessionEmail(email){ sessionStorage.setItem(DB_KEYS.session, email); }
function clearSession(){ sessionStorage.removeItem(DB_KEYS.session); }
function currentUser(){
  const email = getSessionEmail();
  if(!email) return null;
  return getUsers().find(u=>u.email===email) || null;
}

/* ===================== CUSTOM CONFIRM ===================== */
function customConfirm(message){
  return new Promise(resolve=>{
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.innerHTML = `
      <div class="modal-card" role="dialog" aria-modal="true" aria-label="Confirmação" tabindex="-1" style="text-align:center; width:400px;">
        <p style="font-size:.95rem; line-height:1.5; margin-bottom:22px;">${message}</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button class="a11y-reset" id="customConfirmCancel" style="width:auto;">Cancelar</button>
          <button class="submit-btn" id="customConfirmOk" style="width:auto; background:var(--red-dark);">Confirmar</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    const card = overlay.querySelector('.modal-card');
    card.focus();
    function close(result){ overlay.remove(); resolve(result); }
    overlay.querySelector('#customConfirmOk').addEventListener('click', ()=>close(true));
    overlay.querySelector('#customConfirmCancel').addEventListener('click', ()=>close(false));
    overlay.addEventListener('click', e=>{ if(e.target===overlay) close(false); });
    document.addEventListener('keydown', function escHandler(e){
      if(e.key==='Escape'){ close(false); document.removeEventListener('keydown', escHandler); }
    });
  });
}

/* ===================== CART SYSTEM ===================== */
let selectedMarket = null;
let cart = [];

function loadCartState(){
  try{
    const s = JSON.parse(sessionStorage.getItem('radarBarraCartState')||'null');
    if(s){ selectedMarket = s.selectedMarket; cart = s.cart || []; }
  }catch(e){ selectedMarket = null; cart = []; }
}
function saveCartState(){
  sessionStorage.setItem('radarBarraCartState', JSON.stringify({selectedMarket, cart}));
}
loadCartState();

const pedidoMarketSelect = document.getElementById('pedidoMarketSelect');
const orderGrid = document.getElementById('orderGrid');
const catalogHead = document.getElementById('catalogHead');
const catalogMarketName = document.getElementById('catalogMarketName');
let orderCatCurrent = 'todos', orderSearchCurrent = '';

function renderMarketChips(){
  if(!pedidoMarketSelect) return;
  pedidoMarketSelect.innerHTML = markets.map((m,i)=>`
    <button class="market-chip ${selectedMarket===i?'active':''}" data-i="${i}">
      ${m.n} <span class="stars">★${m.rating.toFixed(1)}</span>
    </button>
  `).join('');
  pedidoMarketSelect.querySelectorAll('.market-chip').forEach(chip=>{
    chip.addEventListener('click', async ()=>{
      const i = parseInt(chip.dataset.i);
      if(selectedMarket!==i && cart.length){
        const ok = await customConfirm('Trocar de mercado vai esvaziar sua sacola atual. Continuar?');
        if(!ok) return;
        cart = [];
      }
      selectedMarket = i;
      saveCartState();
      renderMarketChips();
      if(catalogHead) catalogHead.style.display = 'block';
      if(catalogMarketName) catalogMarketName.textContent = 'Catálogo — ' + markets[i].n;
      renderOrderGrid();
      renderCart();
    });
  });
  if(selectedMarket!==null && catalogHead){
    catalogHead.style.display = 'block';
    catalogMarketName.textContent = 'Catálogo — ' + markets[selectedMarket].n;
  }
}

function renderOrderGrid(){
  if(!orderGrid) return;
  if(selectedMarket===null){
    orderGrid.innerHTML = '<div class="catalog-placeholder">Escolha um mercado acima para ver os produtos disponíveis para pedido.</div>';
    return;
  }
  const term = orderSearchCurrent.trim().toLowerCase();
  const items = foods.filter(f=> (orderCatCurrent==='todos'||f.c===orderCatCurrent) && f.n.toLowerCase().includes(term));
  orderGrid.innerHTML = items.map((f,i)=>{
    const inCart = cart.find(c=>c.name===f.n);
    const qty = inCart? inCart.qty : 0;
    return `
      <div class="order-card" style="animation-delay:${(i % 12) * 30}ms">
        <span class="cat">${f.c}</span>
        <h4>${f.n}</h4>
        <span class="price mono">R$ ${f.cur.toFixed(2)}</span>
        <div class="add-row">
          ${qty>0 ? `
            <div class="qty-stepper">
              <button class="qty-minus" data-name="${f.n}">−</button>
              <span class="q">${qty}</span>
              <button class="qty-plus" data-name="${f.n}">+</button>
            </div>
          ` : `<button class="add-btn" data-name="${f.n}" data-price="${f.cur}">+ Adicionar</button>`}
        </div>
      </div>
    `;
  }).join('');

  orderGrid.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click', ()=>{
    cart.push({name:b.dataset.name, price:parseFloat(b.dataset.price), qty:1});
    saveCartState(); renderOrderGrid(); renderCart();
    showToast('🛍️ ' + b.dataset.name.split('(')[0].trim() + ' adicionado à sacola');
  }));
  orderGrid.querySelectorAll('.qty-plus').forEach(b=>b.addEventListener('click', ()=>{
    const item = cart.find(c=>c.name===b.dataset.name); if(item) item.qty++;
    saveCartState(); renderOrderGrid(); renderCart();
  }));
  orderGrid.querySelectorAll('.qty-minus').forEach(b=>b.addEventListener('click', ()=>{
    const item = cart.find(c=>c.name===b.dataset.name);
    if(item){ item.qty--; if(item.qty<=0) cart = cart.filter(c=>c.name!==b.dataset.name); }
    saveCartState(); renderOrderGrid(); renderCart();
  }));
}

const orderSearchEl = document.getElementById('orderSearch');
if(orderSearchEl) orderSearchEl.addEventListener('input', e=>{orderSearchCurrent=e.target.value; renderOrderGrid();});
const orderCatFilterEl = document.getElementById('orderCatFilter');
if(orderCatFilterEl) orderCatFilterEl.addEventListener('change', e=>{orderCatCurrent=e.target.value; renderOrderGrid();});

const cartFab = document.getElementById('cartFab');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartSummaryEl = document.getElementById('cartSummary');
const cartMarketTag = document.getElementById('cartMarketTag');

function cartSubtotal(){ return cart.reduce((s,c)=>s+c.price*c.qty,0); }

function renderCart(){
  const cartCountEl = document.getElementById('cartCount');
  if(cartCountEl) cartCountEl.textContent = cart.reduce((s,c)=>s+c.qty,0);
  if(cartMarketTag) cartMarketTag.textContent = selectedMarket!==null ? '🛒 ' + markets[selectedMarket].n : '';
  if(!cartItemsEl) return;
  if(!cart.length){
    cartItemsEl.innerHTML=''; cartEmptyEl.style.display='block'; cartSummaryEl.style.display='none';
    return;
  }
  cartEmptyEl.style.display='none'; cartSummaryEl.style.display='flex';
  cartItemsEl.innerHTML = cart.map(c=>`
    <div class="cart-item">
      <div>
        <div class="ci-name">${c.qty}x ${c.name}</div>
        <div class="ci-price mono">R$ ${(c.price*c.qty).toFixed(2)}</div>
      </div>
      <button class="remove-btn" data-name="${c.name}">🗑️</button>
    </div>
  `).join('');
  cartItemsEl.querySelectorAll('.remove-btn').forEach(b=>b.addEventListener('click', ()=>{
    cart = cart.filter(c=>c.name!==b.dataset.name); saveCartState(); renderCart(); renderOrderGrid();
  }));
  const sub = cartSubtotal();
  const fee = deliveryMode==='entrega' ? 5 : 0;
  document.getElementById('cartSubtotal').textContent = 'R$ '+sub.toFixed(2);
  document.getElementById('cartFee').textContent = fee? 'R$ '+fee.toFixed(2) : 'Grátis';
  document.getElementById('cartTotal').textContent = 'R$ '+(sub+fee).toFixed(2);
}

function openCart(){ if(cartOverlay && cartDrawer){ cartOverlay.classList.add('open'); cartDrawer.classList.add('open'); } }
function closeCart(){ if(cartOverlay && cartDrawer){ cartOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); } }
if(cartFab) cartFab.addEventListener('click', openCart);
const cartCloseBtn = document.getElementById('cartCloseBtn');
if(cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

/* ---- Checkout ---- */
const checkoutOverlay = document.getElementById('checkoutOverlay');
let deliveryMode = 'retirada';
const goCheckoutBtn = document.getElementById('goCheckoutBtn');
if(goCheckoutBtn) goCheckoutBtn.addEventListener('click', ()=>{
  if(!cart.length) return;
  closeCart();
  if(!requireLogin('checkout')) return;
  prefillCheckout();
  checkoutOverlay.classList.add('open');
});
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
if(checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', ()=>checkoutOverlay.classList.remove('open'));
if(checkoutOverlay) checkoutOverlay.addEventListener('click', e=>{ if(e.target===checkoutOverlay) checkoutOverlay.classList.remove('open'); });

document.querySelectorAll('#deliverySeg button').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('#deliverySeg button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    deliveryMode = b.dataset.mode;
    document.getElementById('addressField').classList.toggle('hidden', deliveryMode==='retirada');
    document.getElementById('co-endereco').required = deliveryMode==='entrega';
    renderCart();
  });
});
const addressFieldEl = document.getElementById('addressField');
if(addressFieldEl) addressFieldEl.classList.add('hidden');

function loadOrders(){ return dbGet(DB_KEYS.orders); }
function saveOrders(list){ dbSet(DB_KEYS.orders, list); renderDbPanel(); }

const checkoutForm = document.getElementById('checkoutForm');
if(checkoutForm) checkoutForm.addEventListener('submit', e=>{
  e.preventDefault();
  const orders = loadOrders();
  const id = 'RB' + Math.floor(1000+Math.random()*9000);
  const order = {
    id, market: markets[selectedMarket].n, items: cart.map(c=>({name:c.name, qty:c.qty, price:c.price})),
    total: cartSubtotal() + (deliveryMode==='entrega'?5:0), mode: deliveryMode,
    nome: document.getElementById('co-nome').value, endereco: document.getElementById('co-endereco').value,
    pagamento: document.getElementById('co-pagamento').value, date: new Date().toLocaleDateString('pt-BR'),
    time: new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}), status: 0,
    email: currentUser() ? currentUser().email : null
  };
  orders.push(order); saveOrders(orders);
  cart = []; saveCartState(); renderCart(); renderOrderGrid();
  checkoutOverlay.classList.remove('open');
  e.target.reset();
  document.querySelectorAll('#deliverySeg button')[0].click();
  openStatusModal(order.id);
  simulateOrderProgress(order.id);
});

function simulateOrderProgress(id){
  const delays = [3500, 5000, 5500];
  delays.forEach((d,i)=>{
    setTimeout(()=>{
      const orders = loadOrders();
      const o = orders.find(x=>x.id===id);
      if(!o) return;
      o.status = i+1;
      saveOrders(orders);
      if(statusOverlay.classList.contains('open') && document.getElementById('statusOrderId').textContent==='#'+id){
        renderStatus(o);
      }
    }, delays.slice(0,i+1).reduce((a,b)=>a+b,0));
  });
}

const statusOverlay = document.getElementById('statusOverlay');
function renderStatus(order){
  document.getElementById('statusOrderId').textContent = '#'+order.id;
  document.getElementById('statusOrderSummary').textContent =
    `${order.market} · ${order.items.reduce((s,i)=>s+i.qty,0)} itens · R$ ${order.total.toFixed(2)} · ${order.mode==='entrega'?'Entrega':'Retirada'}`;
  document.getElementById('statusStep2Title').textContent = order.mode==='entrega' ? 'Saiu para entrega' : 'Pronto para retirada';
  document.getElementById('statusStep2Sub').textContent = order.mode==='entrega' ? 'A caminho do seu endereço.' : 'Pode buscar no mercado.';
  document.querySelectorAll('#statusTrack .status-step').forEach(step=>{
    const s = parseInt(step.dataset.step);
    step.classList.toggle('done', s < order.status);
    step.classList.toggle('current', s === order.status);
  });
}
function openStatusModal(id){
  const order = loadOrders().find(o=>o.id===id);
  if(!order) return;
  renderStatus(order);
  statusOverlay.classList.add('open');
}
const statusCloseBtn = document.getElementById('statusCloseBtn');
if(statusCloseBtn) statusCloseBtn.addEventListener('click', ()=>statusOverlay.classList.remove('open'));
if(statusOverlay) statusOverlay.addEventListener('click', e=>{ if(e.target===statusOverlay) statusOverlay.classList.remove('open'); });

const myOrdersOverlay = document.getElementById('myOrdersOverlay');
function openMyOrdersModal(){
  if(!requireLogin('pedidos')) return;
  const orders = loadOrders().slice().reverse().filter(o=>o.email===currentUser().email);
  const list = document.getElementById('myOrdersList');
  list.innerHTML = orders.length ? orders.map(o=>`
    <div class="myorder-item">
      <div class="mo-top"><span>${o.market}</span><span class="mono">R$ ${o.total.toFixed(2)}</span></div>
      <div class="mo-meta">${o.id} · ${o.date} ${o.time} · ${o.items.reduce((s,i)=>s+i.qty,0)} itens · ${o.mode==='entrega'?'Entrega':'Retirada'}</div>
      <span class="mo-status ${o.status>=3?'done':''}">${o.status>=3?'Concluído':['Recebido','Preparando', o.mode==='entrega'?'A caminho':'Pronto p/ retirada'][o.status]}</span>
      <button class="see-status" data-id="${o.id}">Ver acompanhamento →</button>
    </div>
  `).join('') : '<p style="color:var(--gray); font-size:.86rem;">Você ainda não fez nenhum pedido.</p>';
  list.querySelectorAll('.see-status').forEach(b=>b.addEventListener('click', ()=>{
    myOrdersOverlay.classList.remove('open'); openStatusModal(b.dataset.id);
  }));
  myOrdersOverlay.classList.add('open');
}
const openMyOrdersBtn = document.getElementById('openMyOrders');
if(openMyOrdersBtn) openMyOrdersBtn.addEventListener('click', openMyOrdersModal);

const myOrdersCloseBtn = document.getElementById('myOrdersCloseBtn');
if(myOrdersCloseBtn) myOrdersCloseBtn.addEventListener('click', ()=>myOrdersOverlay.classList.remove('open'));
if(myOrdersOverlay) myOrdersOverlay.addEventListener('click', e=>{ if(e.target===myOrdersOverlay) myOrdersOverlay.classList.remove('open'); });

document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    closeCart();
    if(checkoutOverlay) checkoutOverlay.classList.remove('open');
    if(statusOverlay) statusOverlay.classList.remove('open');
    if(myOrdersOverlay) myOrdersOverlay.classList.remove('open');
  }
});

/* ===================== AUTH PILL ===================== */
const authArea = document.getElementById('authArea');
let pendingAction = null;

function renderAuthArea(){
  if(!authArea) return;
  const user = currentUser();
  if(!user){
    authArea.innerHTML = `<button class="auth-btn-login" id="authLoginBtn">Entrar</button>`;
    document.getElementById('authLoginBtn').addEventListener('click', ()=>goToConta());
    renderContaSection();
    return;
  }
  const initials = user.name.trim().split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join('');
  authArea.innerHTML = `
    <button class="user-pill" id="userPillBtn">
      <span class="user-avatar">${initials}</span>
      <span class="uname">${user.name.split(' ')[0]}</span>
    </button>
    <div class="user-dropdown" id="userDropdown">
      <button id="ddMeusPedidos">📦 Meus pedidos</button>
      <button class="logout" id="ddLogout">Sair</button>
    </div>
  `;
  document.getElementById('userPillBtn').addEventListener('click', e=>{
    e.stopPropagation();
    document.getElementById('userDropdown').classList.toggle('open');
  });
  document.getElementById('ddMeusPedidos').addEventListener('click', ()=>{
    document.getElementById('userDropdown').classList.remove('open');
    openMyOrdersModal();
  });
  document.getElementById('ddLogout').addEventListener('click', ()=>{
    clearSession(); renderAuthArea(); renderCart();
    document.getElementById('userDropdown').classList.remove('open');
  });
  renderContaSection();
}
document.addEventListener('click', ()=>{
  const dd = document.getElementById('userDropdown');
  if(dd) dd.classList.remove('open');
});

/* ===================== CONTA SECTION ===================== */
function renderContaSection(){
  const loggedOut = document.getElementById('contaLoggedOut');
  const loggedIn = document.getElementById('contaLoggedIn');
  if(!loggedOut || !loggedIn) return;
  const user = currentUser();
  if(user){
    loggedOut.style.display = 'none';
    loggedIn.style.display = 'block';
    document.getElementById('contaWelcome').textContent = 'Olá, ' + user.name.split(' ')[0] + '!';
    document.getElementById('contaEmailShow').textContent = user.email;
  } else {
    loggedOut.style.display = 'block';
    loggedIn.style.display = 'none';
  }
}

function goToConta(){
  const el = document.getElementById('conta');
  if(!el) return;
  el.scrollIntoView({behavior:'smooth'});
  el.classList.add('conta-flash');
  setTimeout(()=>el.classList.remove('conta-flash'), 1500);
}

function requireLogin(action){
  if(currentUser()) return true;
  pendingAction = action;
  goToConta();
  return false;
}

const contaTabs = document.querySelectorAll('#contaTabs button');
contaTabs.forEach(b=>{
  b.addEventListener('click', ()=>{
    contaTabs.forEach(x=>x.classList.remove('active')); b.classList.add('active');
    document.getElementById('form-login').classList.toggle('active', b.dataset.form==='login');
    document.getElementById('form-cadastro').classList.toggle('active', b.dataset.form==='cadastro');
  });
});

function proceedAfterAuth(){
  renderAuthArea();
  const action = pendingAction;
  pendingAction = null;
  if(action==='checkout' && checkoutOverlay){
    prefillCheckout();
    checkoutOverlay.classList.add('open');
  } else if(action==='pedidos'){
    openMyOrdersModal();
  } else {
    renderContaSection();
  }
}

const loginForm = document.getElementById('loginForm');
if(loginForm) loginForm.addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('li-email').value.trim().toLowerCase();
  const senha = document.getElementById('li-senha').value;
  const user = getUsers().find(u=>u.email===email);
  const errEl = document.getElementById('loginError');
  if(!user || user.passHash !== hashPass(email, senha)){
    errEl.style.display='block'; return;
  }
  errEl.style.display='none';
  setSessionEmail(email);
  e.target.reset();
  showToast('👋 Bem-vindo(a) de volta, ' + user.name.split(' ')[0] + '!');
  proceedAfterAuth();
});

const cadastroForm = document.getElementById('cadastroForm');
if(cadastroForm) cadastroForm.addEventListener('submit', e=>{
  e.preventDefault();
  const nome = document.getElementById('ca-nome').value.trim();
  const nasc = document.getElementById('ca-nasc').value;
  const email = document.getElementById('ca-email').value.trim().toLowerCase();
  const tel = document.getElementById('ca-tel').value.trim();
  const endereco = document.getElementById('ca-endereco').value.trim();
  const senha = document.getElementById('ca-senha').value;
  const senha2 = document.getElementById('ca-senha2').value;
  const errEl = document.getElementById('cadastroError');

  const users = getUsers();
  if(users.some(u=>u.email===email)){
    errEl.textContent = 'Já existe uma conta com esse e-mail. Faça login.'; errEl.style.display='block'; return;
  }
  if(senha !== senha2){
    errEl.textContent = 'As senhas não coincidem.'; errEl.style.display='block'; return;
  }
  const idade = calcAge(nasc);
  if(nasc && idade === null){
    errEl.textContent = 'Data de nascimento inválida.'; errEl.style.display='block'; return;
  }
  if(idade < 18){
    errEl.textContent = 'É preciso ter 18 anos ou mais para criar uma conta no Radar da Barra.'; errEl.style.display='block'; return;
  }
  errEl.style.display='none';
  users.push({name:nome, email, phone:tel, address:endereco, birthdate:nasc, passHash:hashPass(email, senha)});
  saveUsers(users);
  setSessionEmail(email);
  e.target.reset();
  showToast('🎉 Conta criada! Bem-vindo(a), ' + nome.split(' ')[0] + '.');
  proceedAfterAuth();
});

const contaGoOrdersBtn = document.getElementById('contaGoOrdersBtn');
if(contaGoOrdersBtn) contaGoOrdersBtn.addEventListener('click', openMyOrdersModal);
const contaLogoutBtn = document.getElementById('contaLogoutBtn');
if(contaLogoutBtn) contaLogoutBtn.addEventListener('click', ()=>{
  clearSession(); renderAuthArea(); renderCart();
  showToast('Você saiu da conta.');
});

const contaDeleteBtn = document.getElementById('contaDeleteBtn');
if(contaDeleteBtn) contaDeleteBtn.addEventListener('click', async ()=>{
  const user = currentUser();
  if(!user) return;
  const ok = await customConfirm('Isso vai apagar sua conta e todos os seus pedidos salvos neste navegador. Essa ação não pode ser desfeita. Continuar?');
  if(!ok) return;
  saveUsers(getUsers().filter(u=>u.email!==user.email));
  saveOrders(loadOrders().filter(o=>o.email!==user.email));
  clearSession();
  renderAuthArea();
  renderCart();
  showToast('🗑️ Seus dados foram apagados deste navegador.');
});

function prefillCheckout(){
  const user = currentUser();
  if(!user) return;
  document.getElementById('co-nome').value = user.name || '';
  document.getElementById('co-tel').value = user.phone || '';
  if(user.address) document.getElementById('co-endereco').value = user.address;
}

/* ===================== ADMIN PANEL ===================== */
const ADMIN_USER = 'henry';
const ADMIN_HASH = 'i5gk';
const ADMIN_SESSION_KEY = 'radarBarraAdminSession';

function renderDbPanel(){
  const usersCountEl = document.getElementById('dbUsersCount');
  if(!usersCountEl) return;
  usersCountEl.textContent = getUsers().length;
  document.getElementById('dbOrdersCount').textContent = loadOrders().length;
  document.getElementById('dbReportsCount').textContent = loadReports().length;
  const jsonView = document.getElementById('dbJsonView');
  if(jsonView.classList.contains('open')){
    jsonView.textContent = JSON.stringify({
      usuarios: getUsers().map(u=>({name:u.name, email:u.email, phone:u.phone, address:u.address, birthdate:u.birthdate||null, passHash:u.passHash})),
      pedidos: loadOrders(),
      reportes: loadReports()
    }, null, 2);
  }
}

const adminOverlay = document.getElementById('adminOverlay');
const adminLoginBox = document.getElementById('adminLoginBox');
const adminDbBox = document.getElementById('adminDbBox');
function isAdminLogged(){ return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true'; }
function openAdminModal(){
  adminOverlay.classList.add('open');
  if(isAdminLogged()){
    adminLoginBox.style.display = 'none'; adminDbBox.style.display = 'block'; renderDbPanel();
  } else {
    adminLoginBox.style.display = 'block'; adminDbBox.style.display = 'none';
  }
}
const adminAccessLink = document.getElementById('adminAccessLink');
if(adminAccessLink) adminAccessLink.addEventListener('click', openAdminModal);
const adminCloseBtn = document.getElementById('adminCloseBtn');
if(adminCloseBtn) adminCloseBtn.addEventListener('click', ()=>adminOverlay.classList.remove('open'));
if(adminOverlay) adminOverlay.addEventListener('click', e=>{ if(e.target===adminOverlay) adminOverlay.classList.remove('open'); });

const adminLoginForm = document.getElementById('adminLoginForm');
if(adminLoginForm) adminLoginForm.addEventListener('submit', e=>{
  e.preventDefault();
  const user = document.getElementById('adm-user').value.trim().toLowerCase();
  const pass = document.getElementById('adm-pass').value;
  const errEl = document.getElementById('adminLoginError');
  if(user !== ADMIN_USER || hashPass(user, pass) !== ADMIN_HASH){
    errEl.style.display = 'block'; return;
  }
  errEl.style.display = 'none';
  sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
  e.target.reset();
  adminLoginBox.style.display = 'none';
  adminDbBox.style.display = 'block';
  renderDbPanel();
});

const adminLogoutBtn = document.getElementById('adminLogoutBtn');
if(adminLogoutBtn) adminLogoutBtn.addEventListener('click', ()=>{
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  adminOverlay.classList.remove('open');
});

const dbToggleJson = document.getElementById('dbToggleJson');
if(dbToggleJson) dbToggleJson.addEventListener('click', ()=>{
  document.getElementById('dbJsonView').classList.toggle('open');
  renderDbPanel();
});
const dbResetBtn = document.getElementById('dbResetBtn');
if(dbResetBtn) dbResetBtn.addEventListener('click', async ()=>{
  const ok = await customConfirm('Isso vai apagar todos os usuários, pedidos e reportes deste banco de teste. Continuar?');
  if(!ok) return;
  sessionStorage.removeItem(DB_KEYS.users);
  sessionStorage.removeItem(DB_KEYS.orders);
  sessionStorage.removeItem(DB_KEYS.reports);
  sessionStorage.removeItem(DB_KEYS.session);
  sessionStorage.removeItem('radarBarraCartState');
  cart = []; selectedMarket = null;
  renderCart(); renderOrderGrid(); renderMarketChips();
  renderAuthArea(); renderReports(); renderDbPanel();
});

/* ===================== INIT ===================== */
buildTicker();
renderAuthArea();
renderDbPanel();
renderCart();

const caNascEl = document.getElementById('ca-nasc');
if(caNascEl) caNascEl.max = new Date().toISOString().split('T')[0];

if(grid){ updateCounts(); renderPrices(); }
if(basketCarousel){ renderBasket360(); }
if(marketGrid){ renderMarkets(); }
if(faqList){ renderFaq(); }
if(reportsList){ renderReports(); }
if(pedidoMarketSelect){ renderMarketChips(); renderOrderGrid(); }
// Injeção dinâmica do rodapé global unificado
const footerContainer = document.getElementById('include-footer');
if(footerContainer) {
  footerContainer.innerHTML = `
    <footer>
      <div class="wrap">
        <div class="footer-bottom">
          <span>© 2026 Radar da Barra — feito por e para o bairro.</span>
          <span>Fontes: Ceasa-CE, Dieese/Conab</span>
        </div>
      </div>
    </footer>
  `;
}