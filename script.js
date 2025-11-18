document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav a').forEach(a=>{
    if(!a.getAttribute('href')) return;
    a.addEventListener('click', function(e){
      if(this.target === '_blank') return;
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(()=>{ window.location.href = this.getAttribute('href'); }, 300);
    });
  });

  const dm = document.getElementById('darkToggle');
  if(dm){
    dm.addEventListener('click', function(){
      document.body.classList.toggle('dark');
      localStorage.setItem('gentle_dark', document.body.classList.contains('dark'));
    });
    if(localStorage.getItem('gentle_dark') === 'true') document.body.classList.add('dark');
  }

  const newsMock = [
    {title:'ACB 2025', excerpt:'D-KheeM named Ghana rep for ACB 2025', img:'assets/insta_1.jpg'},
    {title:'Vintage Gala', excerpt:'Performance highlights', img:'assets/insta_2.jpg'},
    {title:'New Single', excerpt:'Studio updates incoming', img:'assets/insta_3.jpg'},
    {title:'Merch Tease', excerpt:'Sneak peek', img:'assets/insta_4.jpg'}
  ];

  function populateNews(){
    const grid = document.getElementById('newsGrid');
    if(!grid) return;
    const items = newsMock.sort(()=>0.5-Math.random()).slice(0,3);
    grid.innerHTML = items.map(it=>`
      <div class="card hover-tilt fade-up">
        <img src="${it.img}" style="width:100%;border-radius:8px;margin-bottom:8px">
        <h4>${it.title}</h4>
        <p>${it.excerpt}</p>
      </div>
    `).join('');
  }
  populateNews();
  setInterval(populateNews, 20000);

  // Other JS code unchanged
});
