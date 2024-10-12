/* empty css                      */import{S as h,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="46474433-011ac89f5ff1a7f52c1dd2f66",y="https://pixabay.com/api/";async function b(o,t=1,a=20){const n=`${y}?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;try{const e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}catch(e){throw console.error("Error fetching images:",e),e}}const d=document.querySelector(".gallery");let c=null;function w(o){const t=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:m,downloads:p})=>`
        <div class="photo-card">
          <a href="${n}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b>: ${r}</p>
            <p><b>Views</b>: ${s}</p>
            <p><b>Comments</b>: ${m}</p>
            <p><b>Downloads</b>: ${p}</p>
          </div>
        </div>`).join("");d.innerHTML=t,c?c.refresh():c=new h(".gallery a")}function L(){d.innerHTML=""}const $=document.querySelector("#search-form"),S=document.querySelector('input[name="searchQuery"]'),u=document.querySelector(".loader");let f=1,l="";$.addEventListener("submit",v);async function v(o){if(o.preventDefault(),l=S.value.trim(),!l){i.warning({title:"Warning",message:"Please enter a search query."});return}L(),u.classList.add("show"),f=1;try{const t=await b(l,f);if(t.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(t)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{u.classList.remove("show")}}
//# sourceMappingURL=index.js.map
