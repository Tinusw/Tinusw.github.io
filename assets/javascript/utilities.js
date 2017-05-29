window.addEventListener("load", function(){
    Typed.new(".title", {
      strings: ["Software Engineer", "Frontend Developer", "Backend Developer", "Ruby on Rails", "SASS", "Javascript", "jQuery", "HTML", "HAML", "Scrum Master", "Active Record", "PostgreSQL", "NodeJS", "Webpack", "D3.js", "Express", "React", "Responsive Design", "Musician", "Cat Lover"],
      typeSpeed: 80,
      backDelay: 1000,
      loop: true
    });
});

// Google Analytics
document.addEventListener("DOMContentLoaded", function(event) {
  x = document.getElementsByClassName('img');
  for(var i = 0; i < x.length; i++){
    x[i].addEventListener('click', function(){
      ga('send', 'event', this.id, 'clicked');
    })
  }
  cv = document.getElementById('cv');
  cv.addEventListener('click', function(){
    ga('send', 'event', this.id, 'CV opened')
  })

});
