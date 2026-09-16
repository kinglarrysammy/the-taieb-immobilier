(function(){
var PHONE='212661108476',NAME='THE TAIEB Immobilier';
document.getElementById('menuToggle')?.addEventListener('click',function(){document.getElementById('nav')?.classList.toggle('open');});
document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('nav')?.classList.remove('open');});});
var banner=document.getElementById('cookieBanner');
if(banner&&!localStorage.getItem('taieb_cookie')){banner.classList.add('show');}
document.getElementById('cookieAccept')?.addEventListener('click',function(){localStorage.setItem('taieb_cookie','1');banner?.classList.remove('show');});
document.getElementById('cookieRefuse')?.addEventListener('click',function(){localStorage.setItem('taieb_cookie','0');banner?.classList.remove('show');});
function validatePhone(v){return /[+0-9\s\-]{8,20}/.test(v||'');}
document.getElementById('bookingForm')?.addEventListener('submit',function(e){e.preventDefault();var f=e.target,err=document.getElementById('bookingError');
if(!f.name.value.trim()||f.name.value.trim().length<2){if(err){err.hidden=false;err.textContent='Veuillez indiquer votre nom.';}return;}
if(!validatePhone(f.phone.value)){if(err){err.hidden=false;err.textContent='Numero de telephone invalide.';}return;}
if(!f.interest.value||!f.date.value||!f.time.value){if(err){err.hidden=false;err.textContent='Merci de remplir tous les champs obligatoires.';}return;}
if(err)err.hidden=true;
var m='Bonjour '+NAME+',%0A%0A*Demande de visite*%0ANom : '+encodeURIComponent(f.name.value)+'%0ATelephone : '+encodeURIComponent(f.phone.value)+'%0AObjectif : '+encodeURIComponent(f.interest.value)+'%0A';
if(f.area.value)m+='Quartier : '+encodeURIComponent(f.area.value)+'%0A';
m+='Date : '+encodeURIComponent(f.date.value)+'%0ACreneau : '+encodeURIComponent(f.time.value)+'%0A';
if(f.message.value)m+='Precision : '+encodeURIComponent(f.message.value)+'%0A';
window.open('https://wa.me/'+PHONE+'?text='+m,'_blank');f.reset();});
document.getElementById('estimateForm')?.addEventListener('submit',function(e){e.preventDefault();var f=e.target,err=document.getElementById('estimateError');
if(!f.name.value.trim()||f.name.value.trim().length<2){if(err){err.hidden=false;err.textContent='Veuillez indiquer votre nom.';}return;}
if(!validatePhone(f.phone.value)){if(err){err.hidden=false;err.textContent='Numero de telephone invalide.';}return;}
if(!f.type.value){if(err){err.hidden=false;err.textContent='Selectionnez le type de bien.';}return;}
if(err)err.hidden=true;
var m='Bonjour '+NAME+',%0A%0A*Demande d estimation*%0ANom : '+encodeURIComponent(f.name.value)+'%0ATelephone : '+encodeURIComponent(f.phone.value)+'%0A';
if(f.email.value)m+='Email : '+encodeURIComponent(f.email.value)+'%0A';
m+='Type : '+encodeURIComponent(f.type.value)+'%0A';
if(f.details.value)m+='Details : '+encodeURIComponent(f.details.value)+'%0A';
window.open('https://wa.me/'+PHONE+'?text='+m,'_blank');f.reset();});
var replies={welcome:'Bonjour. Je suis l assistant THE TAIEB Immobilier. Comment puis-je vous aider ?',services:'Nos services : vente et achat, location et gestion locative, Home Design, Corporate Housing.',zones:'Nous intervenons a Mohammedia, Mansouria, Bouznika, Beni Yakhlef et environs.',estimation:'L estimation est gratuite. Utilisez le formulaire Estimation sur le site ou precisez quartier et surface ici.',visite:'Utilisez le formulaire Reserver une visite, ou indiquez date et quartier ici.',contact:'Telephone / WhatsApp : +212 661 108 476',def:'Je peux renseigner sur : services, zones, estimation, visite, contact.'};
var quick=[{label:'Services',key:'services'},{label:'Zones',key:'zones'},{label:'Estimation',key:'estimation'},{label:'Visite',key:'visite'},{label:'Contact',key:'contact'}];
function addMsg(t,w){var b=document.getElementById('chatMessages');if(!b)return;var d=document.createElement('div');d.className='chat-msg '+w;d.textContent=t;b.appendChild(d);b.scrollTop=b.scrollHeight;}
function getReply(i){var t=(i||'').toLowerCase();if(t.indexOf('service')>=0)return replies.services;if(t.indexOf('zone')>=0||t.indexOf('mohammedia')>=0)return replies.zones;if(t.indexOf('estim')>=0||t.indexOf('prix')>=0)return replies.estimation;if(t.indexOf('visite')>=0||t.indexOf('rdv')>=0)return replies.visite;if(t.indexOf('contact')>=0||t.indexOf('telephone')>=0||t.indexOf('whatsapp')>=0)return replies.contact;if(t.indexOf('bonjour')>=0||t.indexOf('salut')>=0)return replies.welcome;return replies.def;}
function renderQuick(){var b=document.getElementById('chatQuick');if(!b)return;b.innerHTML='';quick.forEach(function(q){var btn=document.createElement('button');btn.type='button';btn.textContent=q.label;btn.onclick=function(){addMsg(q.label,'user');setTimeout(function(){addMsg(getReply(q.key),'bot');},280);};b.appendChild(btn);});}
function initChat(){var b=document.getElementById('chatMessages');if(!b)return;b.innerHTML='';addMsg(replies.welcome,'bot');renderQuick();}
function sendMsg(){var i=document.getElementById('chatInput');if(!i)return;var v=i.value.trim();if(!v)return;addMsg(v,'user');i.value='';setTimeout(function(){addMsg(getReply(v),'bot');},320);}
document.getElementById('chatToggle')?.addEventListener('click',function(){var p=document.getElementById('chatPanel');p.classList.toggle('open');if(p.classList.contains('open')){if(!document.getElementById('chatMessages').children.length)initChat();document.getElementById('chatInput')?.focus();}});
document.getElementById('chatClose')?.addEventListener('click',function(){document.getElementById('chatPanel')?.classList.remove('open');});
document.getElementById('chatSend')?.addEventListener('click',function(e){e.preventDefault();sendMsg();});
document.getElementById('chatInput')?.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();sendMsg();}});
})();
