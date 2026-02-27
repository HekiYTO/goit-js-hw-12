import{a as y,S as v,i}from"./assets/vendor-CGkk3GO5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const L="54627953-91354900f2659ddc705c1dc29",C="https://pixabay.com/api/";let f="";async function p(e,o=1){return(await y.get(C,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}function q(e){f=e}function w(){return f}let S=new v(".gallery a",{navButtons:!0,navText:["←","→"],showCounter:!0});function m(e){const o=document.querySelector(".gallery"),s=e.map(r=>`
      <li class="photo-card">
        <a href="${r.largeImageURL}">
          <img class="gal_element" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="stats">
          <div class="stat-item">
            <p class="stat-title">Likes</p>
            <p>${r.likes}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Views</p>
            <p>${r.views}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Comments</p>
            <p>${r.comments}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Downloads</p>
            <p>${r.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),S.refresh()}function b(){const e=document.querySelector(".gallery");e.innerHTML=""}function h(){document.querySelector(".loader").classList.add("is-loading")}function n(){document.querySelector(".loader").classList.remove("is-loading")}function d(){document.querySelector(".loadMore").classList.remove("hidden")}function g(){document.querySelector(".loadMore").classList.add("hidden")}let M=document.querySelector(".form"),E=document.querySelector(".loadMore"),P=document.querySelector('input[name="search-text"]'),l=1,u=0;M.addEventListener("submit",async e=>{e.preventDefault();const o=P.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search query",titleColor:"#fff",messageColor:"#fff",position:"topRight"});return}q(o),l=1,b(),g(),h();try{const s=await p(o,l);if(n(),s.hits.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});return}u=Math.ceil(s.totalHits/15),m(s.hits),l<u?d():s.hits.length>0&&i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}catch{n(),i.error({title:"Error",message:"Failed to fetch images. Please try again.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})}});E.addEventListener("click",async()=>{l++;const e=w();g(),h();try{const o=await p(e,l);n(),m(o.hits);const r=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),l<u?d():i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",position:"topRight"})}catch{n(),d(),i.error({title:"Error",message:"Failed to fetch images. Please try again.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})}});
//# sourceMappingURL=index.js.map
