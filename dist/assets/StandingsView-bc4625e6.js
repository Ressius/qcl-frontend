import{S as r}from"./SmallHeroHeader-591897b2.js";import{_ as u,o as n,d as e,a as h,b as s,u as d,g as p,F as c,h as l,s as _,t as o,p as m,k as v}from"./index-a0e4beaf.js";const a=i=>(m("data-v-47a91ba4"),i=i(),v(),i),g={class:"content"},S={key:0,class:"lds-ring"},f=a(()=>s("div",null,null,-1)),b=a(()=>s("div",null,null,-1)),V=a(()=>s("div",null,null,-1)),y=a(()=>s("div",null,null,-1)),C=[f,b,V,y],N={class:"allstandings"},k={class:"standings"},w=a(()=>s("h3",null,"Champions",-1)),x={class:"menufranchise"},I={class:"number"},B={class:"name"},L=["src"],A={class:"pts"},F={class:"standings"},H=a(()=>s("h3",null,"Académie",-1)),D={class:"menufranchise"},E={class:"number"},j={class:"name"},q=["src"],z={class:"pts"},G={__name:"StandingsView",setup(i){return(J,K)=>(n(),e("main",null,[h(r,{msg:"Classement de la saison courante"}),s("div",g,[d(_).standingsChampions.length===0?(n(),e("div",S,C)):p("",!0),s("div",N,[s("div",k,[w,(n(!0),e(c,null,l(d(_).standingsChampions,t=>(n(),e("div",x,[s("div",I,o(t.position),1),s("div",B,[s("img",{src:t.teamLogo},null,8,L),s("p",null,o(t.teamName),1),s("div",A,o(t.points)+" pts",1)])]))),256))]),s("div",F,[H,(n(!0),e(c,null,l(d(_).standingsAcademy,t=>(n(),e("div",D,[s("div",E,o(t.position),1),s("div",j,[s("img",{src:t.teamLogo},null,8,q),s("p",null,o(t.teamName),1),s("div",z,o(t.points)+" pts",1)])]))),256))])])])]))}},P=u(G,[["__scopeId","data-v-47a91ba4"]]);export{P as default};