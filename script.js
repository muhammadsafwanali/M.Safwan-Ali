const yesBtn=document.getElementById('yesBtn');
const noBtn=document.getElementById('noBtn');
const modal=document.getElementById('finalModal');
const closeModal=document.getElementById('closeModal');
const playBtn=document.getElementById('playBtn');
const bg=document.getElementById('bgMusic');

yesBtn.addEventListener('click',()=>{
  modal.classList.remove('hidden');
  startHearts();
});

noBtn.addEventListener('click',()=>{
  alert('Oh no 😢... But I’ll keep trying until you say YES 💗');
});

closeModal.addEventListener('click',()=>modal.classList.add('hidden'));

playBtn.addEventListener('click',()=>{
  if(bg.paused){bg.play().catch(()=>{});playBtn.textContent='Pause ▶';}
  else{bg.pause();playBtn.textContent='Play Music ▶';}
});

function startHearts(){
  for(let i=0;i<15;i++){createHeart(i*120);}
}
function createHeart(delay){
  const h=document.createElement('div');
  h.style.position='fixed';
  h.style.left=(20+Math.random()*60)+'%';
  h.style.bottom='-20px';
  h.style.width='20px';
  h.style.height='20px';
  h.style.background='radial-gradient(circle at 30%30%,#fff,#ff4d6d)';
  h.style.borderRadius='50%';
  h.style.opacity='0.9';
  h.style.transition='all 2.6s linear';
  document.body.appendChild(h);
  setTimeout(()=>{
    h.style.transform='translateY(-300px) scale(1.3)';
    h.style.opacity='0';
  },delay+50);
  setTimeout(()=>h.remove(),delay+3000);
}