!function(){function n(){v=window.innerWidth,f=window.innerHeight,y={x:v/2,y:f/2},w=document.getElementById("canvas"),w.width=v,w.height=f,m=w.getContext("2d"),g=[];for(var n=0;n<v;n+=v/20)for(var e=0;e<f;e+=f/20){var t=n+Math.random()*v/20,o=e+Math.random()*f/20,i={x:t,originX:t,y:o,originY:o};g.push(i)}for(var a=0;a<g.length;a++){for(var r=[],c=g[a],l=0;l<g.length;l++){var s=g[l];if(c!=s){for(var h=!1,p=0;p<5;p++)h||void 0==r[p]&&(r[p]=s,h=!0);for(var p=0;p<5;p++)h||u(c,s)<u(c,r[p])&&(r[p]=s,h=!0)}}c.closest=r}for(var a in g){var M=new d(g[a],4+2*Math.random(),"#515151");g[a].circle=M}}function e(){"ontouchstart"in window||window.addEventListener("mousemove",t),window.addEventListener("scroll",o),window.addEventListener("resize",i)}function t(n){var e=posy=0;n.pageX||n.pageY?(e=n.pageX,posy=n.pageY):(n.clientX||n.clientY)&&(e=n.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=n.clientY+document.body.scrollTop+document.documentElement.scrollTop),y.x=e,y.y=posy}function o(){p=!(document.body.scrollTop>f)}function i(){v=window.innerWidth,f=window.innerHeight,h.style.height=f+"px",w.width=v,w.height=f}function a(){c();for(var n in g)l(g[n])}function r(){console.log("lol")}function c(){if(p){m.clearRect(0,0,v,f);for(var n in g)Math.abs(u(y,g[n]))<4e3?(g[n].active=.3,g[n].circle.active=.6):Math.abs(u(y,g[n]))<2e4?(g[n].active=.1,g[n].circle.active=.3):Math.abs(u(y,g[n]))<4e4?(g[n].active=.02,g[n].circle.active=.1):(g[n].active=0,g[n].circle.active=0),s(g[n]),g[n].circle.draw()}requestAnimationFrame(c)}function l(n){TweenLite.to(n,1+1*Math.random(),{x:n.originX-50+100*Math.random(),y:n.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){l(n)}})}function s(n){if(n.active)for(var e in n.closest)m.beginPath(),m.moveTo(n.x,n.y),m.lineTo(n.closest[e].x,n.closest[e].y),m.strokeStyle="rgba(156,217,249,"+n.active+")",m.stroke()}function d(n,e,t){var o=this;!function(){o.pos=n||null,o.radius=e||null,o.color=t||null}(),this.draw=function(){o.active&&(m.beginPath(),m.arc(o.pos.x,o.pos.y,o.radius,0,2*Math.PI,!1),m.fillStyle="rgba(156,217,249,"+o.active+")",m.fill())}}function u(n,e){return Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2)}var v,f,h,w,m,g,y,p=!0;n(),a(),e()}();