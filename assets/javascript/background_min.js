!function(){function e(){f=window.innerWidth,h=window.innerHeight,y={x:f/2,y:h/2},w=document.getElementById("canvas"),w.width=f,w.height=h,g=w.getContext("2d"),p=[];for(var e=0;e<f;e+=f/20)for(var n=0;n<h;n+=h/20){var t=e+Math.random()*f/20,o=n+Math.random()*h/20,i={x:t,originX:t,y:o,originY:o};p.push(i)}for(var r=0;r<p.length;r++){for(var a=[],c=p[r],l=0;l<p.length;l++){var s=p[l];if(c!=s){for(var d=!1,m=0;m<5;m++)d||void 0==a[m]&&(a[m]=s,d=!0);for(var m=0;m<5;m++)d||u(c,s)<u(c,a[m])&&(a[m]=s,d=!0)}}c.closest=a}for(var r in p){var M=new v(p[r],4+2*Math.random(),"#515151");p[r].circle=M}}function n(){"ontouchstart"in window||window.addEventListener("mousemove",i),window.addEventListener("scroll",r),window.addEventListener("resize",a);for(var e=document.getElementsByClassName("img"),n=0;n<e.length;n++)e[n].addEventListener("mouseover",t),e[n].addEventListener("mouseleave",o)}function t(){console.log("pew");for(var e in p){var n=new v(p[e],8+2*Math.random(),"#515151");p[e].circle=n}}function o(){console.log("pew");for(var e in p){var n=new v(p[e],4+2*Math.random(),"#515151");p[e].circle=n}}function i(e){var n=posy=0;e.pageX||e.pageY?(n=e.pageX,posy=e.pageY):(e.clientX||e.clientY)&&(n=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),y.x=n,y.y=posy}function r(){M=!(document.body.scrollTop>h)}function a(){f=window.innerWidth,h=window.innerHeight,m.style.height=h+"px",w.width=f,w.height=h}function c(){l();for(var e in p)s(p[e])}function l(){if(M){g.clearRect(0,0,f,h);for(var e in p)Math.abs(u(y,p[e]))<4e3?(p[e].active=.3,p[e].circle.active=.6):Math.abs(u(y,p[e]))<2e4?(p[e].active=.1,p[e].circle.active=.3):Math.abs(u(y,p[e]))<4e4?(p[e].active=.02,p[e].circle.active=.1):(p[e].active=0,p[e].circle.active=0),d(p[e]),p[e].circle.draw()}requestAnimationFrame(l)}function s(e){TweenLite.to(e,1+1*Math.random(),{x:e.originX-50+100*Math.random(),y:e.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){s(e)}})}function d(e){if(e.active)for(var n in e.closest)g.beginPath(),g.moveTo(e.x,e.y),g.lineTo(e.closest[n].x,e.closest[n].y),g.strokeStyle="rgba(156,217,249,"+e.active+")",g.stroke()}function v(e,n,t){var o=this;!function(){o.pos=e||null,o.radius=n||null,o.color=t||null}(),this.draw=function(){o.active&&(g.beginPath(),g.arc(o.pos.x,o.pos.y,o.radius,0,2*Math.PI,!1),g.fillStyle="rgba(156,217,249,"+o.active+")",g.fill())}}function u(e,n){return Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)}var f,h,m,w,g,p,y,M=!0;e(),c(),n()}();