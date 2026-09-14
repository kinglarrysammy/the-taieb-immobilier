// ===== MENU =====
document.getElementById('menuToggle')?.addEventListener('click', () => {
  document.getElementById('nav')?.classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(l => {
  l.addEventListener('click', () => document.getElementById('nav')?.classList.remove('open'));
});

// ===== LANGUAGE (simple FR default, EN optional) =====
let currentLang = 'fr';
document.getElementById('langToggle')?.addEventListener('click', function() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  this.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  document.documentElement.lang = currentLang;
  // Re-init chat in current language if open
  if (document.getElementById('chatPanel')?.classList.contains('open')) {
    initChat();
  }
});

// ===== ESTIMATION FORM → WhatsApp =====
document.getElementById('estimateForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const f = e.target;
  let m = 'Bonjour THE TAIEB Immobilier,%0A%0A*Demande d\'estimation*%0A';
  m += 'Nom : ' + f.name.value + '%0A';
  m += 'Téléphone : ' + f.phone.value + '%0A';
  if (f.email.value) m += 'Email : ' + f.email.value + '%0A';
  m += 'Type : ' + f.type.value + '%0A';
  if (f.details.value) m += 'Détails : ' + f.details.value + '%0A';
  window.open('https://wa.me/212661108476?text=' + m, '_blank');
  f.reset();
  alert('Merci ! WhatsApp va s\'ouvrir avec votre demande.');
});

// ===== BOOKING FORM → WhatsApp =====
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const f = e.target;
  let m = 'Bonjour THE TAIEB Immobilier,%0A%0A*Demande de visite*%0A';
  m += 'Nom : ' + f.name.value + '%0A';
  m += 'Téléphone : ' + f.phone.value + '%0A';
  m += 'Objectif : ' + f.interest.value + '%0A';
  if (f.area.value) m += 'Zone : ' + f.area.value + '%0A';
  m += 'Date : ' + f.date.value + '%0A';
  m += 'Créneau : ' + f.time.value + '%0A';
  if (f.message.value) m += 'Précisions : ' + f.message.value + '%0A';
  window.open('https://wa.me/212661108476?text=' + m, '_blank');
  f.reset();
  alert('Demande envoyée ! WhatsApp va s\'ouvrir pour confirmation.');
});

// ===== CHATBOT (French first) =====
const replies = {
  fr: {
    welcome: 'Bonjour 👋 Je suis l\'assistant THE TAIEB Immobilier.\nComment puis-je vous aider ?',
    services: 'Nos services :\n• Vente & Achat\n• Location & Gestion locative\n• Home Design (valorisation)\n• Corporate Housing VIP\n\nQue souhaitez-vous faire ?',
    zones: 'Nous intervenons à Mohammedia, Mansouria, Bouznika, Beni Yakhlef et environs.',
    estimation: 'L\'estimation est gratuite.\nUtilisez le formulaire « Estimation » sur le site, ou donnez-moi les détails de votre bien ici.',
    visite: 'Pour réserver une visite, utilisez le formulaire « Réserver une visite » un peu plus bas sur la page, ou précisez ici la date et le quartier souhaités.',
    contact: 'Vous pouvez nous joindre au :\n📞 +212 661 108 476\nOu cliquez sur le bouton WhatsApp vert à droite.',
    default: 'Je peux vous renseigner sur :\n• Nos services\n• Les zones couvertes\n• Une estimation\n• Une visite\n\nQue préférez-vous ?'
  },
  en: {
    welcome: 'Hello 👋 I am the THE TAIEB Immobilier assistant.\nHow can I help you?',
    services: 'Our services:\n• Sales & Purchases\n• Rental & Property Management\n• Home Design\n• Corporate Housing VIP',
    zones: 'We cover Mohammedia, Mansouria, Bouznika, Beni Yakhlef and surroundings.',
    estimation: 'Valuation is free. Use the Estimation form on the site, or tell me about your property here.',
    visite: 'To book a viewing, use the « Book a viewing » form on the page, or tell me your preferred date and area here.',
    contact: 'You can reach us at:\n📞 +212 661 108 476\nOr click the green WhatsApp button on the right.',
    default: 'I can help with: services, areas, valuation, or booking a viewing. What do you prefer?'
  }
};

const quickLabels = {
  fr: [
    { label: 'Nos services', key: 'services' },
    { label: 'Zones', key: 'zones' },
    { label: 'Estimation', key: 'estimation' },
    { label: 'Réserver visite', key: 'visite' },
    { label: 'Contact', key: 'contact' }
  ],
  en: [
    { label: 'Services', key: 'services' },
    { label: 'Areas', key: 'zones' },
    { label: 'Valuation', key: 'estimation' },
    { label: 'Book viewing', key: 'visite' },
    { label: 'Contact', key: 'contact' }
  ]
};

function addMsg(text, who) {
  const box = document.getElementById('chatMessages');
  if (!box) return;
  const div = document.createElement('div');
  div.className = 'chat-msg ' + who;
  div.innerHTML = String(text).replace(/\n/g, '<br>');
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function getReply(input) {
  const lang = currentLang === 'en' ? 'en' : 'fr';
  const r = replies[lang];
  const t = (input || '').toLowerCase().trim();

  if (!t) return r.default;
  if (t === 'services' || t.includes('service') || t.includes('offre')) return r.services;
  if (t === 'zones' || t.includes('zone') || t.includes('quartier') || t.includes('où') || t.includes('where') || t.includes('mohammedia')) return r.zones;
  if (t === 'estimation' || t.includes('estim') || t.includes('valu') || t.includes('prix') || t.includes('price')) return r.estimation;
  if (t === 'visite' || t.includes('visite') || t.includes('view') || t.includes('rdv') || t.includes('book') || t.includes('réserv')) return r.visite;
  if (t === 'contact' || t.includes('contact') || t.includes('téléphone') || t.includes('phone') || t.includes('appeler') || t.includes('whatsapp')) return r.contact;
  if (t.includes('bonjour') || t.includes('hello') || t.includes('salut') || t.includes('bonsoir')) return r.welcome;
  return r.default;
}

function renderQuick() {
  const box = document.getElementById('chatQuick');
  if (!box) return;
  box.innerHTML = '';
  const lang = currentLang === 'en' ? 'en' : 'fr';
  quickLabels[lang].forEach(function(b) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = b.label;
    btn.addEventListener('click', function() {
      addMsg(b.label, 'user');
      setTimeout(function() {
        addMsg(getReply(b.key), 'bot');
      }, 300);
    });
    box.appendChild(btn);
  });
}

function initChat() {
  const box = document.getElementById('chatMessages');
  if (!box) return;
  box.innerHTML = '';
  const lang = currentLang === 'en' ? 'en' : 'fr';
  addMsg(replies[lang].welcome, 'bot');
  renderQuick();
}

function sendUserMessage() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  addMsg(val, 'user');
  input.value = '';
  setTimeout(function() {
    addMsg(getReply(val), 'bot');
  }, 350);
}

// Open / close chatbot — NO automatic WhatsApp
document.getElementById('chatToggle')?.addEventListener('click', function() {
  const panel = document.getElementById('chatPanel');
  if (!panel) return;
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    if (document.getElementById('chatMessages').children.length === 0) {
      initChat();
    }
    document.getElementById('chatInput')?.focus();
  }
});

document.getElementById('chatClose')?.addEventListener('click', function() {
  document.getElementById('chatPanel')?.classList.remove('open');
});

document.getElementById('chatSend')?.addEventListener('click', function(e) {
  e.preventDefault();
  sendUserMessage();
});

document.getElementById('chatInput')?.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendUserMessage();
  }
});
