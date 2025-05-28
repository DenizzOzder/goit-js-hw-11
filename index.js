import{a as f,S as m,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="50401137-cdbb52678a54314c233e4ec11";async function y(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:o})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let a=null;function g(s){const o=s.map(r=>`
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" />
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </a>
    `).join("");u.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new m(".gallery a")}function b(){u.innerHTML=""}function L(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const w=document.querySelector("#searchForm"),v=document.querySelector("#searchInput");w.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();o&&(b(),L(),y(o).then(r=>{const n=r.data.hits;if(n.length===0){l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}setTimeout(()=>{g(n),c()},1e3)}).catch(r=>{console.error("Fetch error:",r),l.error({title:"Error",message:"An error occurred while fetching data."}),c()}))});
//# sourceMappingURL=index.js.map
