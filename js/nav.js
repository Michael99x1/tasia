document.addEventListener('DOMContentLoaded', function(){
  var burger = document.querySelector('.burger');
  var links = document.querySelector('nav.links');
  if(burger && links){
    burger.addEventListener('click', function(){
      burger.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        burger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
});
