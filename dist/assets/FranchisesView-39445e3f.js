import{S as u}from"./SmallHeroHeader-291bc697.js";import{_ as p,o as e,d as t,a as m,b as s,u as r,f as g,F as c,g as a,s as d,t as h,p as v,h as f}from"./index-7b8a9776.js";const i=n=>(v("data-v-8933cb26"),n=n(),f(),n),w={class:"content"},y={key:0,class:"lds-ring"},F=i(()=>s("div",null,null,-1)),S=i(()=>s("div",null,null,-1)),V=i(()=>s("div",null,null,-1)),b=i(()=>s("div",null,null,-1)),x=[F,S,V,b],k={class:"allfranchises"},I={class:"menufranchise"},B=["href"],N=["src"],H={class:"title"},L=["id"],C={class:"img"},D=["src"],E={class:"contenttext"},j={class:"team"},q=["href"],z={class:"players"},A={class:"player"},G=["src"],J=["href"],K={__name:"FranchisesView",setup(n){return(M,O)=>(e(),t("main",null,[m(u,{msg:"Les Franchises"}),s("div",w,[r(d).franchises.length===0?(e(),t("div",y,x)):g("",!0),s("div",k,[(e(!0),t(c,null,a(r(d).franchises,o=>(e(),t("div",I,[s("a",{href:"#franchise-"+o.id},[s("img",{src:o.logo},null,8,N)],8,B)]))),256))]),s("div",H,[(e(!0),t(c,null,a(r(d).franchises,o=>(e(),t("div",{id:"franchise-"+o.id,class:"franchise"},[s("div",C,[s("img",{src:o.logo},null,8,D)]),s("div",E,[s("h3",null,h(o.name),1)]),(e(!0),t(c,null,a(o.teams,l=>(e(),t("div",j,[s("a",{href:l.opgg,class:"tname"},h(l.name),9,q),s("div",z,[(e(!0),t(c,null,a(l.players,_=>(e(),t("div",A,[s("img",{class:"playericon",src:"/icons/"+_.role+".svg"},null,8,G),s("a",{class:"playername",target:"_blank",href:"https://www.op.gg/multisearch/na?summoners="+_.opgg},h(_.ign),9,J)]))),256))])]))),256))],8,L))),256))])])]))}},R=p(K,[["__scopeId","data-v-8933cb26"]]);export{R as default};
