const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DeDu4wXI.js","assets/index-Z-q4EUKF.js","assets/index-Da_KHGr4.css","assets/About-CisFKxOf.js","assets/Projects-CRsqBeKt.js"])))=>i.map(i=>d[i]);
import{c as t,l as e,_ as o,s as i}from"./index-Z-q4EUKF.js";const r=e(()=>o(()=>import("./Home-DeDu4wXI.js"),__vite__mapDeps([0,1,2]))),a=e(()=>o(()=>import("./About-CisFKxOf.js"),__vite__mapDeps([3,1,2]))),s=e(()=>o(()=>import("./Projects-CRsqBeKt.js"),__vite__mapDeps([4,1,2]))),_=i("main")`
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
