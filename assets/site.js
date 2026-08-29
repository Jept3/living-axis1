const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const siblings=[...entry.target.parentElement.querySelectorAll('.reveal')];const idx=Math.max(0,siblings.indexOf(entry.target));entry.target.style.transitionDelay=(idx%6)*0.08+'s';entry.target.classList.add('in');observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelectorAll('.magnetic').forEach(btn=>{btn.addEventListener('mousemove',e=>{if(innerWidth<900)return;const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});btn.addEventListener('mouseleave',()=>btn.style.transform='')});


const mobileToggle=document.querySelector('.mobile-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
if(mobileToggle && mobileMenu){
  const closeMenu=()=>{
    mobileToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    mobileToggle.setAttribute('aria-expanded','false');
  };
  mobileToggle.addEventListener('click',()=>{
    const isOpen=mobileMenu.classList.toggle('open');
    mobileToggle.classList.toggle('open',isOpen);
    document.body.classList.toggle('menu-open',isOpen);
    mobileToggle.setAttribute('aria-expanded',String(isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  window.addEventListener('resize',()=>{ if(innerWidth>920) closeMenu(); });
}
