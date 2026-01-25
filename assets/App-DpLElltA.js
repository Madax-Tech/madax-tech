const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-dPKcUoIS.js","assets/index-Bg1uWFPb.js","assets/index-CRoLBCZl.css","assets/About-3UjPsS5N.js","assets/Projects-BBHgoSES.js"])))=>i.map(i=>d[i]);
import{c as t,l as e,_ as o,s as i}from"./index-Bg1uWFPb.js";const r=e(()=>o(()=>import("./Home-dPKcUoIS.js"),__vite__mapDeps([0,1,2]))),a=e(()=>o(()=>import("./About-3UjPsS5N.js"),__vite__mapDeps([3,1,2]))),s=e(()=>o(()=>import("./Projects-BBHgoSES.js"),__vite__mapDeps([4,1,2]))),_=i("main")`
    flex: 1;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    @media (max-width: 1000px) {
        width: 100%;
    }
`,n=()=>t(_,{get children(){return[t(r,{id:"home"}),t(s,{id:"projects"}),t(a,{id:"about"})]}});export{n as default};
