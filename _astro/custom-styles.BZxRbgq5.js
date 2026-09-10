import{O as e,S as t,i as n,p as r,s as i}from"./web.Ck_zQUvi.js";import{i as a,n as o,r as s,t as c}from"./Tabs.BWBi9fia.js";var l=r(`<div class=w-full>`);function u(){let[r,u]=e(`home`),d=e=>`
    shadow-none 
    ${r()===e?`
      text-white
      bg-blue-500 dark:bg-blue-500
      hover:bg-blue-600 hover:dark:bg-blue-400
      active:bg-blue-600/80 active:dark:bg-blue-400/80
    `:``}
  `;return(()=>{var e=n(l);return i(e,t(s,{get value(){return r()},onChange:(e,t)=>u(t),tabId:`custom-styled`,get children(){return[t(c,{class:`border-none grid grid-cols-3 bg-neutral-100 dark:bg-neutral-800`,get children(){return[t(a,{get class(){return d(`home`)},label:`Home`,value:`home`}),t(a,{get class(){return d(`profile`)},label:`Profile`,value:`profile`}),t(a,{get class(){return d(`settings`)},label:`Settings`,value:`settings`})]}}),t(o,{class:`p-4`,value:`home`,children:`Welcome to the home page.`}),t(o,{class:`p-4`,value:`profile`,children:`View and manage your profile.`}),t(o,{class:`p-4`,value:`settings`,children:`Manage your account settings.`})]}})),e})()}export{u as default};