import{m as _,q as d,d as r,s as u,x as p,c as i,i as o,t as l,h as f,e as h,w as m,f as g,g as x,p as v,k as b,_ as w}from"./index-27dfa42f.js";const y=_("users",{state:()=>{const e=d({name:"小猪课堂",age:25,sex:"男"});return{userInfo:e,changeName:(s="Atlan")=>{e.value.name=s}}}}),I=e=>(v("data-v-7d8f1ddf"),e=e(),b(),e),V={class:"about"},N=I(()=>o("h1",{class:"title"},"This is an about page",-1)),S=r({__name:"AboutView",setup(e){const t=y(),{userInfo:s}=u(t),n=()=>{t.$patch(a=>{a.userInfo.name="hhhh"})};return(a,A)=>{const c=p;return g(),i("div",V,[N,o("p",null,l(f(s).name),1),h(c,{type:"primary",round:"",onClick:n},{default:m(()=>[x("按钮")]),_:1})])}}});const B=w(S,[["__scopeId","data-v-7d8f1ddf"]]);export{B as default};
