const nav=document.querySelector('.nav');
document.querySelector('.hamburger')?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

let cart=0;
const cartCount=document.getElementById('cartCount');
function addCart(){cart++;cartCount.textContent=cart;document.getElementById('cartBtn').animate([{transform:'scale(1)'},{transform:'scale(1.18)'},{transform:'scale(1)'}],{duration:300});}

const products={
 pipe1:{title:'Pipe Papad',img:'images/pipe-papad-1.jpeg',cat:'Papad',weight:'Product range',price:'Contact for current price',text:'Distinctive tube-shaped Papad shown in the supplied Fazal Foods product photo.'},
 pipe2:{title:'Orange Pipe Papad',img:'images/pipe-papad-2.jpeg',cat:'Papad',weight:'Product range',price:'Contact for current price',text:'Orange pipe-style Papad shown in the supplied product photo.'},
 papad3:{title:'Traditional Papad',img:'images/papad-bulk.jpeg',cat:'Papad',weight:'Product range',price:'Contact for current price',text:'Traditional Papad selection shown in the supplied production photo.'},
 verm100:{title:'Mikish Vermicelli — 100 Gram',img:'images/vermicelli-1.jpeg',cat:'Vermicelli',weight:'100 Gram',price:'Contact for current price',text:'Mikish Vermicelli in a 100 Gram size. Fine quality for traditional desserts and sweet dishes.'},
 verm150:{title:'Mikish Vermicelli — 150 Gram',img:'images/vermicelli-1.jpeg',cat:'Vermicelli',weight:'150 Gram',price:'Contact for current price',text:'Mikish Vermicelli in a 150 Gram size. Fine quality for traditional desserts and sweet dishes.'},
 verm500:{title:'Mikish Vermicelli — 500 Gram',img:'images/vermicelli-1.jpeg',cat:'Vermicelli',weight:'500 Gram',price:'Contact for current price',text:'Mikish Vermicelli in a 500 Gram size. A convenient larger pack for regular use.'},
 verm1kg:{title:'Mikish Vermicelli — 1 Kg',img:'images/vermicelli-2.jpeg',cat:'Vermicelli',weight:'1 Kg',price:'Contact for current price',text:'Mikish Vermicelli in a 1 Kg family-size pack.'},
 looseverm:{title:'Loose Vermicelli',img:'images/vermicelli-loose.jpeg',cat:'Vermicelli',weight:'Loose',price:'Contact for current price',text:'Loose Vermicelli. This product belongs to the Vermicelli range and is shown in the supplied product photo.'},
 range:{title:'Fazal Foods Product Range',img:'images/fazal-foods-logo.png',cat:'Quality',weight:'Various sizes',price:'Contact for current price',text:'Additional weights and prices can be added here whenever you confirm them.'}
};

const modal=document.getElementById('modal');
function openProduct(key){
 const p=products[key]; if(!p)return;
 document.getElementById('modalImg').src=p.img;
 document.getElementById('modalImg').alt=p.title;
 document.getElementById('modalTitle').textContent=p.title;
 document.getElementById('modalText').textContent=p.text;
 document.getElementById('modalCategory').textContent=p.cat; document.getElementById('modalWeight').textContent=p.weight||'—'; document.getElementById('modalPrice').textContent=p.price||'Contact for current price';
 document.getElementById('modalBadge').textContent=p.cat.toUpperCase();
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}
document.querySelectorAll('[data-product]').forEach(el=>el.addEventListener('click',()=>openProduct(el.dataset.product)));
document.getElementById('close').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.querySelector('.modal .add').addEventListener('click',()=>{addCart();modal.classList.remove('open')});

const search=document.getElementById('search');
search.addEventListener('input',()=>{
 const q=search.value.toLowerCase().trim();
 document.querySelectorAll('.product').forEach(card=>{
   card.style.display=!q || card.dataset.search.includes(q)?'block':'none';
 });
});
