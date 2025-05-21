import{a as d,S as f,i}from"./assets/vendor-DqUhfJqr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const m="https://pixabay.com/api/",p="50401137-cdbb52678a54314c233e4ec11";async function y(o){const e={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:e})).data}const h=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(o){return o.map(e=>`
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
      `).join("")}function L(){h.innerHTML=""}function c(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const b=document.querySelector("#search-form"),v=document.querySelector(".gallery"),w=document.querySelector(".loader");let l=new f(".gallery a");b.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements.searchQuery.value.trim();if(!e){i.error({title:"Oops",message:"Sorry, there are no images matching your search. Please try again!"}),l.refresh();return}L(),c(),S();try{const s=await y(e);if(c(),s.hits.length===0){i.error({title:"Oops",message:`Sorry, there are no images matching your search ${o.target.elements.searchQuery.value}. Please try again!`});return}const a=g(s.hits);v.innerHTML=a,l.refresh()}catch{w.classList.add("hidden"),i.error({title:"Hata",message:"Görseller alınamadı!"})}});
//# sourceMappingURL=index.js.map
