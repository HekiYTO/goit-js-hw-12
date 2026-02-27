import{a as f,S as p,i as n}from"./assets/vendor-CGkk3GO5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const m="54627953-91354900f2659ddc705c1dc29";let c=1,d="";async function u(e){return(await f.get("https://pixabay.com/api/",{params:{key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:c}})).data.hits}function g(){c=1}function y(){c++}function h(e){d=e}function L(){return d}let v=new p(".gallery a",{navButtons:!0,navText:["←","→"],showCounter:!0});function C(e){const o=document.querySelector(".gallery"),i=e.map(a=>`
      <li class="photo-card">
        <a href="${a.largeImageURL}">
          <img class="gal_element" src="${a.webformatURL}" alt="${a.tags}" />
        </a>
        <div class="stats">
          <div class="stat-item">
            <p class="stat-title">Likes</p>
            <p>${a.likes}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Views</p>
            <p>${a.views}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Comments</p>
            <p>${a.comments}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Downloads</p>
            <p>${a.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",i),v.refresh()}function w(){const e=document.querySelector(".gallery");e.innerHTML=""}function M(){document.querySelector(".loader").classList.add("is-loading")}function q(){document.querySelector(".loader").classList.remove("is-loading")}function S(){document.querySelector(".loadMore").classList.remove("hidden")}function b(){document.querySelector(".loadMore").classList.add("hidden")}const r={createGallery:C,clearGallery:w,showLoader:M,hideLoader:q,showLoadMoreButton:S,hideLoadMoreButton:b};let E=document.querySelector(".form"),P=document.querySelector(".loadMore");E.addEventListener("submit",async e=>{e.preventDefault();const o=document.querySelector("input").value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query",titleColor:"#fff",messageColor:"#fff",position:"topRight"});return}h(o),g(),r.clearGallery(),r.hideLoadMoreButton(),r.showLoader();try{const i=await u(o);if(r.hideLoader(),i.length===0){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});return}r.createGallery(i),i.length===15&&r.showLoadMoreButton()}catch{r.hideLoader(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})}});P.addEventListener("click",async()=>{y();const e=L();r.showLoader();try{const o=await u(e);r.hideLoader(),r.createGallery(o),o.length<15&&(r.hideLoadMoreButton(),n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",position:"topRight"}))}catch{r.hideLoader(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})}});
//# sourceMappingURL=index.js.map
