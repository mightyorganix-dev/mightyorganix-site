(function(){var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer: fine)').matches;
var els=document.querySelectorAll('section h2,section .lead,.card,.work,.steps li,.photoband,.note,form');
if(!rm&&'IntersectionObserver' in window){els.forEach(function(e){e.classList.add('reveal')});var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)})}
// counters
document.querySelectorAll('[data-count]').forEach(function(el){var n=+el.dataset.count;if(rm){el.textContent=n;return}var o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();var t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1200);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)});o.observe(el)});
if(rm)return;
// light parallax on hero background
var hero=document.querySelector('.hero');if(hero&&innerWidth>719){addEventListener('scroll',function(){var y=scrollY;if(y<900)hero.style.backgroundPosition='center '+(y*0.25)+'px'},{passive:true})}
if(!fine)return;
// cursor glow, card tilt, magnetic buttons (desktop only)
var g=document.createElement('div');g.className='cursorglow';document.body.appendChild(g);
addEventListener('pointermove',function(e){g.style.opacity=1;g.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'},{passive:true});
document.querySelectorAll('.card,.work').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateX('+(-y*4)+'deg) rotateY('+(x*5)+'deg) translateY(-3px)'});c.addEventListener('pointerleave',function(){c.style.transform=''})});
document.querySelectorAll('.hero .btn,.note .btn,#how .btn').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
})();
