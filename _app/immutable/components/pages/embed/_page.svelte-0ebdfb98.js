import{S,i as w,s as A,k as g,a as k,q as P,a0 as B,l as p,h as s,c as q,m as v,r as j,n as c,a5 as C,G as n,b,B as x,H as L,o as M,a1 as T}from"../../../chunks/index-6adc046e.js";import{H as V}from"../../../chunks/index-63bdb924.js";import{p as G}from"../../../chunks/stores-a33be801.js";const{document:D}=T;function J(_){let l,h,t,d,o,f,u,a,r,m,y;return{c(){l=g("link"),h=k(),t=g("div"),d=P("generated by "),o=g("a"),f=P("github.com/u-yas/highlight-embed"),u=k(),a=g("div"),r=g("pre"),m=g("code"),y=P(`
    `),this.h()},l(e){const i=B("svelte-1noqp8p",D.head);l=p(i,"LINK",{rel:!0,href:!0}),i.forEach(s),h=q(e),t=p(e,"DIV",{class:!0});var E=v(t);d=j(E,"generated by "),o=p(E,"A",{href:!0});var H=v(o);f=j(H,"github.com/u-yas/highlight-embed"),H.forEach(s),E.forEach(s),u=q(e),a=p(e,"DIV",{class:!0});var I=v(a);r=p(I,"PRE",{class:!0});var $=v(r);m=p($,"CODE",{id:!0,class:!0}),v(m).forEach(s),y=j($,`
    `),$.forEach(s),I.forEach(s),this.h()},h(){c(l,"rel","stylesheet"),c(l,"href",`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${_[1]}.min.css`),c(o,"href","https://github.com/u-yas/highlight.embed"),c(t,"class","written svelte-1du8b4m"),c(m,"id","code"),c(m,"class",C(`${_[0]} hljs`)+" svelte-1du8b4m"),c(r,"class","svelte-1du8b4m"),c(a,"class","code-wrapper svelte-1du8b4m")},m(e,i){n(D.head,l),b(e,h,i),b(e,t,i),n(t,d),n(t,o),n(o,f),b(e,u,i),b(e,a,i),n(a,r),n(r,m),n(r,y)},p:x,i:x,o:x,d(e){s(l),e&&s(h),e&&s(t),e&&s(u),e&&s(a)}}}function K(_,l,h){let t;L(_,G,a=>h(2,t=a));let d=t.url.searchParams.get("lang"),o=`language-${d}`,f=t.url.searchParams.get("code"),u=t.url.searchParams.get("theme");return M(()=>{let a=document.getElementById("code");const r=V.highlightAuto(f,[d]);a.innerHTML=r.value}),[o,u]}class z extends S{constructor(l){super(),w(this,l,K,J,A,{})}}export{z as default};
