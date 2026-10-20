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
