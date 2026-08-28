window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').style.display='none',1300));
const menu=document.querySelector('.hamburger'), links=document.querySelector('.links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const words=['ICT Consultant','Web Developer','Game Design Teacher','Technology Enthusiast'];
let wi=0,ci=0,del=false;const typing=document.getElementById('typing');
function type(){const w=words[wi];typing.textContent=del?w.slice(0,ci--):w.slice(0,ci++);let d=del?45:80;if(!del&&ci>w.length){del=true;d=1100}if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0;d=250}setTimeout(type,d)}type();

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();

const canvas=document.getElementById('space'),ctx=canvas.getContext('2d');let stars=[];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;stars=Array.from({length:Math.min(120,innerWidth/8)},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.2+.2,a:Math.random()*.7+.1,s:Math.random()*.15+.03}))}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);for(const s of stars){s.y+=s.s;if(s.y>canvas.height)s.y=0;ctx.fillStyle=`rgba(110,190,220,${s.a})`;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
resize();addEventListener('resize',resize);draw();
addEventListener('pointermove',e=>{const g=document.querySelector('.cursor-glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
