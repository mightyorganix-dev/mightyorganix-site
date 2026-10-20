(function(){var c=window.MO_CONFIG||{};
var f=document.getElementById('contact-form');
if(f){if(c.formEndpoint){f.action=c.formEndpoint;f.method='POST'}else{f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var b='Name: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nBusiness: '+d.get('business')+'\nInterested in: '+d.get('package')+'\n\n'+d.get('message');
location.href='mailto:'+c.email+'?subject='+encodeURIComponent('Website inquiry from '+d.get('name'))+'&body='+encodeURIComponent(b)})}}
var box=document.getElementById('deposits');
if(box&&c.deposits){box.innerHTML=c.deposits.map(function(p){var ok=p.link&&/^https:\/\/(buy|checkout)\.stripe\.com\//.test(p.link);
return '<div class="card dep"><h3>'+p.name+'</h3><div>Project: '+p.price+'</div><div class="amt">$'+p.deposit.toLocaleString()+' <small style="font-size:14px;color:#4a4a4a">'+p.note+'</small></div>'+
(ok?'<a class="btn" href="'+p.link+'" rel="noopener">Pay $'+p.deposit.toLocaleString()+' deposit securely</a>':'<a class="btn alt" href="#" aria-disabled="true" onclick="return false">Payment link coming soon</a>')+'</div>'}).join('')}
document.querySelectorAll('.chip').forEach(function(ch){ch.addEventListener('click',function(){var f=ch.dataset.f;document.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-pressed',x===ch)});document.querySelectorAll('.work,.grouphead,.groupnote').forEach(function(w){w.hidden=!(f==='all'||w.dataset.cat===f)})})});
})();
(function(){var P={farm:["Farm stand","Shows what's picked fresh this week, lets folks pre-order a basket and pay online, and answers \"Are you open today?\" for you."],salon:["Salon","Lets clients book their own appointment day or night, sends friendly reminders, and takes a deposit so no-shows cost you less."],barn:["Horse barn","Shows lessons, camps and boarding, lets families book a ride online, and keeps your phone from ringing off the hook."],shop:["Local shop","Puts your hours, best sellers and directions on every phone, takes orders online, and follows up with customers for you."]};
var w=document.getElementById('picker');if(!w)return;var o=w.querySelector('.pickout');w.querySelectorAll('button[data-k]').forEach(function(b){b.addEventListener('click',function(){w.querySelectorAll('button[data-k]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});var d=P[b.dataset.k];o.innerHTML='<p><strong>'+d[0]+':</strong> '+d[1]+'</p><p><a class="btn gold" href="#contact-form">I want this for my '+d[0].toLowerCase()+' &rarr;</a></p>'})})})();
