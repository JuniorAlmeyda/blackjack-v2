const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let l=[];const r=document.querySelector("#btnPedir"),o=document.querySelector("#btnDetener"),s=document.querySelector("#btnNuevo"),c=document.querySelectorAll(".divCartas"),a=document.querySelectorAll("small"),d=(t=2)=>{e=i(),l=[];for(let e=0;e<t;e++)l.push(0);a.forEach(e=>e.innerText=0),c.forEach(e=>e.innerHTML=""),r.disabled=!1,o.disabled=!1},i=()=>{e=[];for(let n=2;n<=10;n++)for(let l of t)e.push(n+l);for(let l of t)for(let t of n)e.push(t+l);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el Deck";return e.pop()},E=(e,t)=>(l[t]=l[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),a[t].innerText=l[t],l[t]),A=(e,t)=>{const n=document.createElement("img");n.src=`assets/cartas/${e}.png`,n.classList.add("carta"),c[t].append(n)},f=e=>{let t=0;do{const e=u();t=E(e,l.length-1),A(e,l.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=l;setTimeout(()=>{t===e?alert("EMPATE KELOKE :|"):e>21?alert("COMPUTADORA GANA KELOKE :("):t>21?alert("JUGADOR GANA KEKOLE :)"):alert("COMPUTADORA GANA KELOKE :(")},10)})()};return r.addEventListener("click",()=>{const e=u(),t=E(e,0);A(e,0),t>21?(console.warn("PERDISTE"),r.disabled=!0,o.disabled=!0,f(t)):21===t&&(console.warn("21, genial"),r.disabled=!0,o.disabled=!0,f(t))}),o.addEventListener("click",()=>{r.disabled=!0,o.disabled=!0,f(l[0])}),s.addEventListener("click",()=>{console.clear(),d()}),{nuevoJuego:d}})();