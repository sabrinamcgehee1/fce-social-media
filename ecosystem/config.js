// ═══════════════════════════════════════════════════════════════════════════
// CONTENT HUB — config.js
// All default data: pillars, topics, script templates, creators list
// Edit this file to update brand data, pillars, or default content.
// ═══════════════════════════════════════════════════════════════════════════

// ── STORAGE KEYS ────────────────────────────────────────────────────────────
const STORAGE = {
  // Unified hub key (new)
  HUB:         'hub_v1',
  // Legacy keys for data migration
  LEGACY: {
    FC_TOPICS:    'fc8_scripts',
    FC_REC:       'fc8_rec',
    FC_REVISED:   'fc8_revised',
    FC_SCRIPTS:   'fc8_scripts',
    FC_DATES:     'fc8_dates',
    FC_CAL:       'fc8_calposts',
    FC_CUSTOM:    'fc8_custom_topics',
    FC_DELETED:   'fc8_deleted_builtins',
    SAB_TOPICS:   'sab_topics',
    SAB_REC:      'sab_rec',
    SAB_REVISED:  'sab_revised',
    SAB_DATES:    'sab_dates',
    SAB_POSTS:    'sab_posts',
    MIC_TOPICS:   'mic_topics_v5',
    MIC_REC:      'mic_rec_v4',
    MIC_REVISED:  'mic_revised_v4',
    MIC_DATES:    'mic_dates_v4',
    MIC_CAL:      'mic_cal_v4',
    MIC_NOTES:    'mic_notes_v4',
    SUB_MAIN:     'smhub2',
    SUB_ESSAY:    'smhub2_essay',
    APIKEY:       'fc8_apikey',
  }
};

// ── ACCOUNTS ─────────────────────────────────────────────────────────────────
const ACCOUNTS = {
  fc:  { id:'fc',  label:'Fluency Connect', emoji:'🌱', color:'#1DB994', storage:'hub_fc_v1'  },
  sab: { id:'sab', label:'Sabrina',         emoji:'💜', color:'#9b59b6', storage:'hub_sab_v1' },
  mic: { id:'mic', label:'Michael',         emoji:'🎬', color:'#3498db', storage:'hub_mic_v1' },
  sub: { id:'sub', label:'Sabrina English',        emoji:'✍️', color:'#e67e22', storage:'hub_sub_v1' },
};

// ── PROXY & API ───────────────────────────────────────────────────────────────
const PROXY_URL = 'https://anthropic-proxy.sabrinamcgehee1.workers.dev';
const AI_MODEL  = 'claude-sonnet-4-20250514';
const COMPANY_EMAIL = 'english@fluencyconnect.com';
const DEV_EMAIL     = 'mcgeheemichael22@gmail.com';

// ── SCRIPT VERSIONS & FORMATS ────────────────────────────────────────────────
const VERSIONS = ['attract','nurture','position','convert'];
const FORMATS  = ['video','carousel','story'];
const VERSION_LABELS = { attract:'Atrair', nurture:'Nutrir', position:'Posicionar', convert:'Converter' };
const FORMAT_LABELS  = { video:'🎬 Vídeo', carousel:'🖼 Carrossel', story:'⚡ Story' };
const VERSION_COLORS = { attract:'#1DB994', nurture:'#9b59b6', position:'#3498db', convert:'#e67e22' };

// ── CONVERT SCRIPT (used for Series and Convert pillar) ──────────────────────
const CONVERT_SCRIPT_FIELDS = {
  video: [
    { key:'hook',   label:'Hook',                   cls:'l-hook',    rows:2, ph:'Nome da série + Ep. X + gancho da história...' },
    { key:'prob',   label:'Problem / Agitation',    cls:'l-stakes',  rows:3, ph:'O problema + a dor que o público sente...' },
    { key:'sol',    label:'Solution (Value Prop)',   cls:'l-lesson',  rows:2, ph:'A solução única que você oferece...' },
    { key:'proof',  label:'Proof / Demo (Cred.)',    cls:'l-insight', rows:2, ph:'Prova, demo ou credencial...' },
    { key:'cta',    label:'Call to Action',          cls:'l-cta',     rows:2, ph:'CTA direto + palavra de ativação WhatsApp...' }
  ]
};

// Full script fields (FC has richer version-specific scripts):
const FC_SCRIPT_FIELDS = {
  attract: {
    video: [
      { key:'hook',   label:'Hook',   cls:'l-hook',    rows:2, ph:'Frase que prende em 3 segundos...' },
      { key:'stakes', label:'Stakes', cls:'l-stakes',  rows:3, ph:'O que estava em jogo? Por que importava?' },
      { key:'climax', label:'Clímax', cls:'l-climax',  rows:2, ph:'O momento de virada da história...' },
      { key:'lesson', label:'Lição',  cls:'l-lesson',  rows:2, ph:'O que você aprendeu...' },
      { key:'cta',    label:'CTA',    cls:'l-cta',     rows:1, ph:'Você já passou por isso? Comenta 👇' }
    ],
    carousel: [
      { key:'s1', label:'Slide 1 · Capa', cls:'l-cover', rows:2, ph:'"Frase que para o scroll."\n→ Foto + texto grande + fundo escuro.' },
      { key:'s2', label:'Slide 2', cls:'l-slide', rows:2, ph:'"O momento antes da virada."\n→ Foto/visual emocional.' },
      { key:'s3', label:'Slide 3', cls:'l-slide', rows:2, ph:'"O que aconteceu."\n→ Expressão vulnerável, olho na câmera.' },
      { key:'s4', label:'Slide 4', cls:'l-slide', rows:2, ph:'"A descoberta."\n→ Imagem de contexto. Texto em destaque.' },
      { key:'s5', label:'Slide 5', cls:'l-slide', rows:2, ph:'"A lição central."\n→ Texto limpo, fundo escuro.' },
      { key:'s6', label:'Slide 6 · CTA', cls:'l-cta', rows:2, ph:'"Você já passou por isso? Comenta 👇"\n→ Foto olhando pra câmera. Texto simples.' }
    ],
    story: [
      { key:'s1', label:'Slide 1', cls:'l-text', rows:2, ph:'TEXTO: "Frase de identificação."\nVISUAL: Sabrina confiante.' },
      { key:'s2', label:'Slide 2', cls:'l-text', rows:2, ph:'TEXTO: "A virada emocional."\nVISUAL: Expressão muda.' },
      { key:'s3', label:'Slide 3', cls:'l-text', rows:2, ph:'TEXTO: "O contexto."\nVISUAL: Foto de cenário.' },
      { key:'s4', label:'Slide 4', cls:'l-text', rows:2, ph:'TEXTO: "O problema real."\nVISUAL: Expressão perdida.' },
      { key:'s5', label:'Slide 5', cls:'l-text', rows:2, ph:'TEXTO: "Você já sentiu isso?"\nVISUAL: Olho direto na câmera.' },
      { key:'s6', label:'Slide 6 · CTA', cls:'l-sticker', rows:3, ph:'TEXTO: "👇 Comenta aqui"\nSTICKER: Enquete → "Já passei 😅" / "Nunca travei 💪"\nVISUAL: Expressão acolhedora.' }
    ]
  },
  nurture: {
    video: [
      { key:'hook',     label:'Hook',    cls:'l-hook',    rows:2, ph:'Um erro ou problema muito comum...' },
      { key:'problem',  label:'Problema',cls:'l-problem', rows:3, ph:'Por que esse problema acontece...' },
      { key:'why',      label:'Por quê', cls:'l-why',     rows:2, ph:'A causa raiz — não óbvia...' },
      { key:'steps',    label:'3 Passos',cls:'l-steps',   rows:4, ph:'1. ...\n2. ...\n3. ...' },
      { key:'practice', label:'Prática', cls:'l-practice',rows:2, ph:'Exercício imediato que o seguidor pode fazer agora...' },
      { key:'cta',      label:'CTA',     cls:'l-cta',     rows:1, ph:'Salva esse vídeo pra quando você precisar 🔖' }
    ],
    carousel: [
      { key:'s1', label:'Slide 1 · Capa', cls:'l-cover', rows:2, ph:'"Por que X acontece? (e como parar)"\n→ Título grande. Subtítulo de valor.' },
      { key:'s2', label:'Slide 2', cls:'l-slide', rows:2, ph:'"Não é falta de X. É falta de Y."\n→ Texto contrastante.' },
      { key:'s3', label:'Slide 3 · Passo 1', cls:'l-steps', rows:2, ph:'"Passo 1 ✅ [ação concreta]"\n→ Layout numerado, ícone do passo.' },
      { key:'s4', label:'Slide 4 · Passo 2', cls:'l-steps', rows:2, ph:'"Passo 2 ✅ [ação concreta]"\n→ Exemplo prático.' },
      { key:'s5', label:'Slide 5 · Passo 3', cls:'l-steps', rows:2, ph:'"Passo 3 ✅ [ação concreta]"\n→ Frase de impacto.' },
      { key:'s6', label:'Slide 6', cls:'l-slide', rows:2, ph:'"Resumo: menos X, mais Y."\n→ Slide de resumo.' },
      { key:'s7', label:'Slide 7 · CTA', cls:'l-cta', rows:2, ph:'"Salva esse carrossel 🔖 Manda pra quem precisa."\n→ Foto da Sabrina ou do casal.' }
    ],
    story: [
      { key:'s1', label:'Slide 1', cls:'l-text', rows:2, ph:'TEXTO: "Por que X acontece?"\nVISUAL: Fundo escuro. Texto grande.' },
      { key:'s2', label:'Slide 2', cls:'l-text', rows:2, ph:'TEXTO: "Não é X. É Y."\nVISUAL: Texto slide simples.' },
      { key:'s3', label:'Slide 3 · Dica 1', cls:'l-text', rows:2, ph:'TEXTO: "Dica 1: [ação curta]"\nVISUAL: Ícone + texto rápido.' },
      { key:'s4', label:'Slide 4 · Dica 2', cls:'l-text', rows:2, ph:'TEXTO: "Dica 2: [ação curta]"\nVISUAL: Texto slide.' },
      { key:'s5', label:'Slide 5 · Dica 3', cls:'l-text', rows:2, ph:'TEXTO: "Dica 3: [ação curta]"\nVISUAL: Frase de impacto.' },
      { key:'s6', label:'Slide 6 · CTA', cls:'l-sticker', rows:3, ph:'TEXTO: "Salva isso 👆 Ver carrossel completo no feed"\nSTICKER: Link → publicação do carrossel\nVISUAL: Seta apontando pro feed.' }
    ]
  },
  position: {
    video: [
      { key:'hook',    label:'Hook',         cls:'l-hook',    rows:2, ph:'Credencial ou observação única que te posiciona...' },
      { key:'exp',     label:'Experiência',  cls:'l-exp',     rows:3, ph:'O que você viveu / passou...' },
      { key:'obs',     label:'Observação',   cls:'l-obs',     rows:3, ph:'O que você viu nos alunos / outros...' },
      { key:'insight', label:'Insight',      cls:'l-insight', rows:2, ph:'A conclusão não-óbvia que só você tem...' },
      { key:'cta',     label:'CTA',          cls:'l-cta',     rows:1, ph:'Link na bio / Segue pra mais...' }
    ],
    carousel: [
      { key:'s1', label:'Slide 1 · Capa', cls:'l-cover', rows:2, ph:'"O que a maioria não ensina — e que muda tudo."\n→ Tipografia forte. Fundo escuro.' },
      { key:'s2', label:'Slide 2 · ❌', cls:'l-slide', rows:3, ph:'"Cursos tradicionais: [limitação]."\n"Resultado: você [problema]."\n→ Paleta fria. Símbolo ❌.' },
      { key:'s3', label:'Slide 3 · ✅', cls:'l-steps', rows:2, ph:'"O que realmente funciona: [método]."\n→ Paleta quente/verde. Símbolo ✅.' },
      { key:'s4', label:'Slide 4', cls:'l-slide', rows:2, ph:'"Aprendi isso [contexto pessoal]."\n→ Foto pessoal se possível.' },
      { key:'s5', label:'Slide 5', cls:'l-slide', rows:2, ph:'"No Fluency Connect, [diferencial]."\n→ Visual do método/app.' },
      { key:'s6', label:'Slide 6 · CTA', cls:'l-cta', rows:2, ph:'"Quer aprender do jeito certo? Link na bio. 👆"\n→ CTA simples.' }
    ],
    story: [
      { key:'s1', label:'Slide 1', cls:'l-text', rows:2, ph:'TEXTO: "Opinião quente 🔥"\nVISUAL: Fundo vermelho/laranja.' },
      { key:'s2', label:'Slide 2', cls:'l-text', rows:2, ph:'TEXTO: "[Afirmação contraintuitiva]."\nVISUAL: Texto grande. Fundo escuro.' },
      { key:'s3', label:'Slide 3', cls:'l-text', rows:2, ph:'TEXTO: "[O que realmente funciona]."\nVISUAL: Verde de destaque.' },
      { key:'s4', label:'Slide 4', cls:'l-text', rows:2, ph:'TEXTO: "Eu aprendi isso [contexto]."\nVISUAL: Sabrina, momento autêntico.' },
      { key:'s5', label:'Slide 5', cls:'l-text', rows:2, ph:'TEXTO: "O Fluency Connect foi feito pra isso."\nVISUAL: Brand slide.' },
      { key:'s6', label:'Slide 6 · CTA', cls:'l-sticker', rows:3, ph:'TEXTO: "Link na bio 👆"\nSTICKER: Link → bio\nVISUAL: Seta animada apontando pra cima.' }
    ]
  },
  convert: {
    video: [
      { key:'hook',   label:'Hook',              cls:'l-hook',    rows:2, ph:'Nome da série + Ep. X + gancho da história...' },
      { key:'prob',   label:'Problem/Agitation', cls:'l-stakes',  rows:3, ph:'O problema e a dor. Storytelling...' },
      { key:'sol',    label:'Solution',          cls:'l-lesson',  rows:2, ph:'A solução — proposta de valor...' },
      { key:'proof',  label:'Proof/Demo',        cls:'l-insight', rows:2, ph:'Prova, demo, credencial...' },
      { key:'cta',    label:'CTA',               cls:'l-cta',     rows:2, ph:'Manda ESTRATÉGIA no WhatsApp. Link na bio. É de graça.' }
    ],
    carousel: [
      { key:'s1', label:'Slide 1 · Capa', cls:'l-cover', rows:2, ph:'"Série: [Nome] — Ep. 1 🎬"\n→ Branding forte. "EP. 1" em destaque.' },
      { key:'s2', label:'Slide 2', cls:'l-slide', rows:2, ph:'"[Gancho da história]"\n→ Foto ou ilustração. Tom de cena.' },
      { key:'s3', label:'Slide 3', cls:'l-slide', rows:2, ph:'"O que aprendi: [lição central]"\n→ Frase de impacto.' },
      { key:'s4', label:'Slide 4 · Teaser', cls:'l-preview', rows:2, ph:'"No Ep. 2: [teaser do próximo] 👀"\n→ Teaser visual. Cria curiosidade.' },
      { key:'s5', label:'Slide 5 · CTA', cls:'l-cta', rows:3, ph:'"Pega o Ebook de estratégias — de graça."\n"Manda ESTRATÉGIA no WhatsApp. Link na bio. 👆"\n→ Visual do Ebook ou WhatsApp. CTA direto.' }
    ],
    story: [
      { key:'s1', label:'Slide 1', cls:'l-text', rows:2, ph:'TEXTO: "Série: [Nome]"\nVISUAL: Branding da série. Ep. 1 no canto.' },
      { key:'s2', label:'Slide 2', cls:'l-text', rows:2, ph:'TEXTO: "Ep. 1 já no feed 👆"\nVISUAL: Seta apontando pro feed.' },
      { key:'s3', label:'Slide 3', cls:'l-text', rows:2, ph:'TEXTO: "Quer as estratégias que eu usei?"\nVISUAL: Sabrina olhando pra câmera.' },
      { key:'s4', label:'Slide 4', cls:'l-text', rows:2, ph:'TEXTO: "É de graça."\nVISUAL: Texto enorme. Fundo escuro.' },
      { key:'s5', label:'Slide 5', cls:'l-text', rows:2, ph:'TEXTO: "Manda ESTRATÉGIA no WhatsApp"\nVISUAL: Ícone do WhatsApp em destaque.' },
      { key:'s6', label:'Slide 6 · CTA', cls:'l-sticker', rows:3, ph:'TEXTO: "Link na bio 👆"\nSTICKER: Link → bio do Instagram\nVISUAL: Sabrina apontando pra cima.' }
    ]
  }
};

// Sab and Michael use the same rich version-specific scripts as FC
const PILLAR_SCRIPT_FIELDS = FC_SCRIPT_FIELDS;

// ── SAB/MIC CAROUSEL FIELDS (from Sabrina example file) ──────────────────────
const SAB_MIC_CAROUSEL_FIELDS = [
  { key:'hook',   label:'Slide 1 — Hook (capa)',      cls:'l-cover',  rows:2, ph:'Frase impactante que faz parar o scroll...' },
  { key:'slide2', label:'Slide 2',                    cls:'l-slide',  rows:2, ph:'Ponto 1 — o mais importante...' },
  { key:'slide3', label:'Slide 3',                    cls:'l-slide',  rows:2, ph:'Ponto 2...' },
  { key:'slide4', label:'Slide 4',                    cls:'l-slide',  rows:2, ph:'Ponto 3...' },
  { key:'slide5', label:'Slide 5',                    cls:'l-slide',  rows:2, ph:'Ponto 4 / exemplo / prova...' },
  { key:'slide6', label:'Slide 6',                    cls:'l-slide',  rows:2, ph:'Ponto 5 / comparação / dados...' },
  { key:'slide7', label:'Slide 7',                    cls:'l-slide',  rows:2, ph:'Resumo ou insight final...' },
  { key:'cta',    label:'Slide 8 — CTA',              cls:'l-cta',    rows:2, ph:'CTA com palavra do WhatsApp ou link na bio...' }
];

// ── SAB/MIC STORY FIELDS (from Sabrina example file) ─────────────────────────
const SAB_MIC_STORY_FIELDS = [
  { key:'hook',   label:'Frame 1 — Gancho / abertura',              cls:'l-hook',     rows:2, ph:'Frase ou imagem que faz a pessoa clicar pro próximo frame...' },
  { key:'frame2', label:'Frame 2 — Contexto',                       cls:'l-slide',    rows:2, ph:'Contexto rápido — o que é isso, por que importa...' },
  { key:'frame3', label:'Frame 3 — Conteúdo principal',             cls:'l-lesson',   rows:2, ph:'O conteúdo real — dica, bastidor, momento, opinião...' },
  { key:'frame4', label:'Frame 4 — Prova / detalhe',                cls:'l-insight',  rows:2, ph:'Prova, foto, print, detalhe que apoia o frame 3...' },
  { key:'frame5', label:'Frame 5 — Reflexão ou pergunta',           cls:'l-steps',    rows:2, ph:'Pergunta pra engajar ou reflexão pessoal...' },
  { key:'cta',    label:'Frame 6 — CTA (sticker / link / resposta)',cls:'l-cta',      rows:2, ph:'Sticker de resposta / caixa de pergunta / link WhatsApp / CTA suave...' }
];

// ── PILLARS ────────────────────────────────────────────────────────────────────
const PILLARS = {
  fc: [
    { id:'p1', name:'False Beginner Breakthrough', color:'#1DB994',
      subtag:'Fluência · Método · Bloqueio · Mindset',
      tags:['Storytelling','Double Down','Educational','Séries'],
      insight:'Gatilho principal: "Estudei inglês por anos e ainda não falo" — qualquer conteúdo que confirme que esse não é problema de inteligência ou talento gera alto compartilhamento. O público quer ser absolvido e mostrar um caminho.',
      desc:'Para quem estudou inglês por anos mas ainda não consegue falar. Esse é o maior grupo de brasileiros — eles têm vocabulário, têm gramática, mas travam na hora da conversa real. O problema não é linguístico, é metodológico e psicológico.',
      desc2:'A história da Sabrina (travou com um americano depois de anos de estudo) e a história do Michael (aprendeu português na terceira tentativa, falando desde o dia 1) são os âncoras narrativos desse pilar. É o pilar de maior identificação do público.' },
    { id:'p2', name:'Real-Life Fluency', color:'#e05252',
      subtag:'Inglês real · Situações práticas · Conversação · Vocabulário ativo',
      tags:['Educational','Comparison','Séries','Carrossel'],
      insight:'Gatilho principal: "Para de falar X — diz Y" gera saves e compartilhamentos imediatos. Comparações diretas (Hollywood English vs Real English) criam surpresa e curiosidade. O Michael como nativo é a autoridade máxima aqui.',
      desc:'O inglês que ninguém aprende no livro didático. Frases reais de nativos, small talk, reações naturais, inglês do trabalho, inglês de viagem. A Sabrina viveu nos EUA e tem histórias reais — restaurante, trabalho, entrevista. O Michael é a fonte nativa para validar o que é real vs o que é formal demais.',
      desc2:'Conteúdo de alto valor percebido e alta taxa de salvamento. O público salva porque quer usar. Formatos ideais: comparação (textbook vs real), listas de frases, correções de erros comuns.' },
    { id:'p3', name:'Pronúncia + Confiança', color:'#e0a030',
      subtag:'Pronúncia · Ritmo · Confiança · Desbloqueio',
      tags:['Storytelling','Educational','Authority','Séries'],
      insight:'Gatilho principal: Mostrar que o problema não é o sotaque — é o ritmo. Isso é contraintuitivo e gera debate e engajamento. "Falar rápido não é fluência — é ansiedade" é o tipo de frase que para o scroll.',
      desc:'O pilar que aborda a parte mais emocional do aprendizado: o medo de soar errado, o sotaque, a vergonha de falar. A Sabrina tem a história da apresentação tremendo. O Michael tem a história de perceber que soava gringo demais no ritmo, não nos sons.',
      desc2:'Conteúdo que valida a insegurança do público e oferece uma saída prática. O foco é em ritmo e entonação (stress-timed vs syllable-timed), não em sons isolados — porque é o que realmente muda como a pessoa soa.' },
    { id:'p4', name:'Culture Immersion', color:'#5b8dee',
      subtag:'Cultura americana · Choque cultural · Imersão em casa · Casal intercultural',
      tags:['Storytelling','Comparison','Educational','Séries','Carrossel'],
      insight:'Diferencial único: Nenhum outro professor de inglês brasileiro tem um americano nativo como parceiro. O Michael como co-apresentador valida tudo o que a Sabrina ensina. Esse é o ativo mais difícil de replicar pelos concorrentes.',
      desc:'O pilar que nenhum concorrente tem: o casal bilíngue intercultural como fonte de conteúdo. Michael explica a cultura americana de dentro. Sabrina explica o choque cultural de quem chegou de fora. Os dois juntos criam perspectiva que não existe em nenhum outro canal de inglês.',
      desc2:'Conteúdo de imersão em casa (sem sair do Brasil), diferenças culturais Brasil × EUA, por que americanos parecem rudes, como criar ambiente de inglês no dia a dia. Alto potencial viral porque resolve uma crença limitante: "preciso ir pros EUA para ser fluente".' }
  ],
  sab: [
    { id:'p1', name:'A nossa vida — eu, Michael e as gêmeas', color:'#d4537e',
      subtag:'Lifestyle · Casal · Maternidade twin · Brasil × EUA',
      tags:['Attract','Nurture','Storytelling','Double Down'],
      desc:'Esse é o pilar que nenhuma outra professora de inglês tem. Vida real com marido americano, gêmeas bilíngues, a dinâmica de um casal intercultural. Conteúdo com Michael, rotina das filhas, choque cultural, planos de voltar pros EUA.',
      desc2:'Inspiração: Alex & Jon, Brad & Mill, Alexa Westover, Emmietanner25. O que prende nesses criadores é a autenticidade do casal e da família real.' },
    { id:'p2', name:'Inglês real + Fluency Connect', color:'#e09840',
      subtag:'Educacional · Autoridade · Escola · Resultados',
      tags:['Position','Convert','Educational','Authority','Series'],
      desc:'Aqui entra o conteúdo de inglês — mini-aulas, mitos, erros comuns, dicas da vida real. E também os bastidores da escola, reviews de alunos, metodologia. Esse pilar tem overlap direto com o @FluencyConnect.',
      desc2:'A diferença do seu inglês vs o da escola: na escola é mais estruturado, mais técnico. No seu perfil é mais pessoal — "eu aprendi assim", "isso aconteceu comigo".',
      collab:'Collab tip: quando você postar conteúdo de inglês no seu perfil, marca @FluencyConnect. Audiência do seu perfil vira aluno da escola.' },
    { id:'p3', name:'Mulher que constrói — produtividade, leitura, crescimento', color:'#5ba88a',
      subtag:'Lifestyle intelectual · Rotina · Livros · Finanças pessoais',
      tags:['Attract','Nurture','Storytelling','Educational'],
      desc:'Esse pilar é o que te diferencia de ser "só mais uma professora de inglês com família bonita." Você estuda francês, tem formação em contabilidade, gosta de ler, quer entender finanças.',
      desc2:'Conteúdo de rotina, o que você está lendo, o que está aprendendo, como você organiza a vida entre escola + bebês + estudos. Não precisa ser especialista — precisa ser honesta sobre o processo.',
      note:'⚠️ O Pilar 3 só funciona se for real. Se você não está de fato lendo, estudando francês, acompanhando finanças — não force. O que prende na Isabel Radford e na Nana Del Rey é que elas realmente fazem aquilo.' }
  ],
  mic: [
    { id:'p1', name:'🌎 Americano no Brasil', color:'#1DB994',
      subtag:'Lifestyle · Cultura · Família · Paternidade twin · Brasil × EUA',
      tags:['Storytelling','Double Down','Série','Atrair','Nutrir'],
      insight:'Diferencial: Conteúdo que gera reação emocional forte — surpresa, identificação, orgulho. Reações, comparações, momentos com as gêmeas. Conecta diretamente com a audiência da Sabrina.',
      desc:'O pilar mais único do Michael. Nenhum outro criador tem essa perspectiva: americano nativo, casado com brasileira, pai de gêmeas, vivendo no Brasil. Isso cobre vida cultural, choque de costumes, família bilíngue, paternidade, casamento intercultural e comparações reais entre os dois países.',
      desc2:'Cobre tópicos de: choques culturais, vida no Brasil, coisas que ama no Brasil, gêmeas bilíngues, casamento intercultural, descoberta das gêmeas, paternidade jovem, rotina familiar bilíngue. É o pilar de maior identificação e viralidade — conteúdo que ninguém mais pode replicar.' },
    { id:'p2', name:'🎙️ Idiomas & Aprendizado', color:'#e05252',
      subtag:'Inglês · Português · Bilinguismo · Método · Fluência',
      tags:['Educational','Authority','Double Down','Posicionar','Nutrir'],
      insight:'Diferença Michael vs Sabrina: Ela ensina como aluna que virou professora. Ele ensina como nativo. São ângulos complementares, não competidores. Usa para enviar audiência ao @FluencyConnect.',
      desc:'Conteúdo de idiomas com o ângulo exclusivo de nativo americano que aprendeu português. Michael ensina inglês de um lugar que nenhuma professora brasileira pode ocupar: ele é o nativo. Ao mesmo tempo documenta sua própria jornada com o português, criando espelhamento com a audiência.',
      desc2:'Tópicos incluem: como aprendeu português, hacks de inglês, maior erro dos brasileiros no speaking, como pensar em inglês, pronúncia e ritmo, rotina de idiomas, o método que funciona, inglês para situações reais.' },
    { id:'p3', name:'⚡ Tech · Lógica · Disciplina', color:'#e0a030',
      subtag:'Programação · Xadrez · Fitness · Produtividade · Mentalidade',
      tags:['Storytelling','Educational','Authority','Atrair','Converter'],
      insight:'Estratégia: Atrai audiência de devs, entusiastas de produtividade e fitness. Xadrez e fitness funcionam como "proof of character" — alguém que pratica o que prega sobre disciplina.',
      desc:'O pilar que diferencia Michael de ser "só um gringo no Brasil". Mostra profundidade intelectual e disciplina pessoal: estudante de dev nos EUA, jogador de xadrez, atleta mantendo rotina como pai.',
      desc2:'Tópicos incluem: jornada em programação, inglês para devs, xadrez como ferramenta mental, voltar a treinar com rotina cheia, disciplina com gêmeas, produtividade e hábitos, linguagens de programação.' }
  ],
  sub: [
    { id:'p1', name:'Life Between Two Countries',  color:'#1DB994', desc:'The pillar no other creator can copy. A Brazilian woman married to an American, raising bilingual twins, navigating life between São Paulo and the US.' },
    { id:'p2', name:'Learning in Public',          color:'#e0a030', desc:'Documenting growth: language, money, motherhood, entrepreneurship. Raw and honest.' }
  ]
};

// ── DEFAULT TOPICS ─────────────────────────────────────────────────────────────
const DEFAULT_TOPICS_FC = [
  {id:1,pillar:'p1',type:'regular',title:'O momento que a Sabrina percebeu que não conseguia falar',sub:'Depois de anos estudando — até que algo finalmente mudou'},
  {id:2,pillar:'p1',type:'regular',title:'O primeiro dia do Michael aprendendo português',sub:'Como ele mudou o método 3 vezes — e o que isso ensina sobre inglês'},
  {id:3,pillar:'p1',type:'regular',title:'Ver Netflix NÃO vai te deixar fluente',sub:'Por que imersão passiva não treina fala — e o que funciona'},
  {id:4,pillar:'p1',type:'regular',title:'Seu inglês não está travado — sua confiança que está',sub:'Por que o bloqueio de fala é psicológico, não linguístico'},
  {id:5,pillar:'p1',type:'regular',title:'A diferença entre o aluno que fala em 30 dias e os que não conseguem',sub:'O padrão que vemos em quem aprende rápido vs quem fica preso'},
  {id:6,pillar:'p1',type:'regular',title:'4 passos diários que todo false beginner precisa',sub:'A rotina mínima que cria progresso consistente'},
  {id:7,pillar:'p1',type:'serie',title:'Stop Saying This in English — Série',sub:'Erros de vocabulário que fazem brasileiros soarem errado'},
  {id:8,pillar:'p1',type:'serie',title:'False Beginner Fix — Série',sub:'Soluções diretas para os bloqueios mais comuns'},
  {id:9,pillar:'p1',type:'serie',title:'Fluency Myth vs Reality — Série',sub:'Derrubando as crenças que mantêm brasileiros presos'},
  {id:10,pillar:'p2',type:'regular',title:'A primeira vez que a Sabrina pediu comida nos EUA e entrou em pânico',sub:'O diálogo que ela deveria ter usado — e como você pode estar preparado'},
  {id:11,pillar:'p2',type:'regular',title:'Inglês de Hollywood NÃO é inglês real',sub:'Por que filmes e séries criam expectativas erradas sobre como americanos falam'},
  {id:12,pillar:'p2',type:'regular',title:'3 padrões de small talk que você pode memorizar',sub:'Como iniciar e manter conversas sem travar'},
  {id:13,pillar:'p2',type:'regular',title:'A primeira entrevista de trabalho do Michael no Brasil',sub:'O que ele aprendeu sobre falar com confiança — mesmo sem perfeição'},
  {id:14,pillar:'p2',type:'regular',title:'Se você não usa seu inglês na vida real, você está memorizando',sub:'A diferença entre conhecimento passivo e habilidade ativa'},
  {id:15,pillar:'p2',type:'regular',title:'10 reações naturais que nativos usam',sub:'Substituições imediatas para "very interesting" e "that\'s nice"'},
  {id:16,pillar:'p2',type:'serie',title:'Real English vs Textbook English — Série',sub:'Comparações diretas entre o inglês ensinado e o inglês falado'},
  {id:17,pillar:'p2',type:'serie',title:'Speak More Naturally — Série',sub:'Substituições imediatas para soar menos robótico em inglês'},
  {id:18,pillar:'p2',type:'serie',title:'Real Conversation Phrases — Série',sub:'Frases reais que nativos usam em situações do dia a dia'},
  {id:19,pillar:'p3',type:'regular',title:'O momento que o Michael percebeu que soava gringo demais',sub:'Como ritmo e entonação mudaram tudo na pronúncia dele em português'},
  {id:20,pillar:'p3',type:'regular',title:'Parar de tentar soar perfeito — começa a soar natural',sub:'Por que a busca pela perfeição destrói a naturalidade'},
  {id:21,pillar:'p3',type:'regular',title:'A primeira apresentação da Sabrina em inglês — tremendo, suando',sub:'Como ela sobreviveu e o que aprendeu sobre falar sob pressão'},
  {id:22,pillar:'p3',type:'regular',title:'Mude isso na sua pronúncia e você soa mais nativo',sub:'A diferença entre stress-timed e syllable-timed que ninguém ensina'},
  {id:23,pillar:'p3',type:'regular',title:'O colega de trabalho da Sabrina não sabia que ela era brasileira',sub:'O momento que ela percebeu que havia chegado à fluência real'},
  {id:24,pillar:'p3',type:'regular',title:'Inglês rápido NÃO é inglês fluente',sub:'O mito da velocidade — e o que realmente é fluência'},
  {id:25,pillar:'p3',type:'serie',title:'Brazilian English Mistakes — Série',sub:'Os erros de pronúncia específicos que todo brasileiro comete'},
  {id:26,pillar:'p3',type:'serie',title:'Pronounce It Like a Native — Série',sub:'Correções de pronúncia específicas para o brasileiro'},
  {id:27,pillar:'p4',type:'regular',title:'O primeiro choque cultural da Sabrina nos EUA',sub:'Quando comportamentos normais no Brasil parecem errados nos EUA'},
  {id:28,pillar:'p4',type:'regular',title:'Aprender inglês é 50% idioma, 50% cultura',sub:'Por que conhecimento linguístico sem contexto cultural cria erros'},
  {id:29,pillar:'p4',type:'regular',title:'Como criar imersão em inglês sem sair do Brasil',sub:'5 maneiras de construir ambiente de inglês no dia a dia'},
  {id:30,pillar:'p4',type:'regular',title:'Por que americanos soam rudes pra brasileiros',sub:'Diretividade vs indiretividade — como cultura molda comunicação'},
  {id:31,pillar:'p4',type:'regular',title:'Se seu celular está em português, você está sabotando sua fluência',sub:'Por que o ambiente digital é mais poderoso do que você pensa'},
  {id:32,pillar:'p4',type:'regular',title:'Michael explica por que americanos falam de jeito diferente',sub:'Contrações, reduções e fala conectada — o inglês que nativos realmente usam'},
  {id:33,pillar:'p4',type:'serie',title:'Culture Shock — Série',sub:'Diferenças culturais Brasil vs EUA explicadas por quem viveu dos dois lados'},
  {id:34,pillar:'p4',type:'serie',title:'Home Immersion — Série',sub:'Como criar ambiente de imersão total em casa no Brasil'},
  {id:35,pillar:'p4',type:'serie',title:'Brazilian + American Perspective — Série',sub:'Michael e Sabrina discutem diferenças de linguagem de ângulos opostos'}
];

const DEFAULT_TOPICS_SAB = [
  {id:1,pillar:'p1',type:'regular',title:'A nossa história — como tudo começou',sub:'O amor que mudou a trajetória de vida de Sabrina'},
  {id:2,pillar:'p1',type:'regular',title:'Michael e eu — diferenças culturais reais',sub:'Convivência diária com um americano, o que ninguém te conta'},
  {id:3,pillar:'p1',type:'regular',title:'Vida de volta ao Brasil depois de 8 anos fora',sub:'Choque cultural invertido — estranhar o próprio país'},
  {id:4,pillar:'p1',type:'regular',title:'Gêmeas bilíngues — criar filhos em dois idiomas',sub:'Método OPOL na prática, sem romantizar'},
  {id:5,pillar:'p1',type:'regular',title:'O que eu sinto falta dos EUA',sub:'Versão honesta — organização, outono, e o que o Brasil compensa'},
  {id:6,pillar:'p1',type:'regular',title:'Rotina de mãe empreendedora com gêmeas',sub:'Caos organizado, consistência imperfeita'},
  {id:7,pillar:'p1',type:'regular',title:'Casamento intercultural — o que ninguém te conta',sub:'Mais consciência, mais curiosidade, menos julgamento'},
  {id:8,pillar:'p1',type:'serie',title:'Vida Entre Dois Mundos — Série',sub:'A série completa sobre vida entre Brasil e EUA'},
  {id:9,pillar:'p2',type:'regular',title:'3 diferenças de comunicação Brasil vs EUA',sub:'Como entender a cultura americana muda seu inglês'},
  {id:10,pillar:'p2',type:'regular',title:'Por que brasileiros travam ao falar inglês',sub:'Não é vocabulário — é psicologia'},
  {id:11,pillar:'p2',type:'regular',title:'Inglês que aprendi vivendo nos EUA de verdade',sub:'O que nenhuma aula ensina'},
  {id:12,pillar:'p3',type:'regular',title:'Minha jornada criando o Fluency Connect',sub:'Da sala de aula ao produto digital'},
  {id:13,pillar:'p3',type:'regular',title:'Como gravar 5 vídeos em 1 hora sendo mãe',sub:'Processo real, sem glamour'},
  {id:14,pillar:'p4',type:'regular',title:'Como aprendi a parar de esperar estar pronta',sub:'Começar antes, ajustar no caminho'},
  {id:15,pillar:'p4',type:'regular',title:'Disciplina vs motivação — o que aprendi sendo mãe e empreendedora',sub:'Sistema bate sentimento sempre'}
];

const DEFAULT_TOPICS_MIC = [
  {id:1,pillar:'p1',type:'regular',title:'Choques Culturais Inesperados',sub:'O dia que descobri que o Brasil funciona com regras invisíveis'},
  {id:2,pillar:'p2',type:'regular',title:'Como Aprendi Português Sozinho',sub:'O método que usei — e que funciona pro inglês também'},
  {id:3,pillar:'p2',type:'regular',title:'Por Que Brasileiros Travam ao Falar Inglês',sub:'Não é falta de vocabulário — é algo mais profundo'},
  {id:4,pillar:'p3',type:'regular',title:'Como Penso em Dois Idiomas',sub:'O que acontece no cérebro de um bilíngue — e como acelera o aprendizado'},
  {id:5,pillar:'p3',type:'regular',title:'Disciplina vs Motivação no Aprendizado',sub:'Por que esperar motivação é o maior erro de quem aprende inglês'},
  {id:6,pillar:'p1',type:'regular',title:'O Primeiro Churrasco Brasileiro',sub:'Um americano entendendo o ritual social mais importante do Brasil'},
  {id:7,pillar:'p2',type:'regular',title:'Erros de Inglês que Brasileiros Cometem',sub:'3 erros que um nativo nota imediatamente — e como corrigir'},
  {id:8,pillar:'p1',type:'serie',title:'Americano no Brasil — Série',sub:'Documentando minha jornada vivendo no Brasil'},
  {id:9,pillar:'p2',type:'serie',title:'Destravando o Inglês — Série',sub:'Exercícios reais do Fluency Connect para destravar o speaking'}
];

const DEFAULT_TOPICS_SUB = [
  {id:1,pillar:'p1',type:'essay',title:'How we met — an American and a Brazilian',sub:'The love story that no one else can copy',series:null},
  {id:2,pillar:'p1',type:'essay',title:'Cultural differences that almost broke us',sub:'When "giving space" feels like abandonment',series:null},
  {id:3,pillar:'p1',type:'essay',title:'Raising bilingual twins — what actually works',sub:'Real strategies from a language teacher raising bilingual kids',series:'Bilingual Babies'},
  {id:4,pillar:'p1',type:'essay',title:'Twin mom entrepreneur — the real routine',sub:'Organized chaos, no filter',series:null},
  {id:5,pillar:'p1',type:'essay',title:'Coming back to Brazil after 8 years',sub:'Reverse culture shock nobody warns you about',series:null},
  {id:6,pillar:'p1',type:'essay',title:'What Americans get wrong about Brazil',sub:'Stereotypes that die when you actually live here',series:null},
  {id:7,pillar:'p1',type:'essay',title:'What my daughters taught me about identity',sub:'Losing yourself in motherhood — and finding your way back',series:'Motherhood & Identity'},
  {id:8,pillar:'p2',type:'essay',title:'My relationship with money — evolution',sub:'From accounting degree to real-world financial behavior',series:'Finance Journey'},
  {id:9,pillar:'p2',type:'essay',title:'Learning French — the polyglot journey',sub:'How a third language rewires your brain',series:'Learning French'},
  {id:10,pillar:'p2',type:'essay',title:'Self-development that actually works',sub:'2 years of consuming content changed nothing. Here\'s what did.',series:null},
  {id:11,pillar:'p2',type:'essay',title:'Building an audience from zero',sub:'Documenting the real process — no shortcuts',series:'Building from Zero'},
  {id:12,pillar:'p2',type:'essay',title:'Investing as a Brazilian in America',sub:'Starting from zero at 30',series:'Immigrant Investor'}
];

// ── INSPIRATION CREATORS ────────────────────────────────────────────────────
const CREATOR_CATEGORIES = [
  { id:'amBrazil',  label:'🇺🇸🇧🇷 Americans Living in Brazil',         query:'Americans living in Brazil TikTok 2025 trending creator' },
  { id:'teachEng',  label:'🏫 Americans Teaching English to Brazilians', query:'American teaching English to Brazilians TikTok 2025' },
  { id:'brLearn',   label:'📚 Brazilians Learning / Knowledge Pages',     query:'Brasileiros aprendendo conhecimento viral TikTok 2025' },
  { id:'tech',      label:'⚙️ Tech & Logic in Brazil',                   query:'tech lógica desenvolvimento pessoal TikTok Brasil 2025' }
];

// ── SUBSTACK QUOTES (Inspiration tab) ──────────────────────────────────────
const SUBSTACK_QUOTES = [
  { text: 'Write the essay you wish existed before you figured it out.', author: 'Cole Schafer' },
  { text: 'The goal is not to grow an audience. The goal is to find your people.', author: 'Dan Go' },
  { text: 'Your writing is a service to people who are two steps behind you.', author: 'Nat Eliason' },
  { text: 'You don\'t need to be famous. You need to be findable.', author: 'Lenny Rachitsky' },
  { text: 'Publish before you\'re ready. Refine in public.', author: 'Anne-Laure Le Cunff' },
  { text: 'Boring niche + obsessive depth = audience you never expected.', author: 'David Perell' },
  { text: 'Write what keeps you up at night. That\'s what keeps others up too.', author: 'Packy McCormick' },
  { text: 'One reader who truly resonates is worth 1000 passive scrollers.', author: 'Kieran Drew' },
  { text: 'The best essays don\'t answer questions. They reframe them.', author: 'Morgan Housel' },
  { text: 'Consistency compounds. Every essay is infrastructure.', author: 'Nicolas Cole' }
];

// ── FORMAT GUIDE ────────────────────────────────────────────────────────────
const FORMAT_GUIDES = {
  video: {
    label: '🎬 Vídeo / Reel',
    sections: [
      { title: 'Hook (0–3s)', body: 'A primeira frase precisa parar o scroll. Faça uma pergunta, afirmação chocante ou crie curiosidade imediata.' },
      { title: 'Desenvolvimento (3–45s)', body: 'Entregue o valor prometido. Seja específico, use histórias reais, evite jargão.' },
      { title: 'CTA Final (últimos 5s)', body: 'UMA ação só: seguir, comentar, salvar. Nunca pedir as 3 ao mesmo tempo.' },
      { title: 'Duração ideal', body: '15–60s para reels de crescimento. Até 3min para conteúdo de valor aprofundado.' }
    ]
  },
  carousel: {
    label: '🖼 Carrossel',
    sections: [
      { title: 'Slide 1 — Capa', body: 'O slide mais importante. Título que funciona como manchete de jornal. Deve ser salvo pelo visual.' },
      { title: 'Slides 2–5 — Corpo', body: 'Uma ideia por slide. Máximo 3 linhas de texto. Imagem ou fundo que reforce o conteúdo.' },
      { title: 'Último Slide — CTA', body: 'Salvar + compartilhar + ação específica. Carrosseis têm taxa de save alta — aproveite.' }
    ]
  },
  story: {
    label: '⚡ Story',
    sections: [
      { title: 'Story 1 — Gancho', body: 'Pergunta, afirmação ou curiosidade que obriga a avançar.' },
      { title: 'Stories 2–4 — Contexto', body: 'Uma frase por story. Máximo 2 linhas. Velocidade é tudo.' },
      { title: 'Story Final — CTA', body: 'Enquete, caixa de resposta, link ou CTA de feed. Stories têm mais conversa — use isso.' }
    ]
  }
};

// ── REPURPOSE STRATEGY ──────────────────────────────────────────────────────
const REPURPOSE_STRATEGY = `1 Tópico → 12 Peças de Conteúdo:
• 4 Versões de Vídeo: Atrair · Nutrir · Posicionar · Converter
• 4 Carrosseis: Um por versão
• 4 Stories: Um por versão

Fluxo de Produção Semanal:
1. Escreva o script de vídeo Atrair (ancora a semana)
2. Monte o Carrossel a partir do script (texto já está escrito)
3. Grave o vídeo + carrossel no mesmo dia
4. Adapte o story (3–5 slides rápidos)
5. O conteúdo de carrossel e story é quase todo reciclado dos scripts — você não está escrevendo conteúdo novo, está reformatando o que já escreveu.`;

// ── WHATSAPP STRATEGY (FC only) ─────────────────────────────────────────────
const WHATSAPP_STRATEGY = {
  triggers: [
    { keyword: 'VOCABULÁRIO', ebook: 'Ebook: 50 Erros de Vocabulário', pillar: 'p1/p2', cta: 'Manda VOCABULÁRIO no WhatsApp e eu te mando nosso ebook gratuito com os 50 erros de vocabulário mais comuns dos brasileiros.' },
    { keyword: 'ESTRATÉGIA',  ebook: 'Guia de Estratégia da Sabrina',  pillar: 'p3/p4', cta: 'Manda ESTRATÉGIA no WhatsApp e eu te mando o guia que a Sabrina usou quando estudou nos EUA — de graça.' }
  ],
  autoReply: 'Oi! 👋 Obrigada por me mandar mensagem! Aqui está o link do seu presente gratuito: [LINK]\n\nEste guia foi feito para quem já estudou inglês mas ainda não consegue falar. Se você tiver alguma pergunta, é só responder aqui. 💚\n\n— Sabrina',
  nextStep: 'Para leads que já baixaram o ebook: mencione o app como próximo passo natural. "Você já tem o guia — agora pratica com o Mikey, nosso professor de IA, por R$19,90/mês."'
};

// ── DATA MIGRATION ──────────────────────────────────────────────────────────
function migrateData() {
  const migrated = localStorage.getItem('hub_migrated_v1');
  if (migrated) return;

  console.log('[Hub] Running data migration from legacy files...');

  // FC Migration
  try {
    const fcScripts = JSON.parse(localStorage.getItem(STORAGE.LEGACY.FC_TOPICS) || '{}');
    const fcRec     = JSON.parse(localStorage.getItem(STORAGE.LEGACY.FC_REC)     || '{}');
    const fcRevised = JSON.parse(localStorage.getItem(STORAGE.LEGACY.FC_REVISED) || '{}');
    const fcDates   = JSON.parse(localStorage.getItem(STORAGE.LEGACY.FC_DATES)   || '{}');
    const fcCal     = JSON.parse(localStorage.getItem(STORAGE.LEGACY.FC_CAL)     || '{}');
    const fcCustom  = JSON.parse(localStorage.getItem(STORAGE.LEGACY.FC_CUSTOM)  || '[]');
    if (Object.keys(fcScripts).length > 0 || fcCustom.length > 0) {
      const existing = JSON.parse(localStorage.getItem('hub_fc_v1') || '{}');
      const merged = Object.assign({
        topics: DEFAULT_TOPICS_FC.concat(fcCustom),
        scripts: fcScripts, rec: fcRec, revised: fcRevised,
        dates: fcDates, cal: fcCal
      }, existing);
      localStorage.setItem('hub_fc_v1', JSON.stringify(merged));
    }
  } catch(e) { console.warn('[Hub] FC migration error:', e); }

  // Sabrina Migration
  try {
    const sabTopics = JSON.parse(localStorage.getItem(STORAGE.LEGACY.SAB_TOPICS) || 'null');
    const sabRec    = JSON.parse(localStorage.getItem(STORAGE.LEGACY.SAB_REC)    || '{}');
    const sabRevised= JSON.parse(localStorage.getItem(STORAGE.LEGACY.SAB_REVISED)|| '{}');
    const sabDates  = JSON.parse(localStorage.getItem(STORAGE.LEGACY.SAB_DATES)  || '{}');
    if (sabTopics) {
      const existing = JSON.parse(localStorage.getItem('hub_sab_v1') || '{}');
      const merged = Object.assign({ topics: sabTopics, rec: sabRec, revised: sabRevised, dates: sabDates }, existing);
      localStorage.setItem('hub_sab_v1', JSON.stringify(merged));
    }
  } catch(e) { console.warn('[Hub] SAB migration error:', e); }

  // Michael Migration
  try {
    const micTopics = JSON.parse(localStorage.getItem(STORAGE.LEGACY.MIC_TOPICS) || 'null');
    const micRec    = JSON.parse(localStorage.getItem(STORAGE.LEGACY.MIC_REC)    || '{}');
    const micRevised= JSON.parse(localStorage.getItem(STORAGE.LEGACY.MIC_REVISED)|| '{}');
    const micDates  = JSON.parse(localStorage.getItem(STORAGE.LEGACY.MIC_DATES)  || '{}');
    const micCal    = JSON.parse(localStorage.getItem(STORAGE.LEGACY.MIC_CAL)    || '{}');
    if (micTopics) {
      const existing = JSON.parse(localStorage.getItem('hub_mic_v1') || '{}');
      const merged = Object.assign({ topics: micTopics, rec: micRec, revised: micRevised, dates: micDates, cal: micCal }, existing);
      localStorage.setItem('hub_mic_v1', JSON.stringify(merged));
    }
  } catch(e) { console.warn('[Hub] MIC migration error:', e); }

  // Substack Migration
  try {
    const sub = JSON.parse(localStorage.getItem(STORAGE.LEGACY.SUB_MAIN) || 'null');
    const essay = localStorage.getItem(STORAGE.LEGACY.SUB_ESSAY) || '';
    if (sub) {
      const existing = JSON.parse(localStorage.getItem('hub_sub_v1') || '{}');
      const merged = Object.assign({ topics: sub.topics || DEFAULT_TOPICS_SUB, scripts: sub.scripts || {}, rec: sub.recorded || {}, revised: sub.revised || {}, drafts: sub.drafts || [], currentEssay: essay }, existing);
      localStorage.setItem('hub_sub_v1', JSON.stringify(merged));
    }
  } catch(e) { console.warn('[Hub] SUB migration error:', e); }

  localStorage.setItem('hub_migrated_v1', '1');
  console.log('[Hub] Migration complete.');
}

// ── STATE HELPERS ────────────────────────────────────────────────────────────
function loadAccountState(accountId) {
  const key = ACCOUNTS[accountId].storage;
  const defaults = {
    topics:  accountId==='fc'  ? JSON.parse(JSON.stringify(DEFAULT_TOPICS_FC))  :
             accountId==='sab' ? JSON.parse(JSON.stringify(DEFAULT_TOPICS_SAB)) :
             accountId==='mic' ? JSON.parse(JSON.stringify(DEFAULT_TOPICS_MIC)) :
                                 JSON.parse(JSON.stringify(DEFAULT_TOPICS_SUB)),
    scripts:{}, rec:{}, revised:{}, dates:{}, cal:{}, drafts:[], notes:{}, metrics:[], currentEssay:''
  };
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    return saved ? Object.assign({}, defaults, saved) : defaults;
  } catch(e) { return defaults; }
}

function saveAccountState(accountId, state) {
  const key = ACCOUNTS[accountId].storage;
  localStorage.setItem(key, JSON.stringify(state));
}

// ── CALENDAR HELPERS ─────────────────────────────────────────────────────────
function loadCalendar() {
  return JSON.parse(localStorage.getItem('hub_cal_v1') || '{}');
}

function saveCalendar(cal) {
  localStorage.setItem('hub_cal_v1', JSON.stringify(cal));
}

// ── SHARED SETTINGS ──────────────────────────────────────────────────────────
function loadSettings() {
  return JSON.parse(localStorage.getItem('hub_settings_v1') || '{}');
}
function saveSettings(s) {
  localStorage.setItem('hub_settings_v1', JSON.stringify(s));
}

// Run migration on load
migrateData();

// ── SUBSTACK LEARNING SYLLABUS ───────────────────────────────────────────────
const SUBJECTS = [
  {id:'fin',icon:'💰',title:'Financial Literacy',color:'#1DB994',phases:[
    {title:'Behavioral Finance',items:[
      {type:'book',title:'I Will Teach You to Be Rich',author:'Ramit Sethi',why:'Systems-based personal finance.'},
      {type:'book',title:'The Psychology of Money',author:'Morgan Housel',why:'Short chapters, powerful stories.'},
      {type:'book',title:'Your Money or Your Life',author:'Vicki Robin',why:'Philosophy of "enough."'}
    ]},
    {title:'Building Wealth',items:[
      {type:'book',title:'The Simple Path to Wealth',author:'JL Collins',why:'Index fund investing made simple.'},
      {type:'book',title:'Broke Millennial',author:'Erin Lowry',why:'For the generation that feels behind.'}
    ]}
  ]},
  {id:'mkt',icon:'📣',title:'Marketing',color:'#e05252',phases:[
    {title:'Content & Positioning',items:[
      {type:'book',title:'Building a StoryBrand',author:'Donald Miller',why:'Customer is the hero.'},
      {type:'book',title:'This Is Marketing',author:'Seth Godin',why:'Smallest viable audience.'}
    ]},
    {title:'Growth',items:[
      {type:'book',title:'Contagious',author:'Jonah Berger',why:'Science of virality.'},
      {type:'book',title:'Superfans',author:'Pat Flynn',why:'Casual → superfan ladder.'}
    ]}
  ]},
  {id:'com',icon:'🗣️',title:'Communication',color:'#9b59b6',phases:[
    {title:'Writing & Persuasion',items:[
      {type:'book',title:'On Writing Well',author:'William Zinsser',why:'THE non-fiction writing guide.'},
      {type:'book',title:'Storyworthy',author:'Matthew Dicks',why:'"5-second moment" transforms hooks.'},
      {type:'book',title:'Influence',author:'Robert Cialdini',why:'6 persuasion principles.'}
    ]}
  ]},
  {id:'phi',icon:'🏛️',title:'Philosophy',color:'#1DB994',phases:[
    {title:'Practical Philosophy',items:[
      {type:'book',title:'Meditations',author:'Marcus Aurelius',why:'Original journal as self-improvement.'},
      {type:'book',title:'The Daily Stoic',author:'Ryan Holiday',why:'366 daily meditations.'},
      {type:'book',title:'The Alchemist',author:'Paulo Coelho',why:'Brazilian author, personal legend.'}
    ]}
  ]},
  {id:'sto',icon:'✍️',title:'Storytelling',color:'#e0c040',phases:[
    {title:'Core Storytelling',items:[
      {type:'book',title:'Storyworthy',author:'Matthew Dicks',why:'Best personal storytelling book.'},
      {type:'book',title:'Save the Cat!',author:'Jessica Brody',why:'15 beats for essays and videos.'},
      {type:'book',title:'Building a Second Brain',author:'Tiago Forte',why:'Capture and retrieve ideas.'}
    ]}
  ]},
  {id:'sal',icon:'💼',title:'Sales & Negotiation',color:'#d4953e',phases:[
    {title:'Core',items:[
      {type:'book',title:'To Sell Is Human',author:'Daniel Pink',why:'Sales as fundamental skill.'},
      {type:'book',title:'$100M Offers',author:'Alex Hormozi',why:'Irresistible offers.'},
      {type:'book',title:'Never Split the Difference',author:'Chris Voss',why:'FBI negotiation tactics.'}
    ]}
  ]},
  {id:'lea',icon:'👑',title:'Leadership',color:'#9b59b6',phases:[
    {title:'Core',items:[
      {type:'book',title:'Dare to Lead',author:'Brené Brown',why:'Vulnerability as strength.'},
      {type:'book',title:'Start With Why',author:'Simon Sinek',why:'The golden circle.'},
      {type:'book',title:'Radical Candor',author:'Kim Scott',why:'Kind and clear feedback.'}
    ]}
  ]},
  {id:'fre',icon:'🇫🇷',title:'French Language',color:'#5bc0de',phases:[
    {title:'Foundation (A1–A2)',items:[
      {type:'course',title:'Pimsleur French Level 1',author:'Audio-based',why:'Learn while doing mom tasks.'},
      {type:'course',title:'Duolingo French',author:'Free',why:'Daily habit + vocabulary.'},
      {type:'book',title:'Le Petit Prince',author:'Saint-Exupéry',why:'First book in French.'}
    ]},
    {title:'Conversation (A2–B1)',items:[
      {type:'course',title:'iTalki French Tutoring',author:'1 session/week',why:'Real conversation practice.'},
      {type:'book',title:'Fluent in 3 Months',author:'Benny Lewis',why:'Speak from day 1 philosophy.'}
    ]}
  ]},
  {id:'net',icon:'🤝',title:'Networking',color:'#3498db',phases:[
    {title:'Core',items:[
      {type:'book',title:'Never Eat Alone',author:'Keith Ferrazzi',why:'Generosity-first networking.'},
      {type:'book',title:'Give and Take',author:'Adam Grant',why:'Science of generosity.'}
    ]}
  ]},
  {id:'par',icon:'👶',title:'Parenthood',color:'#1DB994',phases:[
    {title:'Bilingual & Intentional Parenting',items:[
      {type:'book',title:'The Whole-Brain Child',author:'Siegel & Bryson',why:'Neuroscience of child development.'},
      {type:'book',title:'Bringing Up Bébé',author:'Pamela Druckerman',why:'French parenting — cross-cultural parallel.'},
      {type:'book',title:'The Bilingual Edge',author:'King & Mackey',why:'Bilingual parenting strategies.'},
      {type:'book',title:'Hunt, Gather, Parent',author:'Michaeleen Doucleff',why:'Ancient vs Western parenting.'},
      {type:'podcast',title:'Good Inside',author:'Dr. Becky Kennedy',why:'Actionable parenting scripts.'},
      {type:'book',title:'Cribsheet',author:'Emily Oster',why:'Data-driven parenting decisions.'}
    ]}
  ]},
  {id:'prd',icon:'🧠',title:'Productivity',color:'#1DB994',phases:[
    {title:'Core',items:[
      {type:'book',title:'Atomic Habits',author:'James Clear',why:'Habit systems, not goals.'},
      {type:'book',title:'Deep Work',author:'Cal Newport',why:'Focus in a distracted world.'},
      {type:'book',title:'The One Thing',author:'Gary Keller',why:'What matters most right now.'}
    ]}
  ]},
];