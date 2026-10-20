(function(){var el=document.getElementById('map');if(!el||!window.L)return;
var c=[36.1627,-86.7816];el.innerHTML='';
var m=L.map(el,{scrollWheelZoom:false,tap:false}).setView(c,9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:14,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(m);
fetch('data/ring-counties.json').then(r=>r.json()).then(g=>L.geoJSON(g,{style:{color:'#7a5230',weight:1,fill:false,dashArray:'4 4'},onEachFeature:(f,l)=>l.bindTooltip(f.properties.name)}).addTo(m));
var ring=L.circle(c,{radius:40*1609.344,color:'#FF8200',weight:3,fillColor:'#FF8200',fillOpacity:.08}).addTo(m);
L.circleMarker(c,{radius:8,color:'#111',fillColor:'#FF8200',fillOpacity:1,weight:2}).addTo(m).bindTooltip('Downtown Nashville',{permanent:true,direction:'top'});
fetch('data/towns.json').then(r=>r.json()).then(t=>t.forEach(function(x){var i=x.mi<=40;L.circleMarker([x.lat,x.lon],{radius:5,color:i?'#B35400':'#555',fillColor:i?'#FF8200':'#fff',fillOpacity:1,weight:2}).addTo(m).bindTooltip(x.n+' · '+x.mi+' mi'+(i?'':' (just outside)'))}));
m.fitBounds(ring.getBounds());})();
