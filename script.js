const translations = {
  fr: {
    'hero.eyebrow': 'Mohammedia & environs',
    'hero.title': "L'immobilier autrement.<br>Confiance • Transparence • Excellence.",
    'hero.sub': 'Achat, vente, location et gestion locative clé en main.',
    'hero.cta1': 'Estimation gratuite',
    'hero.cta3': 'Réserver une visite',
    'stat1': 'Transparence', 'stat2': 'Corporate Housing', 'stat3': 'Réponse moyenne',
    'prestige.title': 'Biens de prestige',
    'prestige.sub': "Une sélection d'appartements, villas et locaux d'exception.",
    'prestige.cta': 'Voir tous les biens sur WhatsApp',
    'services.title': 'Nos services complets',
    'services.sub': 'Tout ce dont vous avez besoin pour vendre, louer ou gérer votre bien.',
    's1.title': 'Vente & Achat', 's1.desc': "De l'estimation à la signature : suivi juridique complet.",
    's2.title': 'Location & Gestion Locative', 's2.desc': 'Courte, moyenne et longue durée + reporting mensuel.',
    's3.title': 'Home Design & Valorisation', 's3.desc': 'Rénovation, ameublement, décoration et photos pro.',
    's4.title': 'Corporate Housing VIP', 's4.desc': 'Solutions clés en main pour entreprises et expatriés.',
    'badge': 'Différenciant',
    'booking.title': 'Réserver une visite',
    'booking.sub': 'Choisissez votre créneau préféré. Nous confirmons rapidement par WhatsApp.',
    'book.interest': 'Je souhaite...', 'book.area': 'Quartier / Zone', 'book.time': 'Créneau préféré',
    'book.message': 'Précisions (type de bien, budget approximatif...)',
    'book.submit': 'Confirmer ma demande de visite',
    'book.note': 'Votre demande sera envoyée directement sur WhatsApp pour confirmation rapide.',
    'est.title': 'Estimation gratuite de votre bien',
    'est.sub': 'Recevez une estimation réaliste sous 24-48h.',
    'form.name': 'Votre nom', 'form.phone': 'Téléphone / WhatsApp', 'form.email': 'Email (optionnel)',
    'form.type': 'Type de bien', 'form.details': 'Quartier, surface, état, objectif...',
    'form.submit': 'Demander mon estimation', 'form.note': 'Ou contactez-nous : +212 661 108 476',
    'contact.title': 'Entrons en contact', 'contact.sub': 'Mohammedia et alentours.',
    'c1.title': 'WhatsApp & Téléphone', 'c1.btn': 'Ouvrir WhatsApp',
    'c2.title': "Zone d'intervention", 'c2.desc': 'Mohammedia, Mansouria, Bouznika, Beni Yakhlef et environs.',
    'c3.title': 'Suivez-nous', 'c3.desc': 'Facebook & Instagram : The Taieb Immobilier',
    'footer.tag': "L'immobilier autrement à Mohammedia.",
    'nav.booking': 'Visite',
    'chat.status': 'En ligne • Réponse rapide',
    'chat.placeholder': 'Écrivez votre message...'
  },
  en: {
    'hero.eyebrow': 'Mohammedia & surroundings',
    'hero.title': 'Real estate, differently.<br>Trust • Transparency • Excellence.',
    'hero.sub': 'Buying, selling, renting and full property management.',
    'hero.cta1': 'Free valuation',
    'hero.cta3': 'Book a viewing',
    'stat1': 'Transparency', 'stat2': 'Corporate Housing', 'stat3': 'Avg. response',
    'prestige.title': 'Prestige properties',
    'prestige.sub': 'A selection of exceptional apartments, villas and commercial spaces.',
    'prestige.cta': 'View all properties on WhatsApp',
    'services.title': 'Complete services',
    'services.sub': 'Everything you need to sell, rent or manage your property.',
    's1.title': 'Sales & Purchases', 's1.desc': 'From valuation to signing: full legal support.',
    's2.title': 'Rental & Property Management', 's2.desc': 'Short, medium and long term + monthly reporting.',
    's3.title': 'Home Design & Enhancement', 's3.desc': 'Renovation, furnishing, decoration and pro photos.',
    's4.title': 'Corporate Housing VIP', 's4.desc': 'Turnkey solutions for companies and expats.',
    'badge': 'Differentiator',
    'booking.title': 'Book a viewing',
    'booking.sub': 'Choose your preferred slot. We confirm quickly on WhatsApp.',
    'book.interest': 'I want to...', 'book.area': 'Area / District', 'book.time': 'Preferred time',
    'book.message': 'Details (property type, approximate budget...)',
    'book.submit': 'Confirm my viewing request',
    'book.note': 'Your request will be sent directly to WhatsApp for quick confirmation.',
    'est.title': 'Free property valuation',
    'est.sub': 'Receive a realistic valuation within 24-48h.',
    'form.name': 'Your name', 'form.phone': 'Phone / WhatsApp', 'form.email': 'Email (optional)',
    'form.type': 'Property type', 'form.details': 'Area, size, condition, goal...',
    'form.submit': 'Request my valuation', 'form.note': 'Or contact us: +212 661 108 476',
    'contact.title': 'Get in touch', 'contact.sub': 'Mohammedia and surroundings.',
    'c1.title': 'WhatsApp & Phone', 'c1.btn': 'Open WhatsApp',
    'c2.title': 'Service area', 'c2.desc': 'Mohammedia, Mansouria, Bouznika, Beni Yakhlef and surroundings.',
    'c3.title': 'Follow us', 'c3.desc': 'Facebook & Instagram: The Taieb Immobilier',
    'footer.tag': 'Real estate, differently in Mohammedia.',
    'nav.booking': 'Viewing',
    'chat.status': 'Online • Fast reply',
    'chat.placeholder': 'Type your message...'
  }
};

let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (translations[lang][k]) el.innerHTML = translations[lang][k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][k]) el.placeholder = translations[lang][k];
  });
  const t = document.getElementById('langToggle');
  if (t) t.textContent = lang === 'fr' ? 'EN' : 'FR';
  if (window.initChat) window.initChat();
}

document.getElementById('langToggle')?.addEventListener('click', () => setLanguage(currentLang === 'fr' ? 'en' : 'fr'));
document.getElementById('menuToggle')?.addEventListener('click', () => document.getElementById('nav')?.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(l => l.addEventListener('click', () => document.getElementById('nav')?.classList.remove('open')));

// Estimation form
document.getElementById('estimateForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const f = e.target;
  let m = `Bonjour THE TAIEB Immobilier,%0A%0AJe souhaite une estimation gratuite.%0A`;
  m += `Nom : ${f.name.value}%0ATéléphone : ${f.phone.value}%0A`;
  if (f.email.value) m += `Email : ${f.email.value}%0A`;
  m += `Type : ${f.type.value}%0A`;
  if (f.details.value) m += `Détails : ${f.details.value}%0A`;
  window.open(`https://wa.me/212661108476?text=${m}`, '_blank');
  f.reset();
  alert(currentLang === 'fr' ? "Merci ! WhatsApp va s'ouvrir." : 'Thank you! WhatsApp will open.');
});

// Booking form
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const f = e.target;
  let m = `Bonjour THE TAIEB Immobilier,%0A%0A*Demande de visite*%0A`;
  m += `Nom : ${f.name.value}%0ATéléphone : ${f.phone.value}%0A`;
  m += `Objectif : ${f.interest.value}%0A`;
  if (f.area.value) m += `Zone : ${f.area.value}%0A`;
  m += `Date souhaitée : ${f.date.value}%0ACréneau : ${f.time.value}%0A`;
  if (f.message.value) m += `Précisions : ${f.message.value}%0A`;
  window.open(`https://wa.me/212661108476?text=${m}`, '_blank');
  f.reset();
  alert(currentLang === 'fr' ? "Demande envoyée ! WhatsApp va s'ouvrir pour confirmation." : 'Request sent! WhatsApp will open for confirmation.');
});

// ========== CHATBOT ==========
const chatReplies = {
  fr: {
    welcome: "Bonjour 👋 Je suis l'assistant THE TAIEB Immobilier. Comment puis-je vous aider ?",
    services: "Nous proposons :\n• Vente & Achat\n• Location & Gestion locative\n• Home Design (valorisation)\n• Corporate Housing VIP\n\nQue souhaitez-vous faire ?",
    zones: "Nous intervenons principalement à Mohammedia, Mansouria, Bouznika, Beni Yakhlef et environs.",
    estimation: "L'estimation est gratuite. Remplissez le formulaire « Estimation » sur le site ou dites-moi les détails de votre bien et je vous oriente.",
    visite: "Parfait ! Utilisez le formulaire « Réserver une visite » un peu plus bas, ou cliquez ici pour me donner vos préférences.",
    contact: "Appelez ou WhatsApp : +212 661 108 476\nNous répondons rapidement.",
    default: "Je peux vous aider sur : nos services, les zones couvertes, une estimation, ou réserver une visite. Que préférez-vous ?",
    whatsapp: "Je vous ouvre WhatsApp pour parler directement avec l'équipe 👍"
  },
  en: {
    welcome: "Hello 👋 I'm the THE TAIEB Immobilier assistant. How can I help you?",
    services: "We offer:\n• Sales & Purchases\n• Rental & Property Management\n• Home Design (enhancement)\n• Corporate Housing VIP\n\nWhat would you like to do?",
    zones: "We mainly cover Mohammedia, Mansouria, Bouznika, Beni Yakhlef and surroundings.",
    estimation: "Valuation is free. Fill the Estimation form on the site or tell me about your property.",
    visite: "Great! Use the « Book a viewing » form below, or tell me your preferences here.",
    contact: "Call or WhatsApp: +212 661 108 476\nWe reply quickly.",
    default: "I can help with: our services, areas covered, a valuation, or booking a viewing. What do you prefer?",
    whatsapp: "I'll open WhatsApp so you can talk directly with the team 👍"
  }
};

const quickBtns = {
  fr: [
    { label: 'Nos services', key: 'services' },
    { label: 'Zones', key: 'zones' },
    { label: 'Estimation', key: 'estimation' },
    { label: 'Réserver visite', key: 'visite' },
    { label: 'WhatsApp', key: 'whatsapp' }
  ],
  en: [
    { label: 'Services', key: 'services' },
    { label: 'Areas', key: 'zones' },
    { label: 'Valuation', key: 'estimation' },
    { label: 'Book viewing', key: 'visite' },
    { label: 'WhatsApp', key: 'whatsapp' }
  ]
};

function addMsg(text, who = 'bot') {
  const box = document.getElementById('chatMessages');
  if (!box) return;
  const div = document.createElement('div');
  div.className = `chat-msg ${who}`;
  div.innerHTML = text.replace(/\n/g, '<br>');
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function handleChat(keyOrText) {
  const lang = currentLang;
  const replies = chatReplies[lang];
  let reply = replies.default;

  const t = (keyOrText || '').toLowerCase();
  if (keyOrText === 'services' || t.includes('service') || t.includes('offre')) reply = replies.services;
  else if (keyOrText === 'zones' || t.includes('zone') || t.includes('quartier') || t.includes('où') || t.includes('where')) reply = replies.zones;
  else if (keyOrText === 'estimation' || t.includes('estim') || t.includes('valu') || t.includes('prix')) reply = replies.estimation;
  else if (keyOrText === 'visite' || t.includes('visite') || t.includes('view') || t.includes('rdv') || t.includes('book')) reply = replies.visite;
  else if (keyOrText === 'whatsapp' || t.includes('whatsapp') || t.includes('contact') || t.includes('appeler')) {
    reply = replies.whatsapp;
    setTimeout(() => window.open('https://wa.me/212661108476?text=Bonjour%20THE%20TAIEB%20Immobilier', '_blank'), 600);
  } else if (t.includes('bonjour') || t.includes('hello') || t.includes('salut')) reply = replies.welcome;

  addMsg(reply, 'bot');
}

function renderQuick() {
  const box = document.getElementById('chatQuick');
  if (!box) return;
  box.innerHTML = '';
  quickBtns[currentLang].forEach(b => {
    const btn = document.createElement('button');
    btn.textContent = b.label;
    btn.onclick = () => {
      addMsg(b.label, 'user');
      handleChat(b.key);
    };
    box.appendChild(btn);
  });
}

window.initChat = function() {
  const box = document.getElementById('chatMessages');
  if (box) {
    box.innerHTML = '';
    addMsg(chatReplies[currentLang].welcome, 'bot');
  }
  renderQuick();
};

document.getElementById('chatToggle')?.addEventListener('click', () => {
  const bot = document.getElementById('chatbot');
  bot.classList.toggle('open');
  if (bot.classList.contains('open') && document.getElementById('chatMessages').children.length === 0) {
    window.initChat();
  }
});

document.getElementById('chatSend')?.addEventListener('click', () => {
  const input = document.getElementById('chatInput');
  const val = input.value.trim();
  if (!val) return;
  addMsg(val, 'user');
  input.value = '';
  setTimeout(() => handleChat(val), 400);
});

document.getElementById('chatInput')?.addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('chatSend')?.click();
});
