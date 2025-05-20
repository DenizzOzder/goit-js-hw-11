/* empty css                      */import{S as u,i,a as d}from"./assets/vendor-BcDMrzcM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const m="https://pixabay.com/api/",f="50401137-cdbb52678a54314c233e4ec11";async function p(s){const e={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:e})).data}function y(s){return s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </div>
        </li>
      `).join("")}const h=document.querySelector("#search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let g=new u(".gallery a");h.addEventListener("submit",async s=>{s.preventDefault();const e=s.target.elements.searchQuery.value.trim();if(!e){i.error({title:"Oops",message:"Sorry, there are no images matching your search. Please try again!"});return}l.innerHTML="",c.classList.remove("hidden");try{const o=await p(e);if(c.classList.add("hidden"),o.hits.length===0){i.error({title:"Oops",message:`Sorry, there are no images matching your search ${s.target.elements.searchQuery.value}. Please try again!`});return}const a=y(o.hits);l.innerHTML=a,g.refresh()}catch{c.classList.add("hidden"),i.error({title:"Hata",message:"Görseller alınamadı!"})}});
//# sourceMappingURL=index.js.map
