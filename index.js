(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menu:document.querySelector(".mobile-menu"),menuLinks:document.querySelectorAll(".menu-item .link"),shopNowBtn:document.querySelector("[data-shop-now]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o),n.menuLinks.forEach(r=>{r.addEventListener("click",()=>{o()})}),n.shopNowBtn.addEventListener("click",()=>{o()});function o(){n.modal.classList.toggle("is-open"),n.menu.classList.toggle("is-open")}})();
//# sourceMappingURL=index.js.map
